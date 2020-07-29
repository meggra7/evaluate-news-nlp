// Set up Express server
var path = require('path')
const express = require('express')
const app = express()
app.use(express.static('dist'))

// Set up body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Set up cors
const cors = require('cors');
app.use(cors());

// Set up fetch
const fetch = require('node-fetch');

// Set up dotenv to allow access to private API Key
const dotenv = require('dotenv');
dotenv.config();
console.log(`Your API key is ${process.env.API_KEY}`);

// Designate server port
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

/* POST Requests */
app.post('/analyze', (req, res) => {

    const urlToAnalyze = encodeURI(req.body.urlToAnalyze);

    dummyGetLanguage(urlToAnalyze)
    .then(partialAnalysis => dummyGetCategory(partialAnalysis))
    .then(completeAnalysis => res.send(completeAnalysis))
    .catch(error => res.send({error}));
});

/* API Calls */
async function getLanguage(urlToAnalyze) {

    const endPoint = `http://api.meaningcloud.com/lang-2.0?key=${process.env.API_KEY}&url=${urlToAnalyze}`;

    try {
        // Fetch the data and convert to JSON
        const response = await fetch(endPoint);
        const languageData = await response.json();

        // Pull and return just the piece we want
        const language = languageData.language_list[0].name;
        console.log(`Language analyzed as ${language}!`);

        // Return our first analysis adding language data
        return {
            urlToAnalyze,
            language
        };

    } catch(error) {
        // Log any errors
        console.log('error', error);
    };

}

async function getCategory(analysis) {

    const endPoint = `https://api.meaningcloud.com/class-2.0?key=${process.env.API_KEY}&url=${analysis.urlToAnalyze}&model=IPTC_en`;

    console.log(endPoint);

    try {
        // Fetch the data and convert to JSON
        const response = await fetch(endPoint);
        const classificationData = await response.json();

        // Pull and return just the piece we want, making sure a result was found
        let category = 'Unknown';
        if (classificationData.category_list.length > 0) {
            category = classificationData.category_list[0].label;
        } 

        // Return our updated analysis, now with category data
        return {
            urlToAnalyze: analysis.urlToAnalyze,
            language: analysis.language,
            category,
        };

    } catch(error) {
        // Log any errors
        console.log('error', error);
    };
}


// FOR DEBUGGING TO PREVENT UNNECESSARY API CALLS
async function dummyGetLanguage(urlToAnalyze) {
    return {
        urlToAnalyze,
        language: 'English'
    };
}

async function dummyGetCategory(analysis) {
    return {
        urlToAnalyze: analysis.urlToAnalyze,
        language: analysis.language,
        category: 'arts, culture and entertainment - cinema'
    };
}
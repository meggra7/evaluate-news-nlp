function handleSubmit(event) {
    event.preventDefault()

    // Get the text from the form field
    const input = document.getElementById('address').value;

    // Check if text is website format and display response
    if (Client.isWebsite(input)) {
        Client.analyzeArticle(input);
    } else {
        Client.showError('Please enter the full website including the http:// or https:// prefix.')
    }    
}

function analyzeArticle(urlToAnalyze) {

    Client.dummyGetLanguage(urlToAnalyze)
    .then(analysisWithLanguage => Client.dummyGetCategory(analysisWithLanguage))
    .then(analysisComplete => Client.showResult(analysisComplete));
}

async function getLanguage(urlToAnalyze) {

    // FOR DEBUGGING
    const API_KEY = 'db75993aa28f043980c4ac49d357579d';

    const endPoint = `http://api.meaningcloud.com/lang-2.0?key=${API_KEY}&url=${urlToAnalyze}`;

    try {
        // Fetch the data and convert to JSON
        const response = await fetch(endPoint);
        const languageData = await response.json();

        // Pull and return just the pieces we want
        const languageCode = languageData.language_list[0].language;
        const languageName = languageData.language_list[0].name;

        // Return our first analysis adding language data
        return {
            urlToAnalyze,
            languageCode,
            languageName,
        };

    } catch(error) {
        console.log('error', error);
        Client.showError();
    };

}

async function getCategory(analysis) {

    // FOR DEBUGGING
    const API_KEY = 'db75993aa28f043980c4ac49d357579d';

    const endPoint = `https://api.meaningcloud.com/class-2.0?key=${API_KEY}&url=${analysis.urlToAnalyze}&model=IPTC_en`;

    try {
        // Fetch the data and convert to JSON
        const response = await fetch(endPoint);
        const classificationData = await response.json();

        // !! FOR DEBUGGING
        console.log(classificationData);

        // Pull and return just the pieces we want
        const category = classificationData.category_list[0].label;

        // !! FOR DEBUGGING
        console.log(category);

        // Return our updated analysis, now with category data
        return {
            urlToAnalyze: analysis.urlToAnalyze,
            languageCode: analysis.languageCode,
            languageName: analysis.languageName,
            category,
        };

    } catch(error) {
        console.log('error', error);
        Client.showError();
    };

}

async function dummyGetLanguage(urlToAnalyze) {
    return {
        urlToAnalyze,
        languageCode: 'en',
        languageName: 'English'
    };
}

async function dummyGetCategory(analysis) {
    return {
        urlToAnalyze: analysis.urlToAnalyze,
        languageCode: analysis.languageCode,
        languageName: analysis.languageName,
        category: 'arts, culture and entertainment - cinema'
    };
}

export { 
    handleSubmit, 
    analyzeArticle,
    getLanguage,
    getCategory,
    dummyGetLanguage,
    dummyGetCategory
}

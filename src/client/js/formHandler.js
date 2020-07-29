function handleSubmit(event) {
    event.preventDefault()

    // Get the text from the form field
    const input = document.getElementById('address').value;

    // Check if text is website format and display response
    if (Client.isWebsite(input)) {
        Client.dummyGetLanguage(input);
    } else {
        Client.showError('Please enter the full website including the http:// or https:// prefix.')
    }    
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
        const language = languageData.language_list[0].language;
        const name = languageData.language_list[0].name;



        // !! FOR DEBUGGING
        Client.showResult(urlToAnalyze, name);
        console.log(`Language: ${language}, Name: ${name}`);
        // !! END DEBUGGING
         


        return {
            language,
            name,
        };

    } catch(error) {
        console.log('error', error);
        Client.showError();
    };

}

async function dummyGetLanguage(urlToAnalyze) {

    Client.showResult(urlToAnalyze, 'English');

    return {
        language: 'en',
        name: 'English'
    };
}

export { 
    handleSubmit, 
    getLanguage,
    dummyGetLanguage,
}

function handleSubmit(event) {
    event.preventDefault()

    // Get the text from the form field
    const input = document.getElementById('address').value;

    // Check if text is website format and display response
    if (Client.isWebsite(input)) {
        Client.analyzeArticle(input);
    } else {
        result = Client.showError('Please enter the full website including the http:// or https:// prefix.');
        console.log(result);
    }    
}

async function analyzeArticle(urlToAnalyze) {

    Client.showLoadingIndicator();
    
    try {

        // Make request for data
        const response = await fetch('http://localhost:8081/analyze', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({urlToAnalyze}),
        });

        // Convert analysis object
        const analysis = await response.json();

        // Display result, whether error or analysis
        if (analysis.error) {
            console.log('error', analysis.error);
            Client.showError('');
        } else {
            Client.showResult(analysis);
        }
        
    } catch (error) {
        console.log('error', error);
        Client.showError('');
    };

}

export { 
    handleSubmit, 
    analyzeArticle,
}

function handleSubmit(event) {
    event.preventDefault()

    // Get the text from the form field
    const input = document.getElementById('address').value;

    // Check if text is website format and display response
    if (Client.isWebsite(input)) {
        Client.showResult();
    } else {
        Client.showError('Please enter the full website including the http:// or https:// prefix.')
    }    
}

export { 
    handleSubmit 
}

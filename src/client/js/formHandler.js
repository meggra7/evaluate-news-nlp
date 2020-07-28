function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let result = document.getElementById('result');
    result.classList.add('visible');

    // Display error message
    let error = document.getElementById('error-message');
    error.classList.add('visible');
}

export { handleSubmit }

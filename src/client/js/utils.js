const mAddressInput = document.getElementById('address');
const mError = document.getElementById('error-message');
const mResult = document.getElementById('result');

function isWebsite(inputText) {

    console.log("::: Running isWebsite :::", inputText);
    return inputText.toLowerCase().match(/^http/);
}

function showError(errorMessage) {

    // Hide any result
    mResult.classList.remove('visible');

    // Set error text and display
    if (errorMessage === null) {
        mError.textContent = 'We\'re sorry, an error occurred while trying to analyze your article.  Please make sure you have entered a valid site address, or try again later.';
    } else {
        mError.textContent = errorMessage;
    }
    mError.classList.add('visible');
}

function showResult(analysis) {

    // Hide any error
    mError.classList.remove('visible');
    // Clear form now that it has been submitted
    mAddressInput.value = '';

    // Get references to and set our display fields
    const resultContainer = document.getElementById('result');
    const resultFields = resultContainer.getElementsByTagName('p');
    resultFields[0].textContent = analysis.urlToAnalyze;
    resultFields[1].textContent = analysis.languageName;
    resultFields[2].textContent = analysis.category;
    // resultFields[3].textContent = topics;

    // Display result
    mResult.classList.add('visible');
}

function resetForm() {

    // Clear form 
    mAddressInput.value = '';

    // Hide any errors or results
    mError.classList.remove('visible');
    mResult.classList.remove('visible');
}

export { 
    isWebsite,
    showError,
    showResult,
    resetForm
}

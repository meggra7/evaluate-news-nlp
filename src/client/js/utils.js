const mAddressInput = document.getElementById('address');
const mLoadingIndicator = document.getElementById('loading-indicator');
const mError = document.getElementById('error-message');
const mResult = document.getElementById('result');

function isWebsite(inputText) {
    console.log("::: Running isWebsite :::", inputText);
    return inputText.toLowerCase().match(/^http/);
}

function showLoadingIndicator() {

    // Hide any other displayed items
    mError.classList.remove('visible');
    mResult.classList.remove('visible');

    // Display loading indicator
    mLoadingIndicator.classList.add('visible');
}

function showError(errorMessage) {

    // Hide any other displayed items
    mLoadingIndicator.classList.remove('visible');
    mResult.classList.remove('visible');

    // Set error text and display
    if (errorMessage === '') {
        mError.textContent = 'We\'re sorry, an error occurred while trying to analyze your article.  Please make sure you have entered a valid site address, or try again later.';
    } else {
        mError.textContent = errorMessage;
    }
    mError.classList.add('visible');
}

function showResult(analysis) {

    // Hide any other displayed items
    mLoadingIndicator.classList.remove('visible');
    mError.classList.remove('visible');

    // Clear form now that it has been submitted
    mAddressInput.value = '';

    // Get references to and set our display fields
    const resultContainer = document.getElementById('result');
    const resultFields = resultContainer.getElementsByTagName('p');
    resultFields[0].textContent = analysis.urlToAnalyze;
    resultFields[1].textContent = analysis.language;
    resultFields[2].textContent = analysis.category;

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
    showLoadingIndicator,
    showError,
    showResult,
    resetForm
}

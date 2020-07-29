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
    mError.textContent = errorMessage;
    mError.classList.add('visible');
}

function showResult() {

    // Hide any error
    mError.classList.remove('visible');

    // Clear form now that it has been submitted
    mAddressInput.value = '';

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

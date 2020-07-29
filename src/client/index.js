/* Import all functions from src and export to Client library */
import { 
    isWebsite,
    showLoadingIndicator,
    showError,
    showResult,
    resetForm
} from './js/utils'
export {
    isWebsite,
    showLoadingIndicator,
    showError,
    showResult,
    resetForm
};

import { 
    handleSubmit, 
    analyzeArticle,
} from './js/formHandler'
export {
    handleSubmit, 
    analyzeArticle,
};

/* Import all styles */
import './styles/resets.scss'
import './styles/base.scss'
import './styles/header.scss'
import './styles/form.scss'
import './styles/loading.scss'
import './styles/error.scss'
import './styles/result.scss'
import './styles/footer.scss'

/* Import and set images */
import loadingIndicator from './img/Dual Ring-1s-200px.gif';
document.getElementById('loading-icon').setAttribute('src', loadingIndicator);
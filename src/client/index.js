/* Import all functions from src and export to Client library */
import { 
    isWebsite,
    showError,
    showResult,
    resetForm
} from './js/utils'
export {
    isWebsite,
    showError,
    showResult,
    resetForm
};

import { 
    handleSubmit 
} from './js/formHandler'
export {
    handleSubmit
};

/* Import all styles */
import './styles/resets.scss'
import './styles/base.scss'
import './styles/header.scss'
import './styles/form.scss'
import './styles/error.scss'
import './styles/result.scss'
import './styles/footer.scss'
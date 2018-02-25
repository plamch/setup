import { MASS_MAIL_FORM, MASS_MAIL_SUBJECT_FIELD } from '~constants/form'
import { i18n } from '~utils/i18n'

const isNotEmptyString = options => {
    const hasError = options.hasError || options.inputValue === ''

    return {
        ...options,
        inputValue: options.inputValue,
        hasError,
        errorMessage: hasError ? `${options.errorMessage || ''} ${i18n({ key: 'validation-empty-string' })}` : ''
    }
}

const validateMassMailForm = ({ inputName, inputValue }) => {
    switch (inputName) {
        case MASS_MAIL_SUBJECT_FIELD:
            return isNotEmptyString({ inputValue })
        default:
            return { hasError: false }
    }
}

export const validate = ({ formName, inputName, inputValue }) => {
    switch (formName) {
        case MASS_MAIL_FORM:
            return validateMassMailForm({ inputName, inputValue })
        default:
            return { hasError: false }
    }
}

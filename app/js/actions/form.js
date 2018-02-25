import {
    SET_FORM_INPUT_FIELD,
    SET_FORM_INPUT_ERROR,
    SET_FORM_SERVER_ERROR,
    RESET_FORM_INPUT_FIELDS,
    RESET_FORM_INPUT_ERROR,
    RESET_FORM_SERVER_ERROR,
    SUBMIT_MASS_MAIL_FORM,
} from '~constants/form'

export const setFormInputField = ({ formName, inputName, inputValue }) => ({
    type: SET_FORM_INPUT_FIELD,
    payload: { formName, inputName, inputValue },
})

export const setFormInputError = ({ formName, inputName, errorMessage }) => ({
    type: SET_FORM_INPUT_ERROR,
    payload: { formName, inputName, errorMessage },
})

export const setFormServerError = ({ formName, message }) => ({
    type: SET_FORM_SERVER_ERROR,
    payload: { formName, message },
})

export const resetFormInputFields = ({ formName }) => ({
    type: RESET_FORM_INPUT_FIELDS,
    payload: { formName },
})

export const resetFormInputError = ({ formName, inputName }) => ({
    type: RESET_FORM_INPUT_ERROR,
    payload: { formName, inputName },
})

export const resetFormServerError = () => ({
    type: RESET_FORM_SERVER_ERROR,
    payload: {},
})

export const submitMassMailForm = ({ massMailSubject, massMailBody, massMailSessionId }) => ({
    type: SUBMIT_MASS_MAIL_FORM,
    payload: { massMailSubject, massMailBody, massMailSessionId },
})

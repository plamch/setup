import { Map } from 'immutable'
// noinspection ES6CheckImport
import { createSelector } from 'reselect'
import {
    SET_FORM_INPUT_FIELD,
    SET_FORM_INPUT_ERROR,
    SET_FORM_SERVER_ERROR,
    RESET_FORM_INPUT_FIELDS,
    RESET_FORM_INPUT_ERROR,
    RESET_FORM_SERVER_ERROR,
    MASS_MAIL_SUBJECT_FIELD,
    MASS_MAIL_BODY_FIELD,
    MASS_MAIL_FORM,
} from '~constants/form'
import { FIELDS, VALUE, RESET_STORE } from '~constants/global'
import { NOTIFICATION_TYPE_ERROR } from '~constants/notification'

export const initialFieldState = Map({
    value: '',
    error: Map({ message: '', hasError: false }),
})

const mapFieldNamesToInitialState = fieldNames =>
    fieldNames.reduce((acc, fieldName) => acc.setIn([FIELDS, fieldName], initialFieldState), Map({ fields: Map({}) }))

const massMailFieldNames = [MASS_MAIL_SUBJECT_FIELD, MASS_MAIL_BODY_FIELD]

const initialState = Map({
    [MASS_MAIL_FORM]: mapFieldNamesToInitialState(massMailFieldNames),
    serverError: Map({ message: '', hasError: false }),
})

const formReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_FORM_INPUT_FIELD:
            {
                const { formName, inputName, inputValue } = payload

                state = state.setIn([formName, FIELDS, inputName, VALUE], inputValue)
            }
            break
        case SET_FORM_INPUT_ERROR:
            {
                const { formName, inputName, errorMessage } = payload

                state = state.setIn(
                    [formName, FIELDS, inputName, NOTIFICATION_TYPE_ERROR],
                    state.getIn([formName, FIELDS, inputName, NOTIFICATION_TYPE_ERROR]).merge({
                        message: errorMessage,
                        hasError: true,
                    })
                )
            }
            break
        case SET_FORM_SERVER_ERROR:
            {
                const { message } = payload

                state = state.set(
                    'serverError',
                    Map({
                        message,
                        hasError: true,
                    })
                )
            }
            break
        case RESET_FORM_INPUT_FIELDS:
            {
                const { formName } = payload

                state = state.set(formName, initialState.get(formName))
            }
            break
        case RESET_FORM_INPUT_ERROR:
            {
                const { formName, inputName } = payload

                state = state.setIn(
                    [formName, FIELDS, inputName, NOTIFICATION_TYPE_ERROR],
                    initialState.getIn([formName, FIELDS, inputName, NOTIFICATION_TYPE_ERROR])
                )
            }
            break
        case RESET_FORM_SERVER_ERROR:
            {
                state = state.set('serverError', initialState.get('serverError'))
            }
            break
        case RESET_STORE:
            {
                state = initialState
            }
            break
        default:
            break
    }

    return state
}

export default formReducer

export const inputFieldsSelector = (state, formName) => state.getIn([formName, FIELDS])

export const serverErrorSelector = state => state.get('serverError')

export const hasValidationErrorSelector = createSelector(
    (state, formName) => state.getIn([formName, FIELDS]),
    fields => fields.some(field => field.getIn([NOTIFICATION_TYPE_ERROR, 'hasError']))
)

export const hasEmptyFieldSelector = createSelector(
    (state, formName) => state.getIn([formName, FIELDS]),
    fields => fields.some(field => field.get(VALUE) === '')
)

import { combineReducers } from 'redux-immutable'
import { routerReducer } from 'react-router-redux'
import loading, * as fromLoading from './loading'
import form, * as fromForm from './form'
import actionsHistory from './actionsHistory'
import { isTesting } from '~utils/utils'

const allReducers = {
    loading,
    routerReducer,
    form
}

if (isTesting()) {
    allReducers.actionsHistory = actionsHistory
}

export const rootReducer = combineReducers(allReducers)

/* loaders selectors start */
export const isLoadingSelector = (state, loader) => fromLoading.isLoadingSelector(state.get('loading'), loader)
/* loaders selectors end */

/* routing selectors start */
export const routingPathnameSelector = state => state.get('routerReducer').location.pathname
/* routing selectors end */

/* form selectors start */
export const formInputFieldsSelector = (state, formName) => fromForm.inputFieldsSelector(state.get('form'), formName)

export const formServerErrorSelector = state => fromForm.serverErrorSelector(state.get('form'))

export const formHasValidationErrorSelector = (state, formName) =>
    fromForm.hasValidationErrorSelector(state.get('form'), formName)

export const formHasEmptyFieldSelector = (state, formName) =>
    fromForm.hasEmptyFieldSelector(state.get('form'), formName)
/* form selectors end */

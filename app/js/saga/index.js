import { all } from 'redux-saga/effects'
import { formSaga } from './form'

export const rootSaga = function * () {
    yield all([formSaga()])
}

import React from 'react'
import { all, put, call, takeLatest } from 'redux-saga/effects'
import { SUBMIT_MASS_MAIL_FORM, IS_MASS_MAIL_FORM_SUBMITTING } from '~constants/form'
import { startLoading, stopLoading } from '~actions/loading'
import { handleSagaError } from './utils'
import { massMailService } from '~utils/services'
import { createNotification } from '~utils/utils'

function * submitMassMailFormWorker ({ payload: { massMailSubject, massMailBody, massMailSessionId } }) {
    try {
        yield put(startLoading({ loader: IS_MASS_MAIL_FORM_SUBMITTING }))

        const options = {}

        options.data = {
            $SesUniTxt: massMailSessionId,
            $Subject: massMailSubject,
            $Body: massMailBody,
        }

        const { data } = yield call(massMailService, options)

        createNotification({
            type: 'success',
            title: 'Form sent',
            message: data && data.toString(),
        })
    } catch (error) {
        yield call(handleSagaError, { error })
    } finally {
        yield put(stopLoading({ loader: IS_MASS_MAIL_FORM_SUBMITTING }))
    }
}

const submitMassMailFormWatcher = function * () {
    yield takeLatest(SUBMIT_MASS_MAIL_FORM, submitMassMailFormWorker)
}

export const formSaga = function * () {
    yield all([submitMassMailFormWatcher()])
}

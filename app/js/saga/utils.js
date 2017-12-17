import { call, put } from 'redux-saga/effects'
import {
    NOTIFICATION_TYPE_ERROR,
    NOTIFICATION_TITLE_ERROR,
    NOTIFICATION_TITLE_NETWORK_ERROR,
    UNKNOWN_NETWORK_ERROR,
    MESSAGE_TIMEOUT
} from 'constants/notification'
import { createNotification, isDevelopment } from 'utils/utils'

export function * handleSagaError({ error, errorMapping = '', errorActionCreator }) {
    if (isDevelopment()) {
        // eslint-disable-next-line no-console
        console.error(error)
    }
    if (errorActionCreator !== undefined) {
        if (typeof error[errorMapping] === 'object') {
            if (Array.isArray(error[errorMapping].errorList)) {
                for (let i = 0; i < error[errorMapping].errorList.length; i++) {
                    yield put(errorActionCreator({
                        type: NOTIFICATION_TYPE_ERROR,
                        message: error[errorMapping].errorList[i]
                    }))
                }
            }
        } else {
            yield put(errorActionCreator({ type: NOTIFICATION_TYPE_ERROR, message: error.message }))
        }
    } else {
        if (typeof error[errorMapping] === 'object') {
            if (Array.isArray(error[errorMapping].errorList)) {
                for (let i = 0; i < error[errorMapping].errorList.length; i++) {
                    yield call(createNotification, {
                        type: NOTIFICATION_TYPE_ERROR,
                        message: error[errorMapping].errorList[i],
                        title: NOTIFICATION_TITLE_ERROR,
                        timeout: MESSAGE_TIMEOUT
                    })
                }
            }
        } else {
            yield call(createNotification, {
                type: NOTIFICATION_TYPE_ERROR,
                message: typeof error === 'object' && error.message ? error.message : UNKNOWN_NETWORK_ERROR,
                title: NOTIFICATION_TITLE_NETWORK_ERROR,
                timeout: MESSAGE_TIMEOUT
            })
        }
    }
}

import React from 'react'
import axios from 'axios'
import { ParseGlobalNetworkError } from '~utils/utils'
import {
    FETCH_SEARCH_RESULTS_SERVICE,
    MASS_MAIL_SERVICE
} from '~constants/api'

const BASE_URL = process.env.API_URL
const BASE_URL_WITH_PATH = BASE_URL + process.env.API_PATH

const axiosInstanceFactory = disablePrefix => axios.create({
    baseURL: disablePrefix ? '' : BASE_URL_WITH_PATH,
    timeout: 100000
})

const servicesDesc = [
    {
        name: FETCH_SEARCH_RESULTS_SERVICE,
        url: '/v1/search'
    },
    {
        name: MASS_MAIL_SERVICE,
        url: '/v1/massMail',
        method: 'POST'
    }
]

export const successCallback = (resolve, reject) => response => resolve(response)

export const errorCallback = reject => (error = {}) => reject({
    message: ParseGlobalNetworkError({
        errorCode: typeof error.response === 'object' ? error.response.status : 'unauthorized'
    })
})

const services = servicesDesc.reduce((acc, service) => {
    acc[service.name] = ({ data, params, headers } = {}) => {
        service.params = params || {}
        service.data = data || {}
        service.headers = headers || {}
        if (service.method === 'POST' && (service.headers && !service.headers['Content-Type'])) {
            service.headers['Content-Type'] = 'text/plain; charset=utf-8'
        }

        if (service.disableCache) {
            if (service.method === 'POST') {
                service.headers['Cache-Control'] = 'no-cache, no-store'
            } else {
                service.params.v = Math.floor(Math.random() * 1000000)
            }
        }

        return new Promise((resolve, reject) =>
            axiosInstanceFactory(service.disablePrefix)(service)
                .then(successCallback(resolve, reject))
                .catch(service.disableErrorCb ? error => reject(error) : errorCallback(reject))
        )
    }

    return acc
}, {})

export const fetchSearchResultsService = services[FETCH_SEARCH_RESULTS_SERVICE]
export const massMailService = services[MASS_MAIL_SERVICE]

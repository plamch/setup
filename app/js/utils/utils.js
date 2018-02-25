/* eslint no-undef: 0 */
import React from 'react'
// noinspection ES6CheckImport
import { any } from 'prop-types'
import { NotificationManager } from 'react-notifications'
import { i18n } from '~utils/i18n'
import { ITEM_SUBNAVIGATION, ITEM_TITLE, ITEM_URL } from '~constants/common'
import { MESSAGE_TIMEOUT } from '~constants/notification'

export const toTitleCase = string => string.charAt(0).toUpperCase() + string.slice(1)

export const multipleReplace = ({ string, find, replace }) => {
    let regexp

    for (let i = 0; i < find.length; i++) {
        regexp = new RegExp(find[i], 'g')
        string = string.replace(regexp, replace[i])
    }

    return string
}

export const ParseGlobalNetworkError = ({ errorCode }) =>
    <span>
        <span>{'System has encountered an error.'}</span><br />
        <span>{'Please reach out to the plam.ch team info@plam.ch'}</span><br />
        <span>{'with a screenshot of this error.'}</span><br />
        <span>{`Code: ${errorCode}.`}</span><br />
        <span>{`Error Description: Request failed with status code ${errorCode}`}</span>
    </span>

ParseGlobalNetworkError.propTypes = {
    errorCode: any.isRequired
}

export const createNotification = ({ type, message, title = '', timeout = MESSAGE_TIMEOUT } = {}) =>
    NotificationManager[type](message, title, timeout)

export const isProduction = () => process.env.NODE_ENV === 'production'
export const isDevelopment = () => process.env.NODE_ENV === 'development'
export const isTesting = () => process.env.NODE_ENV === 'test'

const logTypeToConsoleMethod = type => {
    switch (type) {
        case 'error':
        case 'warn':
        case 'log':
            return type
        case 'warning':
            return 'warn'
    }
}

export const logInDevOnly = ({ message = '', type = 'error' }) => {
    if (isDevelopment()) {
        // eslint-disable-next-line no-console
        console[logTypeToConsoleMethod(type)](String(message))
    }
}

export const checkIsNavItemActive = ({ itemPathname, currentPathname }) => currentPathname.includes(itemPathname)

export const mapPathItemToPageTitle =
    ({
        pathItem,
        navTrees = [],
        currentPageId = '',
        pageTitle = ''
    }) => {
        const result = navTrees.reduce((acc, navTree) => {
            if (!acc) {
                const navItemContainingPathItem = navTree.find(navItem => navItem.get(ITEM_URL).startsWith(pathItem))

                if (navItemContainingPathItem) {
                    return navItemContainingPathItem.get(ITEM_TITLE)
                }

                const subNavItemContainingPathItem = navTree
                    .map(navItem => navItem.get(ITEM_SUBNAVIGATION))
                    .flatten(1)
                    .find(subNavItem => subNavItem.get(ITEM_URL).endsWith(subNavItem))

                if (subNavItemContainingPathItem) {
                    return subNavItemContainingPathItem.get(ITEM_TITLE)
                }
            } else {
                return acc
            }
        }, undefined)

        if (result) {
            return result
        }

        const pageIdAsPageTitle = currentPageId === pathItem
            ? pageTitle
            : undefined

        if (pageIdAsPageTitle) {
            return pageIdAsPageTitle
        }

        // this is always the last check
        const breadcrumbsTitleFromTranslations = i18n({ key: `breadcrumbs-${pathItem}` })

        if (breadcrumbsTitleFromTranslations) {
            return breadcrumbsTitleFromTranslations
        }

        // logInDevOnly({
        //     message: `${pathItem} could not be resolved as breadcrumb, you can add it to i18n translations`
        // })

        return pathItem
    }

export const isNumeric = number => !Number.isNaN(parseFloat(number)) && isFinite(number)

export const countNonUndefinedElements = array => array
    .filter(value => value !== undefined)
    .length

export const toIconUrl = fileName => `/img/icons/${fileName}.png`

export const scrollToId = id => event => {
    event.preventDefault()

    const navElement = document.getElementById(id)

    navElement && navElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
    })
}

export const scrollToHeader = event => {
    scrollToId('nav')(event)
}

export const scrollToFooter = event => {
    scrollToId('footer')(event)
}

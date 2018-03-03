import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Root } from './components/Root'
import '../css/index.css'

const renderApp = Component => {
    render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('app')
    )
}

const run = () => {
    renderApp(Root)
}

// noinspection JSUnresolvedFunction
window.addEventListener('DOMContentLoaded', run, false)

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./components/Root', () => {
        // if you are using harmony modules ({modules:false})
        const { Root } = require('./components/Root')

        renderApp(Root)
    })
}

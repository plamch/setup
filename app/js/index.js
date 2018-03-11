import React from 'react'
import { render } from 'react-snapshot'
import { AppContainer } from 'react-hot-loader'
import { Root } from './components/Root'
import '../styles/index.scss'

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

run()

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/sw.js')
            .then(registration => {
                // eslint-disable-next-line
                console.log('SW registered: ', registration)
            })
            .catch(registrationError => {
                // eslint-disable-next-line
                console.log('SW registration failed: ', registrationError)
            })
    })
}

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./components/Root', () => {
        // if you are using harmony modules ({modules:false})
        const { Root } = require('./components/Root')

        renderApp(Root)
    })
}

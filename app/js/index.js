import React from 'react'
import { render } from 'react-dom'
import { createRoot } from './components/Root'
import '../css/index.css'

const RootComponent = createRoot()

const run = () => {
    render(<RootComponent />, document.getElementById('app'))
}

// noinspection JSUnresolvedFunction
window.addEventListener('DOMContentLoaded', run, false)

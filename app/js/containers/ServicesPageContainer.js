/* eslint react/no-unused-prop-types: 0 */
import React, { Component } from 'react'
// noinspection ES6CheckImport
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class _ServicesPageContainer extends Component {
    render () {
        return <main className="services-page container" />
    }
}

export const ServicesPageContainer = connect(state => ({}), dispatch => bindActionCreators({}, dispatch))(
    _ServicesPageContainer
)

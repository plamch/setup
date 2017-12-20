/* eslint react/no-unused-prop-types: 0 */
import React, { Component } from 'react'
// noinspection ES6CheckImport
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class _ServicePageContainer extends Component {
    render() {
        return (
            <main className="service-page container">
            </main>
        )
    }
}

export const ServicePageContainer = connect(
    state => ({
    }),
    dispatch => bindActionCreators({
    }, dispatch)
)(_ServicePageContainer)

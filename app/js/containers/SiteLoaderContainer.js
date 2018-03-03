import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Loader } from '~components'

class _SiteLoaderContainer extends PureComponent {
    render () {
        return false ? (
            <div className="main-loader" title="Fetching above-the-fold data">
                <Loader size="3x" />
            </div>
        ) : null
    }
}

export const SiteLoaderContainer = connect(state => ({}), dispatch => bindActionCreators({}, dispatch))(
    _SiteLoaderContainer
)

import React, { PureComponent } from 'react'
import { list } from 'react-immutable-proptypes'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

export const LoaderWrapper = DecoratedComponent => {
    class LoaderWrapper extends PureComponent {
        render () {
            return this.props.mainMenu.size <= 0 ? null : <DecoratedComponent {...this.props} />
        }

        static propTypes = {
            mainMenu: list,
        }

        static displayName = `LoaderWrapper(${DecoratedComponent.displayName})`
    }

    return connect(state => ({}), dispatch => bindActionCreators({}, dispatch))(LoaderWrapper)
}

import React, { PureComponent as Component } from 'react'
// noinspection ES6CheckImport
import { string, func } from 'prop-types'
import classnames from 'classnames'

export class NotificationMessage extends Component {
    render () {
        const { type, message, close } = this.props

        return (
            <div className={classnames('alert', `alert-${type}`)}>
                <a className="close" onClick={close}>
                    &times;
                </a>
                {message}
            </div>
        )
    }

    static defaultProps = {
        type: ''
    }

    static propTypes = {
        type: string,
        message: string.isRequired,
        close: func.isRequired
    }
}

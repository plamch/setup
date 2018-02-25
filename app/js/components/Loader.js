import React, { PureComponent as Component } from 'react'
// noinspection ES6CheckImport
import { bool, string } from 'prop-types'
import classnames from 'classnames'

export class Loader extends Component {
    render () {
        const { isDark, title, size } = this.props

        return (
            <div
                className={classnames('la-ball-scale', `la-${size}`, {
                    'la-dark': isDark,
                })}
                title={title}
            >
                <div />
            </div>
        )
    }

    static defaultProps = {
        size: '2x',
        title: 'Loading element data',
        isDark: true,
    }

    static propTypes = {
        isDark: bool,
        title: string,
        size: string,
    }
}

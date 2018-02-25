import React, { PureComponent as Component } from 'react'
// noinspection ES6CheckImport
import { string } from 'prop-types'
import { i18n } from '~utils/i18n'

export class Text extends Component {
    render () {
        const { iKey, className } = this.props

        return (
            <span className={className}>{i18n({ key: iKey })}</span>
        )
    }

    static propTypes = {
        iKey: string.isRequired,
        className: string
    }
}

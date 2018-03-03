import React, { PureComponent } from 'react'
// noinspection ES6CheckImport
import { string } from 'prop-types'
import { isProduction } from '~utils/utils'
import classnames from 'classnames'

export class NotImplemented extends PureComponent {
    render () {
        const { pageName } = this.props

        return (
            <main className={classnames('container', { hidden: isProduction() })}>
                <h3>{pageName}</h3>
            </main>
        )
    }

    static propTypes = {
        pageName: string.isRequired,
    }
}

import React, { PureComponent } from 'react'
import { Navigation } from '~components'

export class Header extends PureComponent {
    render() {
        return (
            <header className="header sticky-top">
                <Navigation />
            </header>
        )
    }
}

import React, { PureComponent } from 'react'
import { Logo, Navigation } from 'components'

export class Header extends PureComponent {
    render() {
        return (
            <header className="header container">
                <Navigation />
            </header>
        )
    }
}

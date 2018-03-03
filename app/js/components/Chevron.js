import React, { PureComponent } from 'react'
// noinspection ES6CheckImport
import { bool, string, func } from 'prop-types'
import classnames from 'classnames'

export class Chevron extends PureComponent {
    render () {
        const { isCollapsed, onClick, className, collapsedClass } = this.props

        return (
            <div className={classnames('chevron-holder', className)} onClick={onClick}>
                <i
                    className={classnames(
                        'fa',
                        { 'fa-chevron-right': !isCollapsed },
                        { [`fa-chevron-${collapsedClass}`]: isCollapsed }
                    )}
                />
            </div>
        )
    }

    static defaultProps = {
        className: '',
        collapsedClass: 'down',
    }

    static propTypes = {
        isCollapsed: bool.isRequired,
        className: string,
        collapsedClass: string,
        onClick: func.isRequired,
    }
}

import React, { PureComponent } from 'react'
// noinspection ES6CheckImport
import { bool, string, func, any } from 'prop-types'
import classnames from 'classnames'
import { Button } from 'reactstrap'
import { Loader } from '.'

export class ButtonWithLoader extends PureComponent {
    render () {
        const { children, onClick, disabled, className, title, isLoading } = this.props
        const buttonProps = {
            className: classnames(className, { 'btn-loading': isLoading }),
            title,
            disabled,
        }

        if (!disabled) {
            buttonProps.onClick = onClick
        } else {
            buttonProps.onClick = undefined
        }

        return (
            <Button {...this.props} {...buttonProps}>
                {isLoading ? (
                    <span style={{ position: 'relative' }}>
                        <span style={{ position: 'absolute', top: '-8px' }}>
                            <Loader title="Submitting form" size="1x" isDark={false} />
                        </span>
                        <span>{children}</span>
                    </span>
                ) : (
                    <span>{children}</span>
                )}
            </Button>
        )
    }

    static defaultProps = {
        className: '',
        disabled: false,
        isLoading: false,
    }

    static propTypes = {
        onClick: func.isRequired,
        className: string,
        title: string,
        disabled: bool,
        isLoading: bool,
        children: any,
    }
}

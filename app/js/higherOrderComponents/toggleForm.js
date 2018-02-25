import React, { PureComponent as Component } from 'react'
import { Map } from 'immutable'
import { toTitleCase } from '~utils/utils'

export const toggleForm = (formName, DecoratedComponent) => {
    if (typeof formName !== 'string') {
        throw new Error('You should pass a property formName:String as first parameter!')
    }
    formName = toTitleCase(formName)

    class ToggleForm extends Component {
        state = {
            sessionId: '',
            selectedAccount: Map(),
            [`is${formName}Visible`]: false
        }

        toggleFormVisibility = ({
            sessionId = '',
            selectedAccount = Map(),
        } = {}) => this.setState({
            sessionId,
            selectedAccount,
            [`is${formName}Visible`]: !this.state[`is${formName}Visible`]
        })

        render() {
            const {
                sessionId,
                selectedAccount,
                [`is${formName}Visible`]: isFormVisible
            } = this.state
            const passedDownProps = {
                sessionId,
                selectedAccount,
                [`is${formName}FormVisible`]: isFormVisible,
                [`toggle${formName}FormVisibility`]: this.toggleFormVisibility
            }

            return (
                <DecoratedComponent
                    {...this.props}
                    {...passedDownProps}
                />
            )
        }
    }

    ToggleForm.displayName = `Toggle${formName}Form(${DecoratedComponent.displayName})`

    return ToggleForm
}

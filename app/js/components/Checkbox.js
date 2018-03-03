import React, { PureComponent } from 'react'
// noinspection ES6CheckImport
import { bool, string, func } from 'prop-types'

export class Checkbox extends PureComponent {
    render () {
        const { checked, id, value, onChange } = this.props

        return (
            <span>
                <input
                    type="checkbox"
                    {...{
                        id,
                        checked,
                        onChange,
                    }}
                />
                <label htmlFor={id}>{value}</label>
            </span>
        )
    }

    static defaultProps = {
        checked: false,
    }

    propTypes = {
        checked: bool,
        id: string.isRequired,
        value: string.isRequired,
        onChange: func.isRequired,
    }
}

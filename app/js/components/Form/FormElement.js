import React, { PureComponent as Component } from 'react'
// noinspection ES6CheckImport
import { bool, string, array, object, func } from 'prop-types'
import { map } from 'react-immutable-proptypes'
import classnames from 'classnames'
import { FormGroup } from 'reactstrap'
import { Text } from 'components'
import {
    FORM_INPUT_TYPE_TEXT,
    FORM_INPUT_TYPE_PASSWORD,
    FORM_INPUT_TYPE_SELECT,
    FORM_INPUT_TYPE_TEXTAREA,
    FORM_INPUT_TYPE_RADIO
} from 'constants/form'
import { VALUE } from 'constants/global'
import { i18n } from 'utils/i18n'

export class FormElement extends Component {
    renderFormControl() {
        const {
            formName, field, fieldType, fieldName, selectOptions, selectOptionsWithKeys, handleInputChange, disabled
        } = this.props
        const id = `${formName}-${fieldName}-field`
        const value = field.get(VALUE)
        const placeholder = i18n({ key: `modal-form-${formName}-${fieldName}-placeholder` })

        switch (fieldType) {
            case FORM_INPUT_TYPE_TEXT: {
                return (
                    <input
                        type="text"
                        className={`${id} form-control`}
                        name={fieldName}
                        onChange={handleInputChange}
                        disabled={disabled}
                        {...{ id, value, placeholder }}
                    />
                )
            }
            case FORM_INPUT_TYPE_TEXTAREA: {
                return (
                    <textarea
                        className={`${id} form-control`}
                        name={fieldName}
                        disabled={disabled}
                        onChange={handleInputChange}
                        {...{ id, value, placeholder }}
                    />
                )
            }
            case FORM_INPUT_TYPE_PASSWORD: {
                return (
                    <input
                        type="password"
                        className={`${id} form-control`}
                        name={fieldName}
                        disabled={disabled}
                        onChange={handleInputChange}
                        {...{ id, value, placeholder }}
                    />
                )
            }
            case FORM_INPUT_TYPE_SELECT: {
                return (
                    <select
                        className={`${id} form-control`}
                        name={fieldName}
                        disabled={disabled}
                        onChange={handleInputChange}
                        value={value || ''}
                        {...{ id }}
                    >
                        <option value="" key="default" disabled>{`-- ${placeholder} --`}</option>
                        {selectOptionsWithKeys
                            ? selectOptionsWithKeys.map((option) => (
                                <option value={option.value} key={option.value} selected={value === option.value}>
                                    {option.title}
                                </option>
                            ))
                            : selectOptions.map(option => (
                                <option value={option} key={option} selected={value === option}>
                                    {option}
                                </option>
                            ))
                        }
                    </select>
                )
            }
            case FORM_INPUT_TYPE_RADIO: {
                return (
                    <div
                        className="form-group"
                    >
                        <span>{placeholder}</span>
                        {selectOptionsWithKeys
                            ? selectOptionsWithKeys.map(option => (
                                <div className="radio" onClick={disabled ? undefined : handleInputChange}>
                                    <label>
                                        <input
                                            type="radio"
                                            name={fieldName}
                                            disabled={disabled}
                                            value={option.value}
                                            checked={value === option.value}
                                        />
                                        {option.title}
                                    </label>
                                </div>
                            ))
                            : selectOptions.map(option => (
                                <div className="radio" onClick={disabled ? undefined : handleInputChange}>
                                    <label>
                                        <input
                                            type="radio"
                                            name={fieldName}
                                            disabled={disabled}
                                            value={option}
                                            checked={value === option}
                                        />
                                        {option}
                                    </label>
                                </div>
                            ))
                        }
                    </div>
                )
            }
            default:
                return null
        }
    }

    render () {
        const { isRequiredField, formName, field, fieldName } = this.props
        const errorMessage = field.getIn(['error', 'message'])
        const hasError = field.getIn(['error', 'hasError'])

        return (
            <FormGroup
                className={classnames(
                    { 'has-error': hasError }
                )}
            >
                <label htmlFor={`${formName}-${fieldName}-field`} className="control-label">
                    <Text iKey={`modal-form-${formName}-${fieldName}-label`} />
                    {isRequiredField ? '*' : null}
                </label>
                {this.renderFormControl()}
                {
                    hasError ?
                        <span className="help-block">
                            {errorMessage}
                        </span>
                        : null
                }
            </FormGroup>
        )
    }

    static propTypes = {
        isRequiredField: bool.isRequired,
        field: map.isRequired,
        formName: string.isRequired,
        fieldType: string.isRequired,
        fieldName: string.isRequired,
        disabled: bool,
        selectOptions: array,
        selectOptionsWithKeys: object,
        handleInputChange: func
    }
}

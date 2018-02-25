import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bool, string, func } from 'prop-types'
import { map } from 'react-immutable-proptypes'
import { bindActionCreators } from 'redux'
import { VALUE } from '~constants/global'
import { toTitleCase } from '~utils/utils'
import { validate } from '~utils/validate'
import {
    formHasEmptyFieldSelector,
    formHasValidationErrorSelector,
    formInputFieldsSelector,
    formServerErrorSelector,
    isLoadingSelector,
} from '~reducers'
import * as formActions from '~actions/form'

export const formPropTypes = {
    isSubmitting: bool,
    formName: string,
    isButtonDisabled: func,
    fields: map,
    handleInputChange: func,
    handleFormSubmit: func,
    handleMultiSelectInputChangePartial: func,
    onCheckBoxChange: func,
    resetForm: func,
}

export const formHOC = (formName, DecoratedComponent) => {
    class FormHOC extends Component {
        validateInput = ({ inputName, inputValue }) => {
            const { hasValidationError } = this.props
            const { setFormInputError, resetFormInputError } = this.props
            const inputValidation = validate({ formName, inputName, inputValue })

            if (inputValidation.hasError) {
                setFormInputError({ formName, inputName, errorMessage: inputValidation.errorMessage })
            } else if (hasValidationError) {
                resetFormInputError({ formName, inputName })
            }
        }

        handleInputChange = ({ target: { name: inputName, value: inputValue } }) => {
            const { setFormInputField } = this.props

            setFormInputField({ formName, inputName, inputValue })
            this.validateInput({ inputName, inputValue })
        }

        handleMultiSelectInputChangePartial = ({ inputName }) => e => {
            const { setFormInputField } = this.props

            setFormInputField({ formName, inputName, inputValue: e })
            this.validateInput({ inputName, inputValue: e })
        }

        handleFormSubmit = () => {
            const { fields, closeModal } = this.props
            const { submitForm } = this.props
            const fieldsValues = fields.map(val => val.get(VALUE)).toObject()

            // This is hardcoded - if there is callback for close modal, add it and send it to saga
            if (closeModal) {
                fieldsValues['closeModal'] = closeModal
            }
            submitForm(fieldsValues)
        }

        resetForm = () => {
            const { resetFormInputFields } = this.props

            resetFormInputFields({ formName })
        }

        isButtonDisabled = ({ requiredFields = [] } = {}) => {
            const { isSubmitting, fields, hasValidationError, serverError } = this.props

            const areRequiredFieldsMissingValue = requiredFields
                .map(reqField => fields.get(reqField))
                .some(field => field.get(VALUE) === '')

            return (
                hasValidationError ||
                // || serverError.get('hasError')
                isSubmitting ||
                areRequiredFieldsMissingValue
            )
        }

        onCheckboxChange = ({ formName, inputName }) => {
            return ({ target: { checked } }) => {
                const { setFormInputField } = this.props

                setFormInputField({ formName, inputName, inputValue: checked })
            }
        }

        render () {
            return (
                <DecoratedComponent
                    {...{
                        ...this.props,
                        handleInputChange: this.handleInputChange,
                        handleMultiSelectInputChangePartial: this.handleMultiSelectInputChangePartial,
                        handleFormSubmit: this.handleFormSubmit,
                        resetForm: this.resetForm,
                        isButtonDisabled: this.isButtonDisabled,
                        onCheckBoxChange: this.onCheckboxChange,
                        formName,
                    }}
                />
            )
        }
    }

    FormHOC.propTypes = {
        isSubmitting: bool,
        hasValidationError: bool,
        fields: map,
        serverError: map,
        setFormInputField: func,
        setFormInputError: func,
        resetFormInputFields: func,
        resetFormInputError: func,
        submitForm: func,
        closeModal: func,
    }

    return connect(
        state => ({
            serverError: formServerErrorSelector(state),
            isSubmitting: isLoadingSelector(state, `is${toTitleCase(formName)}FormSubmitting`),
            hasValidationError: formHasValidationErrorSelector(state, formName),
            hasEmptyField: formHasEmptyFieldSelector(state, formName),
            fields: formInputFieldsSelector(state, formName),
        }),
        dispatch =>
            bindActionCreators(
                {
                    setFormInputField: formActions.setFormInputField,
                    setFormInputError: formActions.setFormInputError,
                    resetFormInputFields: formActions.resetFormInputFields,
                    resetFormInputError: formActions.resetFormInputError,
                    submitForm: formActions[`submit${toTitleCase(formName)}Form`],
                },
                dispatch
            )
    )(FormHOC)
}

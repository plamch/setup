import React, { PureComponent as Component } from 'react'
// noinspection ES6CheckImport
import { bool, string, func, any } from 'prop-types'
import { Form, Button } from 'reactstrap'
import { ButtonWithLoader, Text } from '~components'
import { i18n } from '~utils/i18n'

export class FormWrapper extends Component {
    renderFormButton = () => {
        const { isSubmitting, isButtonDisabled, handleFormSubmit, closeModal, formName } = this.props

        return (
            <div className="form-group">
                <ButtonWithLoader
                    className="btn btn-primary"
                    disabled={isButtonDisabled || isSubmitting}
                    isLoading={isSubmitting}
                    onClick={handleFormSubmit}
                    title={isButtonDisabled ? i18n({ key: 'invalid-or-missing-fields' }) : null}
                >
                    <Text iKey={`modal-form-${formName}-save`} />
                </ButtonWithLoader>
                &nbsp;
                <Button onClick={closeModal}>
                    <Text iKey={`modal-form-${formName}-cancel`} />
                </Button>
            </div>
        )
    }

    render() {
        const { className, children } = this.props

        return (
            <Form className={className}>
                {children}
                {this.renderFormButton()}
            </Form>
        )
    }

    static defaultProps = {
        className: '',
    }

    static propTypes = {
        isSubmitting: bool.isRequired,
        isButtonDisabled: bool.isRequired,
        formName: string.isRequired,
        className: string,
        handleFormSubmit: func,
        closeModal: func,
        children: any,
    }
}

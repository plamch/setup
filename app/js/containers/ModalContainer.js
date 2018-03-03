/* eslint react/no-unused-prop-types: 0 */
import React, { PureComponent } from 'react'
// noinspection ES6CheckImport
import { bool, string, object, func, any } from 'prop-types'
import { connect } from 'react-redux'
import { map } from 'react-immutable-proptypes'
import { bindActionCreators } from 'redux'
import { Modal, Button } from 'reactstrap'
import { NotificationMessage, Text } from '~components'
import { formServerErrorSelector } from '~reducers'
import { resetFormInputFields, resetFormServerError } from '~actions/form'

@connect(
    state => ({
        serverError: formServerErrorSelector(state),
    }),
    dispatch =>
        bindActionCreators(
            {
                resetFormInputFields,
                resetFormServerError,
            },
            dispatch
        )
)
export class ModalContainer extends PureComponent {
    closeServerErrorNotification = () => {
        const { resetFormServerError } = this.props

        resetFormServerError()
    }

    closeModal = () => {
        const { resetFormInputFields, formName, closeModal } = this.props

        if (closeModal) {
            closeModal()
        }
        resetFormInputFields({ formName })
        this.closeServerErrorNotification()
    }

    renderModalHeader = () => {
        const { formName, modalHeaderIKey } = this.props

        return (
            <Modal.Header closeButton>
                <h2 className="title">
                    <Text iKey={modalHeaderIKey !== '' ? modalHeaderIKey : `modal-form-${formName}-title`} />
                </h2>
            </Modal.Header>
        )
    }

    renderModalFooter = () => {
        return (
            <Modal.Footer>
                <Button onClick={this.confirmAction}>Valider</Button>
                <Button onClick={this.closeModal}>Annuler</Button>
            </Modal.Footer>
        )
    }

    renderModalNotification = () => {
        const { serverError } = this.props

        return serverError.get('hasError') ? (
            <NotificationMessage
                type="danger"
                message={serverError.get('message')}
                close={this.closeServerErrorNotification}
            />
        ) : null
    }

    render() {
        const { isOpen, children } = this.props

        return (
            <Modal show={isOpen} onHide={this.closeModal} className="centered" contentLabel={''}>
                {this.renderModalHeader()}
                <Modal.Body>
                    {this.renderModalNotification()}
                    {children}
                </Modal.Body>
                {/* {this.renderModalFooter()} */}
            </Modal>
        )
    }

    static defaultProps = {
        modalHeaderIKey: '',
    }

    static propTypes = {
        isOpen: bool.isRequired,
        formName: string.isRequired,
        modalHeaderIKey: string,
        serverError: map,
        location: object,
        resetFormInputFields: func,
        resetFormServerError: func,
        closeModal: func,
        children: any,
    }
}

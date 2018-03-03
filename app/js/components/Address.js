import React, { PureComponent } from 'react'
import { Row, Col } from 'reactstrap'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faPhone, faAt, faMapMarkerAlt } from '@fortawesome/fontawesome-free-solid'

export class Address extends PureComponent {
    render() {
        return (
            <address className="address container">
                <span className="address-item">
                    <FontAwesomeIcon icon={faAt} />
                    &nbsp;
                    <a href="mailto:dani@plam.ch" itemProp="email">
                        dani@plam.ch
                    </a>
                </span>
                <span className="address-item">
                    <FontAwesomeIcon icon={faPhone} />
                    &nbsp;
                    <a href="tel:+359 877 155 302" itemProp="telephone">
                        +359 877 155 302
                    </a>
                </span>
                <span
                    className="address-item"
                    itemProp="address"
                    itemScope=""
                    itemType="http://schema.org/PostalAddress"
                >
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    &nbsp;
                    <a href="https://goo.gl/maps/6YYVhoGmEmK2" target="_blank">
                        <span itemProp="streetAddress">bulevard "Cherni vrah" 47</span>,{' '}
                        <span itemProp="addressLocality">Sofia</span>
                    </a>
                </span>
            </address>
        )
    }
}

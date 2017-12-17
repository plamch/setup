import React, { PureComponent } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faPhone, faAt, faMapMarkerAlt } from '@fortawesome/fontawesome-free-solid'

export class Footer extends PureComponent {
    render () {
        return (
            <footer className="footer container">
                <address className="address row">
                    <span className="col-md-3">
                        <FontAwesomeIcon icon={faPhone} />
                        &nbsp;
                        <a href="tel:+359 877 155 302">+359 877 155 302</a>
                    </span>
                    <span className="col-md-3">
                        <FontAwesomeIcon icon={faAt} />
                        &nbsp;
                        <a href="mailto:dani@plam.ch">dani@plam.ch</a>
                    </span>
                    <span className="col-md-6">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        &nbsp;
                        <a href="https://goo.gl/maps/6YYVhoGmEmK2" target="_blank">
                            bulevard "Cherni vrah" 47, Sofia
                        </a>
                    </span>
                </address>
            </footer>
        )
    }
}

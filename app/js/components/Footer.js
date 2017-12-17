import React, { PureComponent } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faPhone, faAt, faMapMarkerAlt } from '@fortawesome/fontawesome-free-solid'

export class Footer extends PureComponent {
    render () {
        return (
            <footer className="footer container" itemscope="" itemtype="http://schema.org/Organization" itemref="logo">
                <address className="address row">
                    <span className="col-md-3">
                        <FontAwesomeIcon icon={faPhone} />
                        &nbsp;
                        <a href="tel:+359 877 155 302" itemprop="telephone">+359 877 155 302</a>
                    </span>
                    <span className="col-md-3">
                        <FontAwesomeIcon icon={faAt} />
                        &nbsp;
                        <a href="mailto:dani@plam.ch" itemprop="email">dani@plam.ch</a>
                    </span>
                    <span
                        className="col-md-6"
                        itemprop="address"
                        itemscope=""
                        itemtype="http://schema.org/PostalAddress"
                    >
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        &nbsp;
                        <a href="https://goo.gl/maps/6YYVhoGmEmK2" target="_blank">
                            <span itemprop="streetAddress">
                                bulevard "Cherni vrah" 47
                            </span>, <span itemprop="addressLocality">
                                Sofia
                            </span>
                        </a>
                    </span>
                </address>
            </footer>
        )
    }
}

import React, { PureComponent } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faPhone, faAt, faMapMarkerAlt } from '@fortawesome/fontawesome-free-solid'

export class Footer extends PureComponent {
    render () {
        return (
            <footer
                className="footer container"
                id="footer"
                itemScope=""
                itemType="http://schema.org/Organization"
                itemRef="logo"
            >
                <div className="googlemap">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.959518298487!2d23.3166569277443!3d42.66221324309569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8459867f031d%3A0xc426608e7e3c2c14!2sPuzl+CowOrKing!5e0!3m2!1sen!2sbg!4v1513715850319"
                        width="100%"
                        height="350"
                        frameBorder="0"
                        allowFullScreen
                    />
                </div>
                <section className="section">
                    <div className="contact-us-form">
                        <form action="">
                            <p>Say Hello! Or whatever you want!</p>
                            <input name="name" type="text" placeholder="Name" id="name" required />
                            <input name="email" type="email" placeholder="Email" id="email" required />
                            <textarea name="text" placeholder="Message" />
                            <input type="submit" value="Send" id="button-blue" />
                            <div className="row">
                                <address>
                                    <span className="col-sm-3">
                                        <FontAwesomeIcon icon={faAt} />
                                        &nbsp;
                                        <a href="mailto:dani@plam.ch" itemProp="email">dani@plam.ch</a>
                                    </span>
                                    <span className="col-sm-3">
                                        <FontAwesomeIcon icon={faPhone} />
                                        &nbsp;
                                        <a href="tel:+359 877 155 302" itemProp="telephone">+359 877 155 302</a>
                                    </span>
                                    <span
                                        className="col-sm-5"
                                        itemProp="address"
                                        itemScope=""
                                        itemType="http://schema.org/PostalAddress"
                                    >
                                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                                            &nbsp;
                                        <a href="https://goo.gl/maps/6YYVhoGmEmK2" target="_blank">
                                            <span itemProp="streetAddress">
                                                bulevard "Cherni vrah" 47
                                            </span>, <span itemProp="addressLocality">
                                                Sofia
                                            </span>
                                        </a>
                                    </span>
                                </address>
                            </div>
                        </form>
                    </div>
                </section>
            </footer>
        )
    }
}

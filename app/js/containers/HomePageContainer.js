/* eslint react/no-unused-prop-types: 0 */
import React, { Component } from 'react'
// noinspection ES6CheckImport
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {
    faThumbsUp,
    faCogs,
    faSync,
    faCubes,
    faCertificate,
    faStar,
    faQuoteLeft,
    faPaperPlane,
} from '@fortawesome/fontawesome-free-solid'

class _HomePageContainer extends Component {
    render() {
        return (
            <main className="home-page container">
                <section className="services section" id="services-section">
                    <h2>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        <span className="section-title">Services</span>
                    </h2>
                    <ul className="row">
                        <li className="col-12 col-sm-6 col-md-3">
                            <h3>Web Development</h3>
                            <p>Frequently demanded requirements, Browser support, Maintenance process</p>
                        </li>
                        <li className="col-12 col-sm-6 col-md-3">
                            <h3>UX</h3>
                            <p>Functionality and compatibility</p>
                        </li>
                        <li className="col-12 col-sm-6 col-md-3">
                            <h3>Graphic Design</h3>
                            <p>Logos, business cards, flyers and brochures, web design</p>
                        </li>
                        <li className="col-12 col-sm-6 col-md-3">
                            <h3>SEO</h3>
                            <p>Ideas made visible</p>
                        </li>
                        <li className="col-12 col-sm-6 col-md-3">
                            <h3>Photography</h3>
                            <p>Frontend and backend</p>
                        </li>
                        <li className="col-12 col-sm-6 col-md-3">
                            <h3>Hosting</h3>
                            <p>Functionality and compatibility</p>
                        </li>
                        <li className="col-12 col-sm-6 col-md-3">
                            <h3>Marketing Automation</h3>
                            <p>Memorable, useful, enjoyable</p>
                        </li>
                        <li className="col-12 col-sm-6 col-md-3">
                            <h3>Trainings</h3>
                            <p>Ideas made visible</p>
                        </li>
                    </ul>
                    <hr />
                </section>
                <section className="products section">
                    <h2>
                        <FontAwesomeIcon icon={faCubes} />
                        <span className="section-title">Products</span>
                    </h2>
                    <ul className="row">
                        <li className="col-12 col-sm-6 col-md-3">
                            <h3>E-Commerce</h3>
                            <p>Frontend and backend</p>
                        </li>
                        <li className="col-12 col-sm-6 col-md-3">
                            <h3>CMS</h3>
                            <p>Functionality and compatibility</p>
                        </li>
                        <li className="col-12 col-sm-6 col-md-3">
                            <h3>Blog</h3>
                            <p>Memorable, useful, enjoyable</p>
                        </li>
                        <li className="col-12 col-sm-6 col-md-3">
                            <h3>PHP Microframework</h3>
                            <p>Ideas made visible</p>
                        </li>
                        <li className="col-12 col-sm-6 col-md-3">
                            <h3>Stock Photos Gallery</h3>
                            <p>Frontend and backend</p>
                        </li>
                    </ul>
                    <hr />
                </section>
                <section className="technology section">
                    <h2>
                        <FontAwesomeIcon icon={faCogs} />
                        <span className="section-title">Technology</span>
                    </h2>
                    <ul className="row">
                        <li className="col-12 col-sm-6 col-md-3">
                            <h3>React</h3>
                            <p>Frontend and backend</p>
                        </li>
                        <li className="col-12 col-sm-6 col-md-3">
                            <h3>Redux</h3>
                            <p>Functionality and compatibility</p>
                        </li>
                        <li className="col-12 col-sm-6 col-md-3">
                            <h3>Express</h3>
                            <p>Memorable, useful, enjoyable</p>
                        </li>
                        <li className="col-12 col-sm-6 col-md-3">
                            <h3>MongoDB</h3>
                            <p>Ideas made visible</p>
                        </li>
                    </ul>
                    <hr />
                </section>
                <section className="methodology section">
                    <h2>
                        <FontAwesomeIcon icon={faSync} />
                        <span className="section-title">Methodology</span>
                    </h2>
                    <ul className="row">
                        <li className="col-12 col-sm-6 col-md-3">
                            <h3>Pricing</h3>
                            <p>Clients will know the cost before approving development</p>
                        </li>
                        <li className="col-12 col-sm-6 col-md-3">
                            <h3>Agile</h3>
                            <p>Regular check-in to assure the right direction</p>
                        </li>
                        <li className="col-12 col-sm-6 col-md-3">
                            <h3>Freedom</h3>
                            <p>We can work in office or remotely</p>
                        </li>
                        <li className="col-12 col-sm-6 col-md-3">
                            <h3>Timesheets</h3>
                            <p>Track our progress</p>
                        </li>
                    </ul>
                    <hr />
                </section>
                <section className="portfolio section">
                    <h2>
                        <FontAwesomeIcon icon={faCertificate} />
                        <span className="section-title">Portfolio</span>
                    </h2>
                    <div className="row">
                        <img
                            className="portfolio-logo col-sm-4"
                            src="/img/portfolio/cep-logo-transparent.png"
                            alt="CEP logo"
                        />
                        <span className="portfolio-information col-sm-8">
                            <h3>CEP</h3>
                            <span>Website</span>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </span>

                        <div className="portfolio-button-wrapper">
                            <button className="btn btn-primary">See portfolio</button>
                        </div>
                    </div>
                    <hr />
                </section>
                <section className="testimonials section">
                    <h2>
                        <FontAwesomeIcon icon={faStar} />
                        <span className="section-title">Testimonials</span>
                    </h2>
                    <div className="testimonials-information">
                        <h3>CEP</h3>
                        <em>Front-End, Back-End, Design</em>
                        <hr />
                        <span>
                            <FontAwesomeIcon icon={faQuoteLeft} className="testimonials-quote-icon" />
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book.
                        </span>
                    </div>
                    <hr />
                </section>
                <section className="blog section">
                    <h2>
                        <FontAwesomeIcon icon={faPaperPlane} />

                        <span className="section-title">What is new</span>
                    </h2>

                    <hr />
                </section>
            </main>
        )
    }
}

export const HomePageContainer = connect(state => ({}), dispatch => bindActionCreators({}, dispatch))(
    _HomePageContainer
)

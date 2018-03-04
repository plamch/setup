import React, { PureComponent } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faThumbsUp, faCogs, faSync, faHeart } from '@fortawesome/fontawesome-free-solid'

export class SplashPage extends PureComponent {
    render() {
        return (
            <main className="splash-page container">
                <section className="services section">
                    <h2>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        <span className="section-title">Services</span>
                    </h2>
                    <ul className="row">
                        <li className="col-12 col-sm-6 col-md-3">
                            <h3>UX</h3>
                            <p>Clear layout, simple navigation</p>
                        </li>
                        <li className="col-12 col-sm-6 col-md-3">
                            <h3>Development</h3>
                            <p>Functionality and compatibility</p>
                        </li>
                        <li className="col-12 col-sm-6 col-md-3">
                            <h3>Content</h3>
                            <p>Memorable, useful, enjoyable</p>
                        </li>
                        <li className="col-12 col-sm-6 col-md-3">
                            <h3>Graphics</h3>
                            <p>Ideas made visible</p>
                        </li>
                    </ul>
                </section>
                <section className="technology section">
                    <h2>
                        <FontAwesomeIcon icon={faCogs} />
                        <span className="section-title">Technology</span>
                    </h2>
                    <ul className="row">
                        <li className="col-12 col-sm-6 col-md-3">
                            <h3>Frontend</h3>
                            <p>Semantic markup, single-page apps</p>
                        </li>
                        <li className="col-12 col-sm-6 col-md-3">
                            <h3>Backend</h3>
                            <p>Simple, yet powerful administration</p>
                        </li>
                        <li className="col-12 col-sm-6 col-md-3">
                            <h3>SEO</h3>
                            <p>Optimized page speed and structure</p>
                        </li>
                        <li className="col-12 col-sm-6 col-md-3">
                            <h3>Servers</h3>
                            <p>Reliability is essential</p>
                        </li>
                    </ul>
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
                </section>
                <section className="values section">
                    <h2>
                        <FontAwesomeIcon icon={faHeart} />
                        <span className="section-title">Values</span>
                    </h2>
                    <ul className="row">
                        <li className="col-12 col-sm-6 col-md-3">
                            <h3>Passion</h3>
                            <p>Do it with love or not at all</p>
                        </li>
                        <li className="col-12 col-sm-6 col-md-3">
                            <h3>Transparency</h3>
                            <p>Everyone deserves the truth</p>
                        </li>
                        <li className="col-12 col-sm-6 col-md-3">
                            <h3>Excellence</h3>
                            <p>It's about doing your best</p>
                        </li>
                        <li className="col-12 col-sm-6 col-md-3">
                            <h3>Commitment</h3>
                            <p>Promises matter only when kept</p>
                        </li>
                    </ul>
                </section>
            </main>
        )
    }
}

export default SplashPage

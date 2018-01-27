import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { getLink } from 'utils/getLink'
import { HOME_PAGE } from 'constants/navigation'

export class Header extends PureComponent {
    scrollToFooter = () => {
        const navElement = document.getElementById('footer')

        navElement && navElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        })
    }

    render() {
        return (
            <header className="header container">
                <div className="logo" id="logo">
                    <a itemProp="url">
                        <svg
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 690.6 340.7"
                            xmlSpace="preserve"
                            fill="currentColor"
                            itemProp="logo"
                        >
                            <path
                                d="M88.3,258.6c-14,0-25.4-2.1-34.4-6.4S36.2,242,27.6,234.4v-19.1C37.2,224,46.3,230.9,55,236c8.7,5.1,19.7,7.6,32.9,7.6
        c19.9,0,36.7-7,50.6-21s20.8-31.2,20.8-51.4c0-20-7-37.3-21-51.8s-30.8-21.8-50.4-21.8C68,97.6,51,105.1,36.8,120
        c-14.2,15-21.3,35.7-21.3,62.1v158.7H0V177c0-30.4,9-53.8,27-70.1s38.2-24.5,60.5-24.5c24.3,0,45,8.6,62.2,25.8s25.8,38.1,25.8,62.9
        c0,24.5-8.3,45.3-25,62.2S113.1,258.6,88.3,258.6z"
                            />
                            <rect x="202" y="0" width="16.2" height="255.7"/>
                            <path
                                d="M474.2,255.7H458V148.3c0-22.8,6.4-39.5,19.1-50c6.4-5.2,12.9-9.1,19.7-11.8s13.9-4,21.5-4c13.5,0,25,3.3,34.4,9.8
        s16.7,14.8,21.9,24.8c4.4-9.3,11.3-17.4,20.8-24.3c9.4-6.9,20.9-10.3,34.4-10.3c14.5,0,28.2,5.2,41.2,15.6s19.5,27.2,19.5,50.2
        v107.4h-16.2v-106c0-17.2-4.6-30.3-13.7-39.4c-9.2-9.1-20.1-13.6-32.8-13.6c-10.5,0-20.7,4.4-30.6,13.1s-14.8,23.1-14.8,43.2v102.6
        h-16.2V153c0-20.1-4.7-34.5-14-43.2s-20.1-13.1-32.4-13.1c-12.5,0-23.2,4.4-32.2,13.1s-13.4,22-13.4,39.9L474.2,255.7L474.2,255.7z"
                            />
                            <path
                                d="M402.9,234c-4.9,4.2-9.4,7.6-13.4,10.3s-8.8,5.4-14.2,8.1c-8.3,4.2-19.4,6.3-33.1,6.3c-24.3,0-45-8.3-62.2-24.8
        s-25.8-37.3-25.8-62.4c0-24.3,8.6-45.2,25.9-62.7c17.3-17.5,37.7-26.3,61.3-26.3c25.8,0,47,9,63.8,26.9s25.2,38.1,25.2,60.7v85.7
        h-16.2v-81.5c0-18.3-6.6-35.7-19.7-52.1S364,97.5,342.2,97.5c-19.6,0-36.5,7.1-50.6,21.3s-21.2,31.8-21.2,52.9
        c0,20.1,6.9,37,20.6,51c13.7,13.9,30.8,20.9,51.1,20.9c12,0,22.4-2.2,31.1-6.6c8.7-4.4,18.6-11.9,29.6-22.4L402.9,234L402.9,234z"
                            />
                        </svg>
                    </a>
                </div>
                <nav className="nav">
                    <div className="container">
                        <button className="nav__toggle">
                            <span className="nav__toggle__bar" />
                            <span className="nav__toggle__bar" />
                            <span className="nav__toggle__bar" />
                        </button>
                        <ul className="nav-main nav__nav container">
                            <li className="active">
                                <a href="#">
                                    Services
                                </a>
                                <ul className="nav-sub nav__nav__child">
                                    <li>
                                        <a href="#">
                                            Hello
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Hello
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Hello
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">
                                    Products
                                </a>
                                <ul className="nav-sub nav__nav__child">
                                    <li>
                                        <a href="#">
                                            Hello
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Hello
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Hello
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <Link
                                    to={getLink(HOME_PAGE)}
                                    onClick={this.scrollToFooter}
                                >
                                    Say hello!
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

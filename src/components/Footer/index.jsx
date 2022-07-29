import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <footer className="footer posr">
            <div className="container">
                <div className="footer__inner w100 df aic jcsb">
                    <div className="footer__wrapper df aic">
                        <Link to="/" className="header__logo df">
                            <img src="./assets/img/logo.svg" alt="logo" className="img light" />
                            <img src="./assets/img/logo-dark.svg" alt="logo" className="img dark" />
                        </Link>

                        <a href="https://google.com" className="footer__link">
                            Privacy Policy
                        </a>

                        <a href="https://google.com" className="footer__link">
                            Terms of Use
                        </a>
                    </div>

                    <p className="footer__text">
                        made by

                        <a href="https://roobinium.io" target="_blanc">
                            roobinium
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
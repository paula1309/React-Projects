import React from "react";
import { ReactComponent as GithubIcon } from 'assets/img/logo.svg';
import './styles.css';

function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/paula1309/" target="_blank" rel="noreferrer">
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p className="dsmovie-contact-link">/paula1309</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;
import React from 'react';
import './Footer.scss';

const Footer = () => {

    return (
        <div className="footer">
            <div className="footer_links">
                <a href="https://linkedin.com/in/lucasilliano" target="_blank" rel="noopener noreferrer">
                    <img src="/linkedin.svg" alt="LinkedIn" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <img src="/github.svg" alt="GitHub" />
                </a>
            </div>
            <p className="footer_legals">© 2021 Lucas Illiano</p>
        </div>
    );
};

export default Footer;

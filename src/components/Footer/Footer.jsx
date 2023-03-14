import React from 'react';
import './footer.scss';

const Footer = () => {
    return (
        <footer>
            <span>Made by</span>
            <span onClick={() => { window.open("https://github.com/Anrsgrl") }}>Anrsgrl</span>
        </footer>
    )
}

export default Footer;
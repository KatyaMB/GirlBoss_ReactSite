import React from 'react';
import { Button } from '@trendmicro/react-buttons';
import Social from '../images/social.png';
import LogoMini from '../images/logo-mini.png';

// Footer section function
function Footer() {
    return (
        <div className='footer-formatting'>
            <img className="footer-logo" src={LogoMini} alt='small logo'/>
            <p id="footer-para-one">We're here to spark the thrill of possibility</p>
            <img id="footer-social" src={Social} alt="Social buttons" />
            <p id="footer-copyright" >Copyright © 2024 Girlboss</p>
            {/*Table for the navigation*/}
            <table id="footer-nav-table">
                <tbody>
                    <tr>
                        <td>Terms & Conditions</td>
                        <td>Read</td>
                    </tr>
                    <tr>
                        <td>Privacy</td>
                        <td>Newsletter</td>
                    </tr>
                    <tr>
                        <td>Accessibility</td>
                        <td>Podcast</td>
                    </tr>
                    <tr>
                        <td>Advertise With Us</td>
                        <td>Find a Job</td>
                    </tr>
                    <tr>
                        <td>Blog</td>
                        <td>Resources</td>
                    </tr>
                    <tr>
                        <td>Guides</td>
                        <td>Course</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>About</td>
                    </tr>
                </tbody>
            </table>
            <p id="footer-daily">Get the Girlboss Daily</p>
            <p id="footer-subscribe" >Sign up to receive tips on work, life, and how to chase (and reach!) your dreams.</p>
            <input id="footer-input" type="text" placeholder="your@email.com" />
            <Button id="footer-button">SUBSCRIBE</Button>
            <Button id="footer-currency">USD$</Button>
        </div>
    );
}

// Exporting the footer section
export default Footer;
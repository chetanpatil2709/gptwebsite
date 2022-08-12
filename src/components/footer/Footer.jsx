import React from 'react';
import './footer.css';

export default function Footer() {
    return (
        <div className='footer section_padding'>
            <div className='footer_heading'>
                <h1 className="gradient_text">Do you want to step in to the future before others</h1>
            </div>
            <div className="footer_button">
                <button type='button'>Request Early Access</button>
            </div>
            <div className="footer_container">
                <div className="footer_container_logo">
                    <h1>GPT</h1>
                    <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
                </div>
                <div className='footer_container_links_div'>
                    <div className="footer_container_links">
                        <h5>Links</h5>
                        <a>Overons</a>
                        <a>Social Media</a>
                        <a>Counters</a>
                        <a>Contact</a>
                    </div>
                    <div className="footer_container_links">
                        <h5>Company</h5>
                        <a>Terms & Conditions </a>
                        <a>Privacy Policy</a>
                        <a>Contact</a>
                    </div>
                    <div className="footer_container_links">
                        <h5>Get in touch</h5>
                        <p>Crechterwoord K12 182 DK Alknjkcb</p>
                        <p>085-132567</p>
                        <a>info@payme.net</a>
                    </div>
                </div>
            </div>
            <div className="footer_copyright">
                <p>@2021 GPT-3. All rights reserved.</p>
            </div>
        </div>
    )
}

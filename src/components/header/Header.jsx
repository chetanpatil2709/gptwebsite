import React from 'react';
import './header.css';
import ai from '../../assets/ai.png';

export default function Header() {
    return (
        <div className='header section_padding' id='home'>
            <div className='header_content'>
                <h1 className='gradient_text'>Let&apos;s Build Something amazing with GPT-3 OpenAI</h1>
                <p className='my-3'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <div className='header_content_input'>
                    <input type="email" placeholder='Your Email Address' />
                    <button>Get Started</button>
                </div>
            </div>
            <div className='header_image'>
                <img src={ai} alt="ai" />
            </div>
        </div>
    )
}

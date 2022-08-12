import React from 'react';
import './possibility.css';
import possibitlityImg from '../../assets/possibility.png';

export default function Possibility() {
    return (
        <div className='possibility section_padding' id='possibility'>
            <div className='possibility_image'>
                <img src={possibitlityImg} alt='Possibitlity' />
            </div>
            <div className='possibility_content'>
                <h6>Request Early Access to Get Started</h6>
                <h1 className="gradient_text">The possibilities are <br /> beyond your imagination</h1>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <h6>Request Early Access to Get Started</h6>
            </div>
        </div >
    )
}

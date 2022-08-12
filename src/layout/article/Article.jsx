import React from 'react';
import './article.css';

export default function Article({ imgUrl, date, text }) {
    return (
        <div className='article'>
            <div className='article_image'>
                <img src={imgUrl} />
            </div>
            <div className='article_content'>
                <div>
                    <p>{date}</p>
                    <h6>{text}</h6>
                </div>
                <a>Read Full Article</a>
            </div>
        </div>
    )
}

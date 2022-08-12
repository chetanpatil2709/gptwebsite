import React from 'react'
import './featurecomponent.css'
export default function FeatureComponent({ title, text }) {
    return (
        <div className='whatgpt_feature_cotents'>
            <div className='whatgpt_feature_top_row'></div>
            <h1 className='whatgpt_feature_container_heading'>{title}</h1>
            <p className='whatgpt_feature_container_text'>{text}</p>
        </div>
    )
}

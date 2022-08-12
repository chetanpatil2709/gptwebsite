import React from 'react';
import './whatgpt.css';
import FeatureComponent from '../../layout/feature_components/FeatureComponent';

export default function WhatGPT() {
    return (
        <div className='whatgpt section_padding' id='whatgpt'>
            <div className='whatgpt_container'>
                <div >
                    <FeatureComponent title={'WhatGPT'} text={'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'} />
                </div>
                <div className="whatgpt_heading">
                    <h1 className="gradient_text">The possibilities are beyond your imagination</h1>
                    <p className="gradient_text" >Explore the Library</p>
                </div>
                <div className='whatgpt_feature_container'>
                    <FeatureComponent title={'Chatbots'} text={'We so opinion friends me message as delight. Whole front do of plate heard oh ought.'} />
                    <FeatureComponent title={'Knowledgebase'} text={'At jointure ladyship an insisted so humanity he.Friendly bachelor entrance to on by.As put impossible own apartments.'} />
                    <FeatureComponent title={'Education'} text={'At jointure ladyship an insisted so humanity he.Friendly bachelor entrance to on by.As put impossible own apartments.'} />
                </div>
            </div>
        </div>
    )
}

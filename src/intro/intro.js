import './intro.css';

import React from 'react';
import Typed from 'react-typed'

export default class Intro extends React.Component {
    render() {
        return(
            <div id='home' className='intro route bg-image background'>
                <div className='intro-content display-table'>
                    <div className='table-cell'>
                        <div className='container'>
                            <h1 className='intro-title'>Hi, I am Pedro Belisario</h1>
                            <p className='intro-subtitle'>
                                <span/>
                                <strong className='text-slider'>
                                    <Typed strings={['Software Engineer', 'ソフトウェアエンジニア', 'Machine Learning Engineer', '機械学習エンジニア']} typeSpeed = {60} backDelay = {500} backSpeed = {30} loop/>
                                </strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            
        );
    }
}
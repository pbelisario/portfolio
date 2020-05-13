import './contact.css';

import React from 'react';

export default class Contact extends React.Component {
    render () {
        return (
            <section className='paralax-mf footer-paralax bg-image route background'>
                <div className='container'>
                    <div className='contact-mf'>
                        <div id='contact' className='box-shadow-full background-darker'>
                            <div className='title-box pt-4 pt-md-0'>
                                <h3 className='contact-title'>Contact me</h3>
                            </div>
                            <div className='brief'>
                                <p className='first-phrase '>Wheater you would like to get in touch, talk about a project, or just say hi, I'd love to hear.</p>
                                <p className='second-phrase'> You can find me in the socials down below</p>
                                <div className='socials'>
                                    <ul className='socials-list'>
                                        <li><a href='https://github.com/pbelisario' target='_blank' rel='noopener noreferrer'><ion-icon size='small' name="logo-github"></ion-icon></a></li>
                                        <li><a href='https://www.linkedin.com/in/pedro-belisario/' target='_blank' rel='noopener noreferrer'><ion-icon size='small' name="logo-linkedin"></ion-icon></a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                
            </section>
        );
    }
}
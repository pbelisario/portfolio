import './about.css';

import React from 'react';
import ReactCountryFlag from "react-country-flag"

export default class About extends React.Component {
    constructor() {
        super();
        this.state = {
            cur_idiom: 'eng',
            idiom:  {'eng': 'TEXT ENG', 
                     'port': 'Estagiário de desenvolvimento, apaixonado por Deep Learning e visão computacional e machine learning para modelos preditivos comerciais.',
                     'jpn': 'JAPANESE' }
        }
    }
    updateIdiom(cur_idiom) {

        this.setState({cur_idiom});
    }

    render () {
        return (
        <section id='about' className='about-mf sect-pt4 route background bg-image'>
            <div className='container'>
                <div className='box-shadow-full background'>
                    <div className='title-box'>
                        <h2 className='about-title'>About me</h2>
                    </div>
                    <div>
                        <div>
                            <p className='lead about-text'>{this.state.idiom[this.state.cur_idiom]}</p>
                        </div>
                        <div className='idioms-div'>
                            <ul className='idioms-list'>
                                <li className='idiom'><ReactCountryFlag className="emojiFlag" countryCode="US" title="US" svg onClick={() => this.updateIdiom('eng')}/></li>
                                <li className='idiom'><ReactCountryFlag className="emojiFlag" countryCode="JP" title="JP" svg onClick={() => this.updateIdiom('jpn')}/></li>
                                <li className='idiom'><ReactCountryFlag className="emojiFlag" countryCode="BR" title="BR" svg onClick={() => this.updateIdiom('port')}/></li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
        );
    }
}
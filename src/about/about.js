import './about.css';

import React from 'react';
import ReactCountryFlag from "react-country-flag"

export default class About extends React.Component {
    constructor() {
        super();
        this.state = {
            cur_idiom: 'eng',
        }
    }
    updateIdiom(cur_idiom) {

        this.setState({cur_idiom});
    }

    render () {
        return (
        <section id='about' className='about-mf sect-pt4 route background bg-image'>
            <div className='container'>
                <div className='box-shadow-full background-darker'>
                    <div className='title-box'>
                        {aboutMe(this.state.cur_idiom)}
                    </div>
                    <div>
                        <div>
                            <div className='lead about-text'>{formatedText(this.state.cur_idiom)}</div>
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

function formatedText(lang) {
    if (lang == 'port') {
        return <div><p>TEXT PORT</p></div>
    } else if (lang == 'eng') {
        return <div><p>TEXT ENG</p></div>
    } else if (lang == 'jpn') {
        return <div><p>TEXT JPN</p></div>
    }
}

function aboutMe(lang) {
    if (lang == 'port') {
        return <h2 className='about-title'>Sobre mim</h2>
    } else if (lang == 'eng') {
        return <h2 className='about-title'>About me</h2>
    } else if (lang == 'jpn') {
        return <h2 className='about-title'>自己紹介</h2>
    }
}
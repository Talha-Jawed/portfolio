import React, { Component } from 'react';
import devTo from '../assets/devTo.png';
import linkedIn from '../assets/Linkedin.png';
import fb from '../assets/fb.png';
import github from '../assets/github.png';
import npm from '../assets/npm.png';
import twitter from '../assets/twitter.png';
import { Spring } from 'react-spring/renderprops';
import './Style.css';



class Social extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <Spring
                from={{ opacity: 0, marginLeft: -500 }}
                to={{ opacity: 1, marginLeft: 0 }}
            >{props => (

                <div className='social' style={props}>

                    <a href='https://www.linkedin.com/in/talha-javed-450491176/' target="_blank">
                        <img src={linkedIn} alt="linkedIn" className='socialIcon' />
                    </a>
                    <a href="https://twitter.com/talha_javed97" target="_blank">
                        <img src={twitter} alt="twitter" className='socialIcon' />
                    </a>
                    <a href="https://dev.to/talhajawed" target="_blank">
                        <img src={devTo} alt="devTo" className='socialIcon' />
                    </a>
                    <a href="https://www.facebook.com/talha.jawed.71" target="_blank">
                        <img src={fb} alt="fb" className='socialIcon' />
                    </a>
                    <a href="https://github.com/Talha-Jawed" target="_blank">
                        <img src={github} alt="github" className='socialIcon' />
                    </a>
                    <a href="https://www.npmjs.com/~talha-javed" target="_blank">
                        <img src={npm} alt="npm" className='socialIcon' />
                    </a>

                </div>
            )}</Spring>
        );
    }
}

export default Social;
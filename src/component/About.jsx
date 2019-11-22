import React, { Component } from 'react';
import image from '../assets/imag.jpeg'
import './Style.css';



class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div className='about' >
                <p className='aboutHeading'>ABOUT ME</p>
                <div className='profileImageDiv'>
                    <img src={image} className='profileImage' alt='logo' />
                </div>
                <p className='name'>Talha Javed</p>
                <em className='languges'>MERN Stack Developer</em>
                <p className='aboutDetail'>
                    A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / React Native / Nodejs / Firebase / MongooDB and some other cool libraries and frameworks .
                </p>
                <p className='aboutDetail'>
                    I have 1+ years of development experience building fullstack products from scratch, developing and integrating APIs, working with a variety of databases and clould platforms and more recently developing mobile applications with React Native.
                </p>
            </div>
        );
    }
}

export default About;
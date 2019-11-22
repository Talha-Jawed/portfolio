import React, { Component } from 'react';
import './Style.css';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        const { arr } = this.state;
        return (
            <div className='skill'>
                <p className='skillHeading'>CONTACT</p>
                <em className='skillEM'>Have a question or want to work together?</em>
                <div style={{ marginTop: '60px' }}>
                    <p className='contact'>WhatsApp: +92 306 2709986</p>
                    <p className='contact'>Email: jawedtalha0@gmail.com</p>
                </div>
                <em className='made'>Made with ❤️ by Talha Javed</em>

            </div>
        );
    }
}

export default Contact;
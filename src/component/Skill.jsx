import React, { Component } from 'react';
import webImg from '../assets/web.png'
import mobImg from '../assets/mobile.png'
import apiImg from '../assets/api.png'
import databaseImg from '../assets/databas.png'
import cloudImg from '../assets/cloud.png'
import { Spring } from 'react-spring/renderprops'
import './Style.css';

class Skill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [
                {
                    image: webImg,
                    name: 'Web Application Development',
                    detail: 'Fast, responsive and engaging apps that bring your ideas to life.'
                },
                {
                    image: mobImg,
                    name: 'Mobile Application Development',
                    detail: 'Cross-platform apps built with efficiency and speed for Android and iOS at once.'
                },
                {
                    image: apiImg,
                    name: 'API Integration & Development',
                    detail: 'REST API integration. REST API development with Node.js.'
                },
                {
                    image: databaseImg,
                    name: 'Database Design',
                    detail: 'Database architectures in Firebase, MongoDB, always aiming for performance, scale and stability.'
                },
                {
                    image: cloudImg,
                    name: 'Cloud Integration',
                    detail: 'Deployment of ReactJS & React-Native apps and databases to leading cloud platforms such as Heroku.'
                }
            ]
        };
    }
    render() {
        const { arr } = this.state;
        return (
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
            >{props => (
                <div className='skill' style={props}>
                    <p className='skillHeading'>WHAT I DO</p>
                    <em className='skillEM'>Things I'm skilled at and passionate about.</em>
                    <div className='skillCardMain' >
                        {arr && arr.map((item, index) => {
                            return (
                                <div className='skillCard' key={index} >
                                    <div className='skillCardImg'>
                                        <img src={item.image} className='skillImg' />
                                    </div>
                                    <p className='skillCardName'>{item.name}</p>
                                    <div>
                                        <p className='skillCardDetail'>{item.detail}</p>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            )}

            </Spring>
        );
    }
}

export default Skill;
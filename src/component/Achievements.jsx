import React, { Component } from 'react';
import pwa from '../assets/pwa.png';
import cssJs from '../assets/cssJS.png';
import mongoDB from '../assets/mongoDB.png'
import './Style.css';


class Achievements extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [
                { img: pwa, cardName: 'PWA Web App Developer', cardDetail: 'Completed Certifcation from SMIT for PWA Web App Development.', url: 'https://github.com/Talha-Jawed' },
                { img: cssJs, cardName: 'HTML, CSS, JAVASCRIPT', cardDetail: 'Completed Certifcation from SoloLearn Online Certificates.', url: 'https://docs.google.com/document/d/1M4eizHf59opxN_nI9eFGvrb7PtK6RB1rjSvOh0UT9fI/edit?usp=sharing' },
                { img: mongoDB, cardName: 'MongoDB Certificate', cardDetail: 'Completed Certifcation from MongoDB University for MongoDB Basics.', url: 'http://university.mongodb.com/course_completion/9d58d436-974e-47ef-bf01-d3ce51df6634' },

            ]
        };
    }

    clickHandle(url) {
        var win = window.open(url, "_blank");
        win.focus();
    }

    render() {
        const { arr } = this.state
        return (
            <div className='Achievements' >
                <p className='AchievementsHeading'>Achievements And Certifications 🏆</p>
                <div className='AchievementsMain'>
                    {
                        arr && arr.map((item, index) => {
                            return (

                                <div className='AchievementsCard' key={index}>
                                    <div>
                                        <img src={item.img} className='AchievementsImages' />
                                    </div>
                                    <p className='skillCardName'>{item.cardName}</p>
                                    <span className='skillEM'>{item.cardDetail}</span>
                                    <div className='AchievementsCardBtn'>
                                        <p className='viewBtn' onClick={() => this.clickHandle(item.url)}>VIEW</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Achievements;
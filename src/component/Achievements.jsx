import React, { Component } from 'react';
import pwa from '../assets/pwa.png';
import cssJs from '../assets/cssJS.png';
import mongoDB from '../assets/mongoDB.png';
import HackathonImg from '../assets/hackathon.png';
import piaicLogo from '../assets/logoPiaic.png';
import './Style.css';


class Achievements extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [
                { img: pwa, cardName: 'PWA Web App Developer', cardDetail: 'Completed Certifcation from SMIT for PWA Web App Development.', url: 'https://drive.google.com/file/d/1sHtwUcT5yks7XTN24oQpDwIyiPxHnn3r/view' },
                { img: cssJs, cardName: 'HTML, CSS, JAVASCRIPT', cardDetail: 'Completed Certifcation from SoloLearn Online Certificates.', url: 'https://docs.google.com/document/d/1M4eizHf59opxN_nI9eFGvrb7PtK6RB1rjSvOh0UT9fI/edit' },
                { img: mongoDB, cardName: 'MongoDB Certificate', cardDetail: 'Completed Certifcation from MongoDB University for MongoDB Basics.', url: 'http://university.mongodb.com/course_completion/9d58d436-974e-47ef-bf01-d3ce51df6634' },
                { img: HackathonImg, cardName: 'Certificate of Appreciation', cardDetail: 'Participation Civic Tech Hackathon 2018 by IGNITE.', url: 'https://drive.google.com/file/d/1cSGXj2jSmhzGkx2oRFgfeTBM9pCeXU9f/view' },
                { img: piaicLogo, cardName: 'Certificate of Appreciation', cardDetail: 'Participation Two Days of Entrance Exam in Karachi. PIAIC', url: 'https://drive.google.com/file/d/1sj-Wyzwr1KZVFa1-Shclnd7dJ6TJY1zt/view' },

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
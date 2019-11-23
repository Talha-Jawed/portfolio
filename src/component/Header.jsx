import React, { Component } from 'react';
import closeIcon from '../assets/closeWhite.png'
import menuIcon from '../assets/menu.jpg'
import { Spring } from 'react-spring/renderprops'
import './Style.css';



class WebHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickMenu: false
    };
  }
  render() {
    const { clickMenu } = this.state
    return (
      <Spring
        from={{ opacity: 0, marginLeft: -500 }}
        to={{ opacity: 1, marginLeft: 0 }}
      >{props => (

        <div className="App" style={props} >
          <div className='logoName'>
            <span className='headerName' style={{ padding: '0px 0px 0px 10px' }}>{"<"}</span>
            <span id='namefont'><a href="#" className='aTag'>{"TaLha JaVed"}</a> </span>
            <span className='headerName' style={{ padding: '0px 10px 0px 0px' }}>{"/>"}</span>
          </div>
          <div className={clickMenu ? 'menuLine' : 'rightSide'} >
            <a href='#Skill' className='aTag'>
              <p className='headerName'>{"Skills"}</p>
            </a>
            <a href='#About' className='aTag'>
              <p className='headerName'>{"About"}</p>
            </a>
            <a href='#openSource' className='aTag'>
              <p className='headerName'>{"Open Source"}</p>
            </a>
            <a href='#Achievement' className='aTag'>
              <p className='headerName'>{"Achivements"}</p>
            </a>
            <a href='#Contact' className='aTag'>
              <p className='headerName'>{"Contact Me"}</p>
            </a>
          </div>
          {/* <div className='headerIcons'> */}
          {
            clickMenu ?
              <img className='menuIcon' src={closeIcon} alt="closeIcon" onClick={() => this.setState({ clickMenu: false })} />
              :
              <img className='menuIcon' src={menuIcon} alt="menuIcon" onClick={() => this.setState({ clickMenu: true })} />
          }
          {/* </div> */}

        </div>
      )}</Spring>
    );
  }
}

export default WebHeader;
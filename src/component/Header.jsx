import React, { Component } from 'react';
import closeIcon from '../assets/closeWhite.png'
import menuIcon from '../assets/menu.jpg'
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
      <div className="App" >
        <div className='logoName'>
          <span className='headerName'>{"<"}</span>
          <span id='namefont'>{"TaLha JaVed"}</span>
          <span className='headerName'>{"/>"}</span>
        </div>
        <div className={clickMenu ? 'menuLine' : 'rightSide'} >
          
          <p className='headerName'>{"Skills"}</p>
          <p className='headerName'>{"About"}</p>
          <p className='headerName'>{"Open Source"}</p>
          <p className='headerName'>{"Achivements"}</p>
          <p className='headerName'>{"Contact Me"}</p>
        </div>
        {/* <div className='headerIcons'> */}
        {
          clickMenu ?
            <img className='menuIcon' src={closeIcon} alt="Logo" onClick={() => this.setState({ clickMenu: false })} />
            :
            <img className='menuIcon' src={menuIcon} alt="Logo" onClick={() => this.setState({ clickMenu: true })} />
        }
        {/* </div> */}

      </div>
    );
  }
}

export default WebHeader;
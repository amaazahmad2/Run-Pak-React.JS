import React from 'react';
import './welcomecontent.css';

import runlogo from '../../../images/run_logo_header.png';
import SportsIcons from './sportsIcons';
class WelcomeContent extends React.Component{
    render(){
        return(
            <div className="content">
                <img className="logo" alt="Run Logo" src={runlogo} />
                <h1 className="neverbefore">LIKE NEVER BEFORE</h1>
                <div className="iconBarContainer">
                    <SportsIcons ></SportsIcons>
                </div>
                
            </div>
        );
    }
}
export default WelcomeContent;
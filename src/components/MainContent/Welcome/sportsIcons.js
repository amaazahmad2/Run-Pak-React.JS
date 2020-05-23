import React from 'react';
import './../Welcome/sportsIcons.css'
import basketballIcon from './../../../images/basketballicon3.png'
import tennisballIcon from './../../../images/tennisBallIcon.png'
import cricketIcon from './../../../images/cricketIcon.png'
import shuttleIcon from './../../../images/shuttleIcon.png'
import footballIcon from './../../../images/footballIcon.png'
import tableTennisIcon from './../../../images/tableTennisIcon.png'


class sportsIcons extends React.Component {
    render() {
        return (

            <div className="container">
                <div className="bar"></div>
                <div className="iconContainer">
                    <img className="icon" src={basketballIcon}></img>
                    <img className="icon" src={tennisballIcon}></img>
                    <img className="icon" src={cricketIcon}></img>
                    <img style={{height:"50px",width:"35px", margin:"15px"}} src={shuttleIcon}></img>
                    <img className="icon" src={tableTennisIcon}></img>
                    <img className="icon" src={footballIcon}></img>
                </div>
                <div className="bar"></div>
            </div>

        )
    }
}

export default sportsIcons;
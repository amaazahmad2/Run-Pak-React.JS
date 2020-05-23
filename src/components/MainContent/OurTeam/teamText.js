import React from 'react'
//import ExampleComponent from "react-rounded-image";
//import mypicture from './images/me2.jpg'

class Teammembertext extends React.Component{
  render() {
    let mystylepost={
        width: "290px",
        height: "15px",
        fontFamily: "AdidasRedZone",
        fontSize: "21px",
        fontWeight: "normal",
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: "1.32",
        letterSpacing: "normal",
        textAlign: "center",
        color: '#23d669',
        marginTop:"7px"
    };
    let mystyletext={
        width: "290px",
        height: "150px",
        fontFamily: "CopperplateGothicRegular",
        fontSize: "19px",
        fontWeight: "normal",
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: "1.12",
        letterSpacing: "normal",
        textAlign: "justify",
        textAlignLast:"center",
        color: '#FFFFFF'
    };
    return (
      <div>
        <p style={mystylepost}>{this.props.name}</p>
        <p style = {mystyletext} >
        {this.props.text}
        </p>
      </div>
    );
  }
}
export default Teammembertext;
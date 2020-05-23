import React from 'react'
//import ExampleComponent from "react-rounded-image";
//import Img from 'react-image'
//import './css/teamMember.css'
import Teammemberpicture from './teamMemberPicture';
//import imageName from require('./images/me2.jpg')
import Teammembertext from './teamText';

class Teammember extends React.Component{
  render(props) {
    var path = this.props.mypicture
    var width = this.props.width
    var height = this.props.height
    var text = this.props.text
    var post = this.props.post
    var name = this.props.name
    return (
      <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <Teammemberpicture myphoto={path} width={width} height={height}/>
        <Teammembertext text = {text} name ={name}/>
      </div>
    );
  }
}
export default Teammember;
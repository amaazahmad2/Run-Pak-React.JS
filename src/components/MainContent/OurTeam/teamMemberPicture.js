import React from 'react'
//import ExampleComponent from "react-rounded-image";
//import MyPhoto from "./me2.jpg";
//import Img from 'react-image'
//import './css/teamMemberPicture.css'
//import mypicture from './images/mubeen.png'
import './teamMemberpicture.css'

class Teammemberpicture extends React.Component{

  constructor() {
    super();
    this.state = {hovered:false};
  }
  render(props) {
    const mystyle={  
        width: this.props.width,
        height: this.props.height,
        marginTop:"15px"
    };
    return (
      <div>
        <img alt="" className="image-hover-opacity" style={mystyle} src={this.props.myphoto}
        //onClick={() => src=this.props.myphoto}
        onMouseOut={() => this.setState({hovered: true})}
        onMouseOver={() => this.setState({hovered: false})}
        />
      </div>
    );
  }
}
export default Teammemberpicture;
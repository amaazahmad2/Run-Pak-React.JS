import React from 'react'

import './drawerToggleButton.css'

// React Component
import Burger from '@animated-burgers/burger-squeeze' 
// don't forget the styles
import './burgerButton.css'

// const drawerToggleButton = props => (
//   <button className="toggle-button" onClick={props.click}>
//     <div className="toggle-button-line" />
//     <div className="toggle-button-line" />
//   </button>
// )



// export default drawerToggleButton

export default class drawerToggleButton extends React.Component{
  // state={
  //   open:this.props.sideDrawer
  // }

  handleClick() {
    // this.setState({
    //   open: this.props.sideDrawer
    // });

    this.props.click();
  }

  render(){
    return(
      <Burger isOpen={ this.props.sideDrawerState } onClick={this.handleClick.bind(this)}  />
    )
  }
}
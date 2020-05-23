import React from 'react';

import './AppCommingComponent.css';
import PlayButton from './playButton';
import Game from './ticTacToe'

 
class AppComming extends React.Component
{

  state={
    stateOfPlayButton:"Play"
  } 

  handlePlayButtonClick = () => {

    if(this.state.stateOfPlayButton === "Play")
    {
      this.setState({stateOfPlayButton: "Exit"})
    }
    else
    this.setState({stateOfPlayButton: "Play"})
  }

  setButtonLabel(){
    if(this.state.stateOfPlayButton === "Play")
    {
      return ("DO NOT CLICK THIS")
    }
    else
      return ("EXIT")
  }


  render() {
    var showGame
    if(this.state.stateOfPlayButton === "Play"){
        
    }
    else{
        showGame=<Game></Game>
    }

    return (
      <div className="AppComing">
        <div>
          {showGame}
        </div>
          <PlayButton onClick={this.handlePlayButtonClick} buttonLabel={this.setButtonLabel() }></PlayButton> 
      </div>
    );
  }
  
}

export default AppComming;

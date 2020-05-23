import React from 'react';
import ReactDOM from 'react-dom';
import './playButton.css'

export default class PlayButton extends React.Component
{
    

    render()
    {
        return(
            <div>
                <button className="PlayButton"  onClick={this.props.onClick}>{this.props.buttonLabel}</button>
            </div>
        );
    }
}
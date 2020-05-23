import React from 'react';
import './../../../App.css';
import './AppScreen.css'
import AppComingComponent from './AppCommingCompnent'

export default class AppScreen extends React.Component
{
    render()
    {
        return (
            <div className="AppScreen">
                <div className="textContainer">
                    <h1 className="headingText">FIND AND FIGHT <br/>COMPETITIVE TEAMS</h1>
                    <p1 className="paragraphText">Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo non habent claritatem insitamconse quat duis autem Exerci tation.Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo non habent claritatem insitamconse quat duis autem Exerci tation.

                    </p1>
                </div>
                <div className="mobileContainer">
                    <AppComingComponent/>
                </div>
                
            </div>
        );
    }
}
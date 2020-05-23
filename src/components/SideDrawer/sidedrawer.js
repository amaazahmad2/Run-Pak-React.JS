import React from 'react'
import './sideDrawer.css'
import { CSSTransition } from 'react-transition-group';
import{BrowserRouter,Link, NavLink} from 'react-router-dom'

class SideDrawer extends React.Component{
    
    render(){
        return (
            <CSSTransition in={this.props.isOpen} timeout={400} classNames="side-drawer-container">
                <div className="side-drawer side-drawer-container-exit-done">
                    
                    <ul>
                        <li>
                            <Link to="/" onClick={this.props.routingClickHandler}>Home</Link>
                        </li>
                        <li>
                            <Link to="/turfs" onClick={this.props.routingClickHandler}>Find Turfs</Link>
                        </li>
                        <li>
                            <Link to="/ourteam" onClick={this.props.routingClickHandler}>Our Team</Link>
                        </li>
                        <li >
                            <Link to="/app" onClick={this.props.routingClickHandler}>Our App</Link>
                        </li>
                    </ul>
                </div>
            </CSSTransition>
        )
    }
}

export default SideDrawer
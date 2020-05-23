import React from 'react';
import './content.css';
import DrawerToggleButton from '../SideDrawer/drawerToggleButton'
import WelcomeContent from './Welcome/welcomecontent'
import AppScreen from './AppComming/AppScreen'
import Section from './OurTeam/section'
import MapContainer from './FindTurfs/map2'
import SubscriptionModal from './../Modals/subscriptionModal.js'
import ContactModal from './../Modals/contactModal.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import contactIconGreen from './../../images/contact_green.png'
import contactIconWhite from './../../images/contact_white.png'
import { Link } from 'react-router-dom'
import Popup from "reactjs-popup";

import { SocialIcon } from 'react-social-icons';


class Content extends React.Component {

    render() {
        return (
            <div className="background">
                <div className="upperbar">
                    {/* <image className="header-logo"></image> */}
                    <Link className="header-logo" to="/"></Link>
                    <DrawerToggleButton sideDrawerState={this.props.sideDrawerState} click={this.props.drawerClickHandler} />
                    <div className="contact-container">
                        {/* <image className="contact-icon" alt="Contact Us"></image> */}
                        <Popup modal trigger={<image className="contact-icon" ></image>} className="subscriptionModal">
                            <SubscriptionModal></SubscriptionModal>
                        </Popup>
                    </div>

                </div>
                <div className="main">
                    <Switch>
                        <Route exact path="/" component={WelcomeContent} />
                        <Route path="/ourteam" component={Section} />
                        <Route path="/app" component={AppScreen} />
                        <Route path="/turfs" component={MapContainer} />
                    </Switch>
                </div>
                <div className="footer">
                    <SocialIcon className="footer-socialmedia-icon" style={{ height: 40, width: 40 }} url="http://facebook.com/runpakistan/" target="_blank" bgColor="transparent" fgColor="white" ></SocialIcon>
                    <SocialIcon className="footer-socialmedia-icon" style={{ height: 40, width: 40 }} url="http://instagram.com/runpakistan" target="_blank" bgColor="transparent" fgColor="white"></SocialIcon>
                    <Popup
                        className="contactModal"
                        trigger={<button class="footer-call-icon" style={{ height: 40, width: 40, border:0}}></button>}
                        position="top"
                        on="hover"
                        >
                            <ContactModal></ContactModal>
                    </Popup>
                </div>
            </div>
        );
    }
}
export default Content;
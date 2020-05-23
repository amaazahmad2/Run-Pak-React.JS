import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
//import {SVG,Loader} from 'react-inlinesvg';
//import { ReactComponent as Logo } from './images/ground.svg';
import gI from './images/ground2.jpg'
const MarkerFun = ({ text }) => 
<div>
<img src={gI} style={{height:'50px'}}
/>

{text}
</div>
;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 31.4815,
      lng: 74.3030
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCw1Cu5QmZqsFLWq-D7m12E3Qqjjj13xWY'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <MarkerFun
            lat={31.4815}
            lng={74.3030}
            text="My Marker"
          />
          
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;
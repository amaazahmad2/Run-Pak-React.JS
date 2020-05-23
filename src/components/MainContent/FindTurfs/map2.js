
import React from 'react'
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%'
  };

  class MapContainer extends React.Component {    
    render(){
        return (
            <Map
            google={this.props.google}
            zoom={15}
            defaultOptions={{
                styles: './mapStyles.json'
            }}
            initialCenter={{ lat: 31.4815, lng: 74.3030}}
            >
            <Marker position={{ lat: 31.4815, lng: 74.3030}} />
            <Marker position={{ lat: 31.4807, lng: 74.2752}} />
            <Marker position={{ lat: 31.4014, lng: 74.2111}} />
            <Marker position={{ lat: 31.4700, lng: 74.4111}} />
            <Marker position={{ lat: 31.4722, lng: 74.2501}} />
            <Marker onMouseover={this.onMouseoverMarker}
          name={'Current location'} />
            </Map>
        );    
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyDeru9aA8oTB0pG_Qjgwm-DyydDqrfltXg'
  })(MapContainer);
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapApp extends Component {
  render() {
    const mapStyles = {
      width: '100%',
      height: '400px',
    };

    return (
      <Map
        google={this.props.google}
        zoom={10}
        style={mapStyles}
        initialCenter={{ lat: 40.7128, lng: -74.006 }}
      >
        <Marker position={{ lat: 40.7128, lng: -74.006 }} />
        {/* Add more markers as needed */}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'YOUR_API_KEY_HERE' // Replace with your Google Maps API key
})(MapApp);

import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

import myMarkers from "./markers.js"

export class MyMap extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
  }
  

  onMarkerClick = (props, marker) => {
    console.log("marker", marker)

    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClicked = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };


  render() {
    console.log("google",this.props.google)

    const mapStyle = {
      width: "80%",
      height: "100%",
      border: "1px solid black",
      margin: "auto"
    };

    const containerStyle = {
      width: "98vw",
      height: "80vh",
      margin: "auto"
    };

    let markers = myMarkers.map((item, i) => {
      let lat = item.lat;
      let lng = item.lng;
      console.log("MARKER", item)
      return (
        <Marker
          onClick={this.onMarkerClick}
          key={i}
          title={item.main}
          position={{ lat: lat, lng: lng }}
          day={item.day}
          time={item.accessory}
          icon={item.icon}
        />
      );
    });

    if (!this.props.loaded) {
      return <div>Loading...</div>;
    }

    return (
      <Map
        google={this.props.google}
        containerStyle={containerStyle}
        style={mapStyle}
        initialCenter={{ lat: 43.215988, lng: 1.84313 }}
        zoom={11}
        onClick={this.onMapClicked}
      >
        {markers}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h4>{this.state.selectedPlace.title}</h4>
            <p>
              {this.state.selectedPlace.day + " "}
              {this.state.selectedPlace.time}
            </p>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY
})(MyMap);

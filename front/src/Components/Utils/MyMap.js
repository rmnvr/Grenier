import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';

import myMarkers from "./markers.js";
import Marker from "./Marker.js"

const MyMap = ( props ) => {

  const [ activeMarker, setActiveMarker ] = useState()

  let markers = myMarkers.map((item, i) => {

    return (
      <Marker 
        lat={item.lat} 
        lng={item.lng} 
        text={item.main} 
        day={item.day}
        time={item.accessory}
        icon={item.icon}
        activeMarker={activeMarker} 
        key={i} 
      />
      // <Marker
      //   onClick={this.onMarkerClick}
      //   key={i}
      //   title={item.main}
      //   position={{ lat: lat, lng: lng }}

      // />
    );
  });

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "70vh", width: "70%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
        defaultCenter={props.center}
        defaultZoom={props.zoom}
      >
        {markers}
      </GoogleMapReact>
    </div>
  );
}

MyMap.defaultProps = {
  center: {
    lat: 43.21,
    lng: 1.84313
  },
  zoom: 11
}

export default MyMap;
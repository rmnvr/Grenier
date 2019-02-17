import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import Grid from "@material-ui/core/Grid";

export class MyMap extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    let markersInfo = [
      {
        title: "Saint Amans",
        lat: 43.227956,
        lng: 1.886098,
        time: "Lundi 13h"
      },
      {
        title: "Mayreville",
        lat: 43.238914,
        lng: 1.839952,
        time: "Lundi 14h"
      },
      {
        title: "Peyrefitte sur l'Hers",
        lat: 43.2460792,
        lng: 1.8176208,
        time: "Lundi 15h"
      },
      {
        title: "Sainte Camelle",
        lat: 43.268699,
        lng: 1.806094,
        time: "Lundi 16h"
      },
      {
        title: "Mézerville",
        lat: 43.248279,
        lng: 1.776819,
        time: "Lundi 17h"
      },
      {
        title: "La Louvière Lauragais",
        lat: 43.262855,
        lng: 1.753343,
        time: "Lundi 18h"
      },
      {
        title: "Plavilla",
        lat: 43.147419,
        lng: 1.912858,
        time: "Mardi 9h"
      },
      {
        title: "Saint Julien de Briola",
        lat: 43.15992,
        lng: 1.94157,
        time: "Mardi 10h"
      },
      {
        title: "Orsans",
        lat: 43.160804,
        lng: 1.982376,
        time: "Mardi 11h"
      },
      {
        title: "Cazalneroux",
        lat: 43.198434,
        lng: 1.949708,
        time: "Mardi 12h"
      },
      {
        title: "Generville",
        lat: 43.21218,
        lng: 1.932185,
        time: "Mardi 13h"
      },
      {
        title: "Fonters du Razès",
        lat: 43.228788,
        lng: 1.935478,
        time: "Mardi 14h"
      },
      {
        title: "Mireval Lauragais",
        lat: 43.253713,
        lng: 1.959144,
        time: "Mardi 15h"
      },
      {
        title: "Laurabuc",
        lat: 43.247681,
        lng: 1.97925,
        time: "Mardi 16h"
      },
      {
        title: "Laurac",
        lat: 43.228457,
        lng: 1.975686,
        time: "Mardi 17h"
      },
      {
        title: "La Cassaigne",
        lat: 43.202836,
        lng: 1.995546,
        time: "Mardi 18h"
      },
      {
        title: "Manses",
        lat: 43.100641,
        lng: 1.811687,
        time: "Mercredi 9h"
      },
      {
        title: "Teilhet",
        lat: 43.092603,
        lng: 1.778847,
        time: "Mercredi 10h"
      },
      {
        title: "Saint Félix de Tournegat",
        lat: 43.131169,
        lng: 1.748724,
        time: "Mercredi 11h"
      },
      {
        title: "Saint Amadou",
        lat: 43.110967,
        lng: 1.723028,
        time: "Mercredi 12h"
      },
      {
        title: "Ludiès",
        lat: 43.11822,
        lng: 1.714263,
        time: "Mercredi 13h"
      },
      {
        title: "Le Carlaret (La Bardaille)",
        lat: 43.14178,
        lng: 1.69643,
        time: "Mercredi 14h"
      },
      {
        title: "Tremoulet",
        lat: 43.157508,
        lng: 1.718708,
        time: "Mercredi 15h"
      },
      {
        title: "Gaudiès",
        lat: 43.174999,
        lng: 1.731235,
        time: "Mercredi 16h"
      },
      {
        title: "Payra sur l'Hers",
        lat: 43.267066,
        lng: 1.855464,
        time: "Jeudi 9h"
      },
      {
        title: "Montauriol",
        lat: 42.575647,
        lng: 2.724191,
        time: "Jeudi 10h"
      },
      {
        title: "Cumiès",
        lat: 43.295392,
        lng: 1.841915,
        time: "Jeudi 11h"
      },
      {
        title: "Molleville",
        lat: 43.311324,
        lng: 1.834505,
        time: "Jeudi 12h"
      },
      {
        title: "Baraigne",
        lat: 43.32962,
        lng: 1.824495,
        time: "Jeudi 13h"
      },
      {
        title: "Gourvieille",
        lat: 43.339532,
        lng: 1.782056,
        time: "Jeudi 14h"
      },
      {
        title: "Belflou",
        lat: 43.317611,
        lng: 1.786512,
        time: "Jeudi 15h"
      },
      {
        title: "Marquein",
        lat: 43.304976,
        lng: 1.726429,
        time: "Jeudi 16h"
      },
      {
        title: "Fajac la Relenque",
        lat: 43.279792,
        lng: 1.724616,
        time: "Jeudi 17h"
      },
      {
        title: "Molandier",
        lat: 43.246095,
        lng: 1.716202,
        time: "Jeudi 18h"
      },
      {
        title: "Saint Sernin",
        lat: 43.232644,
        lng: 1.80461,
        time: "Vendredi 9h"
      },
      {
        title: "Pech Luna",
        lat: 43.215988,
        lng: 1.84313,
        time: "Vendredi 10h"
      },
      {
        title: "Cahuzac",
        lat: 43.192034,
        lng: 1.851221,
        time: "Vendredi 11h"
      },
      {
        title: "Pécharic et le Py",
        lat: 43.187616,
        lng: 1.836778,
        time: "Vendredi 12h"
      },
      {
        title: "Plaigne",
        lat: 43.173128,
        lng: 1.812776,
        time: "Vendredi 13h"
      },
      {
        title: "Villautou",
        lat: 43.16001,
        lng: 1.832288,
        time: "Vendredi 14h"
      },
      {
        title: "Lafage",
        lat: 43.174161,
        lng: 1.86426,
        time: "Vendredi 15h"
      },
      {
        title: "Ribouisse",
        lat: 43.182903,
        lng: 1.89748,
        time: "Vendredi 16h"
      },
      {
        title: "Gaja la Selve",
        lat: 43.195062,
        lng: 1.896159,
        time: "Vendredi 13h"
      }
    ];

    const style = {
      width: "85vw",
      height: "75vh"
    };

    let markers = markersInfo.map((item, i) => {
      let lat = item.lat;
      let lng = item.lng;
      return (
        <Marker
          onClick={this.onMarkerClick}
          key={i}
          title={item.title}
          position={{ lat: lat, lng: lng }}
          time={item.time}
        />
      );
    });

    if (!this.props.loaded) {
      return <div>Loading...</div>;
    }

    return (
      <Grid container justify="center">
        <Grid item>
          <div style={style}>
            <Map
              google={this.props.google}
              style={style}
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
                  <p>{this.state.selectedPlace.time}</p>
                </div>
              </InfoWindow>
            </Map>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY
})(MyMap);

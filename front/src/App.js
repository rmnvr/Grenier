import React, { Component, Fragment } from "react";
import MediaQuery from "react-responsive";

import Desktop from "./Desktop.js";
import Mobile from "./Mobile.js";

import styles from "./Styles.css.js";

class App extends Component {
  render() {
    return (
      <Fragment>
        <MediaQuery query="(min-device-width: 850px)">
          <Desktop />
        </MediaQuery>
        <MediaQuery query="(max-device-width: 850px)">
          <Mobile />
        </MediaQuery>
      </Fragment>
    );
  }
}

export default App;

import React, { Component, Fragment } from "react";
import MediaQuery from "react-responsive";
import { withStyles } from "@material-ui/core/styles";

import Desktop from "./Components/Desktop.js";

const styles = {
  page: {
    background: 'url("images/bg1.jpg")',
    backgroundSize: "cover"
  }
};

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.page}>
        <Desktop />
      </div>
    );
  }
}

export default withStyles(styles)(App);

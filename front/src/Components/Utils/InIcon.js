import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";

let styles = {
  image: {
    height: "25px",
    opacity: "0.6"
  }
};

class InIcon extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <img
          src="images/linkedin.png"
          alt="facebook-logo"
          className={classes.image}
        />
      </Fragment>
    );
  }
}

export default withStyles(styles)(InIcon);

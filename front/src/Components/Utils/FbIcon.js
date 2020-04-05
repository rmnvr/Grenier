import React from "react";
import { withStyles } from "@material-ui/core/styles";

let styles = {
  image: {
    height: "25px",
    opacity: "0.6"
  }
};

const FbIcon = ( props ) => {

    const { classes } = props;

    return (
      <>
        <img
          src="images/facebook.png"
          alt="facebook-logo"
          className={classes.image}
        />
      </>
    );
}

export default withStyles(styles)(FbIcon);

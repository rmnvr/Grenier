import React from "react";
import { withStyles } from "@material-ui/core/styles";

let styles = {
  image: {
    height: "25px",
    opacity: "0.6"
  }
};

const InIcon = (props) => {
  const { classes } = props;

  return (
    <>
      <img
        src="images/linkedin.png"
        alt="facebook-logo"
        className={classes.image}
      />
    </>
  );
}

export default withStyles(styles)(InIcon);

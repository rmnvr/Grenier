import React from "react";

import { Parallax } from "react-parallax";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  divider: {
    height: "200px"
  }
}

const backGround = "images/parallax.png"

const ParallaxDivider = (props) => {
  const { classes } = props 
  return (
    <Parallax bgImage={backGround} strength={500}>
      <div className={classes.divider} />
    </Parallax>
  )
}

export default withStyles(styles)(ParallaxDivider)
import React from "react";

import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";

import MyCarousel from "./MyCarousel.js";
import Presentation from "./Presentation.js";

import OffsetAnchor from "../utils/OffsetAnchor.js";
import Triptyque from "../utils/Triptyque.js";
import ParallaxDivider from "../utils/ParallaxDivider.js";
import articlesData from "../utils/articlesData.js"

// import { Helmet } from "react-helmet";

const styles = theme => ({
  container: {
    padding: theme.spacing.unit * 2,
    paddingTop: "17vh"
  },
  logo: {
    width: "100%",
    height: "auto"
  },
  shadow: {
    boxShadow: "10px 10px 5px rgba(0, 0, 0, 0.4)"
  },
  title: {
    textAlign: "center"
  },
  item: {
    paddingTop: theme.spacing.unit * 8
  },
  image: {
    maxHeight: "130px",
    maxWidth: "100%",
    marginTop: "0.67rem"
  },
  bandeau: {
    padding: theme.spacing.unit * 4,
    minHeight: "200px",
    backgroundColor: "#e3c04c",
    fontFamily: "'Old Standard TT', serif",
    fontSize: "2rem",
    color: "#0b4553",
    textAlign: "justify"
  }
});

const Accueil = (props) =>  {

  const { classes } = props;

  return (
    <>
      <OffsetAnchor id="accueil-top" />
      <Grid container className={classes.container} justify={"center"}>
        <Grid item md={8} xs={12}>
          <div className={classes.shadow}>
            <MyCarousel />
          </div>
        </Grid>
      </Grid>
      <Fade bottom cascade distance={"50px"} duration={500}>
        <Grid container justify={"center"} style={{ marginTop: "100px" }}>
          <Grid item xs={12}>
            <Presentation />
          </Grid>
        </Grid>
        <ParallaxDivider />
        <Triptyque content={articlesData}/>
        <ParallaxDivider />
      </Fade>
    </>
  );
}

export default withStyles(styles)(Accueil);

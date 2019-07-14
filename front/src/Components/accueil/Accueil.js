import React from "react";

import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

import MyCarousel from "./MyCarousel.js";
import Presentation from "./Presentation.js";
import TestButton from "./TestButton"

import OffsetAnchor from "../utils/OffsetAnchor.js";
import Triptyque from "../utils/Triptyque.js";
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
  }
});

const Accueil = (props) =>  {

  const { classes } = props;

  return (
    <>
      <OffsetAnchor id="accueil-top" />
      <Grid container className={classes.container} justify={"center"}>
        <Grid item md={7} xs={12}>
          <div className={classes.shadow}>
            <MyCarousel />
          </div>
        </Grid>
      </Grid>
      <Grid container justify={"center"} style={{ marginTop: "100px" }}>
        <Grid item xs={12}>
          <Presentation />
        </Grid>
      </Grid>
      <Triptyque content={articlesData}/>
      <TestButton />
    </>
  );
}

export default withStyles(styles)(Accueil);

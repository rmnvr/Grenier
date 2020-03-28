import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

import OffsetAnchor from "../utils/OffsetAnchor.js";
import HorairesPassage from "./HorairesPassage.js";
import MyMap from "../utils/MyMap.js";

import markers from "../utils/markers.js"

// import { Helmet } from "react-helmet";

const styles = theme => ({
  container: {
    padding: theme.spacing.unit * 2,
    paddingTop: "15vh"
  },
  title: {
    textAlign: "center",
    fontFamily: "'Old Standard TT', serif",
    color: "#0b4553"
  },
  mapContainer: {
    width: "80vw",
    height: "80vh",
  },
  table: {
    marginTop: theme.spacing.unit * 12,
    marginBottom: theme.spacing.unit * 8
  },
  link: {
    textDecoration: "none"
  }
});

const Tournee = (props) => {

  const { classes } = props;

  return (
    <>
      <OffsetAnchor id="tournee-top" />

      <Grid container className={classes.container} justify={"center"}>
        <Grid item xs={12} className={classes.title}>
          <h1>Lieux et horaires de passage</h1>
          <p>
            (Attention, veuillez noter que ces informations sont données à titre
            indicatif et qu'elles peuvent être amenées à évoluer)
          </p>
        </Grid>
        <Grid
          item
          xs={12}
          className={classes.mapContainer}
        >
          <MyMap />
        </Grid>
        <Grid item xs={12} className={classes.table}>
          <HorairesPassage markers={markers} />
        </Grid>
      </Grid>
    </>
  );
}

export default withStyles(styles)(Tournee);

import React, { Component, Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

import OffsetAnchor from "./utils/OffsetAnchor.js";
// import { Helmet } from "react-helmet";

const styles = theme => ({
  container: {
    padding: theme.spacing.unit * 2
  },
  title: {
    textAlign: "center",
    fontFamily: "'Old Standard TT', serif",
    color: "#0b4553"
  },
  item: {
    paddingTop: theme.spacing.unit * 8
  },
  flyer: {
    width: "90%",
    maxWidth: "900px",
    height: "auto",
    marginTop: "0.67rem"
  },
  button: {
    marginTop: theme.spacing.unit * 2,
    backgroundColor: "#0b4553",
    color: "#e3c04c"
  },
  link: {
    textDecoration: "none"
  }
});

class Tournee extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <OffsetAnchor id="page2" />
        <Grid container className={classes.container} justify={"center"}>
          <Grid item xs={12} className={classes.title}>
            <h1>Lieux et horaires de passage</h1>
            <Grid item xs={12}>
              <img
                src={"images/flyer.jpg"}
                alt="flyer"
                className={classes.flyer}
              />
            </Grid>
            <Grid item xs={12}>
              <a
                href="images/horaires_passage.pdf"
                download
                className={classes.link}
              >
                <Button className={classes.button}>
                  Télécharger le document
                </Button>
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Tournee);

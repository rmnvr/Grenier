import React, { Component, Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

import OffsetAnchor from "./utils/OffsetAnchor.js";

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
  item: {
    paddingTop: theme.spacing.unit * 8
  },
  flyer: {
    width: "90%",
    maxWidth: "900px",
    height: "auto",
    marginTop: "0.67rem",
    boxShadow: "10px 10px 5px rgba(0, 0, 0, 0.4)"
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
        <OffsetAnchor id="tournee-top" />
        <Grid container className={classes.container} justify={"center"}>
          <Grid item xs={12} className={classes.title}>
            <h1>Lieux et horaires de passage</h1>
            <Grid item container justify="center" xs={12}>
              <div style={{height: "80vh", width: "80%"}}>
                <iframe title="map" src="https://www.google.com/maps/d/embed?mid=1jmGEnXIJfSDIGj7ajz6oTwTVLziGqBar" width="100%" height="100%"></iframe>
              </div>            
            </Grid>
            <Grid item xs={12}>
              <a href="images/horaires_passage.pdf" className={classes.link}>
                <Button className={classes.button}>
                  Afficher le programme complet
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

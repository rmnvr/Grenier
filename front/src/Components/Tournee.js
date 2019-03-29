import React, { Component, Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

import OffsetAnchor from "./utils/OffsetAnchor.js";
import HorairesPassage from "./HorairesPassage.js";

import markers from "./utils/markers.js"

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
  table: {
    marginTop: theme.spacing.unit * 12,
    marginBottom: theme.spacing.unit * 8
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
              <div style={{height: "80vh", width: "80%", border:"1px solid black"}}>
                {/*<iframe title="map" src="https://www.google.com/maps/d/embed?mid=1jmGEnXIJfSDIGj7ajz6oTwTVLziGqBar" width="100%" height="100%"></iframe>*/}
              </div>            
            </Grid>
            <Grid item xs={12} className={classes.table}>
              <HorairesPassage markers={markers}/>
            </Grid>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Tournee);

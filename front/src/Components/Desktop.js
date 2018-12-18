import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import Drawer from "@material-ui/core/Drawer";

import ProgressBar from "./ProgressBar.js";
import FbIcon from "./Utils/FbIcon.js";
import InIcon from "./Utils/InIcon.js";

let styles = theme => ({
  main: {
    background: 'url("images/bg1.jpg")',
    backgroundSize: "cover",
    paddingBottom: "20%"
  },
  title: {
    fontFamily: "'Oswald', sans-serif",
    color: "white",
    fontSize: "4vw",
    letterSpacing: ".5rem",
    textAlign: "center"
  },
  paragraph: {
    color: "white",
    paddingTop: "1vh",
    textAlign: "center"
  },
  button: {
    margin: "3vh"
  },
  networks: {
    color: "rgba(255, 255, 255, 0.6)",
    border: "2px solid",
    backgroundColor: "transparent",
    width: "70px",
    height: "70px"
  },
  side: {
    backgroundColor: "#0B4452",
    width: "40vw",
    [theme.breakpoints.down("md")]: {
      width: "60vw"
    },
    [theme.breakpoints.down("xs")]: {
      width: "80vw"
    }
  },
  image: {
    width: "100%"
  },
  section: {
    paddingTop: "10%",
    color: "white"
  }
});

class Desktop extends Component {
  state = {
    right: false
  };

  toggleDrawer = open => () => {
    this.setState({
      right: open
    });
  };

  render() {
    const { classes } = this.props;

    const side = (
      <Fragment>
        <Grid container justify="center">
          <Grid item xs={12}>
            <img
              src={"images/logo-bandeau.png"}
              alt="logo"
              className={classes.image}
            />
          </Grid>
          <Grid item container xs={12} justify="center">
            <Grid item className={classes.section}>
              Une question, une suggestion, écrivez-nous :
            </Grid>
            <Grid item container justify="center" className={classes.section}>
              <a
                href="mailto:legrenierdebenjamin@gmail.com"
                style={{ color: "white" }}
              >
                legrenierdebenjamin@gmail.com
              </a>
            </Grid>
            <Grid item className={classes.section}>
              Vous pouvez également nous joindre au :
            </Grid>
            <Grid
              item
              container
              justify="center"
              className={classes.section}
              xs={12}
            >
              06.73.65.45.25
            </Grid>
          </Grid>
        </Grid>
      </Fragment>
    );

    return (
      <Grid container justify="center" className={classes.main}>
        <Grid item xs={6}>
          <img
            src={"images/logo-blanc.png"}
            alt="logo"
            className={classes.image}
          />
        </Grid>
        <Grid item xs={12}>
          <h1 className={classes.title}>
            EN
            <br />
            CONSTRUCTION
          </h1>
        </Grid>
        <Grid item xs={12}>
          <h4 className={classes.paragraph}>Presque prêt</h4>
        </Grid>
        <Grid container row xs={4}>
          <ProgressBar />
        </Grid>
        <Grid
          container
          item
          xs={12}
          justify="center"
          className={classes.button}
        >
          <Button variant="contained" onClick={this.toggleDrawer(true)}>
            Contactez-nous
          </Button>
        </Grid>
        <Grid item xs={12}>
          <h4 className={classes.paragraph}>En attendant, suivez-nous sur :</h4>
        </Grid>
        <Grid container item xs={8} sm={4} justify="space-between">
          <Fab
            size="large"
            variant="outlined"
            className={classes.networks}
            href="https://www.facebook.com/Le-Grenier-de-Benjamin-216474645899457/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FbIcon />
          </Fab>
          <Fab
            size="large"
            icon="linkedin"
            className={classes.networks}
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InIcon />
          </Fab>
          <Drawer
            anchor="right"
            open={this.state.right}
            onClose={this.toggleDrawer(false)}
            classes={{ paper: classes.side }}
          >
            <div
              tabIndex={0}
              role="button"
              onClick={this.toggleDrawer(false)}
              onKeyDown={this.toggleDrawer(false)}
            >
              {side}
            </div>
          </Drawer>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Desktop);

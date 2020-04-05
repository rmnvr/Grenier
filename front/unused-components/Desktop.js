import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import Drawer from "@material-ui/core/Drawer";

import ProgressBar from "./ProgressBar.js";
import FbIcon from "../src/components/Utils/FbIcon.js";
import InIcon from "../src/components/Utils/InIcon.js";

let styles = theme => ({
  main: {
    height: "100vh",
    background: 'url("images/bg3.jpg")',
    backgroundSize: "cover",
    fontFamily: "'Old Standard TT', serif"
  },
  title: {
    color: "white",
    fontSize: "3vw",
    [theme.breakpoints.down("sm")]: {
      fontSize: "6vw"
    },
    letterSpacing: ".5rem",
    textAlign: "center"
  },
  paragraph: {
    color: "white",
    paddingTop: "1vh",
    textAlign: "center"
  },
  button: {
    margin: "3vh",
    borderRadius: 0
  },
  networks: {
    color: "rgba(255, 255, 255, 0.6)",
    border: "2px solid",
    backgroundColor: "transparent",
    width: "70px",
    height: "70px"
  },
  side: {
    background: "url(images/bg.png)",
    backgroundSize: "cover",
    backgroundPosition: "bottom left",
    width: "40vw",
    [theme.breakpoints.down("md")]: {
      width: "60vw"
    },
    [theme.breakpoints.down("xs")]: {
      width: "80vw"
    }
  },
  image: {
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "8vw",
      marginTop: "4vw"
    }
  },
  section: {
    fontSize: "1.2rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
      padding: "40px 10px"
    },
    padding: "30px 10px",
    color: "white",
    fontFamily: "'Old Standard TT', serif"
  },
  link: {
    color: "white"
  },
  strip: {
    maxWidth: "100%"
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
    this.googleEvent("clickOnContact", "clicks", "Someone clicked on Contact");
  };

  googleEvent = (event, category, label) => {
    window.gtag("event", event, {
      event_category: category,
      event_label: label
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
                className={classes.link}
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
              <a href="tel:+33673654525" className={classes.link}>
                06.73.65.45.25
              </a>
            </Grid>
            <Grid item>
              <img
                src="images/bandeau.png"
                alt="bandeau"
                className={classes.strip}
              />
            </Grid>
          </Grid>
        </Grid>
      </Fragment>
    );

    return (
      <div className={classes.main}>
        <Grid container justify="center">
          <Grid item xs={10} sm={8} md={6}>
            <img
              src={"images/logo-blanc.png"}
              alt="logo"
              className={classes.image}
            />
          </Grid>
          <Grid item xs={12} className={classes.title}>
            <div>
              EN
              <br />
              CONSTRUCTION
            </div>
          </Grid>
          <Grid item xs={12}>
            <h4 className={classes.paragraph}>Presque prêt</h4>
          </Grid>
          <Grid container item xs={8} sm={4}>
            <ProgressBar />
          </Grid>
          <Grid container item xs={12} justify="center">
            <Button
              variant="contained"
              onClick={this.toggleDrawer(true)}
              className={classes.button}
            >
              Contactez-nous
            </Button>
          </Grid>
          <Grid item xs={12}>
            <h4 className={classes.paragraph}>
              En attendant, suivez-nous sur :
            </h4>
          </Grid>
          <Grid container item xs={8} sm={4} justify="space-between">
            <Fab
              size="large"
              className={classes.networks}
              href="https://www.facebook.com/Le-Grenier-de-Benjamin-216474645899457/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={this.googleEvent(
                "clickOnFacebook",
                "clicks",
                "Someone clicked on Facebook"
              )}
            >
              <FbIcon />
            </Fab>
            <Fab
              size="large"
              icon="linkedin"
              className={classes.networks}
              href="https://www.linkedin.com/company/le-grenier-de-benjamin/ "
              target="_blank"
              rel="noopener noreferrer"
              onClick={this.googleEvent(
                "clickOnLinkedin",
                "clicks",
                "Someone clicked on Linkedin"
              )}
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
      </div>
    );
  }
}

export default withStyles(styles)(Desktop);

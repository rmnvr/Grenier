import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import FbIcon from "../utils/FbIcon.js";
import InIcon from "../utils/InIcon.js";

// import { HashLink as Link } from "react-router-hash-link";

const styles = theme => ({
  root: {
    backgroundColor: "#0b4553",
    color: "white",
    paddingTop: "10px",
    paddingBottom: "10px",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column"
    }
  },
  image: {
    width: "70%",
    [theme.breakpoints.down("sm")]: {
      width: "50%"
    }
  },
  listItem: {
    padding: "0.5vw"
  },
  section: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "5%",
      marginBottom: "5%"
    }
  },
  networks: {
    color: "rgba(255, 255, 255, 0.6)",
    border: "2px solid",
    backgroundColor: "transparent",
    width: "70px",
    height: "70px",
    margin: "15px"
  },
  link: {
    color: "white",
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.3vw"
    },
    textDecoration: "none"
  }
});

const Footer = ( props ) => {

  const { classes } = props;

  return (
    <Grid container justify="center" className={classes.root}>
      <Grid
        item
        container
        justify="center"
        alignItems="center"
        xs={12}
        sm={3}
        className={classes.section}
      >
        <img
          src="/images/logo-bandeau.png"
          alt="logo-grenier"
          className={classes.image}
        />
      </Grid>
      <Grid
        item
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
        xs={12}
        sm={3}
        className={classes.section}
      >
        <h4>Contact</h4>
        <a
          href="mailto:legrenierdebenjamin@gmail.com"
          className={classes.link}
        >
          legrenierdebenjamin@gmail.com
        </a>
        <a href="tel:+33673654525" className={classes.link}>
          06.73.65.45.25
        </a>
      </Grid>
      <Grid
        item
        container
        justify="center"
        xs={12}
        sm={3}
        className={classes.section}
      >
        <Fab
          size="large"
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
          href="https://www.linkedin.com/company/le-grenier-de-benjamin/ "
          target="_blank"
          rel="noopener noreferrer"
        >
          <InIcon />
        </Fab>
      </Grid>
      <Grid
        item
        container
        justify="center"
        xs={12}
        sm={3}
        className={classes.section}
      >
        <List>
          <ListItem className={classes.listItem}>
            <Link to="/" className={classes.link}>
              Accueil
            </Link>
          </ListItem>

          <ListItem className={classes.listItem}>
            <Link to="/tournee" className={classes.link}>
              Tournée
            </Link>
          </ListItem>

          <ListItem className={classes.listItem}>
            <Link to="/produits" className={classes.link}>
              Nos Produits
            </Link>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);

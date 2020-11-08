import React from "react";
import PropTypes from "prop-types";
import { NavHashLink as Link } from "react-router-hash-link";

import { withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import FbIcon from "../utils/FbIcon.js";
import InIcon from "../utils/InIcon.js";

// import { HashLink as Link } from "react-router-hash-link";

const styles = (theme) => ({
  root: {
    backgroundColor: "#0b4553",
    color: "white",
    paddingTop: "10px",
    paddingBottom: "10px",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  image: {
    width: "70%",
  },
  imageFrance: {
    width: "80%",
  },
  listItem: {
    padding: "0.5vw",
  },
  section: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "5%",
      marginBottom: "5%",
    },
  },
  bottom: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginRight: 0,
    },
    marginTop: "3%",
    marginBottom: "1%",
    marginLeft: "20%",
    marginRight: "20%",
  },
  networks: {
    color: "rgba(255, 255, 255, 0.6)",
    border: "2px solid",
    backgroundColor: "transparent",
    width: "70px",
    height: "70px",
    margin: "15px",
  },
  link: {
    color: "white",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.3vw",
    },
    textDecoration: "none",
  },
});

const Footer = (props) => {
  const { classes } = props;

  return (
    <Grid container justify="center" className={classes.root}>
      <Grid
        item
        container
        justify="center"
        alignItems="center"
        xs={12}
        sm={6}
        md={3}
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
        sm={6}
        md={3}
        className={classes.section}
      >
        <h4>Contact</h4>
        <a href="mailto:legrenierdebenjamin@gmail.com" className={classes.link}>
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
        sm={6}
        md={3}
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
        sm={6}
        md={3}
        className={classes.section}
      >
        <List>
          <ListItem className={classes.listItem}>
            <Link to="/#accueil-top" className={classes.link}>
              Accueil
            </Link>
          </ListItem>

          <ListItem className={classes.listItem}>
            <Link to="/tournee#tournee-top" className={classes.link}>
              Tournée
            </Link>
          </ListItem>

          <ListItem className={classes.listItem}>
            <Link to="/produits#produits-top" className={classes.link}>
              Produits
            </Link>
          </ListItem>

          <ListItem className={classes.listItem}>
            <Link to="/commandes#commandes-top" className={classes.link}>
              Commandes
            </Link>
          </ListItem>
        </List>
      </Grid>
      <Grid item container justify="space-evenly" className={classes.bottom}>
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          xs={7}
          sm={2}
          className={classes.section}
        >
          <img
            src="/images/logo_occitanie.png"
            alt="logo-occitanie"
            className={classes.imageFrance}
          />
        </Grid>
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          xs={7}
          sm={3}
          className={classes.section}
        >
          <img
            src="/images/republique_française.png"
            alt="logo-france"
            className={classes.imageFrance}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);

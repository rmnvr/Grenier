import React, { Component } from "react";

import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginBottom: 60
  },
  bar: {
    backgroundColor: "#0b4553"
  },
  grow: {
    flexGrow: 1,
    textAlign: "left"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  list: {
    display: "flex",
    flexDirection: "row"
  },
  listItem: {
    width: "auto",
    padding: "1.1vw"
  },
  link: {
    color: "white",
    fontWeight: "bold",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.3vw"
    },
    textDecoration: "none",
    position: "relative",
    "&::before": {
      content: "''",
      color: "white",
      position: "absolute",
      width: "100%",
      height: "2px",
      bottom: 0,
      left: 0,
      backgroundColor: "white",
      visibility: "hidden",
      transform: "scaleX(0)",
      transition: theme.transitions.create(["visibility", "transform"], {
        duration: theme.transitions.duration.complex
      })
    },
    "&:hover:before": {
      visibility: "visible",
      transform: "scaleX(1)"
    }
  },
  selected: {
    color: "red"
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  }
});

class Navbar extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar className={classes.bar} position="fixed">
          <Toolbar>
            <div className={classes.grow}>
              <Button color="inherit">
                <Link to="/">
                  <img
                    src="images/logo-bandeau.png"
                    alt="logo_grenier"
                    height="50px"
                  />
                </Link>
              </Button>
            </div>

            <div className={classes.sectionDesktop}>
              <List className={classes.list}>
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
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Navbar);

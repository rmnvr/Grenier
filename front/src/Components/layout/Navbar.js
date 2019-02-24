import React, { Component } from "react";

import { NavHashLink as NavLink } from "react-router-hash-link";
import { withStyles } from "@material-ui/core/styles";

import MobileBar from "./MobileBar.js";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

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
    transition: theme.transitions.create(["color"], {
      duration: theme.transitions.duration.complex
    }),
    "&::before": {
      content: "''",
      color: "white",
      position: "absolute",
      width: "100%",
      height: "2px",
      bottom: 0,
      left: 0,
      backgroundColor: "#e3c04c",
      visibility: "hidden",
      transform: "scaleX(0)",
      transition: theme.transitions.create(["visibility", "transform"], {
        duration: theme.transitions.duration.complex
      })
    },
    "&:hover": {
      color: "#e3c04c"
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
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
});

class Navbar extends Component {
  state = {
    open: false
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <AppBar className={classes.bar} position="fixed">
          <Toolbar>
            <div className={classes.grow}>
              <Button color="inherit">
                <NavLink to="/">
                  <img
                    src="images/logo-bandeau.png"
                    alt="logo_grenier"
                    height="50px"
                  />
                </NavLink>
              </Button>
            </div>

            <div className={classes.sectionDesktop}>
              <List className={classes.list}>
                <ListItem className={classes.listItem}>
                  <NavLink to="/#accueil-top" className={classes.link}>
                    Accueil
                  </NavLink>
                </ListItem>

                <ListItem className={classes.listItem}>
                  <NavLink to="/tournee#tournee-top" className={classes.link}>
                    Tournée
                  </NavLink>
                </ListItem>

                <ListItem className={classes.listItem}>
                  <NavLink to="/produits#produits-top" className={classes.link}>
                    Nos Produits
                  </NavLink>
                </ListItem>
              </List>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                color="inherit"
                aria-label="Menu"
                className={classes.menuButton}
                onClick={open ? this.handleDrawerClose : this.handleDrawerOpen}
              >
                <MenuIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>

        <MobileBar handleDrawerClose={this.handleDrawerClose} open={open} />
      </div>
    );
  }
}

export default withStyles(styles)(Navbar);

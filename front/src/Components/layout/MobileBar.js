import React, { Component } from "react";

import { NavHashLink as NavLink } from "react-router-hash-link";
import { withStyles } from "@material-ui/core/styles";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

const styles = theme => ({
  link: {
    color: "black",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.1vw"
    },
    textDecoration: "none",
    position: "relative",
    "&::before": {
      content: "''",
      color: "black",
      position: "absolute",
      width: "100%",
      height: "2px",
      bottom: 0,
      left: 0,
      backgroundColor: "#FF6600",
      visibility: "hidden",
      transform: "scaleX(0)",
      transition: theme.transitions.create(["visibility", "transform"], {
        duration: theme.transitions.duration.complex
      })
    },
    "&:hover": {
      color: "#FF6600"
    },
    "&:hover:before": {
      visibility: "visible",
      transform: "scaleX(1)"
    }
  },
  drawer: {
    width: 240,
    flexShrink: 0
  },
  drawerPaper: {
    width: 240
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  }
});

class MobileBar extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={this.props.open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={this.props.handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <List>
          <NavLink
            to="/#accueil-top"
            className={classes.link}
            onClick={this.props.handleDrawerClose}
          >
            <ListItem divider>Accueil</ListItem>
          </NavLink>
          <NavLink
            to="/tournee#tournee-top"
            className={classes.link}
            onClick={this.props.handleDrawerClose}
          >
            <ListItem divider>Tournée</ListItem>
          </NavLink>
          <NavLink
            to="/produits#produits-top"
            className={classes.link}
            onClick={this.props.handleDrawerClose}
          >
            <ListItem divider>Produits</ListItem>
          </NavLink>
          <NavLink
            to="/commandes#commandes-top"
            className={classes.link}
            onClick={this.props.handleDrawerClose}
          >
            <ListItem divider>Commandes</ListItem>
          </NavLink>
        </List>
      </Drawer>
    );
  }
}

export default withStyles(styles)(MobileBar);

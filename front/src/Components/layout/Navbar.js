import React, { useState, useEffect } from "react";

import { NavHashLink as NavLink } from "react-router-hash-link";
import classNames from "classnames";

import MobileBar from "./MobileBar.js";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginBottom: 60
  },
  bar: {
    backgroundColor: "#0b4553", 
    padding: "1%"
  },
  image: {
    width: "100%",
    maxWidth: "500px",
    minWidth: "300px",
    height: "auto",
    transition: theme.transitions.create(["width"], {
      duration: theme.transitions.duration.complex
    })
  },
  imageLittle: {
    width: "50%",
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  logoBtn: {
    padding:0
  },
  list: {
    display: "flex",
    flexDirection: "row"
  },
  listItem: {
    width: "auto",
    padding: "2vw",
    transition: theme.transitions.create(["padding"], {
      duration: theme.transitions.duration.complex
    })
  },
  listItemLittle: {
    padding: "1vw"
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
    [theme.breakpoints.up("sm")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  }
});

let lastScrollY = 0;
let ticking = false;

const Navbar = ( props ) => {

  const [ open, setOpen ] = useState( false )
  const [ size, setSize ] = useState( false )

  const handleDrawerOpen = () => {
    setOpen( true );
  };

  const  handleDrawerClose = () => {
    setOpen( false );
  };

  const handleScroll = () => {
    lastScrollY = window.scrollY;

    if (!ticking && window.screen.width >= 600) {
      window.requestAnimationFrame(() => {
        if(lastScrollY > 30 ) {
          setSize( true )
        } else {
          setSize( false )
        }
        ticking = false;
      });
   
      ticking = true;
    }
  };

  useEffect( () => {


    window.addEventListener('scroll', handleScroll);

    return function cleanup() {
      window.removeEventListener('scroll', handleScroll);
    }
  })

  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar className={classes.bar} position="fixed">
        <Toolbar>  
          <Grid container justify="space-between"> 

            <Grid container justify="center" item sm={2} md={3} className={classes.sectionDesktop}>
              <List className={classes.list}>
                
                <ListItem className={classNames(classes.listItem, {
                      [classes.listItemLittle]: size
                    })}>
                  <NavLink to="/#accueil-top" className={classes.link}>
                    Accueil
                  </NavLink>
                </ListItem>
                
                <ListItem className={classNames(classes.listItem, {
                      [classes.listItemLittle]: size
                    })}>
                  <NavLink to="/tournee#tournee-top" className={classes.link}>
                    Tournée
                  </NavLink>
                </ListItem>
              
              </List>
            </Grid>

            <Grid container justify="center" item xs={8} sm={5} md={6} className={classes.img}>
              <Button className={classes.logoBtn} color="inherit">
                <NavLink to="/">
                  <img
                    src="images/logo-bandeau.png"
                    alt="logo_grenier"
                    className={classNames(classes.image, {
                      [classes.imageLittle]: size
                    })}
                  />
                </NavLink>
              </Button>
            </Grid> 


            <Grid container justify="center" item sm={2} md={3} className={classes.sectionDesktop}>
              <List className={classes.list}>

                <ListItem className={classNames(classes.listItem, {
                      [classes.listItemLittle]: size
                    })}>
                  <NavLink to="/produits#produits-top" className={classes.link}>
                    Produits
                  </NavLink>
                </ListItem>

                <ListItem className={classNames(classes.listItem, {
                      [classes.listItemLittle]: size
                    })}>
                  <NavLink to="/commandes#commandes-top" className={classes.link}>
                    Commandes
                  </NavLink>
                </ListItem>

              </List>
            </Grid>

            <div className={classes.sectionMobile}>
              <IconButton
                color="inherit"
                aria-label="Menu"
                className={classes.menuButton}
                onClick={ open ? handleDrawerClose : handleDrawerOpen }
              >
                <MenuIcon />
              </IconButton>
            </div>
          </Grid>
        </Toolbar>
      </AppBar>

      <MobileBar handleDrawerClose={ handleDrawerClose } open={ open } />
    </div>
  );
}

export default withStyles(styles)(Navbar);

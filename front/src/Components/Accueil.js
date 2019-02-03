import React, { Component, Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";

import OffsetAnchor from "./utils/OffsetAnchor.js";
// import MyPaper from "./utils/MyPaper.js";
// import MediaCard from "./utils/MediaCard.js";
import MyCarousel from "./layout/MyCarousel.js";

import Presentation from "./Presentation.js";

// import { Helmet } from "react-helmet";

const styles = theme => ({
  container: {
    padding: theme.spacing.unit * 2
  },
  logo: {
    maxHeight: "300px",
    width: "auto"
  },
  shadow: {
    boxShadow: "10px 10px 5px rgba(0, 0, 0, 0.4)"
  },
  title: {
    textAlign: "center"
  },
  item: {
    paddingTop: theme.spacing.unit * 8
  },
  image: {
    maxHeight: "130px",
    maxWidth: "100%",
    marginTop: "0.67rem"
  },
  bandeau: {
    padding: theme.spacing.unit * 4,
    height: "200px",
    backgroundColor: "#e3c04c",
    fontFamily: "'Old Standard TT', serif",
    fontSize: "2rem",
    color: "#0b4553",
    textAlign: "justify"
  }
});

class Accueil extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <OffsetAnchor id="page1" />
        <Grid container className={classes.container} justify={"center"}>
          <Grid container item xs={12} justify={"center"}>
            <img
              src={"images/logo-fd-blanc-bandeau.png"}
              className={classes.logo}
              alt="Logo Le Grenier de Benjamin"
            />
          </Grid>
          <Grid item xs={8}>
            <div className={classes.shadow}>
              <MyCarousel />
            </div>
          </Grid>
        </Grid>
        <Fade bottom cascade distance={"50px"} duration={500}>
          <Grid container justify={"center"} style={{ marginTop: "100px" }}>
            <Grid item xs={12}>
              <Presentation />
            </Grid>
            <Grid
              container
              idem
              xs={12}
              className={classes.bandeau}
              justify={"center"}
            >
              <p>
                Retrouvez bientôt ici même, la carte intéractive de la tournée
                de Benjamin ainsi que la liste des produits de son grenier !
              </p>
            </Grid>
          </Grid>
        </Fade>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Accueil);

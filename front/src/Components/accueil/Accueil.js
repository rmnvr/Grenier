import React, { Component, Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";

import OffsetAnchor from "../utils/OffsetAnchor.js";
// import MyPaper from "./utils/MyPaper.js";
import MyCarousel from "./MyCarousel.js";
import Triptyque from "../utils/Triptyque.js";

import Presentation from "./Presentation.js";

// import { Helmet } from "react-helmet";

const styles = theme => ({
  container: {
    padding: theme.spacing.unit * 2,
    paddingTop: "17vh"
  },
  logo: {
    width: "100%",
    height: "auto"
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
    minHeight: "200px",
    backgroundColor: "#e3c04c",
    fontFamily: "'Old Standard TT', serif",
    fontSize: "2rem",
    color: "#0b4553",
    textAlign: "justify"
  }
});

class Accueil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: {
        img: "images/tri-tracteur.jpg",
        title: "Un partenariat de confiance",
        description: 
          "Le Grenier de Benjamin soutient et valorise le travail des agriculteurs et éleveurs de la Région"
        ,
        backgroundColor: "#0b4553",
        color: "#e3c04c"
      },
      b: {
        img: "images/tri-benich.jpg",
        title: "Un service de proximité",
        description: 
          "Benjamin vous propose un service de proximité chaque semaine au coeur des villages et à domicile - sur simple demande"
        ,
        backgroundColor: "#e3c04c",
        color: "#0b4553"
      },
      c: {
        img: "images/tri-choux.jpg",
        title: "Des produits frais et locaux de qualité",
        description: 
          "Une sélection de produits frais et locaux, issus des circuits courts et qui respectent la saisonnalité des productions locales"
        ,
        backgroundColor: "#0b4553",
        color: "#e3c04c"
      }
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <OffsetAnchor id="accueil-top" />
        <Grid container className={classes.container} justify={"center"}>
          <Grid item md={8} xs={12}>
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
          </Grid>
          <Triptyque content={this.state}/>
        </Fade>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Accueil);

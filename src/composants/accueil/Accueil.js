import React from "react";

import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { NavHashLink as NavLink } from "react-router-hash-link";

import MyCarousel from "./MyCarousel.js";
import Presentation from "./Presentation.js";

import OffsetAnchor from "../utilitaires/OffsetAnchor.js";
import Triptyque from "../utilitaires/Triptyque.js";
import articlesData from "../utilitaires/articlesData.js"

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
  temporaryBanner: {
    backgroundColor: "#e3c04c"
  },
  temporaryBannerText: {
    textAlign: "justify",
    fontFamily: "'Old Standard TT', serif",
    fontWeight: "bold",
    color: "#0b4553",
    lineHeight: 1.7
  },
  hr: {
    marginTop: "10px",
    borderTop: "2px solid #0b4553"
  }
});

const Accueil = (props) => {

  const { classes } = props;

  return (
    <>
      <OffsetAnchor id="accueil-top" />
      <Grid container className={classes.container} justify={"center"}>
        <Grid item md={6} xs={12}>
          <div className={classes.shadow}>
            <MyCarousel />
          </div>
        </Grid>
      </Grid>
      <Grid container justify={"center"}>
        <Grid
          container
          item
          xs={12}
          className={classes.temporaryBanner}
          justify={"center"}
        >
          <Grid item xs={9} className={classes.temporaryBannerText}>
            <h2 style={{ textAlign: "center" }}>
              INFORMATIONS IMPORTANTES COVID-19&nbsp;!
            </h2>
            <h2>
              Les tournées ont été modifiées et élargies à d'autres villages
              depuis le mardi 31 mars. <br />(
              <NavLink to="/tournee#tournee-top" style={{ color: "#0b4553" }}>
                Consulter les nouveaux horaires
              </NavLink>
              )<br />
              Pour toutes commandes n'hésitez pas à contacter Benjamin
              directement par SMS au 06 73 65 45 25 en précisant votre nom et le
              lieu de passage.
              <br />
              Si vous souhaitez que Benjamin passe chez vous ou chez un proche
              n'hésitez pas à le contacter par SMS également.
              <br />
              Possibilité de régler par carte bancaire sous réserve de réseau 4G
              <br />
              Prenez soin de vous, NE SORTEZ PAS POUR RIEN !
            </h2>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Presentation />
        </Grid>
      </Grid>
      <Triptyque content={articlesData} />
      {/* <TestButton /> */}
    </>
  );
}

export default withStyles(styles)(Accueil);

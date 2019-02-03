import React, { Component, Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import OffsetAnchor from "./utils/OffsetAnchor.js";
// import SimpleTable from "./layout/SimpleTable.js";
// import { Helmet } from "react-helmet";

const styles = theme => ({
  container: {
    padding: theme.spacing.unit * 2,
    minHeight: "80vh"
  },
  title: {
    textAlign: "center",
    fontFamily: "'Old Standard TT', serif"
  },
  item: {
    paddingTop: theme.spacing.unit * 8
  },
  image: {
    maxHeight: "130px",
    maxWidth: "100%",
    marginTop: "0.67rem"
  },
  link: {
    color: "black",

  },
  paragraph: {
    textAlign: "center"
  },
  paper: {
    padding: "30px"
  }
});

class Produits extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <OffsetAnchor id="page3" />
        <Grid container className={classes.container} justify={"center"}>
          <Grid item xs={12} className={classes.title}>
            <h1>Nos Produits</h1>
          </Grid>
          <Grid item md={8} xs={12}>
            <Paper className={classes.paper}>
              <Grid item xs={12} className={classes.paragraph}>
                <p>
                  Retrouvez ici prochainement la liste de nos principaux produits ainsi que leurs
                  délais de commande.
                </p>
                <p>
                  En attendant n'hésitez pas à contacter Benjamin directement si vous souhaitez avoir plus d'informations sur la disponibilité d'un produit particulier.
                </p>
                <p>
                  Vous pouvez le joindre directement par téléphone au:{" "}
                  <a href="tel:+33673654525" className={classes.link}>
                    06.73.65.45.25
                  </a>
                </p>
                <p>
                  Ou bien par e-mail à l'adresse de contact:{" "}
                  <a
                    href="mailto:legrenierdebenjamin@gmail.com"
                    className={classes.link}
                  >
                    legrenierdebenjamin@gmail.com
                  </a>
                </p>
              </Grid>
            </Paper>
          </Grid>



        </Grid>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Produits);
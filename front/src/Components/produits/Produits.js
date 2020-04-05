import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

import TableGenerator from "../utils/TableGenerator"
import OffsetAnchor from "../utils/OffsetAnchor.js";
import products from "../utils/productsData"
import sort from "../functions/sort"

// import { Helmet } from "react-helmet";

const styles = theme => ({
  container: {
    padding: theme.spacing.unit * 2,
    paddingTop: "15vh",
    minHeight: "80vh"
  },
  title: {
    textAlign: "center",
    fontFamily: "'Old Standard TT', serif"
  },
  item: {
    paddingTop: theme.spacing.unit * 8
  },
  paragraph: {
    textAlign: "center"
  },
  paper: {
    padding: "30px"
  }
});

const Produits = ( props ) => {

  const { classes } = props;

  return (
    <>
      <OffsetAnchor id="produits-top" />
      <Grid container className={classes.container} justify={"space-around"}>
        <Grid item xs={12} className={classes.title}>
          <h1>Nos Produits</h1>
        </Grid>
        <Grid item lg={3} md={7} xs={12}>
          <TableGenerator data={ sort(products[0].charcuterie) } name="Charcuterie" />
        </Grid>
        <Grid item lg={3} md={7} xs={12}>
          <TableGenerator data={ sort(products[0].fromage) } name="Fromage" />
        </Grid>
        <Grid item lg={3} md={7} xs={12}>
          <TableGenerator data={ sort(products[0].fruitsEtLegumes) } name="Fruits et Légumes" />
        </Grid>
      </Grid>
    </>
  );

}

export default withStyles(styles)(Produits);

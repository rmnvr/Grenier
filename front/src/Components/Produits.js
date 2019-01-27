import React, { Component, Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

import OffsetAnchor from "./utils/OffsetAnchor.js";
import SimpleTable from "./layout/SimpleTable.js";
// import { Helmet } from "react-helmet";

const styles = theme => ({
  container: {
    padding: theme.spacing.unit * 2
    // backgroundImage: "url(images/linen/linen.png)"
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
    color: "black"
  },
  paragraph: {
    textAlign: "center",
    marginTop: "30px"
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
          <Grid item xs={10}>
            <SimpleTable />
          </Grid>
          <Grid item xs={12} className={classes.paragraph}>
            <p>
              Pour commander, appelez directement Benjamin au :{" "}
              <a href="tel:+33673654525" className={classes.link}>
                06.73.65.45.25
              </a>
            </p>
            <p>Les commandes envoyées par e-mail ne seront pas traitées</p>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Produits);

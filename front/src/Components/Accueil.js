import React, { Component, Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";

import OffsetAnchor from "./utils/OffsetAnchor.js";
// import MyPaper from "./utils/MyPaper.js";
import MediaCard from "./utils/MediaCard.js";
import MyCarousel from "./layout/MyCarousel.js";

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
        img: "images/bg3.jpg",
        title: "Premier élément à mettre en avant",
        list: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Quisque magna arcu, tempor nec scelerisque in, dignissim lobortis nisl Vestibulum suscipit mi eget libero dignissim mollis. Donec finibus felis ac malesuada sodales.",
          "Sed lacinia nulla quis lorem finibus ornare"
        ],
        backgroundColor: "#0b4553",
        color: "#e3c04c"
      },
      b: {
        img: "images/bg3.jpg",
        title: "Là c'est pour le deuxième",
        list: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Quisque magna arcu, tempor nec scelerisque in, dignissim lobortis nisl",
          "Sed lacinia nulla quis lorem finibus ornare. Vestibulum suscipit mi eget libero dignissim mollis. Donec finibus felis ac malesuada sodales."
        ],
        backgroundColor: "#e3c04c",
        color: "#0b4553"
      },
      c: {
        img: "images/bg3.jpg",
        title: "Puis un troisième",
        list: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit mi eget libero dignissim mollis. Donec finibus felis ac malesuada sodales.",
          "Quisque magna arcu, tempor nec scelerisque in, dignissim lobortis nisl",
          "Sed lacinia nulla quis lorem finibus ornare"
        ],
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
          <Grid container justify="center" style={{ marginTop: "20px", marginBottom:"20px" }}>
              <Grid item xs={12} sm={6} md={4}>
                <MediaCard content={this.state.a} />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <MediaCard content={this.state.b} />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <MediaCard content={this.state.c} />
              </Grid>
            </Grid>
        </Fade>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Accueil);

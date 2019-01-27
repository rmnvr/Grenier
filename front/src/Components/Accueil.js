import React, { Component, Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";

import OffsetAnchor from "./utils/OffsetAnchor.js";
import MyPaper from "./utils/MyPaper.js";
import MediaCard from "./utils/MediaCard.js";
import MyCarousel from "./layout/MyCarousel.js";

// import { Helmet } from "react-helmet";

const styles = theme => ({
  container: {
    padding: theme.spacing.unit * 2
    // backgroundImage: "url(images/linen/linen.png)"
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
        <OffsetAnchor id="page1" />
        <Grid container className={classes.container} justify={"center"}>
          <Grid item xs={9}>
            <MyCarousel />
          </Grid>
        </Grid>
        <Fade bottom cascade distance={"50px"} duration={500}>
          <div>
            <Grid
              container
              className={classes.container}
              justify={"center"}
              style={{ marginTop: "100px" }}
            >
              <Grid item xs={9}>
                <h2>Ici du texte, une présentation plus ou moins succinte</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque magna arcu, tempor nec scelerisque in, dignissim
                  lobortis nisl. Sed lacinia nulla quis lorem finibus ornare.
                  Vestibulum suscipit mi eget libero dignissim mollis. Donec
                  finibus felis ac malesuada sodales. Curabitur faucibus viverra
                  eros, nec pharetra dui mattis in. Cras venenatis elementum
                  justo, at hendrerit felis tincidunt nec. Fusce tincidunt
                  vulputate mollis. Aenean at urna risus.
                </p>
                <p>
                  Duis ullamcorper in odio sed eleifend. Sed porta est quis
                  luctus interdum. Aliquam venenatis urna id molestie lobortis.
                  Morbi lobortis, sapien sit amet accumsan dictum, dolor sem
                  maximus ex, id posuere neque sem ut libero. Morbi ullamcorper
                  nibh dolor, a molestie sapien ullamcorper pretium. Praesent
                  non tincidunt ipsum. In gravida sed diam ut elementum.
                </p>
              </Grid>
            </Grid>

            <Grid container justify="center" style={{ marginTop: "100px" }}>
              <Grid item xs={12} sm={6} md={4}>
                <MediaCard content={this.state.a} />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <MediaCard
                  content={this.state.b}
                  style={{ backgroundColor: "#e3c04c" }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <MediaCard content={this.state.c} />
              </Grid>
            </Grid>

            <MyPaper>
              <Grid container className={classes.container} justify={"center"}>
                <Grid item xs={12} className={classes.title}>
                  <h1>
                    Ici, une autre section où on peut mettre autre chose...
                  </h1>
                </Grid>
              </Grid>
            </MyPaper>
          </div>
        </Fade>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Accueil);

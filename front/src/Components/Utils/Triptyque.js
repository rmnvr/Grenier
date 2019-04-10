import React from "react";
import Grid from "@material-ui/core/Grid";
import Fade from 'react-reveal/Fade';

import MediaCard from "./MediaCard.js";

const Triptyque = (props) => {

  return (
    <Grid container style={{margin: "7% 0 7% 0"}}>

      <Grid item container justify="center" xs={12} sm={6} md={4}>
        <Grid item xs={10} lg={8} >
          <Fade duration={2000} delay={500}>
            <MediaCard content={props.content.a} />
          </Fade>
        </Grid>
      </Grid>

      <Grid item container justify="center" xs={12} sm={6} md={4}>
        <Grid item xs={10} lg={8}>
          <Fade duration={2000} delay={1250}>
            <MediaCard content={props.content.b} />
          </Fade>
        </Grid>
      </Grid>

      <Grid item container justify="center" xs={12} sm={6} md={4}>
        <Grid item xs={10} lg={8}>
          <Fade duration={2000} delay={2000}>
            <MediaCard content={props.content.c} />
          </Fade>
        </Grid>
      </Grid>
    </Grid>
  );
}


export default Triptyque
import React from "react";
import Grid from "@material-ui/core/Grid";
import Fade from 'react-reveal/Fade';

import MediaCard from "./MediaCard.js";

const Triptyque = (props) => {

  return (<Fade duration={3000} delay={500}>
      <Grid container style={{margin: "10% 0 10% 0"}}>
        <Grid item container justify="center" xs={12} sm={6} md={4}>
          <Grid item xs={10} lg={8} >
            <MediaCard content={props.content.a} />
          </Grid>
        </Grid>
        <Grid item container justify="center" xs={12} sm={6} md={4}>
          <Grid item xs={10} lg={8}>
            <MediaCard content={props.content.b} />
          </Grid>
        </Grid>
        <Grid item container justify="center" xs={12} sm={6} md={4}>
          <Grid item xs={10} lg={8}>
            <MediaCard content={props.content.c} />
          </Grid>
        </Grid>
      </Grid>
    </Fade>
  );
}


export default Triptyque
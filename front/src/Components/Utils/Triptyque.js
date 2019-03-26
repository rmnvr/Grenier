import React from "react";
import Grid from "@material-ui/core/Grid";

import MediaCard from "./MediaCard.js";

const Triptyque = (props) => {

  return (<Grid container justify="center" style={{ marginTop: "20px", marginBottom:"20px" }}>
    <Grid item xs={12} sm={6} md={4}>
      <MediaCard content={props.content.a} />
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <MediaCard content={props.content.b} />
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <MediaCard content={props.content.c} />
    </Grid>
  </Grid>
  );
}


export default Triptyque
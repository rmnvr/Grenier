import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  container: {
    padding: "10px",
    backgroundColor: "#0b4553",
    color: "#e3c04c",
  },
  title: {
    fontWeight: "bold"
  },
  bottom: {
    marginTop: "10px"
  }
})

const PopoverContent = ( props ) => {

  const { classes, text, day, time } = props;

  return(
    <Grid className={classes.container}>
      <Grid className={classes.title} container justify="center">
        {text}
      </Grid>

      <Grid className={classes.bottom} container direction="row" justify="space-evenly">
        <Grid item>{day}</Grid>
        <Grid item> - </Grid>
        <Grid item>{time}</Grid>
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(PopoverContent)
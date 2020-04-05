import React, { useEffect } from 'react';
import { withStyles } from "@material-ui/core/styles";
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
useEffect( () => {
  console.log("PROPS", props)
}, [])
  const { classes, text, day, time } = props;

  return(
    <Grid className={classes.container}>
      <Grid className={classes.title} container justify="center">
        {text}
      </Grid>

      <Grid className={classes.bottom} container direction="row" justify="space-evenly">
        <Grid item>{day}</Grid>
        {
          time != " - " && (<>
          <Grid item> - </Grid>
          <Grid item>{time}</Grid>
          </>)
        }
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(PopoverContent)
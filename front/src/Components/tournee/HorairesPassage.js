import React, { Component, Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  table: {
    width: "90%",
    marginTop: "3%",
    padding: 0,
    borderCollapse: "collapse",
  },
  tableBody: {
    
  },
  header: {
    fontSize: "1.2rem", 
    backgroundColor: "#0b4553",
    color: "#e3c04c",
    margin: 0,
  },
  test:{

  }
}

const HorairesPassage = (props) => {

  const {classes} = props
  
  let week = {
    mardiArray : ["Mardi"],
    mercrediArray : ["Mercredi"],
    jeudiArray : ["Jeudi"],
    vendrediArray : ["Vendredi"]
  }

  props.markers.forEach( (village) => {
    switch( village.day ) {
      case 'Mardi':
        week.mardiArray.push(village);
        break;
      case 'Mercredi':
        week.mercrediArray.push(village);
        break;
      case 'Jeudi':
        week.jeudiArray.push(village);
        break;
      case 'Vendredi':
        week.vendrediArray.push(village);
        break;
      default:
        console.log("fail")
    }
  });

  let table = (arrayDay) => {
    let rows = arrayDay.map( (el, i) => {
      return (
        <tr key={i}>
          <td>{el.title}</td>
          <td>{el.time}</td>
        </tr>
      )
    })

    return (
        <Grid item container justify="center" xs={12} sm={6} md={3}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th colSpan="2" className={classes.header}>
                  {arrayDay[0]}
                </th>
              </tr>
            </thead>
            <tbody className={classes.tableBody}>
              {rows}
            </tbody>
          </table>
        </Grid>
    )
  }

  let weekTable = (day) => {
    return table(day)
  }

  return (
    <Grid container>
      {weekTable(week.mardiArray)}
      {weekTable(week.mercrediArray)}
      {weekTable(week.jeudiArray)}
      {weekTable(week.vendrediArray)}
    </Grid>
  )
}

export default withStyles(styles)(HorairesPassage)
import React from "react";
import Grid from "@material-ui/core/Grid";

import { withStyles } from "@material-ui/core/styles";

let styles = {
  table: {
    width: "90%",
    marginTop: "3%",
    padding: 0,
    borderCollapse: "collapse",
  },
  header: {
    fontSize: "1.2rem", 
    backgroundColor: "#0b4553",
    color: "#e3c04c",
    margin: 0,
  }
}

function OneTable(props) {
  const { day, classes } = props;

  let rows = day.map( (el, i) => {
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
              {day[0]}
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

export default withStyles(styles)(OneTable)
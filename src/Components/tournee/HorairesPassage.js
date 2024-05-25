import React from "react";
import Grid from "@material-ui/core/Grid";

import OneTable from "../utils/OneTable"

const HorairesPassage = (props) => {
  
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

  let weekTable = (oneWeek) => {
    let oneWeekArray = Object.values(oneWeek)
    let html = oneWeekArray.map( (day, i) => {
      return <OneTable title={day[0]} data={day} key={i} />
    })
    return html
  }

  return (
    <Grid container>
      {weekTable(week)}
    </Grid>
  )
}

export default HorairesPassage
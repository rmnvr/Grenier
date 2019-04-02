import React from "react";
import Grid from "@material-ui/core/Grid";

import OneTable from "./OneTable.js"

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

  let weekTable = (day) => {
    return <OneTable day={day} />
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

export default HorairesPassage
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const styles = theme => ({
  card: {
    flexGrow: 1,
    boxShadow: "none",
    height: "100%"
  },
  media: {
    minHeight: 170,
    width: "auto",
    backgroundSize: "contain"
  },
  title: {
    textAlign: "center",
    minHeight: 56
  },
  content: {
    textAlign: "justify",
    lineHeight: 1.5,
    color: "white"
  }
});

function MediaCard(props) {
  const { classes } = props;
  let backColor = props.content.backgroundColor;
  let color = props.content.color;

  return (
    <Card
      className={classes.card}
      style={{ backgroundColor: backColor }}
      square={true}
    >
      <CardMedia className={classes.media} image={props.content.img} />
      <CardContent>
        <h2 className={classes.title} style={{ color: color }}>
          {props.content.title}
        </h2>
        <List>
          <ListItem disableGutters className={classes.content}>
            {props.content.list[0]}
          </ListItem>
          <ListItem disableGutters className={classes.content}>
            {props.content.list[1]}
          </ListItem>
          <ListItem disableGutters className={classes.content}>
            {props.content.list[2]}
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(MediaCard);

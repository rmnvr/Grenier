import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const styles = theme => ({
  card: {
    flexGrow: 1,
    boxShadow: "none",
    height: "100%",
    borderRadius: "10px", 
    marginTop: "5%"
  },
  media: {
    minHeight: "200px",
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

const MediaCard = (props) => {
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
        <p className={classes.content}>
          {props.content.description}
        </p>
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(MediaCard);

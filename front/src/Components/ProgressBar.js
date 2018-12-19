import React, { Component } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  div: {
    flexGrow: 1
  },
  root: {
    height: "10px",
    margin: "20px"
  },
  linearColorPrimary: {
    backgroundColor: "#A9CBD4"
  },
  linearBarColorPrimary: {
    backgroundColor: "#2B90A9"
  }
};

class ProgressBar extends Component {
  state = {
    completed: 0
  };

  componentDidMount() {
    this.timer = setInterval(this.progress, 500);
  }

  progress = () => {
    const { completed } = this.state;
    if (completed === 80) {
      clearInterval(this.timer);
    } else {
      const diff = Math.random() * 20;
      this.setState({ completed: Math.min(completed + diff, 80) });
    }
  };

  render() {
    const { classes } = this.props;
    const { completed, buffer } = this.state;

    return (
      <div className={classes.div}>
        <LinearProgress
          classes={{
            root: classes.root,
            colorPrimary: classes.linearColorPrimary,
            barColorPrimary: classes.linearBarColorPrimary
          }}
          variant="buffer"
          thickness={20}
          value={completed}
          valueBuffer={buffer}
          className={classes.progresse}
        />
      </div>
    );
  }
}

export default withStyles(styles)(ProgressBar);

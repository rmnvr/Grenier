import React, { Component } from "react";
import { Progress } from "semantic-ui-react";
import styles from "./Styles.css.js";

class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = { percent: 0 };
    this.increment = this.increment.bind(this);
  }

  increment = () => {
    let intervalId = setInterval(() => {
      this.setState({
        percent: this.state.percent + 20
      });
      if (this.state.percent === 80) {
        clearInterval(intervalId);
      }
    }, 400);
  };

  componentDidMount() {
    this.increment();
  }

  render() {
    return (
      <Progress
        inverted
        percent={this.state.percent}
        size="small"
        style={styles.progress}
        progress
      />
    );
  }
}

export default ProgressBar;

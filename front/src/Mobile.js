import React, { Component } from "react";

import ProgressBar from "./ProgressBar.js";
import SideMobile from "./SideMobile.js";

import styles from "./Styles.css.js";
import { Button, Dimmer, Grid, Header } from "semantic-ui-react";

class Mobile extends Component {
  state = {};
  handleButtonClick = () => this.setState({ active: true });
  handleHide = () => this.setState({ active: false });

  render() {
    const { active } = this.state;
    return (
      <Dimmer.Dimmable dimmed={active}>
        <div style={styles.page}>
          <Grid centered>
            <Grid.Row>
              <h1 style={styles.title}>Mobile</h1>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column textAlign="center">
                <Header as="h4" style={styles.paragraph}>
                  Presque prêt
                </Header>
                <ProgressBar />
                <Button style={styles.button} onClick={this.handleButtonClick}>
                  Me tenir informé
                </Button>
                <Grid relaxed="very" centered columns="equal">
                  <Grid.Row>
                    <Grid.Column textAlign="center">
                      <Button
                        circular
                        basic
                        size="massive"
                        inverted
                        icon="facebook f"
                        style={styles.networks}
                      />
                    </Grid.Column>
                    <Grid.Column textAlign="center">
                      <Button
                        circular
                        basic
                        size="massive"
                        inverted
                        icon="linkedin"
                        style={styles.networks}
                      />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Dimmer active={active} onClickOutside={this.handleHide}>
            <SideMobile />
          </Dimmer>
        </div>
      </Dimmer.Dimmable>
    );
  }
}

export default Mobile;

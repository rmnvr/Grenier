import React, { Component } from "react";

import ProgressBar from "./ProgressBar.js";

import styles from "../Styles.css.js";
import { Button, Grid, Header } from "semantic-ui-react";

class Mobile extends Component {
  state = {};
  handleButtonClick = () => console.log("click");

  render() {
    return (
      <div style={styles.page}>
        <Grid centered>
          <Grid.Row>
            <h1 style={styles.title}>
              EN<br />CONSTRUCTION
            </h1>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column textAlign="center">
              <Header as="h4" style={styles.paragraph}>
                Presque prêt
              </Header>
              <ProgressBar />
              <a href="mailto:legrenierdebenjamin@gmail.com">
                <Button style={styles.button} onClick={this.handleButtonClick}>
                  Contactez-nous
                </Button>
              </a>
              <h4 style={styles.paragraph}>En attendant, suivez-nous sur :</h4>
              <Grid relaxed="very" centered columns="equal">
                <Grid.Row>
                  <Grid.Column textAlign="center">
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        circular
                        basic
                        size="massive"
                        inverted
                        icon="facebook f"
                        style={styles.networks}
                      />
                    </a>
                  </Grid.Column>
                  <Grid.Column textAlign="center">
                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        circular
                        basic
                        size="massive"
                        inverted
                        icon="linkedin"
                        style={styles.networks}
                      />
                    </a>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Mobile;

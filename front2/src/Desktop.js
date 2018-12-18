import React, { Component } from "react";
import ProgressBar from "./Components/ProgressBar.js";
import Side from "./Side.js";

import styles from "./Styles.css.js";
import { Button, Grid, Header, Sidebar } from "semantic-ui-react";

class Desktop extends Component {
  state = { visible: false };
  handleButtonClick = () => this.setState({ visible: true });
  handleSidebarHide = () => this.setState({ visible: false });

  render() {
    const { visible } = this.state;
    return (
      <Sidebar.Pushable>
        <Side
          visible={this.state.visible}
          handleSidebarHide={this.handleSidebarHide}
        />
        <Sidebar.Pusher dimmed={visible}>
          <div style={styles.page}>
            <Grid centered>
              <Grid.Row>
                <h1 style={styles.title}>
                  EN<br />CONSTRUCTION
                </h1>
              </Grid.Row>
              <Grid.Row columns={3}>
                <Grid.Column textAlign="center">
                  <Header as="h4" style={styles.paragraph}>
                    Presque prêt
                  </Header>
                  <ProgressBar />
                  <Button
                    style={styles.button}
                    onClick={this.handleButtonClick}
                  >
                    Me tenir informé
                  </Button>
                  <Grid relaxed="very" centered columns="equal">
                    <Grid.Row>
                      <Grid.Column textAlign="center">
                        <a href="https://www.facebook.com/" target="_blank">
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
                        <a href="https://www.linkedin.com/" target="_blank">
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
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}

export default Desktop;

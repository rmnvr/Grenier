import React, { Component } from "react";

import styles from "./Styles.css.js";
import {
  Button,
  Container,
  Form,
  Grid,
  Header,
  Menu,
  Progress,
  Sidebar
} from "semantic-ui-react";

class App extends Component {
  state = { visible: false };
  handleButtonClick = () => this.setState({ visible: !this.state.visible });
  handleSidebarHide = () => this.setState({ visible: false });
  render() {
    const { visible } = this.state;
    return (
      <div style={styles.page}>
        <Container fluid>
          <Grid centered columns={3}>
            <Grid.Column textAlign="center">
              <Header as="h1" style={styles.title}>
                EN<br />CONSTRUCTION
              </Header>
              <Header as="h4" style={styles.paragraph}>
                Presque prêt
              </Header>
              <Progress
                inverted
                value="4"
                total="5"
                progress="percent"
                size="small"
                color="blue"
                style={styles.progress}
              />
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
              <Sidebar
                as={Menu}
                animation="overlay"
                direction="right"
                inverted
                vertical
                visible={visible}
                width="very wide"
              >
                <p style={styles.paragraph}>
                  "Soyez le premier informé de l'ouverture, inscrivez-vous !"
                </p>
                <Grid columns={8}>
                  <Form>
                    <Form.Field>
                      <Form.Input label="Email" placeholder="votre e-mail" />
                    </Form.Field>
                  </Form>
                </Grid>
              </Sidebar>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;

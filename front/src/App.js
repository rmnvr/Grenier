import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Grid } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <Grid divided="vertically">
        <Grid.Row columns={2}>
          <Grid.Column>
            <p>Coucou</p>
          </Grid.Column>
          <Grid.Column>
            <p>Coucou</p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={3}>
          <Grid.Column>
            <p>Coucou</p>
          </Grid.Column>
          <Grid.Column>
            <p>Coucou</p>
          </Grid.Column>
          <Grid.Column>
            <p>Coucou</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default App;

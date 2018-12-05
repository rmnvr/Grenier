import React, { Component } from "react";
import { Button, Form, Grid } from "semantic-ui-react";

import styles from "./Styles.css.js";

class SideMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      mail: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    fetch("api/mailer/register", {
      method: "POST",
      crendentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(data => console.log("Response :", data));
  }

  render() {
    return (
      <Grid columns={1} centered>
        <div>
          <p style={styles.paragraph}>
            "Soyez le premier informé de l'ouverture, inscrivez-vous !"
          </p>

          <Form>
            <Form.Group>
              <Form.Input
                placeholder="votre e-mail"
                onChange={this.onChange}
                width={12}
              />
              <Button type="submit" onClick={this.onSubmit}>
                Submit
              </Button>
            </Form.Group>
          </Form>
        </div>
      </Grid>
    );
  }
}

export default SideMobile;

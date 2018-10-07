import React, { Component } from "react";
import { Button, Form, Grid, Menu, Sidebar } from "semantic-ui-react";

import styles from "./Styles.css.js";

class Side extends Component {
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
    const { visible, handleSidebarHide } = this.props;
    return (
      <Grid columns={1} centered>
        <Sidebar
          as={Menu}
          animation="overlay"
          direction="right"
          onHide={handleSidebarHide}
          inverted
          vertical
          visible={visible}
          width="very wide"
          style={styles.rightPanel}
        >
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
        </Sidebar>
      </Grid>
    );
  }
}

export default Side;

import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import OffsetAnchor from "../utils/OffsetAnchor.js";
import Page1 from "../Page1.js";
import Page2 from "../Page2.js";
import Page3 from "../Page3.js";

class DisplayedPage extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Page1} />
        <Route path="/page2" component={Page2} />
        <Route path="/page3" component={Page3} />
      </Switch>
    );
  }
}

export default DisplayedPage;

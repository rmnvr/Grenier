import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Accueil from "../Accueil.js";
import Tournee from "../Tournee.js";
import Produits from "../Produits.js";

class DisplayedPage extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Accueil} />
        <Route path="/tournee" component={Tournee} />
        <Route path="/produits" component={Produits} />
      </Switch>
    );
  }
}

export default DisplayedPage;

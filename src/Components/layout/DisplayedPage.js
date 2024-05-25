import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Accueil from "../accueil/Accueil.js";
import Tournee from "../tournee/Tournee.js";
import Produits from "../produits/Produits.js";
import Commandes from "../commandes/Commandes.js";

class DisplayedPage extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Accueil} />
        <Route path="/tournee" component={Tournee} />
        <Route path="/produits" component={Produits} />
        <Route path="/commandes" component={Commandes} />
      </Switch>
    );
  }
}

export default DisplayedPage;

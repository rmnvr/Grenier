import React, { Component } from "react";

import Navbar from "./components/layout/Navbar.js";
import DisplayedPage from "./components/layout/DisplayedPage.js";
import Footer from "./components/layout/Footer.js";
import { withRouter } from "react-router";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <DisplayedPage />
        <Footer />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./composants/layout/Navbar.js";
import DisplayedPage from "./composants/layout/DisplayedPage.js";
import Footer from "./composants/layout/Footer.js";

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Navbar />
          <DisplayedPage />
          <Footer />
        </>
      </Router>
    );
  }
}

export default App;

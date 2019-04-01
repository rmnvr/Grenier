import React, { Component } from "react";

import Navbar from "./components/layout/Navbar.js";
import DisplayedPage from "./components/layout/DisplayedPage.js";
import Footer from "./components/layout/Footer.js";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router >
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

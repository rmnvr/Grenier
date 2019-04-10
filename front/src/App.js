import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/layout/Navbar.js";
import DisplayedPage from "./components/layout/DisplayedPage.js";
import Footer from "./components/layout/Footer.js";

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

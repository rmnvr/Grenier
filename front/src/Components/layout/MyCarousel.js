import React, { Component } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class MyCarousel extends Component {
  render() {
    return (
      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={3500}
        transitionTime={1000}
      >
        <div>
          <img src="images/bg3.jpg" alt="img 1" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="images/bg3.jpg" alt="img 2" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="images/bg3.jpg" alt="img 3" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    );
  }
}

export default MyCarousel;

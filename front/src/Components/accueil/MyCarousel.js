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
        interval={4000}
        transitionTime={1000}
      >
        <div>
          <img src="images/car_insideTruck.jpg" alt="Champ" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="images/car_countrySide.jpg" alt="Carottes" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="images/car_cheese.jpg" alt="Poules" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    );
  }
}

export default MyCarousel;

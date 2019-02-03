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
          <img src="images/roll.jpg" alt="Champ" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="images/carrot.jpg" alt="Carottes" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="images/cock.jpg" alt="Poules" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src="images/cows.jpg" alt="Vaches" />
          <p className="legend">Legend 4</p>
        </div>
        <div>
          <img src="images/garlic.jpg" alt="Ail" />
          <p className="legend">Legend 5</p>
        </div>
      </Carousel>
    );
  }
}

export default MyCarousel;

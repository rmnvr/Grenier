import React, { useState } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function MyCarousel () {

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
        <img 
          src="images/car_insideTruck.jpg" 
          alt="Interieur du camion"
        />
        {/*<p className="legend">Legend 1</p>*/}
      </div>
      <div>
        <img src="images/car_countrySide.jpg" alt="Camion sur route de campagne" />
      </div>
      <div>
        <img src="images/car_products.jpg" alt="Etal de produits" />
      </div>
      <div>
        <img src="images/car_bread.jpg" alt="Pain" />
      </div>
    </Carousel>
  );
}

export default MyCarousel;

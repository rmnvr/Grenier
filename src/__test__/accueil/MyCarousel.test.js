import React from 'react';
import renderer from "react-test-renderer";
import MyCarousel from '../../components/accueil/MyCarousel.js';

it("Renders the carousel", () => {
  const tree = renderer
    .create(<MyCarousel />)
    .toJSON();
  expect(tree).toMatchSnapshot();
})
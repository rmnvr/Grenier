import React from 'react';
import renderer from "react-test-renderer";
import Produits from '../../components/produits/Produits';

it("Renders the welcome page", () => {
  const tree = renderer
    .create(<Produits />)
    .toJSON();
  expect(tree).toMatchSnapshot();
})
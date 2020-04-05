import React from 'react';
import renderer from "react-test-renderer";
import Commandes from "../../components/commandes/Commandes.js"

it("Renders the commandes page", () => {
  const tree = renderer
    .create(<Commandes />)
    .toJSON();
  expect(tree).toMatchSnapshot();
})
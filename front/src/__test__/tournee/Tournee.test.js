import React from 'react';
import renderer from "react-test-renderer";
import Tournee from '../../components/tournee/Tournee';

it("Renders the Tournee page", () => {
  const tree = renderer
    .create(<Tournee />)
    .toJSON();
  expect(tree).toMatchSnapshot();
})
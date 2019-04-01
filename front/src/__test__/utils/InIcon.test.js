import React from 'react';
import renderer from "react-test-renderer";
import InIcon from '../../components/Utils/InIcon';

it("Renders the welcome page", () => {
  const tree = renderer
    .create(<InIcon />)
    .toJSON();
  expect(tree).toMatchSnapshot();
})
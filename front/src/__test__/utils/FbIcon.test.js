import React from 'react';
import renderer from "react-test-renderer";
import FbIcon from '../../components/Utils/FbIcon';

it("Renders the welcome page", () => {
  const tree = renderer
    .create(<FbIcon />)
    .toJSON();
  expect(tree).toMatchSnapshot();
})
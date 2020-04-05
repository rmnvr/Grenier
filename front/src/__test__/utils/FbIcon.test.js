import React from 'react';
import renderer from "react-test-renderer";
import FbIcon from '../../components/Utils/FbIcon';

it("Renders the facebook icon", () => {
  const tree = renderer
    .create(<FbIcon />)
    .toJSON();
  expect(tree).toMatchSnapshot();
})
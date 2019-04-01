import React from 'react';
import renderer from "react-test-renderer";
import OffsetAnchor from '../../components/utils/OffsetAnchor';

it("Renders the welcome page", () => {
  const tree = renderer
    .create(<OffsetAnchor />)
    .toJSON();
  expect(tree).toMatchSnapshot();
})
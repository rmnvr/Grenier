import React from 'react';
import renderer from "react-test-renderer";
import MyPaper from "../../components/utils/MyPaper.js";

it("Renders one custom paper", () => {
  const tree = renderer
    .create(<MyPaper />)
    .toJSON();
  expect(tree).toMatchSnapshot();
})
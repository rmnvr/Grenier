import React from 'react';
import renderer from "react-test-renderer";
import MyPaper from "../../components/utils/MyPaper.js";

it("Renders the welcome page", () => {
  const tree = renderer
    .create(<MyPaper />)
    .toJSON();
  expect(tree).toMatchSnapshot();
})
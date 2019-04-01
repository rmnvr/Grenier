import React from 'react';
import renderer from "react-test-renderer";
import SimpleTable from "../../components/layout/SimpleTable.js"

it("Renders the welcome page", () => {
  const tree = renderer
    .create(<SimpleTable />)
    .toJSON();
  expect(tree).toMatchSnapshot();
})
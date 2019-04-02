import React from 'react';
import renderer from "react-test-renderer";
import OneTable from '../../components/tournee/OneTable';

let oneDay = [ "Monday", { title: "title", time: "9h" }, { title: "title2", time: "10h" } ]

it("Renders the week scheddule table section", () => {
  const tree = renderer
    .create(<OneTable  day={oneDay} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
})
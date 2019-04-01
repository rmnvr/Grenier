import React from 'react';
import renderer from "react-test-renderer";
import HorairesPassage from '../../components/tournee/HorairesPassage';
import markers from "../../components/utils/markers.js"

it("Renders the welcome page", () => {
  const tree = renderer
    .create(<HorairesPassage  markers={markers} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
})
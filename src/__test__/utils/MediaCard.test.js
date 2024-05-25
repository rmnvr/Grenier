import React from 'react';
import renderer from "react-test-renderer";
import MediaCard from '../../components/utils/MediaCard';

let content = {
  img: "images/tri-choux.jpg",
  title: "Des produits frais et locaux de qualité",
  description: 
    "Une sélection de produits frais et locaux, issus des circuits courts et qui respectent la saisonnalité des productions locales"
  ,
  backgroundColor: "#0b4553",
  color: "#e3c04c"
}

it("Renders one media card", () => {
  const tree = renderer
    .create(<MediaCard content={content} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
})
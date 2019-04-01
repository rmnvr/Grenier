import React from 'react';
import renderer from "react-test-renderer";
import Triptyque from '../../components/utils/Triptyque';

let content = {
  a: {
    img: "images/tri-tracteur.jpg",
    title: "Un partenariat de confiance",
    description: 
      "Le Grenier de Benjamin soutient et valorise le travail des agriculteurs et éleveurs de la Région"
    ,
    backgroundColor: "#0b4553",
    color: "#e3c04c"
  },
  b: {
    img: "images/tri-benich.jpg",
    title: "Un service de proximité",
    description: 
      "Benjamin vous propose un service de proximité chaque semaine au coeur des villages et à domicile - sur simple demande"
    ,
    backgroundColor: "#e3c04c",
    color: "#0b4553"
  },
  c: {
    img: "images/tri-choux.jpg",
    title: "Des produits frais et locaux de qualité",
    description: 
      "Une sélection de produits frais et locaux, issus des circuits courts et qui respectent la saisonnalité des productions locales"
    ,
    backgroundColor: "#0b4553",
    color: "#e3c04c"
  }
};

it("Renders the welcome page", () => {
  const tree = renderer
    .create(<Triptyque content={content} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
})
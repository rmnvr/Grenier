let products = [
  { charcuterie : [
      {
        main: "Chorizo Fort",
        accessory: "15.90 / Kg"
      },
      {
        main: "Chorizo Doux",
        accessory: "15.90 / Kg"
      },
      {
        main: "Pâté Aveyronnais",
        accessory: "12.80 / Kg"
      },
      {
        main: "Rillettes d'oie",
        accessory: "22.70 / Kg"
      },
      {
        main: "Poitrine séchée des Pyrénées",
        accessory: "18.90 / Kg"
      },
      {
        main: "Ventrèche roulée des Pyrénées",
        accessory: "16.20 / Kg"
      },
      {
        main: "Poitrine Fumée",
        accessory: "14.10 / Kg"
      },
      {
        main: "Saucisson à l'ail",
        accessory: "6.30 / Kg"
      },
      {
        main: "Boudin aux oignons",
        accessory: "11.70 / Kg"
      },
      {
        main: "Boudin à la viande",
        accessory: "11.70 / Kg"
      },
      {
        main: "Jambon cuit",
        accessory: "13.10 / Kg"
      },
      {
        main: "Jambon cru du Périgord",
        accessory: "16.20 / Kg"
      },
      {
        main: "Saucisse de foie",
        accessory: "16.90 / Kg"
      },
      {
        main: "Saucisse perche d'Ariège",
        accessory: "25.00 / Kg"
      },
      {
        main: "Pâté de tête",
        accessory: "7.40 / Kg"
      },
      {
        main: "Roti de porc cuit",
        accessory: "14.40 / Kg"
      },
      {
        main: "Pommes dauphines",
        accessory: "21.60 / Kg"
      }
    ],
    fromage: [
      {
        main: "Pascouli",
        accessory: "23.60 / Kg"
      },
      {
        main: "Pascouli aux herbes",
        accessory: "23.60 / Kg"
      },
      {
        main: "Tomme de Pascouli",
        accessory: "23.60 / Kg"
      },
      {
        main: "Mont de Lacaune (3 laits)",
        accessory: "23.20 / Kg"
      },
      {
        main: "Compté (4 mois d'affinage)",
        accessory: "21.60 / Kg"
      },
      {
        main: "Betmal vache/chèvre",
        accessory: "26.90 / Kg"
      },
      {
        main: "Cantal jeune",
        accessory: "13.75 / Kg"
      },
      {
        main: "Saint-Nectaire",
        accessory: "22.90 / Kg"
      },
      {
        main: "Bleu de Briola",
        accessory: "28.10 / Kg"
      },
      {
        main: "Saint Julien",
        accessory: "23.60 / Kg"
      },
      {
        main: "Fresquel",
        accessory: "23.60 / Kg"
      },
      {
        main: "L'Ariegeois",
        accessory: "13.95 / Kg"
      },
      {
        main: "Montsalvy",
        accessory: "10.90 / Kg"
      },
      {
        main: "Mixte vache brebis",
        accessory: "26.60 / Kg"
      },
      {
        main: "Pur brebis",
        accessory: "23.90 / Kg"
      },
      {
        main: "Pur chèvre",
        accessory: "25.60 / Kg"
      },
      {
        main: "Pérail de brebis",
        accessory: "3.90 / Pièce"
      },
      {
        main: "L'Ecir d'Aubrac",
        accessory: "4.50 / Pièce"
      },
      {
        main: "La Bouyguette",
        accessory: "5.50 € / Pièce"
      },
      {
        main: "Le XV du Pic",
        accessory: "3.90 € / Pièce"
      },
      {
        main: "Crotin du Pic",
        accessory: "3.90 € / Pièce"
      },
      {
        main: "Roquefort",
        accessory: "21.90 € / Pièce"
      },
    ],
    fruitsEtLegumes:[
      {
        main: "Salade",
        accessory: "1.20 € / Pièce"
      },
      {
        main: "Mâche",
        accessory: "8.10 € / Kg"
      },
      {
        main: "Carottes",
        accessory: "2.90 € / Kg"
      },
      {
        main: "Chou-fleur",
        accessory: "2.70 € / Kg"
      },
      {
        main: "Chou vert frisé",
        accessory: "2.70 € / Pièce"
      },
      {
        main: "Chou vert lisse",
        accessory: "2.70 € / Pièce"
      },
      {
        main: "Oignons jaunes",
        accessory: "1.80 € / Kg"
      },
      {
        main: "Navets",
        accessory: "2.70 € / Kg"
      },
      {
        main: "Botte de navets nouveaux",
        accessory: "2.00 € / Pièce"
      },
      {
        main: "Pommes de terre (Mona Lisa)",
        accessory: "1.80 € / Kg"
      },
      {
        main: "Poireaux",
        accessory: "2.90 € / Kg"
      },
      {
        main: "Blettes",
        accessory: "2.70 € / Kg"
      },
      {
        main: "Ail",
        accessory: "7.90 € / Kg"
      },
      {
        main: "Lentilles vertes bio",
        accessory: "5.40 € / Kg"
      },
      {
        main: "Haricots secs",
        accessory: "6.30 € / Kg"
      },
      {
        main: "Pois-chiches bio",
        accessory: "4.15 € / Kg"
      },
      {
        main: "Epinards",
        accessory: "4.50 € / Kg"
      },
      {
        main: "Radis botte",
        accessory: "1.70 € / Pièce"
      },
      {
        main: "Concombres",
        accessory: "1.70 € / Pièce"
      },
      {
        main: "Endives",
        accessory: "3.25 € / Kg"
      },
      {
        main: "Pommes Gala",
        accessory: "2.70 € / Kg"
      },
      {
        main: "Kiwis",
        accessory: "3.60 € / Kg"
      },
      {
        main: "Poires Conférence",
        accessory: "2.90 € / Kg"
      },
      {
        main: "Pommes Golden",
        accessory: "2.70 € / Kg"
      },
      {
        main: "Bananes",
        accessory: "1.95 € / Kg"
      },
      {
        main: "Oranges",
        accessory: "2.15 €/ Kg"
      },
      {
        main: "Asperges",
        accessory: "8.90 € / Kg"
      },
      {
        main: "Artichauts Bouquets",
        accessory: "3.50 € / Pièce"
      },
      {
        main: "Cebettes bottes",
        accessory: "2.00 € / Pièce"
      }
    ]
  }
]

export default products;
let products = [
  { charcuterie : [
      {
        name: "Chorizo Fort",
        type: "Kg",
        price: 15.90
      },
      {
        name: "Chorizo Doux",
        type: "Kg",
        price: 15.90
      },
      {
        name: "Pâté Aveyronnais",
        type: "Kg",
        price: 12.80
      },
      {
        name: "Rillettes d'oie",
        type: "Kg",
        price: 22.70
      },
      {
        name: "Poitrine séchée des Pyrénées",
        type: "Kg",
        price: 18.90
      },
      {
        name: "Ventrèche roulée des Pyrénées",
        type: "Kg",
        price: 16.20
      },
      {
        name: "Poitrine Fumée",
        type: "Kg",
        price: 14.10
      },
      {
        name: "Saucisson à l'ail",
        type: "Kg",
        price: 6.30
      },
      {
        name: "Boudin aux oignons",
        type: "Kg",
        price: 11.70
      },
      {
        name: "Boudin à la viande",
        type: "Kg",
        price: 11.70
      },
      {
        name: "Jambon cuit",
        type: "Kg",
        price: 13.10
      },
      {
        name: "Jambon cru du Périgord",
        type: "Kg",
        price: 16.20
      },
      {
        name: "Saucisse de foie",
        type: "Kg",
        price: 16.90
      },
      {
        name: "Saucisse perche d'Ariège",
        type: "Kg",
        price: 25.00
      },
      {
        name: "Pâté de tête",
        type: "Kg",
        price: 7.40
      },
      {
        name: "Roti de porc cuit",
        type: "Kg",
        price: 14.40
      },
      {
        name: "Pommes dauphines",
        type: "Kg",
        price: 21.60
      }
    ],
    fromage: [
      {
        name: "Pascouli",
        type: "Kg",
        price: 23.60
      },
      {
        name: "Pascouli aux herbes",
        type: "Kg",
        price: 23.60
      },
      {
        name: "Tomme de Pascouli",
        type: "Kg",
        price: 23.60
      },
      {
        name: "Mont de Lacaune (3 laits)",
        type: "Kg",
        price: 23.20
      },
      {
        name: "Compté (4 mois d'affinage)",
        type: "Kg",
        price: 21.60
      },
      {
        name: "Betmal vache/chèvre",
        type: "Kg",
        price: 26.90
      },
      {
        name: "Cantal jeune",
        type: "Kg",
        price: 13.75
      },
      {
        name: "Saint-Nectaire",
        type: "Kg",
        price: 22.90
      },
      {
        name: "Bleu de Briola",
        type: "Kg",
        price: 28.10
      },
      {
        name: "Saint Julien",
        type: "Kg",
        price: 23.60
      },
      {
        name: "Fresquel",
        type: "Kg",
        price: 23.60
      },
      {
        name: "L'Ariegeois",
        type: "Kg",
        price: 13.95
      },
      {
        name: "Montsalvy",
        type: "Kg",
        price: 10.90
      },
      {
        name: "Mixte vache brebis",
        type: "Kg",
        price: 26.60
      },
      {
        name: "Pur brebis",
        type: "Kg",
        price: 23.90
      },
      {
        name: "Pur chèvre",
        type: "Kg",
        price: 25.60
      },
      {
        name: "Pérail de brebis",
        type: "Pièce",
        price: 3.90
      },
      {
        name: "L'Ecir d'Aubrac",
        type: "Pièce",
        price: 4.50
      },
      {
        name: "La Bouyguette",
        type: "Pièce",
        price: 5.50
      },
      {
        name: "Le XV du Pic",
        type: "Pièce",
        price: 3.90
      },
      {
        name: "Crotin du Pic",
        type: "Pièce",
        price: 3.90
      },
      {
        name: "Roquefort",
        type: "Kg",
        price: 21.90
      },
    ],
    fruitsEtLegumes:[
      {
        name: "Salade",
        type: "Pièce",
        price: 1.20
      },
      {
        name: "Mâche",
        type: "Kg",
        price: 8.10
      },
      {
        name: "Carottes",
        type: "Kg",
        price: 2.90
      },
      {
        name: "Chou-fleur",
        type: "Kg",
        price: 2.70
      },
      {
        name: "Chou vert frisé",
        type: "Pièce",
        price: 2.70
      },
      {
        name: "Chou vert lisse",
        type: "Pièce",
        price: 2.70
      },
      {
        name: "Oignons jaunes",
        type: "Kg",
        price: 1.80
      },
      {
        name: "Navets",
        type: "Kg",
        price: 2.70
      },
      {
        name: "Botte de navets nouveaux",
        type: "Pièce",
        price: 2.00
      },
      {
        name: "Pommes de terre (Mona Lisa)",
        type: "Kg",
        price: 1.80
      },
      {
        name: "Poireaux",
        type: "Kg",
        price: 2.90
      },
      {
        name: "Blettes",
        type: "Kg",
        price: 2.70
      },
      {
        name: "Ail",
        type: "Kg",
        price: 7.90
      },
      {
        name: "Lentilles vertes bio",
        type: "Kg",
        price: 5.40
      },
      {
        name: "Haricots secs",
        type: "Kg",
        price: 6.30
      },
      {
        name: "Pois-chiches bio",
        type: "Kg",
        price: 4.15
      },
      {
        name: "Epinards",
        type: "Kg",
        price: 4.50
      },
      {
        name: "Radis botte",
        type: "Piece",
        price: 1.70
      },
      {
        name: "Concombres",
        type: "Pièce",
        price: 1.70
      },
      {
        name: "Endives",
        type: "Kg",
        price: 3.25
      },
      {
        name: "Pommes Gala",
        type: "Kg",
        price: 2.70
      },
      {
        name: "Kiwis",
        type: "Kg",
        price: 3.60
      },
      {
        name: "Poires Conférence",
        type: "Kg",
        price: 2.90
      },
      {
        name: "Pommes Golden",
        type: "Kg",
        price: 2.70
      },
      {
        name: "Bananes",
        type: "Kg",
        price: 1.95
      },
      {
        name: "Oranges",
        type: "Kg",
        price: 2.15
      },
      {
        name: "Asperges",
        type: "Kg",
        price: 8.90
      },
      {
        name: "Artichauts Bouquets",
        type: "Pièce",
        price: 3.50
      },
      {
        name: "Cebettes bottes",
        type: "Pièce",
        price: 2.00
      }
    ]
  }
]

export default products;
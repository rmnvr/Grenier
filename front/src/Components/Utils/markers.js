const tuesdayIcon = "https://mt.googleapis.com/vt/icon/name=icons/onion/SHARED-mymaps-container-bg_4x.png,icons/onion/SHARED-mymaps-container_4x.png,icons/onion/1722-truck_4x.png&highlight=ff000000,0097A7&scale=1.0";
const wednesdayIcon = "https://mt.googleapis.com/vt/icon/name=icons/onion/SHARED-mymaps-container-bg_4x.png,icons/onion/SHARED-mymaps-container_4x.png,icons/onion/1722-truck_4x.png&highlight=ff000000,F9A825&scale=1.0";
const thursdayIcon = "https://mt.googleapis.com/vt/icon/name=icons/onion/SHARED-mymaps-container-bg_4x.png,icons/onion/SHARED-mymaps-container_4x.png,icons/onion/1722-truck_4x.png&highlight=ff000000,FF5252&scale=1.0";
const fridayIcon = "https://mt.googleapis.com/vt/icon/name=icons/onion/SHARED-mymaps-container-bg_4x.png,icons/onion/SHARED-mymaps-container_4x.png,icons/onion/1722-truck_4x.png&highlight=ff000000,9C27B0&scale=1.0";

const markers = [
  {
    main: "Plavilla",
    lat: 43.147419,
    lng: 1.912858,
    day: "Mardi",
    accessory: "9h30",
    icon: tuesdayIcon,
  },
  {
    main: "Saint Julien de Briola",
    lat: 43.15992,
    lng: 1.94157,
    day: "Mardi",
    accessory: "10h",
    icon: tuesdayIcon,
  },
  {
    main: "Orsans",
    lat: 43.160804,
    lng: 1.982376,
    day: "Mardi",
    accessory: "11h",
    icon: tuesdayIcon,
  },
  {
    main: "La Cassaigne",
    lat: 43.202836,
    lng: 1.995546,
    day: "Mardi",
    accessory: "12h",
    icon: tuesdayIcon,
  },
  {
    main: "Laurac",
    lat: 43.228457,
    lng: 1.975686,
    day: "Mardi",
    accessory: "12h30",
    icon: tuesdayIcon,
  },
  {
    main: "Cazalrenoux",
    lat: 43.198434,
    lng: 1.949708,
    day: "Mardi",
    accessory: "13h",
    icon: tuesdayIcon,
  },
  {
    main: "Generville",
    lat: 43.21218,
    lng: 1.932185,
    day: "Mardi",
    accessory: "13h30",
    icon: tuesdayIcon,
  },
  {
    main: "Saint Amans",
    lat: 43.227956,
    lng: 1.886098,
    day: "Mardi",
    accessory: "14h",
    icon: tuesdayIcon,
  },
  {
    main: "Peyrefitte sur l'Hers",
    lat: 43.2460792,
    lng: 1.8176208,
    day: "Mardi",
    accessory: "14h30",
    icon: tuesdayIcon,
  },
  {
    main: "Montauriol",
    lat: 42.575647,
    lng: 2.724191,
    day: "Mardi",
    accessory: "15h",
    icon: tuesdayIcon,
  },
  {
    main: "Cumiès",
    lat: 43.295392,
    lng: 1.841915,
    day: "Mardi",
    accessory: "15h30",
    icon: tuesdayIcon,
  },
  {
    main: "Molleville",
    lat: 43.311324,
    lng: 1.834505,
    day: "Mardi",
    accessory: "16h",
    icon: tuesdayIcon,
  },
  {
    main: "Baraigne",
    lat: 43.32962,
    lng: 1.824495,
    day: "Mardi",
    accessory: "17h",
    icon: tuesdayIcon,
  },
  {
    main: "Gourvieille",
    lat: 43.339532,
    lng: 1.782056,
    day: "Mardi",
    accessory: "18h",
    icon: tuesdayIcon,
  },
  {
    main: "Manses",
    lat: 43.100641,
    lng: 1.811687,
    day: "Mercredi",
    accessory: "9h30",
    icon: wednesdayIcon,
  },
  {
    main: "Teilhet",
    lat: 43.092603,
    lng: 1.778847,
    day: "Mercredi",
    accessory: "11h",
    icon: wednesdayIcon,
  },
  {
    main: "Saint Félix de Tournegat",
    lat: 43.131169,
    lng: 1.748724,
    day: "Mercredi",
    accessory: "12h",
    icon: wednesdayIcon,
  },
  {
    main: "Saint Amadou",
    lat: 43.110967,
    lng: 1.723028,
    day: "Mercredi",
    accessory: "13h",
    icon: wednesdayIcon,
  },
  {
    main: "Ludiès",
    lat: 43.11822,
    lng: 1.714263,
    day: "Mercredi",
    accessory: "14h",
    icon: wednesdayIcon,
  },
  {
    main: "La Bardaille",
    lat: 43.1413671,
    lng: 1.6853742,
    day: "Mercredi",
    accessory: "15h",
    icon: wednesdayIcon,
  },
  {
    main: "Gaudiès",
    lat: 43.174999,
    lng: 1.731235,
    day: "Mercredi",
    accessory: "16h30",
    icon: wednesdayIcon,
  },
  {
    main: "Plaigne",
    lat: 43.173128,
    lng: 1.812776,
    day: "Jeudi",
    accessory: "10h",
    icon: thursdayIcon,
  },
  {
    main: "Lafage",
    lat: 43.174161,
    lng: 1.86426,
    day: "Jeudi",
    accessory: "11h",
    icon: thursdayIcon,
  },
  {
    main: "Cazazil",
    lat: 43.1537821,
    lng: 1.8557474,
    day: "Jeudi",
    accessory: "11h45",
    icon: thursdayIcon,
  },
  {
    main: "Ribouisse",
    lat: 43.182903,
    lng: 1.89748,
    day: "Jeudi",
    accessory: "12h30",
    icon: thursdayIcon,
  },
  {
    main: "Gaja la Selve",
    lat: 43.195062,
    lng: 1.896159,
    day: "Jeudi",
    accessory: "13h",
    icon: thursdayIcon,
  },
  {
    main: "Cahuzac",
    lat: 43.192034,
    lng: 1.851221,
    day: "Jeudi",
    accessory: "13h30",
    icon: thursdayIcon,
  },
  {
    main: "Pécharic et le Py",
    lat: 43.187616,
    lng: 1.836778,
    day: "Jeudi",
    accessory: "13h45",
    icon: thursdayIcon,
  },
  {
    main: "Pech Luna",
    lat: 43.215988,
    lng: 1.84313,
    day: "Jeudi",
    accessory: "14h",
    icon: thursdayIcon,
  },
  {
    main: "Saint Sernin",
    lat: 43.232644,
    lng: 1.80461,
    day: "Jeudi",
    accessory: "15h",
    icon: thursdayIcon,
  },
  {
    main: "Belflou",
    lat: 43.317611,
    lng: 1.786512,
    day: "Jeudi",
    accessory: "16h",
    icon: thursdayIcon,
  },
  {
    main: "Marquein",
    lat: 43.304976,
    lng: 1.726429,
    day: "Jeudi",
    accessory: "16h45",
    icon: thursdayIcon,
  },
  {
    main: "Fajac la Relenque",
    lat: 43.279792,
    lng: 1.724616,
    day: "Jeudi",
    accessory: "17h",
    icon: thursdayIcon,
  },
  {
    main: "Molandier",
    lat: 43.246095,
    lng: 1.716202,
    day: "Jeudi",
    accessory: "18h",
    icon: thursdayIcon,
  },
];

export default markers
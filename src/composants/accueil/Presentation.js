import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  container: {
    padding: theme.spacing.unit * 4,
    paddingBottom: "60px",
    backgroundImage: "url(images/pattern_format.png)",
    backgroundSize: "cover",
    width: "100%"
  },
  title: {
    textAlign: "center",
    fontFamily: "'Old Standard TT', serif",
    color: "#e3c04c"
  },
  paragraph: {
    textAlign: "justify",
    marginTop: "30px",
    lineHeight: "1.5rem",
    color: "white"
  }
});

const Presentation = (props) => {

  const { classes } = props

  return (
    <>
      <Grid container className={classes.container} justify={"center"}>
        <Grid item xs={12} className={classes.title}>
          <h2>A propos du Grenier de Benjamin</h2>
        </Grid>
        <Grid item container justify={"space-around"} xs={10}>
          <Grid item md={5} xs={12} className={classes.paragraph}>
          <p>
            A la croisée de l’Aude et l’Ariège, sur les collines lauragaises,
            entre la Piège et le Razès, vous apercevrez désormais, ou
            entendrez peut-être, une camionnette verte sillonner les routes de
            campagne, de villages en villages, donnant du klaxon, comme dans
            le temps, pour annoncer son arrivée.
          </p>
          <p>
            Cette arrivée dans nos contrées, c’est celle du Grenier de
            Benjamin, petite épicerie itinérante, qui arpente les bourgs et
            les hameaux les plus isolés, à la rencontre des locaux - hommes et
            femmes de la campagne, aînés ruraux, jeunes couples s’installant
            au vert pour une vie plus saine – afin d’offrir un service de
            proximité, de créer un moment convivial, bref, d’insuffler, avec
            ses bons produits, sa gouaille et son envie, un peu de vie dans
            nos bourgs parfois un peu gris.
          </p>
          <p>
            L’ambition de Benjamin, épicier charmant, est doublement simple.
          </p>
          <p>
            D’une part, il s’agit de répondre aux besoins les plus primaires
            du quotidien, pour qui ne peut pas, ou ne peut plus, se déplacer
            facilement : qui d’avoir besoin de produits de première nécessité,
            qui de vouloir une petite tranche de fromage fermier, etc.
          </p>
          </Grid>
          <Grid item md={5} xs={12} className={classes.paragraph}>
          <p>
            De l’autre, Benjamin apporte ses produits de qualité, issus pour
            la plupart de notre terroir, en circuit court (productions locales
            et régionales), afin de permettre à tous ceux soucieux d’un mode
            de vie plus responsable d’en bénéficier ; l’utile rejoint
            l’agréable alors que le pratique se fait allié de l’économie.
          </p>
          <p>
            Au cœur des villages, ainsi qu’à domicile, le Grenier de Benjamin
            propose donc chaque semaine une sélection de produits frais,
            locaux, issus de l’agriculture du pays, du terroir.
          </p>
          <p>
            Tel un lien qui unit le consommateur final au producteur qui
            travaille le sol voisin, le Grenier de Benjamin est un partenariat
            de confiance où tous – agriculteurs, éleveurs, consommateurs –,
            s’y retrouvent, suivant la temporalité et la saisonnalité des
            productions locales, au rythme des soubresauts de cette
            camionnette qui, par monts et vallées, amène un peu de vie, cachés
            derrière de bons produits, sur les places de villages, alors
            endormis.
          </p>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default withStyles(styles)(Presentation);

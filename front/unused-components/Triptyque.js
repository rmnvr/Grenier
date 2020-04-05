constructor(props) {
  super(props);
  this.state = {
    a: {
      img: "images/bg3.jpg",
      title: "Premier élément à mettre en avant",
      list: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Quisque magna arcu, tempor nec scelerisque in, dignissim lobortis nisl Vestibulum suscipit mi eget libero dignissim mollis. Donec finibus felis ac malesuada sodales.",
        "Sed lacinia nulla quis lorem finibus ornare"
      ],
      backgroundColor: "#0b4553",
      color: "#e3c04c"
    },
    b: {
      img: "images/bg3.jpg",
      title: "Là c'est pour le deuxième",
      list: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Quisque magna arcu, tempor nec scelerisque in, dignissim lobortis nisl",
        "Sed lacinia nulla quis lorem finibus ornare. Vestibulum suscipit mi eget libero dignissim mollis. Donec finibus felis ac malesuada sodales."
      ],
      backgroundColor: "#e3c04c",
      color: "#0b4553"
    },
    c: {
      img: "images/bg3.jpg",
      title: "Puis un troisième",
      list: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit mi eget libero dignissim mollis. Donec finibus felis ac malesuada sodales.",
        "Quisque magna arcu, tempor nec scelerisque in, dignissim lobortis nisl",
        "Sed lacinia nulla quis lorem finibus ornare"
      ],
      backgroundColor: "#0b4553",
      color: "#e3c04c"
    }
  };
}

<Grid container justify="center" style={{ marginTop: "100px" }}>
  <Grid item xs={12} sm={6} md={4}>
    <MediaCard content={this.state.a} />
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
    <MediaCard content={this.state.b} />
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
    <MediaCard content={this.state.c} />
  </Grid>
</Grid>;

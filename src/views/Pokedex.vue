<template>
  <div>
    <b-container>
      <Logo></Logo>
      <h1 class="font-weight-bold mb-5 text-left">Pokedex</h1>
    </b-container>

    <!-- CARDS -->
    <b-row>
      <b-col cols="6">
        <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-right>
          <b-card-text>Some quick example text to build on the card and make up the bulk of the card's content.</b-card-text>
        </b-card>
      </b-col>
      <b-col cols="6">
        <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-right>
          <b-card-text>Some quick example text to build on the card and make up the bulk of the card's content.</b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Logo from "../components/Logo.vue";

export default {
  name: "pokedex",
  components: {
    Logo
  }
};
</script>
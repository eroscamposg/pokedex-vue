<template>
  <div>
    <b-container>
      <Logo></Logo>
      <h1 class="font-weight-bold mb-5 text-left">Pokedex</h1>
    </b-container>

    <!-- CARDS -->
    <b-row v-for="(pokemons, index) in ChunkPokemon" :key="index" class="mb-4">
      <b-col cols="12" md="6" v-for="(pokemon, index) in pokemons" :key="index">
        <b-card
          class="pokeCard"
          img-src="https://placekitten.com/300/300"
          img-alt="Card image"
          img-right
        >
          <b-card-text>{{ pokemon.name }}</b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Logo from "../components/Logo.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "pokedex",
  components: {
    Logo
  },
  computed: {
    ...mapGetters(["AllPokemon", "ChunkPokemon"])
  },
  methods: {
    ...mapActions(["getAllPokemon"])
  },
  created() {
    this.getAllPokemon();
  }
};
</script>

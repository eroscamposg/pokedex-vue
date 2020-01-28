<template>
  <div>
    <b-container>
      <Logo></Logo>
      <h1 class="font-weight-bold mb-5 text-left">Pokedex</h1>
    </b-container>

    <!-- CARDS -->
    <div v-if="isLoading == true" class="text-center m-5">
      <b-spinner label="Loading..."></b-spinner>
    </div>
    <b-row class="mb-4">
      <b-col
        class="mb-4"
        cols="12"
        md="12"
        lg="6"
        xl="6"
        v-for="(pokemon, index) in getAllPokemon.results"
        :key="index"
      >
        <b-card
          class="pokeCard bg-dark"
          img-src="https://placekitten.com/300/300"
          img-alt="Card image"
          img-right
          @click="getPokemonData(pokemon.name)"
        >
          <b-card-text class="text-white text-capitalize font-weight-bolder">{{ pokemon.name }}</b-card-text>
        </b-card>
      </b-col>
    </b-row>

    <b-pagination
      align="center"
      v-model="currentPage"
      :total-rows="rows"
      prev-text="Prev"
      next-text="Next"
      @input="updatePokemonList()"
    ></b-pagination>
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
  data() {
    return {
      totalPokemon: [],
      rows: 1,
      perPage: 10,
      currentPage: 1,
      isLoading: false
    };
  },
  computed: {
    ...mapGetters(["getAllPokemon", "getPokemon", "getUrl"])
  },
  methods: {
    ...mapActions(["obtainAllPokemon", "obtainPokemon"]),

    //when changing pages
    updatePokemonList() {
      this.isLoading = true;

      //get the pagination base don the current page
      if (this.currentPage == 1) {
        this.obtainAllPokemon({
          url: this.getUrl.BASE_URL
        });
      } else if (this.currentPage == 2) {
        this.obtainAllPokemon({
          url: this.getUrl.BASE_URL + "?offset=20&limit=20"
        });
      } else {
        this.obtainAllPokemon({
          url:
            this.getUrl.BASE_URL + `?offset=${this.currentPage * 2}0&limit=20`
        });
      }

      this.isLoading = false;
      // this.totalPokemon = this.AllPokemon;
      // this.rows = this.totalPokemon.count;
    },
    getPokemonData(pokemon_name) {
      this.obtainPokemon({ url: this.getUrl.BASE_URL + pokemon_name });
    }
  },
  created() {
    this.updatePokemonList();
  },

  updated() {
    this.totalPokemon = this.getAllPokemon;
    this.rows = this.totalPokemon.count;
  }
};
</script>

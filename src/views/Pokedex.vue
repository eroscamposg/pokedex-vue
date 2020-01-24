<template>
  <div>
    <b-container>
      <Logo></Logo>
      <h1 class="font-weight-bold mb-5 text-left">Pokedex</h1>
    </b-container>

    <!-- CARDS -->
    <b-row class="mb-4">
      <b-col
        class="mb-4"
        cols="12"
        md="12"
        lg="6"
        xl="6"
        v-for="(pokemon, index) in AllPokemon.results"
        :key="index"
      >
        <a
          class="text-decoration-none text-white font-weight-bolder text-capitalize"
          href="https://pokeapi.co/api/v2/pokemon/"
        >
          <b-card
            class="pokeCard bg-dark"
            img-src="https://placekitten.com/300/300"
            img-alt="Card image"
            img-right
          >
            <b-card-text>{{ pokemon.name }}</b-card-text>
          </b-card>
        </a>
      </b-col>
    </b-row>

    <b-pagination
      align="center"
      v-model="currentPage"
      :total-rows="rows"
      prev-text="Prev"
      next-text="Next"
      @input="updatePokemon()"
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
      BASE_URL: "https://pokeapi.co/api/v2/pokemon/"
    };
  },
  computed: {
    ...mapGetters(["AllPokemon"])
  },
  methods: {
    ...mapActions(["getAllPokemon"]),

    //when changing pages
    updatePokemon() {
      //get the pagination base don the current page
      if (this.currentPage == 1) {
        this.getAllPokemon({
          url: BASE_URL
        });
      } else if (this.currentPage == 2) {
        this.getAllPokemon({
          url: BASE_URL + "?offset=20&limit=20"
        });
      } else {
        this.getAllPokemon({
          url: BASE_URL + `?offset=${this.currentPage * 2}0&limit=20`
        });
      }

      this.totalPokemon = this.AllPokemon;
      this.rows = this.totalPokemon.count;
    }
  },
  created() {
    this.getAllPokemon({ url: null });
  },

  updated() {
    this.totalPokemon = this.AllPokemon;
    this.rows = this.totalPokemon.count;
  }
};
</script>

import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import chunk from "chunk";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    AllPokemon: {},
    Pokemon: {},
    ChunkPokemon: [[]]
  },
  getters: {
    AllPokemon: state => state.AllPokemon,
    ChunkPokemon: state => state.ChunkPokemon
  },
  mutations: {
    setPokemon: (state, pokemonData) => {
      state.AllPokemon = pokemonData;
      state.ChunkPokemon = chunk(pokemonData.results);
      console.log(state.ChunkPokemon);
    }
  },
  actions: {
    async getAllPokemon({ commit, url }) {
      let poke_url = url == null ? "https://pokeapi.co/api/v2/pokemon" : url;
      let poke = await axios.get(poke_url);
      commit("setPokemon", poke.data);
    }
  },
  modules: {}
});

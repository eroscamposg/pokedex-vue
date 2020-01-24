import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    AllPokemon: {},
    Pokemon: {}
  },
  getters: {
    AllPokemon: state => state.AllPokemon
  },
  mutations: {
    setPokemon: (state, pokemonData) => {
      state.AllPokemon = pokemonData;
      //console.log(state.AllPokemon.results);
    }
  },
  actions: {
    async getAllPokemon({ commit }, { url }) {
      console.log("url:" + url);
      let poke_url = url == null ? "https://pokeapi.co/api/v2/pokemon" : url;
      let poke = await axios.get(poke_url);
      commit("setPokemon", poke.data);
    }
  },
  modules: {}
});

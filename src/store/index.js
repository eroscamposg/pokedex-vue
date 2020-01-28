import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    AllPokemon: {},
    Pokemon: {
      name: "",
      id: 0,
      baseStats: [{}],
      totalStats: 0,
      color: "",
      description: "",
      eggGroups: [],
      genus: "",
      evolution: [],
      height: 0,
      moves: [],
      sprite: "",
      type: [],
      weight: 0
    },
    URL_LIST: {
      BASE_URL: "https://pokeapi.co/api/v2/pokemon/",
      SPECIE_URL: "https://pokeapi.co/api/v2/pokemon-species/",
      EVOLUTION_URL: "https://pokeapi.co/api/v2/evolution-chain/"
    }
  },
  getters: {
    getAllPokemon: state => state.AllPokemon,
    getPokemon: state => state.Pokemon,
    getUrl: state => state.URL_LIST
  },
  mutations: {
    setAllPokemon: (state, pokemonData) => {
      state.AllPokemon = pokemonData;
      //console.log(state.AllPokemon.results);
    },
    setPokemon: (state, pokemonData) => {
      console.log(pokemonData);

      var statIndex = 0;

      //set name
      state.Pokemon.name = pokemonData[0].name;

      //set id
      state.Pokemon.id = pokemonData[0].id;

      //set stats
      state.Pokemon.baseStats = pokemonData[0].stats;
      //set total stats
      state.Pokemon.baseStats.forEach(stat => {
        state.Pokemon.totalStats += stat.base_stat;
      });

      //set color [species]

      //set description [species]

      //set eggGroups [species]

      //set genus [species]

      //set evolution chain [species]

      //set description flavor text [species]

      //set sprite
      state.Pokemon.sprite = pokemonData[0].sprites.front_default;

      //set types
      for (let index = 0; index < pokemonData[0].types.length; index++) {
        state.Pokemon.type.push(pokemonData[0].types[index].type.name);
      }

      //set height
      state.Pokemon.height = pokemonData[0].height;

      //set weight
      state.Pokemon.weight = pokemonData[0].weight;

      //set moves
      for (let index = 0; index < 4; index++) {
        state.Pokemon.moves.push(pokemonData[0].moves[index].move.name);
      }

      //console.log(state.Pokemon);
    }
  },
  actions: {
    async obtainAllPokemon({ commit }, { url }) {
      console.log("url:" + url);
      let poke_url = url;
      let poke = await axios.get(poke_url);
      commit("setAllPokemon", poke.data);
    },
    async obtainPokemon({ commit, state }, { url }) {
      console.log("url:" + url);

      let pokeData = [];
      let poke_url = url;

      let data_poke = await axios.get(poke_url);

      pokeData.push(data_poke.data);

      //console.log(state.URL_LIST.SPECIE_URL + pokeData.data.id);
      let data_specie = await axios.get(
        state.URL_LIST.SPECIE_URL + data_poke.data.id
      );

      pokeData.push(data_specie.data);

      console.log(pokeData);

      //PROBLEMAS, NO ENVIA LA DATA A LA MUTAACION
      commit("setPokemon", pokeData.data);
    }
  },
  modules: {}
});

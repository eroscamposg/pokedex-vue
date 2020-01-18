<template>
  <b-container class="home">
    <!-- TITLE -->
    <h1>What Pokemon are you looking for?</h1>

    <!-- SEARCHBAR -->
    <b-input-group size="lg" class="mb-2 mb-5">
      <b-input-group-prepend is-text>
        <b-icon icon="search"></b-icon>
      </b-input-group-prepend>
      <b-form-input
        class="border-0 pr-0 bg-light"
        type="search"
        placeholder="Search Pokemon, Move, Ability, etc"
      ></b-form-input>
    </b-input-group>

    <!-- BUTTONS -->
    <b-row>
      <b-col class="mb-4">
        <b-button class="w-100 py-4 font-weight-bold rounded-pill" to="{name: about}">Pokedex</b-button>
      </b-col>
      <b-col>
        <b-button class="w-100 py-4 font-weight-bold rounded-pill" to="{name: about}">Moves</b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="mb-4">
        <b-button class="w-100 py-4 font-weight-bold rounded-pill" to="{name: about}">Abilities</b-button>
      </b-col>
      <b-col>
        <b-button class="w-100 py-4 font-weight-bold rounded-pill" to="{name: about}">Items</b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="mb-4">
        <b-button class="w-100 py-4 font-weight-bold rounded-pill" to="{name: about}">Locations</b-button>
      </b-col>
      <b-col>
        <b-button class="w-100 py-4 font-weight-bold rounded-pill" to="{name: about}">Type Charts</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>

<style lang="scss" scoped>
@use '../scss/variables' as colors;

div.input-group {
  div.input-group-prepend {
    div.input-group-text {
      background: var(--light);
      border: 0;
      border-top-left-radius: 5em !important;
      border-bottom-left-radius: 5em !important;
    }
  }
  input.form-control {
    border-top-right-radius: 5em;
    border-bottom-right-radius: 5em;
  }
}

b-row {
  b-col {
    b-button {
      colors.$pokemon-green;
    }
  }
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
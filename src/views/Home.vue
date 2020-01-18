<template>
  <div class="home">
    <b-container class="section1 border-bottom pb-5" fluid>
      <!-- TITLE -->

      <h1 class="font-weight-bold mb-5">What Pokemon are you looking for?</h1>

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
        <b-col class="mb-4" cols="12" md="6">
          <b-button
            class="w-100 py-4 font-weight-bold rounded-pill border-0 btn1"
            variant="success"
            to="{name: about}"
          >Pokedex</b-button>
        </b-col>
        <b-col class="mb-4" cols="12" md="6">
          <b-button
            class="w-100 py-4 font-weight-bold rounded-pill border-0 btn2"
            to="{name: about}"
          >Moves</b-button>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="mb-4" cols="12" md="6">
          <b-button
            class="w-100 py-4 font-weight-bold rounded-pill border-0 btn3"
            to="{name: about}"
          >Abilities</b-button>
        </b-col>
        <b-col class="mb-4" cols="12" md="6">
          <b-button
            class="w-100 py-4 font-weight-bold rounded-pill border-0 btn4"
            to="{name: about}"
          >Items</b-button>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="mb-4" cols="12" md="6">
          <b-button
            class="w-100 py-4 font-weight-bold rounded-pill border-0 btn5"
            to="{name: about}"
          >Locations</b-button>
        </b-col>
        <b-col class="mb-4" cols="12" md="6">
          <b-button
            class="w-100 py-4 font-weight-bold rounded-pill border-0 btn6"
            to="{name: about}"
          >Type Charts</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>

<style lang="scss" scoped>
@import "../scss/variables";

div.home {
  .section1 {
    border-radius: 5em;
  }
}

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

div.row {
  div.col-12 {
    .btn1 {
      background: $pokemon-green;
      box-shadow: -0.1em 1em 3.1em -1.4em $pokemon-green;
    }
    .btn2 {
      background: $pokemon-red;
      box-shadow: -0.1em 1em 3.1em -1.4em $pokemon-red;
    }
    .btn3 {
      background: $pokemon-blue;
      box-shadow: -0.1em 1em 3.1em -1.4em $pokemon-blue;
    }
    .btn4 {
      background: $pokemon-yellow;
      box-shadow: -0.1em 1em 3.1em -1.4em $pokemon-yellow;
    }
    .btn5 {
      background: $pokemon-purple;
      box-shadow: -0.1em 1em 3.1em -1.4em $pokemon-purple;
    }
    .btn6 {
      background: $pokemon-brown;
      box-shadow: -0.1em 1em 3.1em -1.4em $pokemon-brown;
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
<template>
  <b-container class="text-center mt-4 w-50 h-50">
    <b-btn class="bg-transparent border-0 mb-4 shadow-none" :to="{path: '/'}">
      <b-img src="../assets/pokemonLogo.png" fluid alt="Responsive image"></b-img>
    </b-btn>
  </b-container>
</template>

<script>
export default {
  name: "logo"
};
</script>
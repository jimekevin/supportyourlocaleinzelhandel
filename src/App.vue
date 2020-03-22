<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// const Landing = () => import("./components/Landing.vue");

export default {
  name: "App",
  components: {
    //Landing,
  },
  data() {
    return {
      name: '',
    };
  },
  computed: {
    filter() {
      return this.$store.state.filter;
    },
    locations() {
      return this.$store.getters.getFilteredLocations;
    }
  },
};
</script>


<style type="text/css">
html,
body {
  height: 100vh;
  margin: 0;
  padding: 0;
}

@font-face {
  font-family: Futura;
  src: url('/assets/fonts/futura/Futura Light font.ttf');
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app .page {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
#app .page__background {
  background: white;
}
</style>

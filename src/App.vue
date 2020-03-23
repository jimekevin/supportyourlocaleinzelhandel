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
font-family: 'Futura Medium';
font-style: normal;
font-weight: normal;
src: local('Futura Medium'), url('./assets/fonts/futura/futuram.woff') format('woff');
}
@font-face {
font-family: 'Futura Medium Italic';
font-style: normal;
font-weight: normal;
src: local('Futura Medium Italic'), url('./assets/fonts/futura/futurami.woff') format('woff');
}
@font-face {
font-family: 'Futura Light';
font-style: normal;
font-weight: normal;
src: local('Futura Light'), url('./assets/fonts/futura/futural.woff') format('woff');
}
@font-face {
font-family: 'Futura Light Italic';
font-style: normal;
font-weight: normal;
src: local('Futura Light Italic'), url('./assets/fonts/futura/futurali.woff') format('woff');
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
.toolbar-button {
  color: #5F6DAF !important;
}
</style>

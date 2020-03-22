<template>
  <div id="app">
    <!-- <CardList /> -->


  <v-ons-page>
    <div class="content">
      <v-ons-col>
        <div class="center">
          <v-ons-list>
            <v-ons-list-item>
              <p>
                Schön, dass du hier bist! 
              </p>
            </v-ons-list-item>
            <v-ons-list-item>
                <v-ons-input placeholder="Input your name" float v-model="name"></v-ons-input>
            </v-ons-list-item>
            <v-ons-list-item>
                <router-link to="contact"><v-ons-button class="btn-continue" >OK</v-ons-button></router-link>
            </v-ons-list-item>
          </v-ons-list>
        </div>
            <!-- <Categories v-on:category-locations="filterLocationsByCategory" /> -->

      </v-ons-col>

      </div>

      

    </v-ons-page>
  </div>
</template>

<script>
//const CardList = () => import("./components/CardList.vue");

export default {
  name: "App",
  components: {
    //CardList,
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
  .btn-continue {
    background-color: #38d786 !important;
    margin: auto 0 !important;
    padding: 3px 40px !important;
    font-size: 14px !important;
    border-radius: 40px !important;
    z-index: 2 !important;
  }

html,
body {
  height: 100vh;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* max-width: 80vw; */
  margin: 0 auto;
  display: block;
  /* margin-top: 60px; */
}

p {
  font-size: 13px;
  color: white;
  padding: 0;
  margin-top: 5px;
}
</style>

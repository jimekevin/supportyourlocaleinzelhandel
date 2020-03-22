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

      <!-- <footer>
        <address>
          <h2>Impressum</h2>
          <a href="mailto:">E-Mail</a>
        </address>
        <a
          href="https://icons8.com/icons"
          title="Icons von icons8"
        >Alle Icons von https://icons8.com/icons</a>
      </footer> -->
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
  background-color: rgb(226, 157, 67);
  height: 100vh;
  margin: 0;
  padding: 0;
}
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: rgba(80, 80, 80, 1);
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

h1 {
  text-transform: lowercase;
  color: white;
  margin-bottom: 0;
  margin-top: 0;
}

footer {
  margin: 20px 0;
}

footer address {
  font-size: 12px;
  font-style: normal;
}

footer address h2 {
  margin-bottom: 5px;
  font-size: 12px;
}

footer a {
  color: black;
  font-size: 12px;
}

p {
  color: rgba(80, 80, 80, 1);
}

.leaflet-marker-icon {
  height: 30px!important;
}
.page__background {
  background-color: #ecaa47;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
</style>

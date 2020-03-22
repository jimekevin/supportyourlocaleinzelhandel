<template>
  <v-ons-page class="content">
      <div class="background" style="height:100vh;width: 80%;background-color:#338811;"></div>
      <section class="">
        <div>
          <h1>
            <router-link to="/">Support your local Einzelhandel</router-link>
          </h1>
          <!-- <Search /> -->
          <!-- <Categories v-on:category-locations="filterLocationsByCategory" /> -->
        </div>
        <div>
          <p>
            Schön, dass du hier bist!
            <router-link to="contact">Formular</router-link>
          </p>
        </div>
      </section>

      <v-ons-toolbar>
        <div class="center">Text input</div>
      </v-ons-toolbar>

      <v-ons-list>
        <v-ons-list-item>
          <div class="center">
            <v-ons-input placeholder="Input your name" float
              v-model="name"
            >
            </v-ons-input>
          </div>
        </v-ons-list-item>
        <v-ons-list-item>
          <div><ons-button class="shuffle" onclick="shuffle_play()"><ons-icon style="margin-right: 5px;" icon="fa-play"></ons-icon> SHUFFLE PLAY!</ons-button></div>
        </v-ons-list-item>
      </v-ons-list>
  
      <transition name="fade">
        <router-view></router-view>
      </transition>
  </v-ons-page>
</template>

<script>
//const Categories =()=> import('./Categories.vue')
//const Search =()=> import('./Search.vue')


export default {
  name: "CardList",
  components: {
    //Categories,
    //Search
  },
  props: {
    msg: String
  },
  data() {
    return {
      filter: {}
    };
  },
  methods: {
    filterLocationsByCategory(categoryName) {
      this.filter = categoryName;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
a {
  color: #42b983;
}

header {
  padding: 30px 0 0;
  background-position: center center;
  background-size: cover;
  display: flex;
  margin: 0 auto;
  width: 80vw;
  margin-bottom: 20px;
}

@media screen and (max-width: 800px) {
  header {
    flex-direction: column;
  }
}

header > div {
  flex: 50%;
}
.content {
  min-height: 80vh;
}

h1 {
  color: rgba(255, 180, 180, 1);
  display: inline;
}

h1 a,
h1 a:visited,
h1 a:active,
h1 a:focus {
  text-decoration: none;
  color: rgba(255, 180, 180, 1);
}

p {
  color: rgba(80, 80, 80, 1);
  margin: 10px 0 20px;
  text-align: justify;
  padding-left: 5px;
  margin-top: 30px;
}

@media screen and (max-width:800px) {
  p {
    margin-top: 10px;
  }
} 

p a {
  border-bottom: 1px solid rgba(180, 180, 255, 1);
  text-decoration: none;
  color: rgba(180, 180, 255, 1);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>

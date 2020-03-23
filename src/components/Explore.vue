<template>
  <v-ons-page class="explore-page">
    <v-ons-toolbar>
      <div class="left">
        <router-link to="/city">
          <v-ons-toolbar-button icon="fa-map"></v-ons-toolbar-button>
        </router-link>
      </div>
      <div class="center">Entdecken</div>
      <div class="right">
        <v-ons-toolbar-button icon="fa-cog"></v-ons-toolbar-button>
      </div>
    </v-ons-toolbar>

    <v-ons-gesture-detector>
    <div id="swipe-area" class="content-wrapper" v-if="locations.length>0">
        <!--<v-ons-carousel fullscreen auto-refresh swipeable overscrollable auto-scroll auto-scroll-ratio="0.25">
          <v-ons-carousel-item v-for="location in locations" :key="location.name" class="location-item">-->
        <v-ons-carousel auto-scroll-ratio="0.05" fullscreen swipeable auto-scroll overscrollable :index.sync="carouselIndex" >
          <v-ons-carousel-item v-for="story in stories" :key="story.location_id">
            <!--<img class="cover-img" :src="'./../assets/'+story.media[0].url">-->
            <img class="story" src="./../assets/imgs/test_carousel/laden1.jpg">
          </v-ons-carousel-item>
        </v-ons-carousel>
        <!--<img class="story" src="./../assets/imgs/test_carousel/laden1.jpg">-->
        
        <div class="swipe-instructions">
          <v-ons-button class="left-button" @click="decreaseCarouselIndex()" modifier="quiet" icon="fa-chevron-left"></v-ons-button>
          <router-link to="/profile/2">
            <v-ons-button class="center-button" modifier="quiet" icon="fa-chevron-up"></v-ons-button>
          </router-link>
          <v-ons-button class="right-button" @click="increaseCarouselIndex()" modifier="quiet" icon="fa-chevron-right"></v-ons-button>
          <p class="desc">Swipe</p>
        </div>
    </div>
    <div class="no-result-wrapper" v-else>
      <p>Keine Suchergebnisse gefunden.</p>
    </div>
    </v-ons-gesture-detector>
  </v-ons-page>
</template>


<script>
//const Location = () => import('./Location.vue')

export default {
  name: "Explore",
  components: {
    //Location
  },
  created() {
  },
  computed: {
    locations() {
      return this.$store.getters.getFilteredLocations
    },
    stories() {
      return this.$store.state.stories;
    },
  },
  methods: {
    decreaseCarouselIndex() {
      this.carouselIndex = Math.max(0, this.carouselIndex - 1);
    },
    increaseCarouselIndex() {
      this.carouselIndex = Math.min(this.carouselIndex + 1, this.stories.length);
    },
  },
  data() {
    return {
      carouselIndex: 0,
    }
  },
};

</script>

<style scoped>
.no-result-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100% - 44px);
  width: 100%;
}
.no-result {
  padding: 5px;
}

.content-wrapper {
  height: 100%;
}

.swipe-instructions {
  position: fixed;
  z-index: 1;
  bottom: 64px;
  width: 100%;
}
.swipe-instructions ons-button,
.swipe-instructions .desc {
  color: white !important;
  font-size: 40px;
  position: absolute;
  text-shadow: 0px 0px 5px rgba(0,0,0,0.5);
}

.swipe-instructions .left-button {
  left: 20px;
}
.swipe-instructions .center-button {
  left: calc(50% - 30px);
  bottom: 30px;
  width: 60px;
}
.swipe-instructions .right-button {
  right: 20px;
}
.swipe-instructions .desc {
  left: calc(50% - 50px);
  bottom: -28px;
  width: 100px;
  height: 40px;
  margin: 0px;
  padding: 0px;
}
img.story {
  height: 100%;
}

/*
p {
  font-family: Futura;
}

.title {
  position: absolute;
  margin: auto;
  top: -20px;
  color: white;
  width: 100%;
  height: 22%;
  font-size: 1.5em;
  text-align: center;
  background: linear-gradient(rgba(95, 108, 175, 1), rgba(95, 108, 175, 1),  rgba(95, 108, 175, 0.8), rgba(95, 108, 175, 0))
}

.title p {
  padding-top: 0;
}

.store-img {
  position: absolute;
  margin: auto;
  height: auto;
  width: 100%;
}

.heart-icon {
  height: 45px;
  width: 45px;
  clear: both;
}

.settings {
  padding: 2px 10px 2px 10px;
  color: white;
}

ons-toolbar {
  background: #5F6CAF;
}

.bottom-toolbar {
  background-color: rgba(51, 51, 51, 0);
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 18%;
}

.content {
}

.bg-image {

  filter: blur(8px);
  -webkit-filter: blur(8px);

  width: 108%;

  position: absolute;
  top: 0;
  left: -20px;
  z-index: 10;
}

.address-text {
  padding-top: 0;
}

.name-text {
  padding-top: 0;
}

.on-swipe {
  height: 95vh !important;
}*/

</style>

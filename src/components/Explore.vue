<template>
  <v-ons-page class="explore-page">
    <v-ons-toolbar>
      <div class="left">
        <img class="heart-icon" src="./../assets/icons/Icon_Herz_weiß-13.png" alt="heart icon">
      </div>
      <div class="center">
      </div>
      <div class="right">
        <v-ons-icon class="settings" size="30px" icon="fa-cog"></v-ons-icon>
      </div>
    </v-ons-toolbar>
    <div v-if="locationsLength>0">
    
      <v-ons-carousel fullscreen auto-refresh swipeable overscrollable auto-scroll auto-scroll-ratio="0.15">
        <v-ons-carousel-item v-for="location in locations" :key="location.name" class="location-item">
          <Location :data="location" />
        </v-ons-carousel-item>
      </v-ons-carousel>
    </div>
  <div v-else>
    <p class="noresult">Keine Suchergebnisse gefunden.</p>
  </div>
  </v-ons-page>
</template>


<script>
const Location = () => import('./Location.vue')

export default {
  name: "Explore",
  components: {
    Location
  },
  computed: {
    locations() {
      return this.$store.getters.getFilteredLocations
    },
    locationsLength() {
      return this.$store.getters.getFilteredLocations.length
    }
  }
};

</script>

<style scoped>

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

  /* Add the blur effect */
  filter: blur(8px);
  -webkit-filter: blur(8px);

  /* Full height */
  width: 108%;

  /* Center and scale the image nicely */
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
}

</style>
<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="left">
        <img class="heart-icon" src="./../assets/icons/Icon_Herz_weiß-13.png" alt="heart icon">
      </div>
      <div class="center">
      </div>
      <div class="right">
        <v-ons-icon class="settings" icon="fa-cog"></v-ons-icon>
      </div>
    </v-ons-toolbar>
    <div >
  </div>
    <div class="content" v-if="true">
      <div class="center">
        <img class="store-img" src="./../assets/background/Prüssig_koell.jpg">
      
        <div class="title">
          <p>Prüssing und Köll</p>
          <p>Heinrichstraße 5</p>
        </div>S

        
      </div>
    </div>
    <div v-else>
    <p class="noresult">Keine Suchergebnisse gefunden.</p>
  </div>
  <div class="bottom-toolbar">
    <v-ons-icon class="left-arrow" size="45px" icon="fa-chevron-left"></v-ons-icon>
    <v-ons-icon class="right-arrow" size="45px" icon="fa-chevron-right"></v-ons-icon>
    <v-ons-icon class="up-arrow" size="45px" icon="fa-chevron-up"></v-ons-icon>
    <div class="txt-swipe-up">
      <p>KAUFEN? SWIPE UP</p>
    </div>
  </div>
  </v-ons-page>
</template>


<script>

export default {
  name: "Explore",
  data() {
    return {
      name: '',
    };
  },

};

</script>

<style scoped>

.title {
  position: absolute;
  margin: auto;
  color: white;
  width: 100%;
  font-size: 1.5em;
  text-align: center;
  background-color: rgba(95, 108, 175, 0.7);
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
  padding-right: 10px;
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

.left-arrow {
  position: absolute;
  left: 10vh;
  top: 9vh;
  color: white;
}

.right-arrow {
  position: absolute;
  left: 33vh;
  top: 9vh;
  color: white;
}

.up-arrow {
  position: absolute;
  left: 21vh;
  color: white;
}

.txt-swipe-up {
  position: absolute;
  left: 17.8vh;
  top: 7vh;
  width: 100px;
  text-align: center;
  color: white;
  text-shadow: 2px  2px 0 #000;
}

</style>
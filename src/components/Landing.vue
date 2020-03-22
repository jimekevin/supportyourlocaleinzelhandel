<template>
  <v-ons-page>
    <div class="content center background">
      <!-- Logo -->
      <div class="logo-container">
        <img class="logo-img" src="./../assets/imgs/Herz_Logo_negativ.png">
      
        <p class="text logo-caption">DIREKT ZU DIR</p>
      </div>

      <!-- Button: Allow Location -->
      <div class="center">
        <router-link to="explorer"><v-ons-button class="text-btn btn" >STANDORT FREIGEBEN</v-ons-button></router-link>
      </div>

      <!-- Text: oder -->
      <div class="text">
        oder
      </div>
        
      <!-- Button: PLZ input -->
      <div class="center">
        <router-link to="citycode"><v-ons-button class="text-btn btn" >POSTLEITZAHL EINGEBEN</v-ons-button></router-link>
      </div>
    </div>
  </v-ons-page>
</template>

<script>
//<v-ons-input placeholder="Input your name" float v-model="name"></v-ons-input>

export default {
  name: "Landing",
  data() {
    return {
      name: '',
    };
  }
};
</script>

<style type="text/css" scoped>
  .background {
    background: #5f6daf !important;
  }
  .text {
    text-align: center;
    color: #FFFFFF;
  }
  .text-btn {
    text-align: center;
    color: #5f6daf;
  }
  .logo-container {
    display: inline-block;
  }
  .logo-img {
    display: block;
    max-width: 80vw;
    max-height: 40vh;
    width: auto;
    height: auto;
    z-index: 2 !important;
  }
  .logo-caption {
    display: block;

  }
  .btn {
    background-color: #FFFFFF !important;
    margin: auto 0 !important;
    padding: 3px 40px !important;
    font-size: 14px !important;
    border-radius: 0px !important;
    z-index: 2 !important;
  }
</style>
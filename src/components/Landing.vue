<template>
  <v-ons-page>
    <div class="content background">
      <!-- Logo -->
      <div class="logo-container">
        <img class="logo-img" src="./../assets/imgs/Herz_Logo_negativ.png">
      
        <p class="font logo-caption" style="font-family: Futura;">DIREKT ZU DIR</p>
      </div>

      <div class="btn-container">
        <!-- Button: Allow Location -->
        <div>
          <router-link to="explore"><v-ons-button class="font btn" >STANDORT FREIGEBEN</v-ons-button></router-link>
        </div>

        <!-- Text: oder -->
        <div class="font">
          oder
        </div>
          
        <!-- Button: PLZ input -->
        <div>
          <router-link to="citycode"><v-ons-button class="font btn" >POSTLEITZAHL EINGEBEN</v-ons-button></router-link>
        </div>
      </div>
    </div>
  </v-ons-page>
</template>

<script>
//<v-ons-input placeholder="Input your name" float v-model="name"></v-ons-input>

export default {
  name: "Landing",
  data() {
    return {};
  }
};
</script>

<style type="text/css" scoped>
  div {
    text-align: center;
  }
  .background {
    background: #5f6daf !important;
  }
  .font {
    font-size: 2rem;
    font-weight: bold;
    font-style: italic;
    color: #FFFFFF;
  }
  .btn-container {
    margin-top: 15vh;
  }
  .btn {
    background-color: #FFFFFF !important;
    width: 38vh;
    height: 8vh;
    margin: auto auto !important;
    padding: 2.5vh 0.2vh !important;
    font-size: 1.2em;
    border-radius: 1px !important;
    z-index: 2 !important;

    color: #5f6daf;
  }
  .logo-container {
    display: inline-block;
  }
  .logo-img {
    display: block;
    max-width: 80vw;
    max-height: 38vh;
    width: auto;
    height: auto;
    z-index: 2 !important;
    margin-top: 8vh;
  }
  .logo-caption {
    display: block;
    margin-top: -8vh;
    z-index: 3 !important;
  }
</style>
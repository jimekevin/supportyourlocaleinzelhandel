<template>
  <v-ons-page>
    <div class="content background">
      <!-- Logo -->
      <div class="logo-container">
        <img class="logo-img" src="./../assets/imgs/Herz_Logo_negativ.png">
      
        <p class="font logo-caption">DIREKT ZU DIR</p>
      </div>

      <div class="btn-container">
        <!-- Button: Allow Location -->
        <div>
          <v-ons-input class="font input" placeholder="Input your name" float v-model="name"></v-ons-input>
        </div>

        <!-- Text: oder
        <div class="font">
          oder
        </div>-->
          
        <!-- Button: PLZ input -->
       <!-- <div>
          <router-link to="citycode"><v-ons-button class="font btn" >POSTLEITZAHL EINGEBEN</v-ons-button></router-link>
        </div> -->
      </div>
    </div>
  </v-ons-page>
</template>

<script>


export default {
  name: "CityCode",
  data() {
    return {
      name: '',
    };
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
  .input {
    background-color: #FFFFFF !important;
    color: #000000;
    width: 32vh;
    height: 8vh;
    margin: auto auto !important;
    padding: 2.5vh 0 !important;
    font-size: 1.2rem;
    border-radius: 0px !important;
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
  }
</style>
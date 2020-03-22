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
          <v-ons-input class="font input" placeholder="Postleitzahl bitte eingeben" float v-model="plzString"></v-ons-input>
        </div>

        
          
        <!-- Button: PLZ send -->
       <!-- <div>
          <router-link to="explore"><v-ons-button class="font btn" ><v-ons-icon></v-ons-icon></v-ons-button></router-link>
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
      plzString: '',
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
    height: auto;
    margin: auto auto !important;
    padding: 2vh !important;
    font-size: 2rem !important;
    border-radius: 1px !important;
    z-index: 2 !important;
  }
  v-ons-input+input {
    color: #000000;
    font-size: 5rem !important;
  }
  .input::-ms-input-placeholder, .input::-moz-placeholder, .input::-webkit-input-placeholder, .input::placeholder {
    color: peachpuff;
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
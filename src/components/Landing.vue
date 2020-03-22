<template>
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
                <router-link to="explore"><v-ons-button class="btn-continue" >OK</v-ons-button></router-link>
            </v-ons-list-item>
          </v-ons-list>
        </div>
            <!-- <Categories v-on:category-locations="filterLocationsByCategory" /> -->

      </v-ons-col>

      </div>

      

    </v-ons-page>
</template>


<script>

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
  .btn-continue {
    background-color: #38d786 !important;
    margin: auto 0 !important;
    padding: 3px 40px !important;
    font-size: 14px !important;
    border-radius: 40px !important;
    z-index: 2 !important;
  }
  </style>
<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="left">
        <img class="heart-icon" src="@/assets/icons/Icon_Herz_weiß-13.png" alt="heart icon">
      </div>
      <div class="center">
      </div>
      <div class="right">
        <ons-icon class="settings" icon="fa-cog"></ons-icon>
      </div>
    </v-ons-toolbar>
    <div class="content">
      <v-ons-col>
        <div class="center">
          <v-ons-list>
            <v-ons-list-item>
              <div class="title">
                <p>Prüssig und Köll <br>Heinrichstr. 5</p>
              </div>
            </v-ons-list-item>
            <img class="store-img" src="@/assets/background/Prüssig_koell.jpg">
          </v-ons-list>
        </div>
            <!-- <Categories v-on:category-locations="filterLocationsByCategory" /> -->

      </v-ons-col>
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
  margin: auto;
}

.store-img {
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

ons-list-item {
  background: #5F6CAF;
}

</style>
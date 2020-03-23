<template>
  <v-ons-page class="filters">
    <v-ons-toolbar>
      <div class="center">Produktkategorie</div>
      <div class="right">
        <router-link to="/city"><v-ons-toolbar-button  icon="fa-close"></v-ons-toolbar-button></router-link>
      </div>
    </v-ons-toolbar>
    <div id="filter-buttons">
      <div class="wrapper">
        <v-ons-row class="center">
          <v-ons-col>
            <v-ons-button modifier="outline">Sport</v-ons-button>
          </v-ons-col>
          <v-ons-col>
            <v-ons-button modifier="outline">Deko</v-ons-button>
          </v-ons-col>
        </v-ons-row>
        <v-ons-row class="center">
          <v-ons-col>
            <v-ons-button modifier="outline">Kinder</v-ons-button>
          </v-ons-col>
          <v-ons-col>
            <v-ons-button modifier="outline">Kleidung</v-ons-button>
          </v-ons-col>
        </v-ons-row>
        <v-ons-row class="center">
          <v-ons-col>
            <v-ons-button modifier="outline">Spiele</v-ons-button>
          </v-ons-col>
          <v-ons-col>
            <v-ons-button modifier="outline">Gadgets</v-ons-button>
          </v-ons-col>
        </v-ons-row>
      </div>
    </div>
    <v-ons-row id="apply-filter-button-container">
      <v-ons-button id="apply-filter-button" modifier="large">Filter entfernen</v-ons-button>
    </v-ons-row>
  </v-ons-page>
</template>


<script>

export default {
  name: "Filter",
  data() {
    return {
      name: '',
    };
  },

};

</script>

<style type="text/css" scoped>
.center {
  text-align: center;
}
.filters .page__background {
  background-color: #5f6daf;
}
#filter-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}
#filter-buttons ons-col {
  margin: 10px;
}
#filter-buttons ons-button {
  margin: 10px;
  width: 100%;
}
#apply-filter-button-container {
  position: absolute;
  bottom: 20px;
}
#apply-filter-button {
  margin: 10px;
}
</style>

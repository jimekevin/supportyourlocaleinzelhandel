<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="left">
        <!--<router-link to="/filter"><v-ons-toolbar-button style="" icon="fa-filter"></v-ons-toolbar-button></router-link>-->
        <v-ons-toolbar-button @click="dialogFilter=true" icon="fa-filter"></v-ons-toolbar-button>
      </div>
      <div class="center">Karte</div>
      <div class="right">
        <router-link to="/explore"><v-ons-toolbar-button  icon="fa-close"></v-ons-toolbar-button></router-link>
      </div>
    </v-ons-toolbar>
    <v-ons-dialog cancelable :visible.sync="dialogFilter">
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
        <v-ons-button id="apply-filter-button" modifier="large">
          <v-ons-icon icon="fa-trash"></v-ons-icon> Filter entfernen
        </v-ons-button>
      </v-ons-row>
    </v-ons-dialog>
    <div class="map">
      <l-map
        style="height: 100%; width: 100%"
        :zoom="zoom"
        :center="center"
        @update:zoom="zoomUpdated"
        @update:center="centerUpdated"
        @update:bounds="boundsUpdated"
      >
        <l-tile-layer :url="url"></l-tile-layer>
        <l-marker @click="goToProfile(location.id)" v-for="location in locations" :key="location.name" :lat-lng="location.geolocation">
          <!--<l-popup>
            <LocationContent :data="location" />
          </l-popup>-->
        </l-marker>
      </l-map>
    </div>
  </v-ons-page>
</template>

<script>

//const LocationContent = () => import("./LocationContent.vue");

//import { LMap, LTileLayer, LPopup } from "vue2-leaflet";
import { LMap, LTileLayer } from "vue2-leaflet";
export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    //LPopup,
    //LocationContent,
  },
  computed: {
    filter() {
      return this.$store.state.filter;
    },
    locations() {
      return this.$store.getters.getFilteredLocations;
    },
    dynamicSize() {
      return [this.iconSize, this.iconSize * 1.15];
    },
    dynamicAnchor() {
      return [this.iconSize / 2, this.iconSize * 1.15];
    }
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      zoom: 18,
      //Center of Ravensburg
      center: [47.780990, 9.615290],
      bounds: null,
      iconSize: 30,
      dialogFilter: true,
    };
  },
  methods: {
    goToProfile(id) {
      this.$router.push({ path: 'profile/' + id });
    },
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    centerUpdated(center) {
      this.center = center;
    },
    boundsUpdated(bounds) {
      this.bounds = bounds;
    }
  }
};
</script>

<style scoped>
.map {
  height: 812px;
  width: 100%;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.leaflet-marker-icon {
  height: 30px!important;
}
.filters .page__background {
  background-color: #5f6daf;
}
#filter-buttons ons-col {
  margin: 10px;
}
#filter-buttons ons-button {
  text-align: center;
  margin: 10px;
  width: 100%;
}
#apply-filter-button {
  margin: 10px;
}
</style>

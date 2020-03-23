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
          <h2>
            Kategorien
          </h2>
          <div class="filter" v-for="(filter, i) in filters" :key="i">
            <v-ons-switch v-model="filter.state"></v-ons-switch> 
            <span class="desc">{{filter.name}}</span>
          </div>
          <div class="right close-button" @click="dialogFilter=false;applyFilters()">
            <v-ons-button modifier="quiet"><v-ons-icon icon="fa-check"></v-ons-icon> Anwenden</v-ons-button>
          </div>
        </div>
      </div>
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
        <l-marker @click="goToProfile(location.id)" v-for="location in locations" :key="location.id" :lat-lng="location.geolocation">
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
    dynamicSize() {
      return [this.iconSize, this.iconSize * 1.15];
    },
    dynamicAnchor() {
      return [this.iconSize / 2, this.iconSize * 1.15];
    }
  },
  created() {
    this.locations = this.$store.getters.getFilteredLocations;
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      zoom: 18,
      //Center of Ravensburg
      center: [47.780990, 9.615290],
      bounds: null,
      iconSize: 30,
      dialogFilter: false,
      locations: false,
      filters: [
        { name: "Sport",    tag: "sport",    state: true },
        { name: "Kinder",   tag: "kinder",   state: true },
        { name: "Deko",     tag: "deko",     state: true },
        { name: "Spiele",   tag: "spiele",   state: true },
        { name: "Kleidung", tag: "kleidung", state: true },
        { name: "Gadgets",  tag: "gadgets" , state: true },
      ],
    };
  },
  methods: {
    applyFilters() {
      let newLocations = [];
      let allLocations = this.$store.getters.getFilteredLocations;
      for (var key1 in allLocations) {
        let location = allLocations[key1];
        for (var key2 in this.filters) {
          let filter = this.filters[key2];
          if (filter.state && location.category_tags.indexOf(filter.tag) !== -1) {
            console.log(location.category_tags);
            newLocations.push(location);
            break;
          }
        }
      }
      console.log(allLocations);
      console.log(newLocations);
      this.locations = newLocations;
    },
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
#filter-buttons {
  margin: 10px;
}
#filter-buttons h2 {
  margin-left: 10px;
}
#filter-buttons ons-col {
  margin: 10px;
}
#apply-filter-button {
  margin: 10px;
}

#filter-buttons .wrapper {
  padding: 10px;
}
#filter-buttons h2 {
  margin: 0px 10px 10px 10px;
}
#filter-buttons .toggleButton {
  background: red;
}
#filter-buttons .toggleButton.active {
  background: green;
}
#filter-buttons .filter {
  margin: 10px;
}
#filter-buttons .filter ons-switch {
  margin-top: -5px;
}
#filter-buttons .filter .desc {
  margin-left: 10px;
  font-size: 18px;
}
.close-button {
  text-align: right;
}
.close-button ons-button {
  display: inline-block;
  margin: auto;
}
</style>

<template>
  <div>
    <div class="right">
      <router-link to="/explore"><v-ons-button style="background-color:#FFFFFF; color:#5F6DAF" icon="fa-close"></v-ons-button></router-link>
    </div>
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
  </div>
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
      iconSize: 30
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
</style>

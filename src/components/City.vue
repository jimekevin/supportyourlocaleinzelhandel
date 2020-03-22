<template>
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
      <l-marker v-for="location in locations" :key="location.name" :lat-lng="location.geolocation">
        <l-popup>
        </l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script>

import { LMap, LTileLayer, LPopup} from "vue2-leaflet";
export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    LPopup,
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

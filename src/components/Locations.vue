<template>
  <div v-if="locationsLength>0">
    
      <v-ons-carousel fullscreen swipeable auto-scroll overscrollable>
      <v-ons-carousel-item v-for="location in locations" :key="location.name" class="location-item">
        <Location :data="location" />
      </v-ons-carousel-item>
      </v-ons-carousel>
    </div>
  <div v-else>
    <p class="noresult">Keine Suchergebnisse gefunden.</p>
  </div>
</template>


<script>
const Location = () => import('./Location.vue')

export default {
  name: "Locations",
  components: {
    Location
  },
  computed: {
    locations() {
      return this.$store.getters.getFilteredLocations
    },
    locationsLength() {
      return this.$store.getters.getFilteredLocations.length
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.locations {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  justify-content: center;
  /* grid-auto-rows: 1fr; */
  max-width: 80vw;
  margin: 0 auto;
}

@media screen and (max-width: 600px) {
  .locations {
    /* grid-template-columns: 1fr; */
    height: 100%;
  }
}

.noresult {
  color: rgba(80,80,80,1);
  padding: 100px;
}

.list {
  position: relative;
  backface-visibility: hidden;
}
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.list-move {
  transition: all 1s;
}
@media screen and (min-width: 1200px){
  .list-leave-active {
    max-width: 19%;
  }
}
.list-leave-active {
    position: absolute;
    max-width: 80vw;
  }

.location-item {
  height: 100%;
  background: rgba(95, 108, 175, 1);
}
</style>

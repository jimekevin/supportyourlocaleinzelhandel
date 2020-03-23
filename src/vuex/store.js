import Vue from 'vue'
import Vuex from 'vuex'
import db from "./../firebase/db.js"
import LocationData from "./../data/locations.json"
import StoryData from "./../data/stories.json"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filter: {
      categories: [],
      search: ''
    },
    // Should be empty if data is not retrieved locally
    locations: LocationData,
    stories: StoryData,
  },
  actions: {
    // Gets location from firebase and adds them to the vuex store, currently not necessary because of flatfile
    fetchLocations({ commit }) {
      db.collection("locations").orderBy("id").get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          commit("addLocation", doc.data())
        });
      });
    },
  },
  mutations: {
    addCategoryFilter(state, category) {
      if (state.filter.categories.indexOf(category) == -1) {
        state.filter.categories.push(category)
      } else {
        state.filter.categories.splice(state.filter.categories.indexOf(category), 1)
      }
    },
    searchFilter(state, searchText) {
      state.filter.search = searchText
    },
    addLocation(state, location) {
      location.geolocation=[location.location.latitude,location.location.longitude]
      state.locations.push(location)
    }
  },
  getters: {
    getFilteredLocations: state => {
      return state.locations.filter(function (location) {
        if (
          (location.city.toLowerCase().indexOf(state.filter.search.toLowerCase()) != -1||
            location.name.toLowerCase().indexOf(state.filter.search.toLowerCase()) != -1||
            location.description.toLowerCase().indexOf(state.filter.search.toLowerCase()) != -1||
            location.categories.map((category => category.toLowerCase().indexOf(state.filter.search.toLowerCase()) != -1)).indexOf(true)!=-1 )
          && (state.filter.categories.length === 0 || location.categories.map((category => state.filter.categories.indexOf(category) != -1)).indexOf(true) != -1)) {
          return location;
        }
      })
    },
    getSearchFilter: state => {
      return state.filter.search
    },
    getCategoryFilter: state => {
      return state.filter.categories;
    }
  },
  strict: true
})


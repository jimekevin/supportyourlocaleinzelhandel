<template>
  <div class="location">
    <div class="address">
      <img src="./../assets/imgs/musik-lange.jpg">
      <span>{{data.name}}</span>
      <span>{{data.street}}</span>
      <span>{{data.city}}</span>
    </div>
    <content :style="{ 'background-image': 'url('+selectedImage+')', 'background-position':horizontalPosition+'% '+verticalPosition+'%'}">
      <p>{{data.description}}</p>
    </content>
  </div>
</template>

<script>

export default {
  name: "LocationContent",
  props: {
    data: Object
  },
  data() {
   return {
     backgroundImages: [
      // './../assets/background/blob-shape_one.svg',
      // './../assets/background/blob-shape_two.svg',
      // './../assets/background/blob-shape_three.svg',
      // './../assets/background/blob-shape_four.svg',
      // './../assets/background/blob-shape_five.svg',
      // './../assets/background/blob-shape_six.svg',
      // './../assets/background/blob-shape_seven.svg',
      // './../assets/background/blob-shape_eight.svg',
      //'./../assets/background/blob-shape_nine.svg'
    ],
    selectedImage: '',
    verticalPosition: '',
    horizontalPosition: '',
   } 
  },
  created () {
    const idx = Math.floor(Math.random() * this.backgroundImages.length);
    this.selectedImage = this.backgroundImages[idx]
    this.verticalPosition = Math.floor(Math.random() * (60 - 30 + 1)) + 30
    this.horizontalPosition = Math.round(Math.random() * 100)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .location {
    height: 100%;
  }
</style>
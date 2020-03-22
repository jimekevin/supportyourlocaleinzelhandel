<template>
  <div class="location">
    <h2>{{data.name}}</h2>
    <p>
      <span>{{data.street}}</span><br>
      <span>{{data.city}}</span>
    </p>
    <p>{{data.description}}</p>
   <content>
    <div class="wrapper">
      <nav>
        <a
          rel="noopener nofollow noreferrer"
          target="_blank"
          v-if="data.website"
          :href="data.website"
          :title="'Website: '+data.name"
        ><v-ons-icon icon="fa-browser"></v-ons-icon></a>
        <a rel="noopener nofollow noreferrer" v-if="data.email" title="Email schreiben" :href="'mailto:'+data.email"><v-ons-icon icon="fa-envelope"></v-ons-icon></a>
        <a rel="noopener nofollow noreferrer" v-if="data.phone" title="Anrufen" :href="'tel:'+data.phone"><v-ons-icon icon="fa-phone"></v-ons-icon></a>
        <a rel="noopener nofollow noreferrer" target="_blank" title="facebook" v-if="data.facebook" :href="data.facebook"><v-ons-icon icon="fa-facebook"></v-ons-icon></a>
        <a rel="noopener nofollow noreferrer" target="_blank" title="Instagram" v-if="data.instagram" :href="data.instagram"><v-ons-icon icon="fa-instagram"></v-ons-icon></a>
      </nav>
    </div>
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
    selectedImage: '',
    verticalPosition: '',
    horizontalPosition: '',
   } 
  },
  created () {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ons-page {
  height: 300px;
  width: 300px;
  left: -150px;
  top: -300px;
  border-radius: 5px;
}

content {
  background-color: white;
  display: inline-block;
  width: 100%;
  flex: 1;
  text-align: left;
  color: rgba(80, 80, 80, 1);
  font-size: 13px;
  line-height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-repeat: no-repeat;
  position: relative;
}
.wrapper {
  margin: 20px;
}

/*content::after {
  content: '';
  width: 100%;
  height: 100%;
  background: white;
  position: absolute;
  left:0;
  top: 0;
  opacity: 0.93;
}*/


content p {
  flex-grow: 1;
}


</style>

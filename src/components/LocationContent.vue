<template>
<v-ons-gesture-detector>
    <div id="detect-area" class="location">    
      <h2>{{data.name}}</h2>
    <p>
      <span>{{data.street}}</span><br>
      <span>{{data.city}}</span>
    </p>
    <div class="immage">
      <img src="./../assets/imgs/musik-lange.jpg">
    </div>
    <content>
      <table style="width:100%">
        <tr>
          <td></td>
          <td align="center">
            <router-link to="profile/3">
              <v-ons-icon class="up-arrow" size="45px" icon="fa-chevron-up"></v-ons-icon>
            </router-link></td>
          <td></td>
        </tr>
         <tr>
          <td align="right"><v-ons-icon class="left-arrow" size="45px" icon="fa-chevron-left"></v-ons-icon></td>
          <td  align="center"><p class="txt-swipe-up">KAUFEN? SWIPE UP!</p></td>
          <td align="left">
            <v-ons-icon class="right-arrow" size="45px" icon="fa-chevron-right">
          </v-ons-icon></td>
        </tr>
      </table>
      <div class="bottom-toolbar">
    </div>
    </content>
  </div>
</v-ons-gesture-detector>
</template>

<script>

document.addEventListener('dragup', function(event) {
    if (event.target.matches('#detect-area')) {
      console.log('drag up is detected.');
    }
  });

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
    imgs: [
      {src: 'musik-lange.jpg'},
      {src: 'Prüssig_koell.jpg'},
      {src: 'musik-lange.jpg'},
      {src: 'Prüssig_koell.jpg'},
      {src: 'musik-lange.jpg'},
      {src: 'Prüssig_koell.jpg'},
      {src: 'musik-lange.jpg'},
      {src: 'Prüssig_koell.jpg'},
      {src: 'musik-lange.jpg'},
      {src: 'Prüssig_koell.jpg'}
    ]
   } 
  },
  computed() {
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

/*content::after {s
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

.up-arrow {
  padding: 20px;
  color: gray;
}

.left-arrow {
  color: gray;
}

.right-arrow {
  color: gray;
}

.txt-swipe-up {
  width: 65px;
  padding: 0 35px 0 35px;
  text-align: center;
}

.immage {
  margin: auto;
}

.location {
  text-align: center;
}

</style>

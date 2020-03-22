<template>
<v-ons-page id="profile">
<v-ons-toolbar>
  <div class="center">Produktkategorie</div>
</v-ons-toolbar>

<!--<v-ons-card>
  <div class="title">Lore ipsum</div>
  <div class="content">
    Lieferung möglich!
  </div>
</v-ons-card>-->

<v-ons-row>
  <v-ons-col>
    <div class="tag">Lieferung</div>
  </v-ons-col>
  <v-ons-col>
    <div class="tag">Bezahlung</div>
  </v-ons-col>
  <v-ons-col>
    <div class="tag">Social</div>
  </v-ons-col>
</v-ons-row>

<v-ons-row>
  <img class="cover-img" src="./../assets/imgs/laden.png">
</v-ons-row>

<v-ons-row class="info">
  <v-ons-col class="left">
    <v-ons-row class="field">Adresse</v-ons-row>
    <v-ons-row class="desc">{{profile.street}}<br>{{profile.city}}</v-ons-row>
    <div class="spacer"></div>
    <v-ons-row class="field">Kontakt</v-ons-row>
    <v-ons-row class="desc">{{profile.phone}}<br>{{profile.email}}<br>{{profile.website}}</v-ons-row>
  </v-ons-col>
  <v-ons-col class="right">
    <v-ons-row class="field">Angebot</v-ons-row>
    <v-ons-row class="desc">{{profile.description}}</v-ons-row>
    <div class="spacer"></div>
    <v-ons-row class="updated">Aktualisiert am 22.03.2020</v-ons-row>
  </v-ons-col>
</v-ons-row>

<v-ons-row class="icon-row">
  <div class="wrapper">
    <v-ons-fab v-if="profile.phone != ''" class="outline" @click="window.open('tel:'+profile.phone)" ripple position="bottom" href="google.de">
      <v-ons-icon class="outline" icon="fa-phone"></v-ons-icon>
    </v-ons-fab>
    <v-ons-fab v-if="profile.email != ''" class="outline" @click="window.open('mailto:'+profile.email)" ripple position="bottom">
      <v-ons-icon class="outline" icon="fa-envelope"></v-ons-icon>
    </v-ons-fab>
    <v-ons-fab v-if="profile.whatsapp != ''" class="outline" @click="window.open('https://api.whatsapp.com/send?phone='+profile.phone.replace(' ',''))" ripple position="bottom">
      <v-ons-icon class="outline" icon="fa-whatsapp"></v-ons-icon>
    </v-ons-fab>
    <v-ons-fab v-if="profile.instagram != ''" class="outline" @click="window.open('https://instagram.com/'+profile.instagram.replace('@',''))" ripple position="bottom">
      <v-ons-icon icon="fa-instagram"></v-ons-icon>
    </v-ons-fab>
  </div>
</v-ons-row>

</v-ons-page>
</template>

<script>
export default {
  name: "Profile",
  computed: {
    profile: {
      get() {
        let id = 2;
        let locations = this.$store.getters.getFilteredLocations;
        return locations[id];
      },
      set(newVal) {
        this.value = newVal;
      }
    }
  },
  data() {
    return {
    };
  },
  methods: {
    test() {
      this.address = "asd";
    }
  }
};
</script>

<style type="text/css" scoped>
#title {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.cover-img {
  margin: 10px;
  width: calc(100% - 20px);
  border-radius: 5px;
  height: 180px;
}
ons-col {
  margin: 10px;
}
.icon-row  {
  width: 100%;
  text-align: center;
  position: fixed;
  bottom: 20px;
}
.icon-row .wrapper {
  margin: auto;
}
.icon-row ons-fab {
  margin: 0px 15px;
}
.info .field {
  font-size: 16px;
  color: #5f6daf;
  margin-bottom: 5px;
}
.info .left,
.info .right {
}
.info .desc {
  font-size: 18px;
}
.info .spacer {
  display: inline-block;
  width: 100%;
  height: 10px;
}
.updated {
  color: #5f6daf;
  font-size: 18px;
}
.info .left {
  margin-right: 40px;
}
.info .right {
  flex-basis: 10%;
}
.outline {
  background: white;
  color: black;
}
.ons-fab.outline {
  border: 2px solid black;
}
.tag {
  margin: 5px;
  padding: 5px;
  border-radius: 15px;
  border: 1px solid #af5f94;
  color: #af5f94;
  text-align: center;
}
</style>


<template>
<v-ons-page id="profile">

<h1>Julius Brantner Brothandwerk</h1>
<!--<v-ons-card>
  <div class="title">Lore ipsum</div>
  <div class="content">
    Lieferung möglich!
  </div>
</v-ons-card>-->

<v-ons-row>
  <v-ons-col>
    <v-ons-button modifier="large outline">Lieferung</v-ons-button>
  </v-ons-col>
  <v-ons-col>
    <v-ons-button modifier="large outline">Bezahlung</v-ons-button>
  </v-ons-col>
  <v-ons-col>
    <v-ons-button modifier="large outline">Social</v-ons-button>
  </v-ons-col>
</v-ons-row>

<v-ons-row>
  <img class="cover-img" src="./../assets/imgs/laden.png">
</v-ons-row>

<v-ons-row class="info">
  <v-ons-col class="left">
    <v-ons-row class="field">Adresse</v-ons-row>
    <v-ons-row class="desc">Bahnhofstraße 5<br>80222 München</v-ons-row>
    <div class="spacer"></div>
    <v-ons-row class="field">Kontakt</v-ons-row>
    <v-ons-row class="desc">0178/12341234<br>waw-bäcker.de<br>mail@bäcker.de</v-ons-row>
  </v-ons-col>
  <v-ons-col class="right">
    <v-ons-row class="field">Angebot</v-ons-row>
    <v-ons-row class="desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam diam diam diam diam diam diam diam voluptua.</v-ons-row>
    <div class="spacer"></div>
    <v-ons-row class="updated">Aktualisiert am 23.02</v-ons-row>
  </v-ons-col>
</v-ons-row>

<v-ons-row class="icon-row">
  <div class="wrapper">
  <v-ons-fab ripple position="bottom">
    <v-ons-icon icon="fa-phone"></v-ons-icon>
  </v-ons-fab>
  <v-ons-fab ripple position="bottom">
    <v-ons-icon icon="fa-envelope"></v-ons-icon>
  </v-ons-fab>
  <v-ons-fab ripple position="bottom">
    <v-ons-icon icon="fa-whatsapp"></v-ons-icon>
  </v-ons-fab>
  <v-ons-fab ripple position="bottom">
    <v-ons-icon icon="fa-comment-dots"></v-ons-icon>
  </v-ons-fab>
  </div>
</v-ons-row>

</v-ons-page>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      profile: {}
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
#profile {
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
.info .right {
  margin-left: 40px;
}
.info .right {
  flex-basis: 40%;
}
</style>


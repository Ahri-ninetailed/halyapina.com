<template>
  <v-container class="pa-0" fluid>
    <div class="home-main-pic">
    </div>

    <v-row class="pt-12 pb-4" >
      <v-col>
        <div class="main-h text-center h-neucha-regular">Проекты</div>
      </v-col>
    </v-row>

    <v-row class="row-margin-horizontal">
      <v-col xs="3" sm="3" class="text-center col-padding-vertical">
        <main-card name="Lines" :imageHeight="cardHeight" imgPath="src/images/MainPage/MainCards/many_chairs.jpg" imgHoverPath="src/images/MainPage/MainCards/many_chairs_hover.jpg" />
      </v-col>
      <v-col xs="3" sm="3" class="text-center col-padding-vertical">
        <main-card name="Dragonfly" :imageHeight="cardHeight" imgPath="src/images/MainPage/MainCards/flys.jpg" imgHoverPath="src/images/MainPage/MainCards/flys_hover.jpg" />
      </v-col>
      <v-col xs="3" sm="3" class="text-center col-padding-vertical">
        <main-card name="Fireflfly" :imageHeight="cardHeight" imgPath="src/images/MainPage/MainCards/another_flys.jpg" imgHoverPath="src/images/MainPage/MainCards/another_flys_hover.jpg" />
      </v-col>
      <v-col xs="3" sm="3" class="text-center col-padding-vertical">
        <main-card name="Fennel" :imageHeight="cardHeight" imgPath="src/images/MainPage/MainCards/3.jpg" imgHoverPath="src/images/MainPage/MainCards/3_hover.jpg"/>
      </v-col>
    </v-row>

    <v-row class="row-margin-horizontal">
      <v-col xs="3" sm="3" class="text-center col-padding-vertical">
        <main-card name="Alien" :imageHeight="cardHeight" imgPath="src/images/MainPage/MainCards/wave.jpg" imgHoverPath="src/images/MainPage/MainCards/wave_hover.jpg" />
      </v-col>
      <v-col xs="3" sm="3" class="text-center col-padding-vertical">
        <main-card name="UFO" :imageHeight="cardHeight" imgPath="src/images/MainPage/MainCards/ufo.jpg" imgHoverPath="src/images/MainPage/MainCards/ufo_hover.jpg" />
      </v-col>
      <v-col xs="3" sm="3" class="text-center col-padding-vertical">
        <main-card name="SpaceJam" :imageHeight="cardHeight" imgPath="src/images/MainPage/MainCards/launch.jpg" imgHoverPath="src/images/MainPage/MainCards/launch_hover.jpg"/>
      </v-col>
      <v-col xs="3" sm="3" class="text-center col-padding-vertical">
        <main-card name="Bubble" :imageHeight="cardHeight" imgPath="src/images/MainPage/MainCards/bubble.jpg" imgHoverPath="src/images/MainPage/MainCards/bubble_hover.jpg"/>
      </v-col>
    </v-row>

    <v-row class="row-margin-horizontal">
      <v-col xs="3" sm="3" class="text-center col-padding-vertical">
        <main-card name="Crown bed" :imageHeight="cardHeight" imgPath="src/images/MainPage/MainCards/tree.jpg" imgHoverPath="src/images/MainPage/MainCards/tree_hover.jpg"/>
      </v-col>
        
      <v-col xs="6" sm="6" class="text-center">
        <img class="pr-12" height="500" src="../images/MainPage/drawing.png" alt="drawing_image">
      </v-col>
    </v-row>
  </v-container>
</template>
    
<script>
import MainCard from '@/components/MainCard.vue';

export default {
  data() {
    return {
      cardHeight: "200",
    };
  },
  components: { MainCard },
  name: 'HomePage',
}
</script>

<style scoped>
.col-padding-vertical {
  padding-bottom: 75px; 
  padding-left: 20px;
}

.row-margin-horizontal {
  margin-left: 8px; 
  margin-right: 8px;
}
.home-main-pic {
  background-image: url('../images/MainPage/maintable.jpg');
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  height: 58vh;
}

.main-h {
  font-size: 50px;
}
</style>
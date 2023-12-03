<template>
  <v-container class="pa-0" fluid>
    <div class="home-main-pic">
    </div>

    <v-row class="pa-12">
      <v-col>
        <div class="main-h text-center h-neucha-regular">Студенческие работы</div>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="col-xs-3 text-center">
        <main-card :imageHeight="cardHeight" imgPath="src/images/MainCards/many_chairs.jpg" imgHoverPath="src/images/MainCards/many_chairs_hover.jpg" />
      </v-col>
      <v-col class="col-xs-3 text-center">
        <main-card :imageHeight="cardHeight" imgPath="src/images/MainCards/flys.jpg" imgHoverPath="src/images/MainCards/flys_hover.jpg" />
      </v-col>
      <v-col class="col-xs-3 text-center">
        <main-card :imageHeight="cardHeight" imgPath="src/images/MainCards/another_flys.jpg" imgHoverPath="src/images/MainCards/another_flys_hover.jpg" />
      </v-col>
      <v-col class="col-xs-3 text-center">
        <main-card :imageHeight="cardHeight" imgPath="src/images/MainCards/3.jpg" imgHoverPath="src/images/MainCards/3_hover.jpg"/>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="col-xs-3 text-center">
        <main-card :imageHeight="cardHeight" imgPath="src/images/MainCards/wave.jpg" imgHoverPath="src/images/MainCards/wave_hover.jpg" />
      </v-col>
      <v-col class="col-xs-3 text-center">
        <main-card :imageHeight="cardHeight" imgPath="src/images/MainCards/ufo.jpg" imgHoverPath="src/images/MainCards/ufo_hover.jpg" />
      </v-col>
      <v-col class="col-xs-3 text-center">
        <main-card :imageHeight="cardHeight" imgPath="src/images/MainCards/launch.jpg" imgHoverPath="src/images/MainCards/launch_hover.jpg"/>
      </v-col>
      <v-col class="col-xs-3 text-center">
        <main-card :imageHeight="cardHeight" imgPath="src/images/MainCards/bubble.jpg" imgHoverPath="src/images/MainCards/bubble_hover.jpg"/>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="col-xs-3 text-center">
        <main-card :imageHeight="cardHeight" imgPath="src/images/MainCards/tree.jpg" imgHoverPath="src/images/MainCards/tree_hover.jpg"/>
      </v-col>

      <v-col class="col-xs-3 text-center" />
      <v-col class="col-xs-3 text-center" />
      <v-col class="col-xs-3 text-center" />
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
.home-main-pic {
  background-image: url('../images/main-top-img.jpg');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 40vh;
}

.main-h {
  font-size: 50px;
}
</style>
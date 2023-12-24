<template>
  <v-container class="pa-0" fluid>
    <div class="home-main-pic">
    </div>

    <v-row class="pt-6 pb-4" >
      <v-col>
        <div class="main-h text-center h-neucha-regular">Проекты</div>
      </v-col>
    </v-row>

    <v-row class="row-margin-horizontal pt-3">
      <v-col cols="3" class="text-center col-padding-vertical pt-xs-0 pt-sm-0 pt-md-0">
        <main-card name="Lines" imgPath="src/images/MainPage/MainCards/many_chairs.jpg" imgHoverPath="src/images/MainPage/MainCards/many_chairs_hover.jpg" />
      </v-col>
      <v-col cols="3" class="text-center col-padding-vertical pt-xs-0 pt-sm-0 pt-md-0">
        <main-card name="Dragonfly" imgPath="src/images/MainPage/MainCards/flys.jpg" imgHoverPath="src/images/MainPage/MainCards/flys_hover.jpg" />
      </v-col>
      <v-col cols="3" class="text-center col-padding-vertical pt-xs-0 pt-sm-0 pt-md-0">
        <main-card name="Fireflfly" imgPath="src/images/MainPage/MainCards/another_flys.jpg" imgHoverPath="src/images/MainPage/MainCards/another_flys_hover.jpg" />
      </v-col>
      <v-col cols="3" class="text-center col-padding-vertical pt-xs-0 pt-md-0">
        <main-card name="Fennel" imgPath="src/images/MainPage/MainCards/3.jpg" imgHoverPath="src/images/MainPage/MainCards/3_hover.jpg"/>
      </v-col>
      <v-col cols="3" class="text-center col-padding-vertical">
        <main-card name="Alien" imgPath="src/images/MainPage/MainCards/wave.jpg" imgHoverPath="src/images/MainPage/MainCards/wave_hover.jpg" />
      </v-col>
      <v-col cols="3" class="text-center col-padding-vertical">
        <main-card name="UFO" imgPath="src/images/MainPage/MainCards/ufo.jpg" imgHoverPath="src/images/MainPage/MainCards/ufo_hover.jpg" />
      </v-col>
      <v-col cols="3" class="text-center col-padding-vertical">
        <main-card name="SpaceJam" imgPath="src/images/MainPage/MainCards/launch.jpg" imgHoverPath="src/images/MainPage/MainCards/launch_hover.jpg"/>
      </v-col>
      <v-col cols="3" class="text-center col-padding-vertical">
        <main-card name="Bubble" imgPath="src/images/MainPage/MainCards/bubble.jpg" imgHoverPath="src/images/MainPage/MainCards/bubble_hover.jpg"/>
      </v-col>
      <v-col cols="3" class="text-center col-padding-vertical">
        <main-card name="Crown bed" imgPath="src/images/MainPage/MainCards/tree.jpg" imgHoverPath="src/images/MainPage/MainCards/tree_hover.jpg"/>
      </v-col>
      <v-col cols="9" :style="dawingGirlLeftPadding" class="pt-2">
        <img class="drawing-girl" src="../images/MainPage/drawing.jpg" alt="drawing_image">
      </v-col>
    </v-row>
  </v-container>
</template>
    
<script>
import MainCard from '@/components/MainCard.vue';

export default {
  data() {
    return {
      dawingGirlLeftPadding: {}
    };
  },
  created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  components: { MainCard },
  name: 'HomePage',
  methods: {
    getDrawingGirlLeftPadding() {
      let currVw = this.currentWidthToVw();

      const breakpoints = [
        { start: 55, end: 58, value: 2.3 },
        { start: 58, end: 61, value: 2.5 },
        { start: 61, end: 64, value: 2.7 },
        { start: 64, end: 67, value: 3.2 },
        { start: 67, end: 70, value: 3.6 },
        { start: 70, end: 73, value: 4.1 },
        { start: 73, end: 76, value: 4.3 },
        { start: 76, end: 79, value: 4.5 },
        { start: 79, end: 82, value: 4.7 },
        { start: 82, end: 85, value: 5 },
        { start: 85, end: 88, value: 5.3 },
        { start: 88, end: 91, value: 5.5 },
        { start: 91, end: 94, value: 6 },
        { start: 94, end: 97, value: 6 },
        { start: 97, end: 100, value: 6 },
      ];

      for (const breakpoint of breakpoints) {
        if (currVw <= breakpoint.end && currVw >= breakpoint.start) {
          return {
            paddingLeft: `${breakpoint.value}vw`,
          };
        }
      }

      return {
        paddingLeft: '6vw',
      };
    },
    currentWidthToVw() {
      const currWidth = window.innerWidth;
      const maxWidth = window.screen.width;
      return (100 * currWidth) / maxWidth
    },
    handleResize() {
      this.dawingGirlLeftPadding = this.getDrawingGirlLeftPadding();
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.handleResize);
    },
  }
}
</script>

<style scoped>
.col-padding-vertical {
  padding-bottom: 11vh; 
  padding-left: 3vh;
}

.row-margin-horizontal {
  margin-left: 1vh; 
  margin-right: 1vh;
}
.home-main-pic {
  background-image: url('../images/MainPage/maintable.jpg');
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  height: 55vh;
}

.drawing-girl {
  height: 59.5vh;
}

.main-h {
  font-size: 6vh;
}
</style>
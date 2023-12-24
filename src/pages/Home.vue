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
      <v-col xs="3" sm="4" md="3" class="text-center col-padding-vertical pt-xs-0 pt-sm-0 pt-md-0">
        <main-card name="Lines" imgPath="src/images/MainPage/MainCards/many_chairs.jpg" imgHoverPath="src/images/MainPage/MainCards/many_chairs_hover.jpg" />
      </v-col>
      <v-col xs="3" sm="4" md="3" class="text-center col-padding-vertical pt-xs-0 pt-sm-0 pt-md-0">
        <main-card name="Dragonfly" imgPath="src/images/MainPage/MainCards/flys.jpg" imgHoverPath="src/images/MainPage/MainCards/flys_hover.jpg" />
      </v-col>
      <v-col xs="3" sm="4" md="3" class="text-center col-padding-vertical pt-xs-0 pt-sm-0 pt-md-0">
        <main-card name="Fireflfly" imgPath="src/images/MainPage/MainCards/another_flys.jpg" imgHoverPath="src/images/MainPage/MainCards/another_flys_hover.jpg" />
      </v-col>
      <v-col xs="3" sm="4" md="3" class="text-center col-padding-vertical pt-xs-0 pt-md-0">
        <main-card name="Fennel" imgPath="src/images/MainPage/MainCards/3.jpg" imgHoverPath="src/images/MainPage/MainCards/3_hover.jpg"/>
      </v-col>
      <v-col xs="3" sm="4" md="3" class="text-center col-padding-vertical">
        <main-card name="Alien" imgPath="src/images/MainPage/MainCards/wave.jpg" imgHoverPath="src/images/MainPage/MainCards/wave_hover.jpg" />
      </v-col>
      <v-col xs="3" sm="4" md="3" class="text-center col-padding-vertical">
        <main-card name="UFO" imgPath="src/images/MainPage/MainCards/ufo.jpg" imgHoverPath="src/images/MainPage/MainCards/ufo_hover.jpg" />
      </v-col>
      <v-col xs="3" sm="4" md="3" class="text-center col-padding-vertical">
        <main-card name="SpaceJam" imgPath="src/images/MainPage/MainCards/launch.jpg" imgHoverPath="src/images/MainPage/MainCards/launch_hover.jpg"/>
      </v-col>
      <v-col xs="3" sm="4" md="3" class="text-center col-padding-vertical">
        <main-card name="Bubble" imgPath="src/images/MainPage/MainCards/bubble.jpg" imgHoverPath="src/images/MainPage/MainCards/bubble_hover.jpg"/>
      </v-col>
      <v-col xs="3" sm="4" md="3" class="text-center col-padding-vertical pr-0">
        <main-card name="Crown bed" imgPath="src/images/MainPage/MainCards/tree.jpg" imgHoverPath="src/images/MainPage/MainCards/tree_hover.jpg"/>
      </v-col>
      <v-col xs="9" sm="8" md="9" class="text-start">
      <!-- <v-col xs="9" sm="9" :style="dawingGirlLeftPadding" class="text-start pt-0"> -->
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
      // dawingGirlLeftPadding: {}
    };
  },
  // created() {
  //   window.addEventListener('resize', this.handleResize);
  //   this.handleResize();
  // },
  components: { MainCard },
  name: 'HomePage',
  methods: {
    // getDrawingGirlLeftPadding() {
    //   let currVw = this.currentWidthToVw();
    //   console.log(currVw);

    //   if (currVw <= 79 && currVw >= 76) {
    //     return {
    //       paddingLeft: '20vw'
    //     };
    //   }
    //   if (currVw <= 79 && currVw >= 76) {
    //     return {
    //       paddingLeft: '20vw'
    //     };
    //   }
    //   if (currVw <= 79 && currVw >= 76) {
    //     return {
    //       paddingLeft: '20vw'
    //     };
    //   }
    //   if (currVw <= 79 && currVw >= 76) {
    //     return {
    //       paddingLeft: '20vw'
    //     };
    //   }
    //   if (currVw <= 79 && currVw >= 76) {
    //     return {
    //       paddingLeft: '20vw'
    //     };
    //   }
    //   if (currVw <= 79 && currVw >= 76) {
    //     return {
    //       paddingLeft: '20vw'
    //     };
    //   }
    //   if (currVw <= 82 && currVw >= 79) {
    //     return {
    //       paddingLeft: '20vw'
    //     };
    //   }
    //   if (currVw <= 85 && currVw >= 82) {
    //     return {
    //       paddingLeft: '20vw'
    //     };
    //   }
    //   if (currVw <= 88 && currVw >= 85) {
    //     return {
    //       paddingLeft: '20vw'
    //     };
    //   }
    //   if (currVw <= 91 && currVw >= 88) {
    //     return {
    //       paddingLeft: '20vw'
    //     };
    //   }
    //   if (currVw <= 94 && currVw >= 91) {
    //     return {
    //       paddingLeft: '20vw'
    //     };
    //   }
    //   if (currVw <= 97 && currVw >= 94) {
    //     return {
    //       paddingLeft: '2.8vw'
    //     };
    //   }
    //   if (currVw <= 100 && currVw >= 97) {
    //     return {
    //       paddingLeft: '3vw'
    //     };
    //   }
    // },
    // currentWidthToVw() {
    //   const currWidth = window.innerWidth;
    //   const maxWidth = window.screen.width;
    //   return (100 * currWidth) / maxWidth
    // },
    // handleResize() {
    //   this.dawingGirlLeftPadding = this.getDrawingGirlLeftPadding();
    // },
    // beforeDestroy() {
    //   window.removeEventListener('resize', this.handleResize);
    // },
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
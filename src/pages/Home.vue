<template>
  <v-container class="pa-0" fluid style="overflow: hidden;">
    <a href="anima">
      <div class="home-main-pic">
      </div>
    </a>

    <v-row class="pt-6 pb-4" >
      <v-col>
        <div class="main-h text-center h-neucha-regular">Проекты</div>
      </v-col>
    </v-row>

    <v-row class="row-margin-horizontal pt-3">
      <v-col lg="3" md="4" sm="6" cols="12" class="text-center col-margin-padding pt-lg-0">
        <main-card name="Lines" href="lines" imgPath="src/images/MainPage/MainCards/many_chairs.jpg" imgHoverPath="src/images/MainPage/MainCards/many_chairs_hover.jpg" />
      </v-col>
      <v-col lg="3" md="4" sm="6" cols="12" class="text-center col-margin-padding pt-lg-0">
        <main-card name="Dragonfly" href="dragonfly" imgPath="src/images/MainPage/MainCards/flys.jpg" imgHoverPath="src/images/MainPage/MainCards/flys_hover.jpg" />
      </v-col>
      <v-col lg="3" md="4" sm="6" cols="12" class="text-center col-margin-padding pt-lg-0">
        <main-card name="Firefly" href="firefly" imgPath="src/images/MainPage/MainCards/another_flys.jpg" imgHoverPath="src/images/MainPage/MainCards/another_flys_hover.jpg" />
      </v-col>
      <v-col lg="3" md="4" sm="6" cols="12" class="text-center col-margin-padding pt-lg-0">
        <main-card name="Fennel" href="fennel" imgPath="src/images/MainPage/MainCards/3.jpg" imgHoverPath="src/images/MainPage/MainCards/3_hover.jpg"/>
      </v-col>
      <v-col lg="3" md="4" sm="6" cols="12" class="text-center col-margin-padding">
        <main-card name="Alien" href="alien" imgPath="src/images/MainPage/MainCards/wave.jpg" imgHoverPath="src/images/MainPage/MainCards/wave_hover.jpg" />
      </v-col>
      <v-col lg="3" md="4" sm="6" cols="12" class="text-center col-margin-padding">
        <main-card name="UFO" href="ufo" imgPath="src/images/MainPage/MainCards/ufo.jpg" imgHoverPath="src/images/MainPage/MainCards/ufo_hover.jpg" />
      </v-col>
      <v-col lg="3" md="4" sm="6" cols="12" class="text-center col-margin-padding">
        <main-card name="SpaceJam" href="/spacejam" imgPath="src/images/MainPage/MainCards/launch.jpg" imgHoverPath="src/images/MainPage/MainCards/launch_hover.jpg"/>
      </v-col>
      <v-col lg="3" md="4" sm="6" cols="12" class="text-center col-margin-padding">
        <main-card name="Bubble" href="/bubble" imgPath="src/images/MainPage/MainCards/bubble.jpg" imgHoverPath="src/images/MainPage/MainCards/bubble_hover.jpg"/>
      </v-col>
      <v-col lg="3" md="4" sm="12" cols="12" class="text-center col-margin-padding" id="CrownBed">
        <main-card name="Crown bed" href="/crownbed" imgPath="src/images/MainPage/MainCards/tree.jpg" imgHoverPath="src/images/MainPage/MainCards/tree_hover.jpg"/>
      </v-col>
      <v-col lg="3" md="4" sm="12" cols="12" :style="dawingGirlLeftMargin" class="pt-2 pl-0">
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
      dawingGirlLeftMargin: {}
    };
  },
  created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  mounted() {
    this.handleResize()
  },
  components: { MainCard },
  name: 'HomePage',
  computed: {
    getAdditonalVWMarginValueForDrawingGirl() {
      if (this.$vuetify.display.md) {
        return 1.5;
      } else if (this.$vuetify.display.sm) {
        return 1;
      } else if (this.$vuetify.display.xs) {
        return 3;
      } else {
        return 0.9;
      }
    }
  },
  methods: {
    pxToVw(px){
      const windowWidth = window.innerWidth; // Получение ширины окна браузера
      return 100 * px / windowWidth; // Вычисление процента
    },
    getDrawingGirlLeftMargin() {
      this.widthColumnOfProject  = document.getElementById('CrownBed')?.getBoundingClientRect()?.width;
      this.widthImgOfProject = document.getElementById('projectImage')?.getBoundingClientRect()?.width;
      if (this.widthColumnOfProject === undefined || this.widthImgOfProject === undefined) {
        return {
          marginLeft: '0vw',
        };
      } else {
        return {
          marginLeft: `${this.pxToVw((this.widthColumnOfProject-this.widthImgOfProject)/2) + this.getAdditonalVWMarginValueForDrawingGirl}vw`,
        };
      }
    },
    handleResize() {
      this.dawingGirlLeftMargin = this.getDrawingGirlLeftMargin();
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.handleResize);
    },
  }
}
</script>

<style scoped>
.col-margin-padding {
  margin-bottom: 11vh; 
  padding-bottom: 0vh;
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
<template>
  <v-container class="pa-0" fluid style="overflow: hidden;">
    <a href="anima">
      <div class="home-main-pic">
      </div>
    </a>

    <v-row class="pt-6 pb-4" >
      <v-col>
        <div class="main-h text-center h-neucha-regular">{{ $t('home.h') }}</div>
      </v-col>
    </v-row>

    <v-row class="row-margin-horizontal pt-3">
      <v-col lg="3" md="4" sm="6" cols="12" class="text-center col-margin-padding pt-lg-0">
        <main-card :name="$t('projects.lines')" href="lines" :imgPath="imgPath('many_chairs.jpg')" :imgHoverPath="imgPath('many_chairs_hover.jpg')" />
      </v-col>
      <v-col lg="3" md="4" sm="6" cols="12" class="text-center col-margin-padding pt-lg-0">
        <main-card :name="$t('projects.dragonfly')" href="dragonfly" :imgPath="imgPath('flys.jpg')" :imgHoverPath="imgPath('flys_hover.jpg')" />
      </v-col>
      <v-col lg="3" md="4" sm="6" cols="12" class="text-center col-margin-padding pt-lg-0">
        <main-card :name="$t('projects.firefly')" href="firefly" :imgPath="imgPath('another_flys.jpg')" :imgHoverPath="imgPath('another_flys_hover.jpg')" />
      </v-col>
      <v-col lg="3" md="4" sm="6" cols="12" class="text-center col-margin-padding pt-lg-0">
        <main-card :name="$t('projects.fennel')" href="fennel" :imgPath="imgPath('3.jpg')" :imgHoverPath="imgPath('3_hover.jpg')"/>
      </v-col>
      <v-col lg="3" md="4" sm="6" cols="12" class="text-center col-margin-padding">
        <main-card :name="$t('projects.alien')" href="alien" :imgPath="imgPath('wave.jpg')" :imgHoverPath="imgPath('wave_hover.jpg')" />
      </v-col>
      <v-col lg="3" md="4" sm="6" cols="12" class="text-center col-margin-padding">
        <main-card :name="$t('projects.ufo')" href="ufo" :imgPath="imgPath('ufo.jpg')" :imgHoverPath="imgPath('ufo_hover.jpg')" />
      </v-col>
      <v-col lg="3" md="4" sm="6" cols="12" class="text-center col-margin-padding">
        <main-card :name="$t('projects.spacejam')" href="/spacejam" :imgPath="imgPath('launch.jpg')" :imgHoverPath="imgPath('launch_hover.jpg')"/>
      </v-col>
      <v-col lg="3" md="4" sm="6" cols="12" class="text-center col-margin-padding">
        <main-card :name="$t('projects.bubble')" href="/bubble" :imgPath="imgPath('bubble.jpg')" :imgHoverPath="imgPath('bubble_hover.jpg')"/>
      </v-col>
      <v-col lg="3" md="4" sm="12" cols="12" class="text-center col-margin-padding" id="CrownBed')">
        <main-card :name="$t('projects.crownbed')" href="/crownbed" :imgPath="imgPath('tree.jpg')" :imgHoverPath="imgPath('tree_hover.jpg')"/>
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
    imgPath(img) {
      return new URL(`../images/MainPage/MainCards/${img}`, import.meta.url).href;
    },
    pxToVw(px){
      const windowWidth = window.innerWidth; // Получение ширины окна браузера
      return 100 * px / windowWidth; // Вычисление процента
    },
    getDrawingGirlLeftMargin() {
      this.widthColumnOfProject  = document.getElementById('CrownBed')?.getBoundingClientRect()?.width;
      this.widthImgOfProject = document.getElementById('projectSketch')?.getBoundingClientRect()?.width;
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
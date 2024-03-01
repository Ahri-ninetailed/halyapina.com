<template>
  <wait-pls :is-loaded="this.isLoaded">
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
          <main-card :style="mainCardStyle" :name="$t('projects.lines')" href="lines" :imgPath="imgPath('many_chairs.webp')" :imgHoverPath="imgPath('many_chairs_hover.webp')" />
        </v-col>
        <v-col lg="3" md="4" sm="6" cols="12" class="text-center col-margin-padding pt-lg-0">
          <main-card :style="mainCardStyle" :name="$t('projects.dragonfly')" href="dragonfly" :imgPath="imgPath('flys.webp')" :imgHoverPath="imgPath('flys_hover.webp')" />
        </v-col>
        <v-col lg="3" md="4" sm="6" cols="12" class="text-center col-margin-padding pt-lg-0">
          <main-card :style="mainCardStyle" :name="$t('projects.firefly')" href="firefly" :imgPath="imgPath('another_flys.webp')" :imgHoverPath="imgPath('another_flys_hover.webp')" />
        </v-col>
        <v-col lg="3" md="4" sm="6" cols="12" class="text-center col-margin-padding pt-lg-0">
          <main-card :style="mainCardStyle" :name="$t('projects.fennel')" href="fennel" :imgPath="imgPath('3.webp')" :imgHoverPath="imgPath('3_hover.webp')"/>
        </v-col>
        <v-col lg="3" md="4" sm="6" cols="12" class="text-center col-margin-padding">
          <main-card :style="mainCardStyle" :name="$t('projects.alien')" href="alien" :imgPath="imgPath('wave.webp')" :imgHoverPath="imgPath('wave_hover.webp')" />
        </v-col>
        <v-col lg="3" md="4" sm="6" cols="12" class="text-center col-margin-padding">
          <main-card :style="mainCardStyle" :name="$t('projects.ufo')" href="ufo" :imgPath="imgPath('ufo.webp')" :imgHoverPath="imgPath('ufo_hover.webp')" />
        </v-col>
        <v-col lg="3" md="4" sm="6" cols="12" class="text-center col-margin-padding">
          <main-card :style="mainCardStyle" :name="$t('projects.spacejam')" href="/spacejam" :imgPath="imgPath('launch.webp')" :imgHoverPath="imgPath('launch_hover.webp')"/>
        </v-col>
        <v-col lg="3" md="4" sm="6" cols="12" class="text-center col-margin-padding">
          <main-card :style="mainCardStyle" :name="$t('projects.bubble')" href="/bubble" :imgPath="imgPath('bubble.webp')" :imgHoverPath="imgPath('bubble_hover.webp')"/>
        </v-col>
        <v-col lg="3" md="4" sm="12" cols="12" class="text-center col-margin-padding" id="CrownBed')">
          <main-card :style="mainCardStyle" :name="$t('projects.crownbed')" href="/crownbed" :imgPath="imgPath('tree.webp')" :imgHoverPath="imgPath('tree_hover.webp')"/>
        </v-col>
        <v-col lg="3" md="4" sm="12" cols="12" class="drawing-margin-padding" :style="drawingGirlMargin">
          <img class="drawing-girl" src="../images/MainPage/drawing.webp" alt="drawing_image">
        </v-col>
      </v-row>
    </v-container>
  </wait-pls>

</template>
    
<script>
import MainCard from '@/components/MainCard.vue';
import WaitPls from '@/components/WaitPls.vue';

export default {
  data() {
    return {
      mainCardWidthValue: 29.33,
      isLoaded: false,
    };
  },
  components: { MainCard, WaitPls },
  name: 'HomePage',
  mounted() {
    window.onload = () => {
      this.isLoaded = true;
    };
  },
  computed: {
    mainCardStyle() {
      return {
        width: `${this.mainCardWidthValue}vh`,
      }
    },
    drawingGirlMargin() {
      let countOfCards = 0;
      if (this.$vuetify.display.lgAndUp) {
        countOfCards = 4;
      } else if (this.$vuetify.display.md) {
        countOfCards = 3;
      } else if (this.$vuetify.display.sm) {
        countOfCards = 2;
      } else if (this.$vuetify.display.xs) {
        countOfCards = 1;
      }

      let mainCardWidth = document.documentElement.clientHeight * (this.mainCardWidthValue / 100);
      let marginLeftVw = 4.95;
      if (this.$vuetify.display.mdAndUp) {
        let maringLeftPx = ((window.innerWidth - (mainCardWidth * countOfCards)) / countOfCards) / 2;
        const magic = 10;
        maringLeftPx = maringLeftPx - magic;
        marginLeftVw = this.pxToVw(maringLeftPx);
      } else {
        let maringLeftPx = (window.innerWidth - mainCardWidth) / 2
        marginLeftVw = this.pxToVw(maringLeftPx);
      }

      return {
        marginLeft: `${marginLeftVw}vw`
      }
    },
  },
  methods: {
    imgPath(img) {
      return new URL(`../images/MainPage/MainCards/${img}`, import.meta.url).href;
    },
    pxToVw(px){
      return 100 * px / window.innerWidth; // Вычисление процента
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
@media (max-width: 959px) { 
  .drawing-margin-padding {
    padding-bottom: 0vh;
    padding-left: 0vh;
  }
}
</style>
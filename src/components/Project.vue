<template>
  <v-container class="pa-0 background-img" fluid :style="backgroundImgProp" style="overflow: hidden; height: 100vh;">
    <v-row class="ma-0 pa-0 fill-height">
      <v-col cols="6" class="pa-0 d-flex flex-column align-center justify-center">
        <div style="margin-right: 0vw; margin-left: 3vw">
            <v-carousel
            cycle
            hide-delimiters
            show-arrows="hover"
            height="auto"
            style="box-shadow: 0px 0px 3px 1px rgb(236, 236, 236); width: 30vw;"
          >
            <v-carousel-item
              v-for="(img, index) in this.$props.swiperImgs"
              :key="index"
            >
              <v-col class="pa-0 d-flex flex-column align-center justify-center">
                <img class="carousel-height" :src="img.src" :alt="img.alt" />
              </v-col>
            </v-carousel-item>
          </v-carousel>
          </div>
      </v-col>
      <v-col align="center" cols="6" class="pa-0 align-self-center">
        <v-row class="pa-0 ma-0 d-inline-block">
          <h1 class="h-neucha-regular text-start" style="margin-bottom: 2vh; font-size: 3.8vh;">
            {{  headerText }}
          </h1>
          <slot></slot>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'DefaultProject',
  props: {
    backgroundImg: {
      type: String,
      required: true,
    },
    headerText: {
      type: String,
      required: true,
    },
    swiperImgs: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    document.documentElement.style.overflow = 'hidden';
  },
  beforeUnmount() {
    document.documentElement.style.overflow = '';
  },
  computed: {
    backgroundImgProp() {
      return {
        backgroundImage: `url(${this.$props.backgroundImg})`,
      };
    },
  },
}
</script>

<style scoped>
.background-img {
  background-size: cover;
  background-position: top;
}

.carousel-height {
    height: 40vh;
  }
</style>

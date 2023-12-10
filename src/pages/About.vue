<template>
  <v-container class="aboutpage pa-0" fluid>
    <v-row class="text-center" justify="center" style="height: 73vh; padding-top: 10vh;">
      <v-col cols="2" sm="2" md="2" lg="2" class="d-flex align-center text-center justify-center">
        <v-btn :style="heightArr" @click="prevSlide" class="transparent-button">
          <img :style="heightArr" src="../images/AboutMePage/arr-left.svg" alt="Prev slide" />
        </v-btn>
      </v-col>
      <v-col cols="8" sm="8" md="8" lg="8" class="slide">
        <v-carousel style="width: 100%; height: inherit;" :show-arrows="false" :cycle="false" hide-delimiters v-model="carouselModel">
          <v-carousel-item>
            <!-- Ваш первый слайд -->
            <v-row class="slide">
              <v-col>
                <h1 style="color: white;">Слайд 1</h1>
                <p>Описание слайда 1</p>
              </v-col>
            </v-row>
          </v-carousel-item>

          <v-carousel-item>
            <!-- Ваш второй слайд -->
            <v-row class="slide">
              <v-col>
                <h1 style="color: white;">Слайд 2</h1>
                <p>Описание слайда 2</p>
              </v-col>
            </v-row>
          </v-carousel-item>
          <v-carousel-item>
            <!-- Ваш второй слайд -->
            <v-row class="slide">
              <v-col>
                <h1 style="color: white;">Слайд 3</h1>
                <p>Описание слайда 3</p>
              </v-col>
            </v-row>
          </v-carousel-item>
          <!-- Добавьте дополнительные слайды, если необходимо -->

        </v-carousel>
      </v-col>
      <v-col cols="2" sm="2" md="2" lg="2" class="d-flex align-center text-center justify-center">
        <v-btn :style="heightArr" @click="nextSlide" class="transparent-button">
          <img :style="heightArr" src="../images/AboutMePage/arr-right.svg" alt="Next slide" />
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
    
<script>
export default {
  name: 'AboutPage',
  data() {
    return {
      carouselModel: 0,
      totalSlides: 3, // Общее количество слайдов (вам нужно установить актуальное значение)
      heightArr: {
        height: '10vh'
      }
    };
  },
  methods: {
    nextSlide() {
      if ((this.carouselModel + 1) === this.totalSlides) {
        this.carouselModel = 0;
      } else {
        this.carouselModel++;
      }
    },
    prevSlide() {
      if ((this.carouselModel - 1) < 0) {
        this.carouselModel = this.totalSlides - 1;
      } else {
        this.carouselModel--;
      }
    },
  }
}
</script>

<style scoped>
.transparent-button {
  background-color: transparent;
  padding: 0;
  /* Убрать отступы кнопки */
  border: none;
}

.slide {
  background-color: rgb(77, 77, 77);
  padding: 0;
  margin: 0;
  box-shadow: 0px 0px 1vh 8px rgb(77, 77, 77);
}

.aboutpage {
  background-color: black;
  height: 100vh;
}
</style>

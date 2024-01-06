<template>
  <v-container class="pa-0" fluid :style="this.$vuetify.display.xs ? 'height: 100%;' : 'height: 84%;'" style="background-color: black;">
    <v-row 
      class="d-flex justify-center" 
      style="height: 80%; margin-top: 9vh; width: 100%;"
      :style="this.$vuetify.display.xs ? 'margin-left: 0vw;' : ''"
    >
      <v-col 
        cols="1" 
        class="d-flex align-center text-center justify-center" 
        :style="{ 'margin-right': marginArr }"
        v-if="this.$vuetify.display.smAndUp"
      >
        <v-btn :style="heightArr" @click="prevSlide" class="transparent-button">
          <img :style="heightArr" src="../images/AboutMePage/arr-left.svg" alt="Prev slide" />
        </v-btn>
      </v-col>
      <v-col cols="8" class="pa-0 slide">
        <v-carousel style="height: 100%;" :show-arrows="false" :cycle="false" hide-delimiters v-model="carouselModel">
          <v-carousel-item>
            <v-row class="fill-height mt-0 ml-0">
              <v-col align="center" cols="6" class="pa-0 align-self-center">
                <img style="height: 22vw;" src="../images/AboutMePage/Slide1/MyFace.jpg" alt="Maria Halyapina img"/>
              </v-col>
              <v-col cols="6" class="pa-0 align-self-center">
                <div style="display: inline-block;">
                  <h1 class="text-start h-neucha-regular slide1">
                    Образование:
                  </h1>
                  <p class="text-start h-montserrat-regular">
                    РГХПУ им. С. Г. Строганова<br>
                    кафедра «Дизайн мебели» 
                  </p>
                  <h1 class="text-start h-neucha-regular slide1">
                    Владение программами: 
                  </h1>
                  <p class="text-start h-montserrat-regular">Autodesk 3ds Мах, Corona,<br>
                    AutoCAD, Adobe lllustrator,<br>
                    Adobe Photoshop, CorelDraw,<br>
                    SketchUp, Layout
                  </p>
                  <h1 class="text-start h-neucha-regular slide1">
                    Контакты:
                  </h1>
                  <p class="text-start h-montserrat-regular">
                    halyapinamari@gmail.com<br>
                    WhatsApp +79671930086
                  </p>
                </div>
              </v-col>
            </v-row>
          </v-carousel-item>

          <v-carousel-item>
            <v-row class="fill-height mt-0 ml-lg-13 ml-sm-0" :style="this.$vuetify.display.sm || this.$vuetify.display.md ? 'width: 100%;' : ''">
              <v-col lg="5" cols="12" align="center" class="pa-0 align-self-center mt-lg-9 mt-sm-16">
                <v-row style="width: 100%;">
                  <v-col lg="12" sm="6" cols="12" class="pa-0 slide2ImgMargin">
                    <full-image :d-lg-h-v=35 :d-md-h-v=45 :d-h-v=55 d-h-u="vw" class="aboutme-height-img-slide2 ml-lg-0 ml-sm-6 mt-sm-0 mt-12" src="../src/images/AboutMePage/Slide2/Moodboard1.jpg" alt="Moodboard"/>
                  </v-col>
                  <v-col lg="12" sm="6" cols="12" class="pa-0 ma-0">
                    <full-image :d-lg-h-v=35 :d-md-h-v=45 :d-h-v=55 d-h-u="vw" class="aboutme-height-img-slide2 mr-lg-0 mr-sm-6 mt-sm-0 mt-5" src="../src/images/AboutMePage/Slide2/Moodboard2.jpg" alt="Moodboard"/>
                  </v-col>
                  <v-col v-if="this.$vuetify.display.lgAndUp" cols="12" class="pa-0 mt-lg-2">
                    <p class="title">Мудборд концептуального проекта</p>
                  </v-col>
                </v-row>
              </v-col>
              <v-col lg="7" cols="12" class="pl-sm-6 align-self-center mb-lg-2 mb-sm-14">
                <v-row class="d-lg-inline-block">
                  <v-col lg="12" sm="6" cols="12" class="mb-lg-1">
                    <p v-if="this.$vuetify.display.lgAndUp" class="text-start h-montserrat-regular slidesFont" style="line-height: 3.2vh;">
                      Меня зовут Мария, я с детства любила рисовать<br>
                      и фантазировать, и эти две, казалось бы, безобидные<br>
                      привычки превратили меня в дизайнера. В 2019 году<br>
                      <span style="letter-spacing: 0.014359375vw;">я поступила в РГХПУ им. С.Г. Строганова на кафедру</span><br>
                      <span style="letter-spacing: 0.014359375vw;">«Дизайн мебели». Преподаватели кафедры — дей-</span><br>
                      <span style="letter-spacing: 0.014359375vw;">ствующие дизайнеры, большие профессионалы</span><br>
                      и настоящие фанаты своего дела!<br> 
                    </p>
                    <p v-if="this.$vuetify.display.md || this.$vuetify.display.sm" class="text-start h-montserrat-regular slidesFont" style="line-height: 3.5vh; margin-left: 2vw;">
                      <span style="letter-spacing: 0.009572916666666665vw;">Меня зовут Мария, я с детства любила рисовать</span><br>
                      и фантазировать, и эти две, казалось бы, безобид-<br>ные
                      <span style="letter-spacing: 0.009572916666666665vw;">привычки превратили меня в дизайнера.</span><br>В 2019 году
                      <span style="letter-spacing: 0.014359375vw;">я поступила в РГХПУ им. С.Г. Строга-<br>нова на кафедру</span>
                      «Дизайн мебели». Преподаватели кафедры — дей
                      <span style="letter-spacing: 0.014359375vw;">ствующие дизайнеры, большие профессионалы</span>
                      и настоящие фанаты своего дела!
                    </p>
                    <p v-if="this.$vuetify.display.xs" class="text-start h-montserrat-regular slidesFont" style="line-height: 3.2vh; margin-left: 5vw; margin-top: 4.5vw">
                      Меня зовут Мария, я с детства лю-<br>била рисовать
                      и фантазировать,<br><span style="letter-spacing: -0.009572916666666665vw;">и эти две, казалось бы, безобидные</span>
                      привычки превратили меня в ди-<br>зайнера. В 2019 году
                      <span style="letter-spacing: 0.014359375vw;">я поступила<br>в РГХПУ им. С.Г. Строганова на ка-<br></span>
                      <span style="letter-spacing: 0.02871875vw;">федру «Дизайн мебели». Преподаватели кафедры — дей-</span>
                      <span style="letter-spacing: 0.014359375vw;">ствующие дизайнеры, большие</span><br>
                      <span style="letter-spacing: 0.014359375vw;">профессионалы и настоящие</span><br>фанаты своего дела!
                    </p>
                  </v-col>
                  <v-col lg="12" sm="6" cols="12">
                    <p v-if="this.$vuetify.display.lgAndUp" class="text-start h-montserrat-regular slidesFont" style="line-height: 3.2vh;">
                      <b>Как проходило обучение?</b><br>
                      Обучение с самого начала было направлено на раз-<br>
                      витие креативного мышления. Мы активно занима-<br>
                      лись макетированием, познавая особенности<br>
                      и специфику различных материалов, продумывали<br>
                      графические решения для подачи наших проектов,<br>
                      и, конечно, всегда стремились работать над актуаль-<br>
                      ными проблемами.  
                    </p>
                    <p v-if="this.$vuetify.display.md || this.$vuetify.display.sm" class="text-start h-montserrat-regular slidesFont" style="line-height: 3.5vh; margin-left: 0.8vw;">
                      <b>Как проходило обучение?</b>
                      Обучение с самого начала было направлено на развитие креативного мыш-<br>ления.
                      Мы активно занимались макетированием, познавая особенности
                      и специфику различных материалов, продумывали
                      графические решения<br>для подачи наших проектов,
                      и, конечно, всегда стре-<br>мились работать над актуаль
                      ными проблемами.  
                    </p>
                    <p v-if="this.$vuetify.display.xs" class="text-start h-montserrat-regular slidesFont" style="line-height: 3.2vh; margin-left: 5.1vw;">
                      <b>Как проходило обучение?</b><br>
                      <span style="letter-spacing: 0.014359375vw;">Обучение с самого начала было</span><br>
                      <span style="letter-spacing: 0.023932291666666668vw;">направлено на развитие креа-<br></span>тивного мышления. 
                      Мы активно занимались макетированием, познавая особенности
                      и специ-<br><span style="letter-spacing: 0.023932291666666668vw;">фику различных материалов, продумывали</span>
                      графические ре-<br>шения для подачи наших проек-<br>тов,
                      и, конечно, всегда стремились работать над актуаль-
                      ными проблемами.  
                    </p>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col 
        cols="1" 
        class="d-flex align-center text-center justify-center"
        :style="{ 'margin-left': marginArr }"
        v-if="this.$vuetify.display.smAndUp"
      >
        <v-btn :style="heightArr" @click="nextSlide" class="transparent-button">
          <img :style="heightArr" src="../images/AboutMePage/arr-right.svg" alt="Next slide" />
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
  <img class="popkorn" src="../images/AboutMePage/popkorn.png" alt="GirlWithPopkorn"/>
</template>
    
<script>
import FullImage from '@/components/FullImage.vue';

export default {
    name: 'AboutPage1',
    components: {
      FullImage
    },
    data() {
        return {
            carouselModel: 0,
            totalSlides: 2, // Общее количество слайдов (вам нужно установить актуальное значение)
            heightArr: {
                height: '4.786458333333333vw'
            },
            marginArr: '3vw'
        };
    },
    mounted() {
      if (this.$vuetify.display.smAndUp) {
        document.documentElement.style.overflow = 'hidden';
      }
      this.changeBackground();
    },
    beforeUnmount() {
      if (this.$vuetify.display.smAndUp) {
        document.documentElement.style.overflow = '';
      } 
    },
    methods: {
      changeBackground() {
        this.$nextTick(() => {
          let app = document.getElementsByClassName('v-application')[0];
          if (app) {
              app.style.backgroundColor = 'black';
          }
        });
      },
      nextSlide() {
        if ((this.carouselModel + 1) === this.totalSlides) {
            this.carouselModel = 0;
        }
        else {
            this.carouselModel++;
        }
      },
      prevSlide() {
        if ((this.carouselModel - 1) < 0) {
            this.carouselModel = this.totalSlides - 1;
        }
        else {
            this.carouselModel--;
        }
      },
    }
}
</script>

<style scoped>

p.slidesFont {
  font-size: 1.0530208333333335vw;
}

.slide2ImgMargin {
  margin-bottom:  0.9587897756911842vw;
}
@media (max-width: 1800px) { 
  .slide2ImgMargin {
    margin-bottom: 2.5vw;
  }

}
@media (max-width: 1670px) { 
  .slide2ImgMargin {
    margin-bottom: 3.5vw;
  }
}
@media (max-width: 1560px) { 
  .slide2ImgMargin {
    margin-bottom: 2.5vw;
  }
}
@media (max-width: 1420px) { 
  .slide2ImgMargin {
    margin-bottom: 2.5vw;
  }
}
@media (max-width: 1280px) { 
  .slide2ImgMargin {
    margin-bottom: 2.5vw;
  }
}

@media (max-width: 599px) { 
  p.slidesFont {
    font-size: 3vw;
  }
}

p {
  font-size: 1.1008854166666666vw;
}


.title {
  font-size: 0.71796875vw; font-style: italic;
}

.transparent-button {
  background-color: transparent;
  padding: 0;
  /* Убрать отступы кнопки */
  border: none;
}

h1.slide1 {
  font-size: 1.484vw;
}

.slide {
  background-color: rgb(77, 77, 77);
  padding: 0;
  margin: 0;
  box-shadow: 0px 0px 1vh 8px rgb(77, 77, 77);
}

h1, p {
  color: white;
}
.popkorn {
  position: fixed;
  bottom: 0;
  z-index: 1000; /* Помещает изображение за основной контент */
  right: 3.8291666666666666vw;
  height: 17vw;
}
</style>

<style>
.aboutme-height-img-slide2 {
  height: 11.4875vw;
}

@media (max-width: 1800px) { 
  .aboutme-height-img-slide2 {
    height: 12vw;
  }
}
@media (max-width: 1670px) { 
  .aboutme-height-img-slide2 {
    height: 12.5vw;
  }
}
@media (max-width: 1560px) { 
  .aboutme-height-img-slide2 {
    height: 13.5vw;
  }
}
@media (max-width: 1420px) { 
  .aboutme-height-img-slide2 {
    height: 14.5vw;
  }
}
@media (max-width: 1280px) { 
  .aboutme-height-img-slide2 {
    height: 17vw;
  }
}

@media (max-width: 599px) { 
  .aboutme-height-img-slide2 {
    height: 33vw;
  }
}
</style>
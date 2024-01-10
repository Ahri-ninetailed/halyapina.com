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
        <swiper 
          :loop="true"
          :simulateTouch="false"
          :mousewheel="true"
          :modules="modules"
          style="height: 100%;" 
          class="mySwiper"
          @swiper="onSwiper"
        >
          <swiper-slide>
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
          </swiper-slide>
          
          <swiper-slide>
            <row-aboutme>
              <v-col lg="5" cols="12" align="center" class="pa-0 align-self-center slide2-col-img-margin">
                <v-row style="width: 100%;" class="ma-0">
                  <v-col :class="this.$vuetify.display.lgAndUp ? '' : 'align-self-end'" :align="this.$vuetify.display.lgAndUp ? 'start' : 'start'" lg="12" sm="6" cols="12" class="pa-0 slide2-img-margin">
                    <full-image :d-lg-h-v=35 :d-md-h-v=45 :d-h-v=55 d-h-u="vw" class="aboutme-slide2-img-height" src="../src/images/AboutMePage/Slide2/Moodboard1.jpg" alt="Moodboard"/>
                  </v-col>
                  <v-col :class="this.$vuetify.display.lgAndUp ? '' : 'align-self-end'" :align="this.$vuetify.display.lgAndUp ? 'start' : 'end'" lg="12" sm="6" cols="12" class="pa-0">
                    <full-image :d-lg-h-v=35 :d-md-h-v=45 :d-h-v=55 d-h-u="vw" class="aboutme-slide2-img-height" src="../src/images/AboutMePage/Slide2/Moodboard2.jpg" alt="Moodboard"/>
                  </v-col>
                  <v-col v-if="this.$vuetify.display.lgAndUp" cols="12" class="pa-0 mt-lg-3">
                    <p class="title slide2-title-margin">Мудборд концептуального проекта</p>
                  </v-col>
                </v-row>
              </v-col>
              <v-col lg="7" cols="12" align="end" class="pa-0 slide2-text-col-margin" :class="this.$vuetify.display.lgAndUp ? 'align-self-center' : 'align-self-start'">
                <v-row class="d-lg-inline-block ma-lg-0 ma-0 mb-sm-0 mt-sm-0 mr-sm-0 ml-sm-0">
                  <v-col v-if="this.$vuetify.display.lgAndUp" lg="12" sm="6" cols="12" class="mb-lg-1 pa-0">
                    <p class="text-start h-montserrat-regular slides-font" style="line-height: 3.2vh;">
                      Меня зовут Мария, я с детства любила рисовать<br>
                      и фантазировать, и эти две, казалось бы, безобидные<br>
                      привычки превратили меня в дизайнера. В 2019 году<br>
                      <span style="letter-spacing: 0.014359375vw;">я поступила в РГХПУ им. С.Г. Строганова на кафедру</span><br>
                      <span style="letter-spacing: 0.014359375vw;">«Дизайн мебели». Преподаватели кафедры — дей-</span><br>
                      <span style="letter-spacing: 0.014359375vw;">ствующие дизайнеры, большие профессионалы</span><br>
                      и настоящие фанаты своего дела!<br> 
                    </p>
                  </v-col>
                  <v-col v-if="this.$vuetify.display.md || this.$vuetify.display.sm" lg="12" sm="6" cols="12" class="mb-lg-1 pa-0">
                    <p class="text-start h-montserrat-regular slides-font" style="line-height: 3.1vh;">
                      <span style="letter-spacing: 0.009572916666666665vw;">Меня зовут Мария, я с детства любила рисо-<br>вать</span>
                      и фантазировать, и эти две, казалось бы, безобидные
                      <span style="letter-spacing: 0.009572916666666665vw;">привычки превратили меня<br>в дизайнера. </span>В 2019 году
                      <span style="letter-spacing: 0.014359375vw;">я поступила в РГХПУ им. С.Г. Строганова на кафедру</span>
                      «Дизайн ме-<br>бели». Преподаватели кафедры — дей<span style="letter-spacing: 0.014359375vw;">ству-<br>ющие дизайнеры, большие профессионалы</span>
                      <br>и настоящие фанаты своего дела!
                    </p>
                  </v-col>
                  
                  <v-col v-if="this.$vuetify.display.lgAndUp" lg="12" sm="6" cols="12" class="pa-0">
                    <p class="text-start h-montserrat-regular slides-font slide2-p-margin" style="line-height: 3.2vh;">
                      <b>Как проходило обучение?</b><br>
                      Обучение с самого начала было направлено на раз-<br>
                      витие креативного мышления. Мы активно занима-<br>
                      лись макетированием, познавая особенности<br>
                      и специфику различных материалов, продумывали<br>
                      графические решения для подачи наших проектов,<br>
                      и, конечно, всегда стремились работать над актуаль-<br>
                      ными проблемами.  
                    </p>
                  </v-col>
                  <v-col v-if="this.$vuetify.display.md || this.$vuetify.display.sm" lg="12" sm="6" cols="12" class="pa-0">
                    <p class="text-start h-montserrat-regular slides-font slide2-p-margin" style="margin-left: 1.6vw; line-height: 3.1vh;">
                      <b>Как проходило обучение?</b>
                      Обучение с самого начала было направлено на развитие креа-<br>
                      тивного мышления. Мы активно занимались макетированием, познавая особенности<br>
                      и специфику различных материалов, проду-<br>
                      мывали графические решения для подачи наших проектов,
                      и, конечно, всегда стреми-<br>
                      лись работать над актуальными проблемами.  
                    </p>
                  </v-col>
                </v-row>
              </v-col>
            </row-aboutme>
          </swiper-slide>

          <swiper-slide>
            <row-aboutme>
              <v-col cols="12" class="pa-0 align-self-center">
                <v-row v-if="this.$vuetify.display.lgAndUp" class="ma-0 slide3-row-margin">
                  <v-col cols="4" align="start" class="pa-0">
                    <img src="../images/AboutMePage/Slide3/MariaWithEarrings.jpg" class="aboutme-slide3-height-img1" alt="Maria with earrings">
                  </v-col>
                  <v-col cols="4" align="center" class="pa-0">
                    <v-row class="fill-height ma-0">
                      <v-col cols="12" class="pa-0 align-self-start">
                        <full-image :d-lg-h-v=35 :d-md-h-v=45 :d-h-v=55 d-h-u="vw" src="../src/images/AboutMePage/Slide3/dragonfly1.jpg" class="aboutme-slide3-height-img2" alt="My earrings"/>
                      </v-col>
                      <v-col cols="12" class="pa-0 align-self-end">
                        <full-image :d-lg-h-v=35 :d-md-h-v=45 :d-h-v=55 d-h-u="vw" src="../src/images/AboutMePage/Slide3/dragonfly2.jpg" class="aboutme-slide3-height-img2" alt="My earrings"/>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols="4" align="end" class="pa-0">
                    <full-image :d-sm-h-v=60 :d-md-h-v=80 :d-h-v=50 d-h-u="vh" src="../src/images/AboutMePage/Slide3/prototypeOfLine.jpg" class="aboutme-slide3-height-img1" alt="Prototype of Line chair"/>
                  </v-col>
                </v-row>
                <v-row v-if="this.$vuetify.display.md || this.$vuetify.display.sm" class="ma-0 slide3-row-margin">
                  <v-col sm="6" align="end" class="pa-0 align-self-center">
                    <v-row class="slide3-row-margin-right ">
                      <v-col cols="12" class="pa-0 slide3-margin-vertical-bot">
                        <full-image :d-lg-h-v=35 :d-md-h-v=45 :d-h-v=55 d-h-u="vw" src="../src/images/AboutMePage/Slide3/dragonfly1.jpg" class="aboutme-slide3-height-img2" alt="My earrings"/>
                      </v-col>
                      <v-col cols="12" class="pa-0">
                        <img src="../images/AboutMePage/Slide3/MariaWithEarrings.jpg" class="aboutme-slide3-height-img1" alt="Maria with earrings">
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col sm="6" align="start" class="pa-0">
                    <v-row class="slide3-row-margin-left">
                      <v-col cols="12" class="pa-0">
                        <full-image :d-sm-h-v=60 :d-md-h-v=80 :d-h-v=50 d-h-u="vh" src="../src/images/AboutMePage/Slide3/prototypeOfLine.jpg" class="aboutme-slide3-height-img1" alt="Prototype of Line chair"/>
                      </v-col>
                      <v-col cols="12" class="pa-0 slide3-margin-vertical-top">
                        <full-image :d-lg-h-v=35 :d-md-h-v=45 :d-h-v=55 d-h-u="vw" src="../src/images/AboutMePage/Slide3/dragonfly2.jpg" class="aboutme-slide3-height-img2" alt="My earrings"/>
                      </v-col>
                    </v-row>
                  </v-col>
                  
                </v-row>
              </v-col>
            </row-aboutme>
          </swiper-slide>

          <swiper-slide>
            <row-aboutme>
              <v-col cols="6" class="pa-0 align-self-center" style="margin-top: 4.2vh;">
                <full-image :d-sm-h-v=60 :d-md-h-v=80 :d-h-v=50 d-h-u="vh" src="../src/images/AboutMePage/Slide4/factory.jpg" class="aboutme-slide4-img-height" alt="Factory" />
                <p class="title text-center slide4-title-margin">Посещение фабрики Ангстрем</p>
              </v-col>
              <v-col align="end" cols="6" class="pa-0 align-self-center">
                <v-row class="ma-0 d-inline-block">
                    <p class="text-start h-montserrat-regular slides4-font">
                    <span style="letter-spacing: 0.020vw;">Руководство кафедры считает необходи-</span><br>
                    мым дать студентам возможность работать<br>
                    с реальными заказчиками. Благодаря тако-<br>
                    <span style="letter-spacing: 0.020vw;">му опыту учишься следовать не только</span><br>
                    ТЗ, но и учитывать настоящие возможности<br>
                    производства.
                  </p>
                </v-row>
              </v-col>
            </row-aboutme>
          </swiper-slide>

          <swiper-slide>
            <row-aboutme>
              <v-col cols="5" align="start" class="pa-0 align-self-center" style="margin-top: 4vh;">
                <full-image :d-md-h-v=90 :d-sm-h-v=60 :d-h-v=50 d-h-u="vh" src="../src/images/AboutMePage/Slide5/PosterVitra.jpg" class="aboutme-slide5-img-height" alt="Poster Vitra" />
                <p class="text-center title slide5-title-margin">Плакат для Vitra</p>
              </v-col>
              <v-col class="pa-0 d-flex flex-column align-end justify-center" cols="7">
                <p class="text-start h-montserrat-regular slides-font">
                  Во время обучения нас старались ознакомить с раз-<br>
                  личными сферами дизайна. Замечательным опытом<br>
                  стало участие в конкурсе плакатов всемирно извес-<br>
                  тной фирмы Vitra. Мы старались выявить ключевой<br>
                  посыл фирмы и выразить его с помощью яркой гра-<br>
                  фической подачи.
                </p>
              </v-col>
            </row-aboutme>
          </swiper-slide>

          <swiper-slide>
            <row-aboutme style="margin-top: 2vh">
              <v-col cols="6" class="pa-0 d-flex flex-column align-start justify-end">
                <full-image :d-sm-h-v=60 :d-md-h-v=80 :d-h-v=50 d-h-u="vh" src="../src/images/AboutMePage/Slide6/DiplomaFromVitra.jpg" class="aboutme-slide6-img-height" alt="Diploma from Vitra" />
              </v-col>
              <v-col cols="6" class="pa-0 d-flex flex-column align-end justify-end">
                <full-image :d-sm-h-v=60 :d-md-h-v=80 :d-h-v=50 d-h-u="vh" src="../src/images/AboutMePage/Slide6/MariaNearPoster.jpg" class="aboutme-slide6-img-height" alt="I'm near poster" />
              </v-col>
              <v-col cols="12" class="pa-0">
                <p class="title text-center" style="margin-top: 1.5vh;">Диплом за 3-е место</p>
              </v-col> 
            </row-aboutme>
          </swiper-slide>

          <swiper-slide>
            <row-aboutme>
              <v-col class="pa-0 d-flex flex-column align-center justify-center" cols="5">
                <img src="../images/AboutMePage/Slide7/Thonet.jpg" style="height: 24.4109375vw; margin-right: 4vw;" alt="Thonet chair">
                </v-col>
                <v-col class="pa-0 d-flex flex-column align-center justify-center" cols="7">
                  <p style="margin-left: 1vw;" class="text-start h-montserrat-regular slidesFont">
                    <span style="letter-spacing: 0.015vw;">Не мало внимания уделялось и умению  работать</span><br>
                    в команде. Для достижения поставленной цели не-<br>
                    <span style="letter-spacing: 0.015vw;">обходимо уметь находить компромиссы. Данный</span><br>
                    <span style="letter-spacing: 0.020vw;">проект создавался совместно с В. Декалиной</span><br>
                    и П. Ерёмичевой. Идея заключалась в создании<br>
                    ателье по восстановлению старинной мебели с по-<br>
                    мощью замены сломанных элементов деталями<br>
                    <span style="letter-spacing: -0.020vw;">из переработанного пластика. А лицом нашего ателье</span><br>
                    стала бы вечно нестареющая классика — Thonet!
                  </p>
                </v-col>  
            </row-aboutme>
          </swiper-slide>

          <swiper-slide>
            <row-aboutme>
              <v-col class="pa-0 d-flex flex-column align-center justify-center" cols="12">
                <img src="../images/AboutMePage/Slide8/AboutTheAtelier.jpg" style="height: 24.4109375vw;" alt="About the atelier">
              </v-col> 
            </row-aboutme>
          </swiper-slide>

          <swiper-slide>
            <row-aboutme>
              <v-col class="pa-0 d-flex flex-column align-center justify-center" cols="12">
                <p class="text-start h-montserrat-regular slides-font">
                  Отныне я в свободном плавании, и мне не терпится применить и приумножить  свои знания!
                </p>
              </v-col>  
            </row-aboutme>
          </swiper-slide>
        </swiper>
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
import RowAboutme from '@/components/RowAboutme.vue';

import { Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

export default {
    name: 'AboutMePage',
    components: {
      FullImage,
      RowAboutme,
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Mousewheel],
      };
    },
    data() {
        return {
            swiper: null,
            heightArr: {
                height: '4.786458333333333vw'
            },
            marginArr: '3vw',
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
      onSwiper(swiper) {
        this.swiper = swiper;
     },
      changeBackground() {
        this.$nextTick(() => {
          let app = document.getElementsByClassName('v-application')[0];
          if (app) {
              app.style.backgroundColor = 'black';
          }
        });
      },
      nextSlide() {
        this.swiper.slideNext();
      },
      prevSlide() {
        this.swiper.slidePrev();
      },
    }
}
</script>

<style scoped>
.slide5-title-margin {
  margin-right: 5.7vw; 
  margin-top: 1vh;
}

.slide2-title-margin {
  margin-right: 3.8vw;
}

.slide2-col-img-margin {
  margin-top: 4.5vh;
}

.slide2-p-margin {
  margin-top: 3.9vh;
}

.slide2-img-margin {
  margin-bottom:  0.96vw;
}

.slide4-title-margin {
  margin-top: 1.2vh; 
  margin-right: 5vw
}

p.slides-font {
  font-size: 1.053vw;
}
p.slides4-font {
  font-size: 1.053vw;
}

.popkorn {
  position: fixed;
  bottom: 0;
  z-index: 1000; /* Помещает изображение за основной контент */
  right: 3.83vw;
  height: 17vw;
}

@media (max-width: 1800px) { 
  .slide2-img-margin {
    margin-bottom: 1.5vw;
  }
  .slide2-title-margin {
  margin-right: 3vw;
  }
}
@media (max-width: 1670px) { 
  .slide2-img-margin {
    margin-bottom: 1.8vw;
  }

  .slide2-p-margin {
    margin-top: 1.9vh;
  }

  .slide2-title-margin {
    margin-right: 2.6vw;
  }
  .slide4-title-margin {
    margin-top: 1.2vh; 
    margin-right: 3.8vw
  } 
  .slide5-title-margin {
    margin-right: 4.6vw; 
  }
}
@media (max-width: 1560px) { 
  .slide2-img-margin {
    margin-bottom: 1.5vw;
  }
  .slide2-title-margin {
    margin-right: 3vw;
  }
  .slide2-p-margin {
    margin-top: 0vh;
  }
  .slide4-title-margin {
    margin-top: 1.2vh; 
    margin-right: 3.6vw;
  } 
}
@media (max-width: 1420px) { 
  .slide2-img-margin {
    margin-bottom: 1.5vw;
  }
  .slide2-title-margin {
    margin-left: 4vw;
  }
  .slide5-title-margin {
    margin-right: 0vw; 
  }
}
@media (max-width: 1279px) { 
  .slide2-img-margin {
    margin-bottom: 0vw;
  }
  .slide2-col-img-margin {
    margin-top: 3vh;
  }
  .slide2-text-col-margin {
    margin-bottom: 2vh;
  }
  .popkorn {
    height: 25vw;
  }
  .slide3-margin-vertical-top {
    margin-top: 2.5vh;
  }
  .slide3-margin-vertical-bot {
    margin-bottom: 2.5vh;
  }
  .slide3-row-margin-right {
    margin-right: 2vw;
  }
  .slide3-row-margin-left {
    margin-left: 2vw;
  }
  p.slides4-font {
  font-size: 1.053vw;
}
}

@media (max-width: 599px) { 
  p.slides-font {
    font-size: 3vw;
  }
}

p {
  font-size: 1.1vw;
}


.title {
  font-size: 0.718vw; font-style: italic;
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
</style>

<style>

.aboutme-slide2-img-height {
  height: 11.5vw;
}
.aboutme-slide3-height-img1 {
  height: 24.25vw;
}
.aboutme-slide3-height-img2 {
  height: 10.9vw;
}
.aboutme-slide4-img-height {
  height: 24.65vw;
}
.aboutme-slide5-img-height {
  height: 24.41vw;
}
.aboutme-slide6-img-height {
  height: 24.31520833333333vw;
}

@media (max-width: 1800px) { 
  .aboutme-slide2-img-height {
    height: 12vw;
  }
  .aboutme-slide3-height-img1 {
    height: 24.75vw;
  }
  .aboutme-slide3-height-img2 {
    height: 11.4vw;
  }
  .aboutme-slide4-img-height {
    height: 25.15vw;
  }
  .aboutme-slide5-img-height {
    height: 24.91vw;
  }
}
@media (max-width: 1670px) { 
  .aboutme-slide2-img-height {
    height: 12.2vw;
  }
  .aboutme-slide3-height-img1 {
    height: 25.25vw;
  }
  .aboutme-slide3-height-img2 {
    height: 11.9vw;
  }
  .aboutme-slide4-img-height {
    height: 25.65vw;
  } 
  .aboutme-slide5-img-height {
    height: 25.60vw;
  }
}
@media (max-width: 1560px) { 
  .aboutme-slide2-img-height {
    height: 12vw;
  }
  .aboutme-slide4-img-height {
    height: 26vw;
  }
}
@media (max-width: 1420px) { 
  .aboutme-slide2-img-height {
    height: 14.5vw;
  }
  .aboutme-slide5-img-height {
    height: 32vw;
  }
}
@media (max-width: 1279px) { 
  .aboutme-slide2-img-height {
    height: 15.5vw;
  }
  .aboutme-slide3-height-img1 {
    height: 25vw;
  }
  .aboutme-slide3-height-img2 {
    height: 10.9vw;
  }
}

@media (max-width: 599px) { 
  .aboutme-slide2-img-height {
    height: 33vw;
  }
}
</style>
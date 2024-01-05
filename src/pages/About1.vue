<template>
  <v-container class="pa-0" fluid style="height: 100%; background-color: black;">
    <v-row class="d-flex justify-center" style="height: 67%; margin-top: 9vh">
      <v-col 
        cols="1" 
        class="d-flex align-center text-center justify-center" 
        :style="{ 'margin-right': marginArr }"
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
            <v-row class="fill-height mt-0 ml-13">
              <v-col cols="5" align="center" class="pa-0 align-self-center mt-9">
                <div>
                  <img :style="heightImgSlide2" style="margin-bottom: 2vh;" src="../images/AboutMePage/Slide2/Moodboard1.jpg" alt="Moodboard"/>
                </div>
                <div>
                  <img :style="heightImgSlide2" src="../images/AboutMePage/Slide2/Moodboard2.jpg" alt="Moodboard"/>
                </div>
                <p class="title" style="margin-top: 1vh;">Мудборд концептуального проекта</p>
              </v-col>
              <v-col cols="7" class="pl-6 align-self-center">
                <div style="display: inline-block; margin-bottom: 1vh;">
                  <p class="text-start h-montserrat-regular slidesFont" style="line-height: 3.2vh;">
                    Меня зовут Мария, я с детства любила рисовать<br>
                    и фантазировать, и эти две, казалось бы, безобидные<br>
                    привычки превратили меня в дизайнера. В 2019 году<br>
                    <span style="letter-spacing: 0.03vh;">я поступила в РГХПУ им. С.Г. Строганова на кафедру</span><br>
                    <span style="letter-spacing: 0.03vh;">«Дизайн мебели». Преподаватели кафедры — дей-</span><br>
                    <span style="letter-spacing: 0.03vh;">ствующие дизайнеры, большие профессионалы</span><br>
                    и настоящие фанаты своего дела!<br>
                    <br>
                    <b>Как проходило обучение?</b><br>
                    Обучение с самого начала было направлено на раз-<br>
                    витие креативного мышления. Мы активно занима-<br>
                    лись макетированием, познавая особенности<br>
                    и специфику различных материалов, продумывали<br>
                    графические решения для подачи наших проектов,<br>
                    и, конечно, всегда стремились работать над актуаль-<br>
                    ными проблемами.  
                  </p>
                </div>
              </v-col>
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col 
        cols="1" 
        class="d-flex align-center text-center justify-center"
        :style="{ 'margin-left': marginArr }"
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
export default {
    name: 'AboutPage1',
    data() {
        return {
            carouselModel: 0,
            totalSlides: 2, // Общее количество слайдов (вам нужно установить актуальное значение)
            heightArr: {
                height: '4.786458333333333vw'
            },
            marginArr: '3vw',
            heightImgSlide2: {
                height: '11.4875vw'
            },
        };
    },
    mounted() {
      document.documentElement.style.overflow = 'hidden';
      this.changeBackground();
    },
    beforeUnmount() {
      document.documentElement.style.overflow = '';
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

p {
  font-size: 1.1008854166666666vw;
}
p.slidesFont {
  font-size: 1.0530208333333335vw;
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
  right: 8vh;
  height: 17vw;
}
</style>

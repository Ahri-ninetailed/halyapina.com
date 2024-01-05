<template>
  <v-container class="aboutpage pa-0" fluid>
    <v-row class="text-center" justify="center" :style="heightSlideProp" style="padding-top: 12vh;">
      <v-col cols="2" sm="2" md="2" lg="2" class="d-flex align-center text-center justify-center">
        <v-btn :style="heightArr" @click="prevSlide" class="transparent-button">
          <img :style="heightArr" src="../images/AboutMePage/arr-left.svg" alt="Prev slide" />
        </v-btn>
      </v-col>
      <v-col cols="8" sm="8" md="8" lg="8" class="slide">
        <v-carousel style="width: 100%; height: inherit;" :show-arrows="false" :cycle="false" hide-delimiters v-model="carouselModel">
          <v-carousel-item>
            <v-row no-gutters class="slide" :style="heightSlideRowProp">
              <v-col offset="1" cols="5" class="align-self-center">
                <img style="height: 22vw;" src="../images/AboutMePage/Slide1/MyFace.jpg" alt="Maria Halyapina img"/>
              </v-col>
              <v-col offset="1" cols="5" class="align-self-center">
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
              </v-col>
            </v-row>
          </v-carousel-item>

          <v-carousel-item>
            <v-row class="slide pl-13" :style="heightSlideRowProp">
              <v-col cols="5" align="center" justify="center" style="margin-top: 7vh; padding-top: 0vh">
                <div>
                  <img :style="heightImgSlide2" style="margin-bottom: 2vh;" src="../images/AboutMePage/Slide2/Moodboard1.jpg" alt="Moodboard"/>
                </div>
                <div>
                  <img :style="heightImgSlide2" src="../images/AboutMePage/Slide2/Moodboard2.jpg" alt="Moodboard"/>
                </div>
                <p class="title" style="margin-top: 1vh;">Мудборд концептуального проекта</p>
              </v-col>
              <v-col cols="6" class="pl-6 align-self-center">
                <p class="text-start h-montserrat-regular slidesFont">
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
              </v-col>
            </v-row>
          </v-carousel-item>
          
          <v-carousel-item>
            <v-row class="slide" :style="heightSlideRowProp">
              <v-row class="slidesMarginPadding">
                <v-col cols="4" class="pa-0 d-flex align-center justify-start">
                <img src="../images/AboutMePage/Slide3/MariaWithEarrings.jpg" style="height: 23.570638020833332vw;" alt="Maria with earrings">
              </v-col>
              <v-col class="pa-0" cols="4">
                <v-col cols="12" class="pa-0 d-flex flex-column align-center justify-center" style="height: 100%;">
                  <img src="../images/AboutMePage/Slide3/dragonfly1.jpg" style="height: 11.1216796875vw; margin-bottom: 1.3501627604166666vw;" alt="Prototype of Dragonfly">
                  <img src="../images/AboutMePage/Slide3/dragonfly2.jpg" style="height: 11.1216796875vw;" alt="Prototype of Dragonfly">
                </v-col>
              </v-col>
              <v-col cols="4" class="pa-0 d-flex align-center justify-end">
                <img src="../images/AboutMePage/Slide3/prototypeOfLine.jpg" style="height: 23.570638020833332vw;" alt="Prototype of Line chair">
              </v-col>
              </v-row>
            </v-row>
          </v-carousel-item>

          <v-carousel-item>
            <v-row class="slide" :style="heightSlideRowProp">
              <v-row class="slidesMarginPadding">
                <v-col class="pa-0 d-flex flex-column align-start justify-end" cols="6">
                  <img src="../images/AboutMePage/Slide4/factory.jpg" style="height: 51.5vh;" alt="Factory">
                </v-col>
                <v-col class="pa-0 d-flex flex-column align-center justify-center" cols="6">
                  <p style="margin-left: 2vw;" class="text-start h-montserrat-regular slidesFont">
                  <span style="letter-spacing: 0.020vw;">Руководство кафедры считает необходи-</span><br>
                  мым дать студентам возможность работать<br>
                  с реальными заказчиками. Благодаря тако-<br>
                  <span style="letter-spacing: 0.020vw;">му опыту учишься следовать не только</span><br>
                  ТЗ, но и учитывать настоящие возможности<br>
                  производства.
                  </p>
                </v-col> 
                <v-col cols="5" class="pa-0 d-flex flex-column align-center">
                  <p style="margin-left: 1vw; margin-top: 1.6vh;" class="title">Посещение фабрики Ангстрем</p>
                </v-col>
              </v-row>
            </v-row>
          </v-carousel-item>

          <v-carousel-item>
            <v-row class="slide" :style="heightSlideRowProp">
              <v-row class="slidesMarginPadding">
                <v-col class="pa-0 d-flex flex-column align-start justify-end" cols="5">
                  <img src="../images/AboutMePage/Slide5/PosterVitra.jpg" style="height: 51vh;" alt="Poster Vitra">
                </v-col>
                <v-col class="pa-0 d-flex flex-column align-center justify-center" cols="7">
                  <p style="margin-left: 1.3vw;" class="text-start h-montserrat-regular slidesFont">
                    Во время обучения нас старались ознакомить с раз-<br>
                    личными сферами дизайна. Замечательным опытом<br>
                    стало участие в конкурсе плакатов всемирно извес-<br>
                    тной фирмы Vitra. Мы старались выявить ключевой<br>
                    посыл фирмы и выразить его с помощью яркой гра-<br>
                    фической подачи.
                  </p>
                </v-col>
                <v-col cols="5" class="pa-0 d-flex flex-column align-center">
                  <p style="margin-right: 4.5vw; margin-top: 1.6vh;" class="title">Плакат для Vitra</p>
                </v-col>
              </v-row>
            </v-row>
          </v-carousel-item>

          <v-carousel-item>
            <v-row class="slide" :style="heightSlideRowProp">
              <v-row class="slidesMarginPadding">
                <v-col class="pa-0 d-flex flex-column align-start justify-center" cols="6">
                  <img src="../images/AboutMePage/Slide6/DiplomaFromVitra.jpg" style="height: 50.8vh;" alt="Diploma from Vitra">
                </v-col>
                <v-col class="pa-0 d-flex flex-column align-end justify-center" cols="6">
                  <img src="../images/AboutMePage/Slide6/MariaNearPoster.jpg" style="height: 50.8vh;" alt="I near poster">
                </v-col>  
                <v-col cols="12" class="pa-0">
                  <p style="margin-top: 1.6vh;" class="title text-center">Диплом за 3-е место</p>
                </v-col> 
              </v-row>
            </v-row>
          </v-carousel-item>

          <v-carousel-item>
            <v-row class="slide" :style="heightSlideRowProp">
              <v-row class="slidesMarginPadding">
                <v-col class="pa-0 d-flex flex-column align-center justify-center" cols="5">
                  <img src="../images/AboutMePage/Slide7/Thonet.jpg" style="height: 51vh; margin-right: 4vw;" alt="Thonet chair">
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
              </v-row>
            </v-row>
          </v-carousel-item>

          <v-carousel-item>
            <v-row class="slide" :style="heightSlideRowProp">
              <v-row class="slidesMarginPadding">
                <v-col class="pa-0 d-flex flex-column align-center justify-center" cols="12">
                  <img src="../images/AboutMePage/Slide8/AboutTheAtelier.jpg" style="height: 51vh;" alt="About the atelier">
                </v-col> 
              </v-row>
            </v-row>
          </v-carousel-item>

          <v-carousel-item>
            <v-row class="slide" :style="heightSlideRowProp">
              <v-row class="slidesMarginPadding">
                <v-col class="pa-0 d-flex flex-column align-center justify-center" cols="12">
                  <p class="text-start h-montserrat-regular slidesFont">
                    Отныне я в свободном плавании, и мне не терпится применить и приумножить  свои знания!
                  </p>
                </v-col>  
              </v-row>
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col cols="2" sm="2" md="2" lg="2" class="d-flex align-center text-center justify-center">
        <v-btn :style="heightArr" @click="nextSlide" class="transparent-button">
          <img :style="heightArr" src="../images/AboutMePage/arr-right.svg" alt="Next slide" />
        </v-btn>
      </v-col>
    </v-row>z
  </v-container>
  <img class="popkorn" src="../images/AboutMePage/popkorn.png" alt="GirlWithPopkorn"/>
</template>
    
<script>
export default {
    name: 'AboutPage',
    data() {
        return {
            carouselModel: 0,
            totalSlides: 9, // Общее количество слайдов (вам нужно установить актуальное значение)
            heightArr: {
                height: '10vh'
            },
            heightSlide: {
                measure: 'vh',
                value: 76,
            },
            heightImgSlide2: {
                height: '24vh'
            },
        };
    },
    computed: {
      heightSlideProp() {
        return {
          height: this.heightSlide.value + this.heightSlide.measure,
        };
      },
      heightSlideRowProp() {
        return {
          height: (this.heightSlide.value - 10.6) + this.heightSlide.measure,
        };
      }
    },
    methods: {
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
.slidesMarginPadding {
  margin-top: 5.1%;
  padding-bottom: 6%;
  margin-left: 11.1%;
  margin-right: 11.1%;
}

.popkorn {
  position: fixed;
  bottom: 0;
  z-index: 1000; /* Помещает изображение за основной контент */
  right: 8vh;
  height: 17vw;
}
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

h1, p {
  color: white;
}

h1.slide1 {
  font-size: 1.484vw;
}
p {
  font-size: 1.1008854166666666vw;
}
p.slidesFont {
  font-size: 1.0530208333333335vw;
}

.title {
  font-size: 0.71796875vw; font-style: italic;
}
</style>

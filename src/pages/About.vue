<template>
  <v-container 
    fluid 
    class="pa-0" 
    style="background-color: black; height: 100vh;" 
    :style="{...containerHeight, ...containerPadding}"
  >
    <v-row v-if="this.$vuetify.display.smAndUp" 
      class="mb-0 ml-0 mr-0 d-flex justify-center" 
      style="height: 67.173913vh; width: 100%; margin-top: 9vh;"
    >
      <v-col 
        cols="1" 
        class="d-flex align-center text-center justify-center" 
        :style="leftArrMargin"
      >
        <v-btn icon :style="heightArr" @click="prevSlide" class="transparent-button">
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
            <row-aboutme>
              <v-col align="start" cols="6" class="pa-0 align-self-center">
                <img style="height: 24vw;" src="../images/AboutMePage/Slide1/MyFace.webp" alt="Maria Halyapina img"/>
              </v-col>
              <v-col align="end" cols="6" class="pa-0 align-self-center">
                <div style="width: 20.520833333333332vw; display: inline-block; line-height: 1.8229166666666667vw; letter-spacing: 0.03125vw;">
                  <h1 class="text-start h-neucha-regular slide1-h">
                    <span v-if="$i18n.locale === 'ru'">
                      Образование:
                    </span>
                    <span lang="en" v-else>
                      Education:
                    </span>
                  </h1>
                  <p class="text-start h-montserrat-regular slides-font">
                    <span v-if="$i18n.locale === 'ru'">
                      РГХПУ им. С. Г. Строганова<br>
                      кафедра «Дизайн мебели» 
                    </span>
                    <span lang="en" v-else>
                      Stroganov Russian State University of Design and Applied Arts<br>
                      Department of "Furniture Design"
                    </span>
                  </p>
                  <h1 class="mt-3 text-start h-neucha-regular slide1-h">
                    <span v-if="$i18n.locale === 'ru'">
                      Владение программами: 
                    </span>
                    <span v-else>
                      Skills:
                    </span>
                  </h1>
                  <p lang="en" class="text-start h-montserrat-regular slides-font">
                    Autodesk 3ds Мах, Corona, AutoCAD,<br>
                    Adobe lllustrator, Adobe Photoshop,<br>
                    CorelDraw, SketchUp, Layout
                  </p>
                  <h1 class="mt-3 text-start h-neucha-regular slide1-h">
                    <span v-if="$i18n.locale === 'ru'">
                      Контакты:
                    </span>
                    <span lang="en" v-else>
                      Contacts:
                    </span>
                  </h1>
                  <p class="text-start h-montserrat-regular slides-font">
                    halyapinamari@gmail.com<br>
                    WhatsApp +79671930086<br>
                    <a target="_blank" href="https://www.instagram.com/ultimate.gray/">Instagram</a>&nbsp;
                    <a target="_blank" href="https://t.me/halyapina">Telegram</a>
                  </p>
                </div>
              </v-col>
            </row-aboutme>
          </swiper-slide>
          
          <swiper-slide>
            <row-aboutme>
              <v-col lg="5" cols="12" align="center" class="pa-0 align-self-center slide2-col-img-margin">
                <v-row style="width: 100%;" class="ma-0">
                  <v-col :class="this.$vuetify.display.lgAndUp ? '' : 'align-self-end'" :align="this.$vuetify.display.lgAndUp ? 'start' : 'start'" lg="12" sm="6" cols="12" class="pa-0 slide2-img-margin">
                    <full-image :d-lg-h-v=35 :d-md-h-v=45 :d-h-v=55 d-h-u="vw" class="aboutme-slide2-img-height" :src="imgPath('Slide2/Moodboard1.webp')" :src-zoom="imgPath('Slide2/Moodboard1_zoom.webp')" alt="Moodboard"/>
                  </v-col>
                  <v-col :class="this.$vuetify.display.lgAndUp ? '' : 'align-self-end'" :align="this.$vuetify.display.lgAndUp ? 'start' : 'end'" lg="12" sm="6" cols="12" class="pa-0">
                    <full-image :d-lg-h-v=35 :d-md-h-v=45 :d-h-v=55 d-h-u="vw" class="aboutme-slide2-img-height" :src="imgPath('Slide2/Moodboard2.webp')" :src-zoom="imgPath('Slide2/Moodboard2_zoom.webp')" alt="Moodboard"/>
                  </v-col>
                  <v-col v-if="this.$vuetify.display.lgAndUp" cols="12" class="pa-0 mt-lg-3">
                    <p class="title slide2-title-margin">
                      <span v-if="$i18n.locale === 'ru'">
                        Мудборд концептуального проекта
                      </span>
                      <span lang="en" v-else>
                        Conceptual project moodboard
                      </span>
                    </p>
                  </v-col>
                </v-row>
              </v-col>
              <v-col lg="7" cols="12" align="end" class="pa-0 slide2-text-col-margin" :class="this.$vuetify.display.lgAndUp ? 'align-self-center' : 'align-self-start'">
                <v-row class="d-lg-inline-block ma-lg-0 ma-0 mb-sm-0 mt-sm-0 mr-sm-0 ml-sm-0" style="width: 29.427083333333332vw;">
                  <v-col v-if="this.$vuetify.display.lgAndUp" lg="12" sm="6" cols="12" class="mb-lg-1 pa-0">
                    <p class="text-start h-montserrat-regular slides-font" style="line-height: 3.2vh;">
                      <span v-if="$i18n.locale === 'ru'">
                        Меня зовут Мария, я с детства любила рисовать<br>
                        и фантазировать, и эти две, казалось бы, безобидные<br>
                        привычки превратили меня в дизайнера. В 2019 году<br>
                        <span style="letter-spacing: 0.014359375vw;">я поступила в РГХПУ им. С.Г. Строганова на кафедру</span><br>
                        <span style="letter-spacing: 0.014359375vw;">«Дизайн мебели». Преподаватели кафедры — дей-</span><br>
                        <span style="letter-spacing: 0.014359375vw;">ствующие дизайнеры, большие профессионалы</span><br>
                        и настоящие фанаты своего дела!<br> 
                      </span>
                      <span lang="en" v-else>
                        My name is Maria. Since childhood, I have loved
                        drawing and daydreaming, and these two seemingly
                        harmless habits turned me into a designer. In 2019
                        I enrolled at the Stroganov Russian State University
                        of Design and Applied Arts, in the "Furniture Design"
                        department. The faculty here are practicing designers,
                        true professionals who are passionate about their craft!
                      </span>
                    </p>
                  </v-col>
                  <v-col v-if="this.$vuetify.display.md || this.$vuetify.display.sm" lg="12" sm="6" cols="12" class="mb-lg-1 pa-0">
                    <p class="text-start h-montserrat-regular slides-font" style="line-height: 3.1vh;">
                      <span v-if="$i18n.locale === 'ru'">
                        <span style="letter-spacing: 0.009572916666666665vw;">Меня зовут Мария, я с детства любила рисо-<br>вать</span>
                        и фантазировать, и эти две, казалось бы, безобидные
                        <span style="letter-spacing: 0.009572916666666665vw;">привычки превратили меня<br>в дизайнера. </span>В 2019 году
                        <span style="letter-spacing: 0.014359375vw;">я поступила в РГХПУ им. С.Г. Строганова на кафедру</span>
                        «Дизайн ме-<br>бели». Преподаватели кафедры — дей<span style="letter-spacing: 0.014359375vw;">ству-<br>ющие дизайнеры, большие профессионалы</span>
                        <br>и настоящие фанаты своего дела!
                      </span>
                      <span lang="en" v-else>
                        My name is Maria. Since childhood, I have loved
                        drawing and daydreaming, and these two seemingly
                        harmless habits turned me into a designer. In 2019
                        I enrolled at the Stroganov Russian State University
                        of Design and Applied Arts, in the "Furniture Design"
                        department. The faculty here are practicing designers,
                        true professionals who are passionate about their craft!
                      </span>
                    </p>
                  </v-col>

                  <v-col v-if="this.$vuetify.display.lgAndUp" lg="12" sm="6" cols="12" class="pa-0">
                    <p class="text-start h-montserrat-regular slides-font slide2-p-margin" style="line-height: 3.2vh;">
                      <span v-if="$i18n.locale === 'ru'">
                        <b>Как проходило обучение?</b><br>
                        Обучение с самого начала было направлено на раз-<br>
                        витие креативного мышления. Мы активно занима-<br>
                        лись макетированием, познавая особенности<br>
                        и специфику различных материалов, продумывали<br>
                        графические решения для подачи наших проектов,<br>
                        и, конечно, всегда стремились работать над актуаль-<br>
                        ными проблемами.  
                      </span>
                      <span lang="en" v-else>
                        <b>How was the training?</b><br>
                        From the very beginning, the program focused on
                        developing creative thinking. We were deeply involved
                        in prototyping, learning the properties and specifics
                        of various materials, designing graphic solutions to
                        present our projects, and, of course, always striving
                        to tackle relevant, real-world problems.
                      </span>
                    </p>
                  </v-col>
                  <v-col v-if="this.$vuetify.display.md || this.$vuetify.display.sm" lg="12" sm="6" cols="12" class="pa-0">
                    <p class="text-start h-montserrat-regular slides-font slide2-p-margin" style="margin-left: 1.6vw; line-height: 3.1vh;">
                      <span v-if="$i18n.locale === 'ru'">
                        <b>Как проходило обучение?</b><br>
                        Обучение с самого начала было направлено на развитие креа-<br>
                        тивного мышления. Мы активно занимались макетированием, познавая особенности<br>
                        и специфику различных материалов, проду-<br>
                        мывали графические решения для подачи наших проектов,
                        и, конечно, всегда стреми-<br>
                        лись работать над актуальными проблемами.  
                      </span>
                      <span lang="en" v-else>
                        <b>How was the training?</b>
                        From the very beginning, the program focused on
                        developing creative thinking. We were deeply involved
                        in prototyping, learning the properties and specifics
                        of various materials, designing graphic solutions to
                        present our projects, and, of course, always striving
                        to tackle relevant, real-world problems.
                      </span>
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
                    <img src="../images/AboutMePage/Slide3/MariaWithEarrings.webp" class="aboutme-slide3-height-img1" alt="Maria with earrings">
                  </v-col>
                  <v-col cols="4" align="center" class="pa-0">
                    <v-row class="fill-height ma-0">
                      <v-col cols="12" class="pa-0 align-self-start">
                        <full-image :d-lg-h-v=35 :d-md-h-v=45 :d-h-v=55 d-h-u="vw" :src="imgPath('Slide3/dragonfly1.webp')" :src-zoom="imgPath('Slide3/dragonfly1_zoom.webp')" class="aboutme-slide3-height-img2" alt="My earrings"/>
                      </v-col>
                      <v-col cols="12" class="pa-0 align-self-end">
                        <full-image :d-lg-h-v=35 :d-md-h-v=45 :d-h-v=55 d-h-u="vw" :src="imgPath('Slide3/dragonfly2.webp')" :src-zoom="imgPath('Slide3/dragonfly2_zoom.webp')" class="aboutme-slide3-height-img2" alt="My earrings"/>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols="4" align="end" class="pa-0">
                    <full-image :d-sm-h-v=60 :d-md-h-v=80 :d-h-v=50 d-h-u="vh" :src="imgPath('Slide3/prototypeOfLine.webp')" :src-zoom="imgPath('Slide3/prototypeOfLine_zoom.webp')" class="aboutme-slide3-height-img1" alt="Prototype of Line chair"/>
                  </v-col>
                </v-row>
                <v-row v-if="this.$vuetify.display.md || this.$vuetify.display.sm" class="ma-0 slide3-row-margin">
                  <v-col sm="6" align="end" class="pa-0 align-self-center">
                    <v-row class="slide3-row-margin-right ">
                      <v-col cols="12" class="pa-0 slide3-margin-vertical-bot">
                        <full-image :d-lg-h-v=35 :d-md-h-v=45 :d-h-v=55 d-h-u="vw" :src="imgPath('Slide3/dragonfly1.webp')" :src-zoom="imgPath('Slide3/dragonfly1_zoom.webp')" class="aboutme-slide3-height-img2" alt="My earrings"/>
                      </v-col>
                      <v-col cols="12" class="pa-0">
                        <img src="../images/AboutMePage/Slide3/MariaWithEarrings.webp" class="aboutme-slide3-height-img1" alt="Maria with earrings">
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col sm="6" align="start" class="pa-0">
                    <v-row class="slide3-row-margin-left">
                      <v-col cols="12" class="pa-0">
                        <full-image :d-sm-h-v=60 :d-md-h-v=80 :d-h-v=50 d-h-u="vh" :src="imgPath('Slide3/prototypeOfLine.webp')" :src-zoom="imgPath('Slide3/prototypeOfLine_zoom.webp')" class="aboutme-slide3-height-img1" alt="Prototype of Line chair"/>
                      </v-col>
                      <v-col cols="12" class="pa-0 slide3-margin-vertical-top">
                        <full-image :d-lg-h-v=35 :d-md-h-v=45 :d-h-v=55 d-h-u="vw" :src="imgPath('Slide3/dragonfly2.webp')" :src-zoom="imgPath('Slide3/dragonfly2_zoom.webp')" class="aboutme-slide3-height-img2" alt="My earrings"/>
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
                <full-image :d-sm-h-v=60 :d-md-h-v=80 :d-h-v=50 d-h-u="vh" :src="imgPath('Slide4/factory.webp')" :src-zoom="imgPath('Slide4/factory_zoom.webp')" class="aboutme-slide4-img-height" alt="Factory" />
                <p class="title text-center slide4-title-margin">
                  <span v-if="$i18n.locale === 'ru'">
                    Посещение фабрики Ангстрем
                  </span>
                  <span lang="en" v-else>
                    Visit to the Angstrem factory
                  </span>
                </p>
              </v-col>
              <v-col align="end" cols="6" class="pa-0 align-self-center">
                <v-row class="ma-0 d-inline-block">
                  <p class="text-start h-montserrat-regular slides4-font" style="width: 24.0625vw;">
                    <span v-if="$i18n.locale === 'ru'">
                      <span style="letter-spacing: 0.020vw;">Руководство кафедры считает необходи-</span><br>
                      мым дать студентам возможность работать<br>
                      с реальными заказчиками. Благодаря тако-<br>
                      <span style="letter-spacing: 0.020vw;">му опыту учишься следовать не только</span><br>
                      ТЗ, но и учитывать настоящие возможности<br>
                      производства.
                    </span>
                    <span lang="en" v-else>
                      The faculty believes it is essential to give students
                      the opportunity to work with real clients. This experience
                      teaches you to follow not only the technical brief, but also
                      to consider the actual capabilities of production.
                    </span>
                  </p>
                </v-row>
              </v-col>
            </row-aboutme>
          </swiper-slide>

          <swiper-slide>
            <row-aboutme>
              <v-col cols="5" align="start" class="pa-0 align-self-center" style="margin-top: 4vh;">
                <full-image :d-md-h-v=90 :d-sm-h-v=60 :d-h-v=50 d-h-u="vh" :src="imgPath('Slide5/PosterVitra.webp')" :src-zoom="imgPath('Slide5/PosterVitra_zoom.webp')" class="aboutme-slide5-img-height" alt="Poster Vitra" />
                <p class="text-center title slide5-title-margin">
                  <span v-if="$i18n.locale === 'ru'">
                    Плакат для Vitra
                  </span>
                  <span lang="en" v-else>
                    Poster for Vitra
                  </span>
                </p>
              </v-col>
              <v-col class="pa-0 d-flex flex-column align-end justify-center" cols="7">
                <p class="text-start h-montserrat-regular slides-font" style="width: 29.0625vw;">
                  <span v-if="$i18n.locale === 'ru'">
                    Во время обучения нас старались ознакомить с раз-<br>
                    личными сферами дизайна. Замечательным опытом<br>
                    стало участие в конкурсе плакатов всемирно извес-<br>
                    тной фирмы Vitra. Мы старались выявить ключевой<br>
                    посыл фирмы и выразить его с помощью яркой гра-<br>
                    фической подачи.
                  </span>
                  <span lang="en" v-else>
                    Throughout our studies, we were introduced to various
                    areas of design. Taking part in the poster competition
                    for the world-famous Vitra was a wonderful experience.
                    We aimed to identify the brand's core message and express
                    it through bold, vivid graphics.
                  </span>
                </p>
              </v-col>
            </row-aboutme>
          </swiper-slide>

          <swiper-slide>
            <row-aboutme style="margin-top: 2vh">
              <v-col cols="6" class="pa-0 d-flex flex-column align-start justify-end">
                <full-image :d-sm-h-v=60 :d-md-h-v=80 :d-h-v=50 d-h-u="vh" :src="imgPath('Slide6/DiplomaFromVitra.webp')" :src-zoom="imgPath('Slide6/DiplomaFromVitra_zoom.webp')" class="aboutme-slide6-img-height" alt="Diploma from Vitra" />
              </v-col>
              <v-col cols="6" class="pa-0 d-flex flex-column align-end justify-end">
                <full-image :d-sm-h-v=60 :d-md-h-v=80 :d-h-v=50 d-h-u="vh" :src="imgPath('Slide6/MariaNearPoster.webp')" :src-zoom="imgPath('Slide6/MariaNearPoster_zoom.webp')" class="aboutme-slide6-img-height" alt="I'm near poster" />
              </v-col>
              <v-col cols="12" class="pa-0">
                <p class="title text-center" style="margin-top: 1.5vh;">
                  <span v-if="$i18n.locale === 'ru'">
                    Диплом за 3-е место
                  </span>
                  <span lang="en" v-else>
                    Diploma for 3rd place
                  </span>
                </p>
              </v-col> 
            </row-aboutme>
          </swiper-slide>

          <swiper-slide>
            <row-aboutme>
              <v-col class="pa-0 d-flex flex-column align-center justify-center" cols="5">
                <img src="../images/AboutMePage/Slide7/Thonet.webp" style="height: 24.4109375vw; margin-right: 4vw;" alt="Thonet chair">
                </v-col>
                <v-col class="pa-0 d-flex flex-column align-center justify-center" cols="7">
                  <p style="margin-left: 1vw; width: 30.416666666666668vw;" class="text-start h-montserrat-regular slidesFont">
                    <span v-if="$i18n.locale === 'ru'">
                      <span style="letter-spacing: 0.015vw;">Не мало внимания уделялось и умению  работать</span><br>
                      в команде. Для достижения поставленной цели не-<br>
                      <span style="letter-spacing: 0.015vw;">обходимо уметь находить компромиссы. Данный</span><br>
                      <span style="letter-spacing: 0.020vw;">проект создавался совместно с В. Декалиной</span><br>
                      и П. Ерёмичевой. Идея заключалась в создании<br>
                      ателье по восстановлению старинной мебели с по-<br>
                      мощью замены сломанных элементов деталями<br>
                      <span style="letter-spacing: -0.020vw;">из переработанного пластика. А лицом нашего ателье</span><br>
                      стала бы вечно нестареющая классика — Thonet!
                    </span>
                    <span lang="en" v-else>
                      Considerable attention was also paid to teamwork.
                      To reach a shared goal, you have to know how to find
                      compromises. This project was created together with
                      V. Dekalina and P. Eryomicheva. The idea was to open
                      an atelier that restores antique furniture by replacing
                      broken parts with components made from recycled plastic.
                      And the face of our atelier would be the timeless
                      classic — Thonet!
                    </span>
                  </p>
                </v-col>  
            </row-aboutme>
          </swiper-slide>

          <swiper-slide>
            <row-aboutme>
              <v-col class="pa-0 d-flex flex-column align-center justify-center" cols="12">
                <img src="../images/AboutMePage/Slide8/AboutTheAtelier.webp" style="height: 24.4109375vw;" alt="About the atelier">
              </v-col> 
            </row-aboutme>
          </swiper-slide>

          <swiper-slide :style="{ backgroundImage: `url(${this.imagePath})`, backgroundSize: 'cover' }">
            <row-aboutme>
              <v-col class="pa-0 d-flex flex-column align-center justify-center" cols="12">
                <p class="text-start h-montserrat-regular slides-font">
                  <span v-if="$i18n.locale === 'ru'">
                    Отныне я в свободном плавании, и мне не терпится применить и приумножить  свои знания!
                  </span>
                  <span lang="en" v-else>
                    From now on I'm setting sail on my own, and I can't wait to put my knowledge to use and grow it further!
                  </span>
                </p>
              </v-col>  
            </row-aboutme>
          </swiper-slide>
        </swiper>
      </v-col>
      <v-col 
        cols="1" 
        class="d-flex align-center text-center justify-center"
        :style="rightArrMargin"
      >
        <v-btn icon :style="heightArr" @click="nextSlide" class="transparent-button">
          <img :style="heightArr" src="../images/AboutMePage/arr-right.svg" alt="Next slide" />
        </v-btn>
      </v-col>
    </v-row>
    <v-row v-else class="ma-0 pt-2 pl-8 pr-9 pb-12">
      <v-col align="center" cols="12" class="pa-0 align-self-center">
        <img style="width: 83vw;" src="../images/AboutMePage/Slide1/MyFace.webp" alt="Maria Halyapina img"/>
      </v-col>
      <v-col align="start" cols="12" class="pa-0 align-self-center">
        <h1 class="text-start h-neucha-regular xs-h-size mt-5">
          <span v-if="$i18n.locale === 'ru'">
            Образование:
          </span>
          <span lang="en" v-else>
            Education:
          </span>
        </h1>
        <p class="text-start h-montserrat-regular xs-text-size">
          <span v-if="$i18n.locale === 'ru'">
            РГХПУ им. С. Г. Строганова<br>
            кафедра «Дизайн мебели» 
          </span>
          <span lang="en" v-else>
            Stroganov Russian State University of Design and Applied Arts<br>
            Department of "Furniture Design"
          </span>
        </p>
        <h1 class="text-start h-neucha-regular xs-h-size mt-3">
          <span v-if="$i18n.locale === 'ru'">
            Владение программами: 
          </span>
          <span lang="en" v-else>
            Skills:
          </span>
        </h1>
        <ul lang="en" class="text-start h-montserrat-regular xs-text-size" style="color:white; width: fit-content; padding-left: 5vw;">
          <li>Autodesk 3ds Мах</li>
          <li>Corona</li>
          <li>AutoCAD</li>
          <li>Adobe Photoshop</li>
          <li>CorelDraw</li>
          <li>SketchUp</li>
          <li>Layout</li>
        </ul>
        <h1 class="text-start h-neucha-regular xs-h-size mt-3">
          <span v-if="$i18n.locale === 'ru'">
            Контакты:
          </span>
          <span lang="en" v-else>
            Contacts:
          </span>
        </h1>
        <p class="text-start h-montserrat-regular xs-text-size">
          halyapinamari@gmail.com<br>
          WhatsApp +79671930086<br>
          <a target="_blank" href="https://www.instagram.com/ultimate.gray/">Instagram</a>&nbsp;
          <a target="_blank" href="https://t.me/halyapina">Telegram</a>
        </p>
      </v-col>
      <v-col align="center" cols="12" class="pa-0 align-self-center mt-6">
        <img style="width: 83vw" src="../images/AboutMePage/Slide2/Moodboard1.webp" alt="Moodboard"/>
      </v-col>
      <v-col align="center" cols="12" class="pa-0 align-self-center mt-7">
        <img style="width: 83vw" src="../images/AboutMePage/Slide2/Moodboard2.webp" alt="Moodboard"/>
      </v-col>
      <v-col align="center" cols="12" class="pa-0 align-self-center">
        <p class="title">
          <span v-if="$i18n.locale === 'ru'">
            Мудборд концептуального проекта
          </span>
          <span lang="en" v-else>
            Conceptual project moodboard
          </span>
        </p>
      </v-col>
      <v-col cols="12" class="pa-0">
        <p class="text-start h-montserrat-regular xs-text-size mt-5">
          <span v-if="$i18n.locale === 'ru'">
            Меня зовут Мария, я с детства лю-<br>
            била рисовать и фантазировать,<br>
            и эти две, казалось бы, безобид-<br>
            ные привычки превратили меня<br>
            в дизайнера. В 2019 году я посту-<br>
            пила в РГХПУ им. С.Г. Строганова<br>
            на кафедру «Дизайн мебели». Преподаватели кафедры — дей-<br>
            ствующие дизайнеры, большие<br>
            профессионалы и настоящие<br>
            фанаты своего дела!<br>
            <br>
            <span style="font-weight: bold;">Как проходило обучение?</span>
            <br>
            Обучение с самого начала было<br>
            направлено на развитие креатив-<br>
            ного мышления. Мы активно за-<br>
            нимались макетированием, поз-<br>
            навая особенности и специфику<br>
            различных материалов, проду-<br>
            мывали графические решения<br>
            для подачи наших проектов,<br>
            и, конечно, всегда стремились<br>
            работать над актуальными проблемами.
          </span>
          <span lang="en" v-else>
            My name is Maria. Since childhood, I have loved drawing and daydreaming,
            and these two seemingly harmless habits turned me into a designer. In 2019
            I enrolled at the Stroganov Russian State University of Design and Applied
            Arts, in the "Furniture Design" department. The faculty here are practicing
            designers, true professionals who are passionate about their craft!<br>
            <br>
            <span style="font-weight: bold;">How was the training?</span>
            <br>
            From the very beginning, the program focused on developing creative
            thinking. We were deeply involved in prototyping, learning the
            properties and specifics of various materials, designing graphic
            solutions to present our projects, and, of course, always striving
            to tackle relevant, real-world problems.
          </span>
        </p>
      </v-col>
      <v-col align="center" cols="12" class="pa-0 align-self-center mt-7">
        <img src="../images/AboutMePage/Slide3/prototypeOfLine.webp" style="width: 80vw;" alt="Prototype of Line chair"/>
      </v-col>
      <v-col align="center" cols="12" class="pa-0 align-self-center mt-7">
        <img src="../images/AboutMePage/Slide3/MariaWithEarrings.webp" style="width: 80vw;" alt="Maria with earrings"/>
      </v-col>
      <v-col align="center" cols="12" class="pa-0 align-self-center mt-7">
        <img src="../images/AboutMePage/Slide3/dragonfly1.webp" style="width: 80vw;" alt="My earrings"/>
      </v-col>
      <v-col align="center" cols="12" class="pa-0 align-self-center">
        <p class="title">
          <span v-if="$i18n.locale === 'ru'">
            Макетирование
          </span>
          <span lang="en" v-else>
            Mockup creation
          </span>
        </p>
      </v-col>
      <v-col cols="12" class="pa-0">
        <p class="text-start h-montserrat-regular xs-text-size mt-5">
          <span v-if="$i18n.locale === 'ru'">
            Руководство кафедры считает не-<br>
            обходимым дать студентам воз-<br>
            можность работать с реальными<br>
            заказчиками. Благодаря такому<br>
            опыту учишься следовать не толь-<br>
            ко ТЗ, но и учитывать настоящие<br>
            возможности производства.
          </span>
          <span lang="en" v-else>
            The faculty believes it is essential to give students the
            opportunity to work with real clients. This experience teaches
            you to follow not only the technical brief, but also to consider
            the actual capabilities of production.
          </span>
        </p>
      </v-col>
      <v-col align="center" cols="12" class="pa-0 align-self-center mt-6">
        <img src="../images/AboutMePage/Slide4/factory.webp" style="width: 83vw" alt="Factory" />
      </v-col>
      <v-col align="center" cols="12" class="pa-0 align-self-center">
        <p class="title">
          <span v-if="$i18n.locale === 'ru'">
            Посещение фабрики Ангстрем
          </span>
          <span lang="en" v-else>
            Visit to the Angstrom factory
          </span>
        </p>
      </v-col>
      <v-col cols="12" class="pa-0">
        <p class="text-start h-montserrat-regular xs-text-size mt-5">
          <span v-if="$i18n.locale === 'ru'">
            Во время обучения нас старались<br>
            ознакомить с различными сфе-<br>
            рами дизайна. Замечательным<br>
            опытом стало участие в конкурсе<br>
            плакатов всемирно известной<br>
            фирмы Vitra. Мы старались выя-<br>
            вить ключевой посыл фирмы<br>
            и выразить его с помощью яркой<br>
            графической подачи.
          </span>
          <span lang="en" v-else>
            Throughout our studies, we were introduced to various
            areas of design. Taking part in the poster competition
            for the world-famous Vitra was a wonderful experience.
            We aimed to identify the brand's core message and express
            it through bold, vivid graphics.
          </span>
        </p>
      </v-col>
      <v-col align="center" cols="12" class="pa-0 align-self-center mt-6">
        <img src="../images/AboutMePage/Slide5/PosterVitra.webp" style="width: 83vw" alt="Poster Vitra" />
      </v-col>
      <v-col align="center" cols="12" class="pa-0 align-self-center">
        <p class="title">
          <span v-if="$i18n.locale === 'ru'">
            Плакат для Vitra
          </span>
          <span lang="en" v-else>
            Poster for Vitra
          </span>
        </p>
      </v-col>
      <v-col align="center" cols="12" class="pa-0 align-self-center mt-6">
        <img src="../images/AboutMePage/Slide6/DiplomaFromVitra.webp" style="width: 83vw" alt="Diploma from Vitra" />
      </v-col>
      
      <v-col align="center" cols="12" class="pa-0 align-self-center mt-6">
        <img src="../images/AboutMePage/Mobile/Atelier.webp" style="width: 83vw;" alt="Diploma from Vitra" />
      </v-col>
      <v-col cols="12" class="pa-0">
        <p class="text-start h-montserrat-regular xs-text-size mt-5">
          <span v-if="$i18n.locale === 'ru'">
            Не мало внимания уделялось ум-<br>
            ению работать в команде. Для до-<br>
            стижения поставленной цели не-<br>
            обходимо уметь находить<br>
            компромиссы. Данный проект со-<br>
            здавался совместно с одногруп-<br>
            пниками. Идея заключалась<br>
            в создании ателье по восста-<br>
            новлению старинной мебели<br>
            с помощью замены сломанных<br>
            элементов деталями из перера-<br>
            ботанного пластика. А лицом<br>
            нашего ателье стала бы вечно<br>
            нестареющая классика — Thonet!
          </span>
          <span lang="en" v-else>
            Considerable attention was also paid to teamwork.
            To reach a shared goal, you have to know how to find
            compromises. This project was created together with
            my classmates. The idea was to open an atelier that
            restores antique furniture by replacing broken parts
            with components made from recycled plastic. And the
            face of our atelier would be the timeless classic — Thonet!
          </span>
        </p>
      </v-col>
      <v-col align="center" cols="6" class="pa-0 align-self-center mt-6">
        <img src="../images/AboutMePage/Mobile/ThonetBlue.webp" style="width: 35vw;" alt="Blue thonet chair" />
      </v-col>
      <v-col align="center" cols="6" class="pa-0 align-self-center mt-6">
        <img src="../images/AboutMePage/Mobile/ThonetWhite.webp" style="width: 35vw;" alt="White thonet chair" />
      </v-col>

      <v-col cols="12" class="pa-0">

      </v-col>
        <p class="text-start h-montserrat-regular xs-text-size mt-5">
          <span v-if="$i18n.locale === 'ru'">
            Отныне я в свободном плавании, и мне не терпится применить и приумножить свои знания!
          </span>
          <span lang="en" v-else>
            From now on I am free to swim, and I can't wait to apply and increase my knowledge!
          </span>
        </p>
    </v-row>
  </v-container>
  <img v-if="this.$vuetify.display.smAndUp" class="popkorn" src="../images/AboutMePage/popkorn.webp" alt="GirlWithPopkorn"/>
</template>

<script>
import FullImage from '@/components/FullImage.vue';
import RowAboutme from '@/components/RowAboutme.vue';
import imagePath from '../images/AboutMePage/Slide9/background.webp'

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
            imagePath: imagePath,
            swiper: null,
            heightArr: {
                height: '4.786458333333333vw'
            }
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
      imgPath(img) {
        return new URL(`../images/AboutMePage/${img}`, import.meta.url).href;
      },
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
    },
    computed: {
      leftArrMargin() {
        return {
          marginRight: '3vw'
        };
      },
      rightArrMargin() {
        return {
          marginLeft: '3vw'
        };
      },
      containerPadding() {
        return {
          paddingTop:`${this.$headerHeightValue}${this.$headerHeightUnit} !important`
        }
      },
      containerHeight() {
        if (this.$vuetify.display.smAndUp) {
          return {
            height: '100vh'
          }
        } else {
          return {
            height: 'unset'
          }
        }
      },
   }
}
</script>

<style scoped>

a {
  color: inherit; /* Убирает стандартный цвет ссылок */
  font-weight: normal; /* Убирает жирность текста (если применимо) */
  background: none; /* Убирает фон */
  border: none; /* Убирает рамку (если применимо) */
}

.title {
  font-size: 0.718vw; font-style: italic;
}

.xs-text-size {
  font-size: 4.5vw;
}
.xs-h-size {
  font-size: 6vw;
}

h1.slide1-h {
  font-size: 1.484vw;
}

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
  .title {
    font-size: 3vw; font-style: italic;
  }
}

p {
  font-size: 1.1vw;
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
</style>
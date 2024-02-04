<template>
  <v-container class="pa-0" fluid style="overflow: hidden;">
    <v-parallax src="../images/AnimaPage/anima.jpg" v-if="this.$vuetify.display.smAndUp">
      <v-row class="ma-0" style="height: 100vh;">
        <v-col cols="12" class="pa-0 align-self-center">
          <p class="text-center h-neucha-regular" style="font-weight: bold; font-size: 9.094270833333333vw;">
            ANIMA
          </p>
        </v-col>
      </v-row>
    </v-parallax>
    <v-row class="ma-0" style="height: 100vh;" v-else>
        <v-col cols="12" class="pa-0 align-self-center">
          <p class="text-center h-neucha-regular" style="font-weight: bold; font-size: 20vw;">
            ANIMA
          </p>
        </v-col>
    </v-row>

    <v-row class="ma-0 background1">
      <Splide :options="splideOptions" :extensions="extensions">
        <SplideSlide>
          <full-image :d-lg-h-v=90 :d-md-h-v=70 :d-sm-h-v=56 :d-h-v=49 d-h-u="vh" src="../src/images/AnimaPage/Carousel/2tables.jpg" :style="styleOfImageSlideProp" alt="Two tables"/>
        </SplideSlide>
        <SplideSlide>
          <full-image :d-lg-h-v=90 :d-md-h-v=70 :d-sm-h-v=49 :d-h-v=37 d-h-u="vh" src="../src/images/AnimaPage/Carousel/2tables_grey.jpg" :style="styleOfImageSlideProp" alt="Two tables with grey wings"/>
        </SplideSlide>
        <SplideSlide>
          <full-image :d-lg-h-v=90 :d-md-h-v=70 :d-sm-h-v=49 :d-h-v=37 d-h-u="vh" src="../src/images/AnimaPage/Carousel/function_of_boxes.jpg" :style="styleOfImageSlideProp" alt="Functionality of boxes 1"/>
        </SplideSlide>
        <SplideSlide>
          <full-image :d-lg-h-v=90 :d-md-h-v=70 :d-sm-h-v=56 :d-h-v=49 d-h-u="vh" src="../src/images/AnimaPage/Carousel/function_of_boxes2.jpg" :style="styleOfImageSlideProp" alt="Functionality of boxes 2"/>
        </SplideSlide>
        <SplideSlide>
          <full-image :d-lg-h-v=90 :d-md-h-v=70 :d-sm-h-v=49 :d-h-v=37 d-h-u="vh" src="../src/images/AnimaPage/Carousel/function_of_boxes3.jpg" :style="styleOfImageSlideProp" alt="Functionality of boxes 3"/>
        </SplideSlide>
        <SplideSlide>
          <full-image :d-lg-h-v=90 :d-md-h-v=70 :d-sm-h-v=49 :d-h-v=37 d-h-u="vh" src="../src/images/AnimaPage/Carousel/interyer.jpg" :style="styleOfImageSlideProp" alt="Interyer"/>
        </SplideSlide>
        <SplideSlide>
          <full-image :d-lg-h-v=90 :d-md-h-v=70 :d-sm-h-v=56 :d-h-v=49 d-h-u="vh" src="../src/images/AnimaPage/Carousel/constructor.jpg" :style="styleOfImageSlideProp" alt="Constructor"/>
        </SplideSlide>
        <SplideSlide>
          <full-image :d-lg-h-v=90 :d-md-h-v=70 :d-sm-h-v=56 :d-h-v=49 d-h-u="vh" src="../src/images/AnimaPage/Carousel/prototype.jpg" :style="styleOfImageSlideProp" alt="Prototype"/>
        </SplideSlide>
        <SplideSlide>
          <full-image :d-lg-h-v=90 :d-md-h-v=70 :d-sm-h-v=49 :d-h-v=37 d-h-u="vh" src="../src/images/AnimaPage/Carousel/render_with_child.jpg" :style="styleOfImageSlideProp" alt="Render with child"/>
        </SplideSlide>
        <SplideSlide>
          <full-image :d-lg-h-v=90 :d-md-h-v=70 :d-sm-h-v=56 :d-h-v=49 d-h-u="vh" src="../src/images/AnimaPage/Carousel/separate_pieces.jpg" :style="styleOfImageSlideProp" alt="Separate pieces 1"/>
        </SplideSlide>
        <SplideSlide>
          <full-image :d-lg-h-v=90 :d-md-h-v=70 :d-sm-h-v=56 :d-h-v=49 d-h-u="vh" src="../src/images/AnimaPage/Carousel/separate_pieces2.jpg" :style="styleOfImageSlideProp" alt="Separate pieces 2"/>
        </SplideSlide>
        <SplideSlide>
          <full-image :d-lg-h-v=90 :d-md-h-v=70 :d-sm-h-v=49 :d-h-v=37 d-h-u="vh" src="../src/images/AnimaPage/Carousel/table_with_child.jpg" :style="styleOfImageSlideProp" alt="Child near table 1"/>
        </SplideSlide>
        <SplideSlide>
          <full-image :d-lg-h-v=90 :d-md-h-v=70 :d-sm-h-v=49 :d-h-v=37 d-h-u="vh" src="../src/images/AnimaPage/Carousel/table_with_child2.jpg" :style="styleOfImageSlideProp" alt="Child near table 2"/>
        </SplideSlide>
      </Splide>
      <v-row class="ma-0 def-pad-top padding">
        <v-row class="ma-0">
          <v-col cols="12" sm="6" class="pa-0" >
            <h1 class="h-neucha-regular h-mb">
              Anima
            </h1>
            <p class="h-montserrat-regular">
              Anima — в переводе с латыни «душа».<br>
              <span style="letter-spacing: 0.3px;">
                Столик трансформируется не только
              </span><br>
              в плане эргономики, но и эволюцио-<br>
              нирует с точки зрения образного<br>
              <span style="letter-spacing: 0.3px;">
                решения. Акценты смещаются, ассо-
              </span><br>
              <span style="letter-spacing: 0.3px;">
                циации становятся более сложными
              </span><br>
              и интуитивными.
            </p>
          </v-col>
          <v-col cols="12" sm="6" class="pa-0 text-center text-sm-right mt-sm-0 mt-12 mb-sm-0 mb-5">
            <full-image :d-lg-h-v=40 :d-md-h-v=45 :d-h-v=55 d-h-u="vw" class="anima-img1-h" src="../src/images/AnimaPage/interior.jpg" alt="Interior"/>
          </v-col>
        </v-row>

        <v-row class="ml-0 mr-0 mb-0 def-mar-top">
          <v-col align="center" cols="12" class="pa-0 align-self-center">
            <img src="../images/AnimaPage/sheepOfImages.jpg" class="sheep-width" alt="Sheep of images" />
          </v-col>
        </v-row>

        <v-row class="ml-0 mr-0 mb-0 def-mar-top">
          <v-col cols="12" class="pa-0">
            <h1 class="h-neucha-regular h-mb">
              Эргономика
            </h1>
          </v-col>
          <v-col cols="12" sm="6" class="pa-0">
            <p class="h-montserrat-regular red-line">
              Я стремилась создать детский стол,<br>
              который будет ассоциироваться<br>
              не с первыми прописями и вычисле-<br>
              ниями, а будет источником вдохнове-<br>
              ния и пространством для реализации<br>
              самых смелых идей малыша. Деревца<br>
              и булыжники станут любимым конст-<br>
              <span style="letter-spacing: -0.5px;">
                руктором и разовьют мелкую моторику,
              </span><br>
              <span style="letter-spacing: -0.1px;">
                которая важна при формировании ре-
              </span><br>
              <span style="letter-spacing: 0.2px;">
                чи. Подвижные части столешницы ос-
              </span><br>
              нащены отверстиями для кисточек<br>
              и стакана с водой. Фигурки носорога<br>
              <span style="letter-spacing: -0.2px;">
                и буйвола — функциональные элемен-
              </span><br>
              ты, при помощи которых регулируется<br>
              <span style="letter-spacing: 0.2px;">
                наклон подвижных частей, а их рожки
              </span><br>
              <span style="letter-spacing: 0.2px;">
                выполнены из мягких материалов, ко-
              </span><br>
              торые подарят контраст в тактильных<br>
              ощущениях.<br>
            </p>
            <p class="h-montserrat-regular red-line">
              Трансформация стола происходит<br>
              при помощи ростовых насадок для но-<br>
              <span style="letter-spacing: 0.3px;">
                жек и ящиков, которые до определён-
              </span><br>
              ного момента являются отдельной<br>
              системой хранения. Ящики ставятся<br>
              <span style="letter-spacing: 0.3px;">
                на подстолье, а сверху кладется сто-
              </span><br>
              лешница, попадая в пазы на крышках,<br>
              так как их местоположение и размер<br>
              <span style="letter-spacing: -0.3px;">
                схожи с отверстиями в подстолье, кры-
              </span><br>
              <span style="letter-spacing: 0.3px;">
                лья же вынимаются из нижней части
              </span><br>
              стола и вставляются в боковые пазы<br>
              ящиков. 
            </p>
          </v-col>
          <v-col cols="12" sm="6" class="pa-0">
            <v-row class="ma-0 fill-height">
              <v-col cols="12" class="pa-0 align-self-sm-start text-center text-sm-right mt-sm-0 mt-12">
                <full-image :d-lg-h-v=40 :d-md-h-v=50 :d-h-v=55 d-h-u="vw" class="anima-img2-img3-h" src="../src/images/AnimaPage/drawingGirl.jpg" alt="Drawing girl"/>
              </v-col>
              <v-col cols="12" class="pa-0 align-self-sm-end text-center text-sm-right mt-sm-0 mt-12">
                <full-image :d-lg-h-v=40 :d-md-h-v=50 :d-h-v=55 d-h-u="vw" class="anima-img2-img3-h" src="../src/images/AnimaPage/removableTabletop.jpg" alt="Removable table top"/>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-row class="ml-0 mr-0 mb-0 def-mar-top">
          <v-col align="center" cols="12" class="pa-0 align-self-center">
            <full-image :d-lg-h-v=35 :d-md-h-v=45 :d-h-v=55 d-h-u="vw" class="anima-img4-h" src="../src/images/AnimaPage/tableDrawing.jpg" alt="Table drawing"/>
          </v-col>
        </v-row>

        <v-row class="ml-0 mr-0 mb-0 def-mar-top">
          <v-col cols="12" class="pa-0">
            <h1 class="h-neucha-regular h-mb">
              Образ
            </h1>
          </v-col>
          <v-col cols="12" sm="6" class="pa-0">
            <p class="h-montserrat-regular" style="font-weight: bold;">
              Зачем крылья?
            </p>
            <p class="h-montserrat-regular red-line" v-if="this.$vuetify.display.smAndUp">
              На мой взгляд,<br>
              крылья всегда до-<br>
              бавляют некой ска-<br>
              зочности любому, даже<br>
              самому простому предмету, ведь Пегас<br>
              без крыльев — обычная лошадь, а дра-<br>
              кон — ящерица-переросток. Это сильно<br>
              влияет на образ предмета, но не менее<br>
              важно то, что со временем ребёнок<br>
              всё чаще будет использовать столеш-<br>
              ницу в разложенном виде, а поддер-<br>
              живающие её крылья не будут<br>
              бросаться в глаза, и внешний вид сто-<br>
              ла станет более взрослым, сместив<br>
              акцент на выразительную форму ножек.<br>
            </p>
            <p class="h-montserrat-regular red-line" v-else>
              На мой взгляд,
              крылья всегда до
              бавляют некой сказочности любому, даже
              самому простому предмету, ведь Пегас
              без крыльев — обычная лошадь, а дракон — ящерица-переросток. Это сильно
              влияет на образ предмета, но не менее
              важно то, что со временем ребёнок
              всё чаще будет использовать столешницу в разложенном виде, 
              а поддерживающие её крылья не будут
              бросаться в глаза, и внешний вид стола станет более взрослым, сместив
              акцент на выразительную форму ножек.
            </p>
            
            <br>
            <p class="h-montserrat-regular" style="font-weight: bold;">
              Почему без привычной фурнитуры?
            </p>
            <p class="h-montserrat-regular red-line">
              Я хотела, чтобы ребёнок самостоя-<br>
              тельно взаимодействовал со столом<br>
              без риска травмировать себя. Я счи-<br>
              таю, что суровые металлические дета-<br>
              ли лишают детскую мебель нежности<br>
              и лёгкости, а благодаря тканевым пет-<br>
              лям столик выглядит не типичным<br>
              предметом мебели, а сказочным кон-<br>
              структором. Столик «Anima» не просто<br>
              предмет мебели, а сказочное сущес-<br>
              тво, прибывшее к нам из невиданных<br>
              миров, чтобы творить и расти вместе<br>
              с детьми! 
            </p>
          </v-col>
          <v-col cols="12" sm="6" class="pa-0">
            <v-row class="ma-0 fill-height">
              <v-col cols="12" class="pa-0 align-self-sm-start text-center text-sm-right mt-sm-0 mt-12">
                <full-image :d-lg-h-v=40 :d-md-h-v=45 :d-h-v=55 d-h-u="vw" class="anima-img567-h" src="../src/images/AnimaPage/constructor.jpg" alt="Сonstructor"/>
              </v-col>
              <v-col cols="12" class="pa-0 align-self-sm-center text-center text-sm-right mt-sm-0 mt-12">
                <full-image :d-lg-h-v=40 :d-md-h-v=45 :d-h-v=55 d-h-u="vw" class="anima-img567-h" src="../src/images/AnimaPage/table.jpg" alt="Tables"/>
              </v-col>
              <v-col cols="12" class="pa-0 align-self-sm-end text-center text-sm-right mt-sm-0 mt-12">
                <full-image :d-lg-h-v=40 :d-md-h-v=45 :d-h-v=55 d-h-u="vw" class="anima-img567-h" src="../src/images/AnimaPage/tableWithChild.jpg" alt="Tables with child"/>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-row>
    </v-row>

    <v-row class="ma-0 def-pad-top background2">
      <v-row class="ma-0 padding">
        <v-col cols="12" class="pa-0">
          <h1 class="h-neucha-regular h-mb">
            Материалы
          </h1>
        </v-col>
        <v-col cols="12" sm="6" class="pa-0">
          <p class="h-montserrat-regular red-line">
            Материалы, выбранные для проекта,<br>
            безопасны и экологичны. Valchromat,<br>
            используемый для изготовления сто-<br>
            <span style="letter-spacing: -0.3px;">
              лешницы и крыльев, давно применяют<br>
              в отделке детских игровых помещений,<br>
            </span>
            <span style="letter-spacing: -0.4px;">
              так как он обладает повышенной влаго-<br>
            </span>
            стойкостью, большой плотностью<br>
            <span style="letter-spacing: 0.4px;">
              и экологичностью. Подвижные части<br>
              столешницы с внешней стороны пок-<br>
              рыты мебельным линолеумом Forbo<br>
              Furniture, который прост в уходе и за-<br>
              щитит поверхность от влаги и краски.<br>
              Также столешница оснащена силико-<br>
            </span>
            новыми выступами и накладками<br>
            из Valchromat, обеспечивающими бе-<br>
            зопасный зазор, который не позволит<br>
            <span style="letter-spacing: 0.4px;">
              малышу придавить себе пальцы. Под<br>
            </span>
            органическое стекло можно подкла-<br>
            дывать шедевры юного творца, такая<br>
            визуализация рабочего процесса бла-<br>
            готворно повлияет на самооценку,<br>
            и, конечно, оргстекло отважно выдер-<br>
            жит испытания пластилином и клеем!
          </p>
        </v-col>
        <v-col cols="12" sm="6" class="pa-0 text-center text-sm-right mt-sm-0 mt-12">
          <full-image :d-lg-h-v=45 :d-md-h-v=60 :d-sm-h-v=65 :d-h-v=55 d-h-u="vw" class="anima-img8-h" src="../src/images/AnimaPage/explosionDiagram.jpg" alt="Explosion diagram"/>
        </v-col>
      </v-row>

      <v-row class="ma-0 padding2">
        <v-col cols="12" class="pa-0 text-center mt-sm-0 mt-12 mb-sm-0 mb-10">
          <h1 class="h-neucha-regular text-center" style="font-size: 2.8vw;" v-if="this.$vuetify.display.smAndUp">
            История создания
          </h1>
          <h1 class="h-neucha-regular text-center" style="font-size: 10vw;" v-else>
            История создания
          </h1>
        </v-col>

        <v-row class="ml-0 mr-0 mb-0 spec-mt">
          <v-col cols="12" class="pa-0">
            <h1 class="h-neucha-regular h-mb">
              Анализ потребностей
            </h1>
            <p class="h-montserrat-regular red-line" v-if="this.$vuetify.display.smAndUp">
              Детство — это время, наполненное чудесами и яркими впе-<br>
              чатлениями. И это важный процесс формирования личности.<br>
              Каждый этап уникален и требует соответствующих решений.<br>
              Для грамотного, целостного развития ребёнка необходимо<br>
              <span style="letter-spacing: -0.3px;">
                создать благоприятные условия. Окружающая обстановка дол-
              </span><br>
              <span style="letter-spacing: -0.3px;">
                жна подталкивать малыша к изучению мира. Необычные вещи
              </span><br>
              <span style="letter-spacing: 0.1px;">
                с нестандартным набором функций или внешним видом пос-
              </span><br>
              пособствуют развитию гибкого мышления и фантазии.
            </p>
            <p class="h-montserrat-regular red-line" v-else>
              Детство — это время, наполненное чудесами и яркими впечатлениями. 
              И это важный процесс формирования личности.
              Каждый этап уникален и требует соответствующих решений.
              Для грамотного, целостного развития ребёнка необходимо
              создать благоприятные условия. Окружающая обстановка должна 
              подталкивать малыша к изучению мира. Необычные вещи
              с нестандартным набором функций или внешним видом поспособствуют 
              развитию гибкого мышления и фантазии.
            </p><br>

            <p class="h-montserrat-regular mb-2" style="font-weight: bold;">
              Раннее детство 1-3 года
            </p>

            <p class="h-montserrat-regular">Ребёнок:</p>
            <ul class="h-montserrat-regular pl-7">
              <li>
                <p>
                  учится ходить и говорить, познаёт мир
                </p>
              </li>
              <li>
                <p>
                  хочет всё делать сам, но не всегда может
                </p>
              </li>
              <li>
                <p>
                  наглядно-действенное мышление
                </p>
              </li>
            </ul>

            <p class="h-montserrat-regular">Столик «Anima»:</p>
            <ul class="h-montserrat-regular pl-7">
              <li>
                <p>
                  конструктор отлично подойдёт для развития мелкой<br>
                  моторики, которая напрямую связана с речью
                </p>
              </li>
              <li>
                <p>
                  безопасная фурнитура, интуитивный дизайн
                </p>
              </li>
              <li>
                <p>
                  <span style="letter-spacing: -0.5px;">
                    тактильные ощущения благодаря разнообразным<br>
                    материалам
                  </span>
                  стола (ручки ящиков выполнены из ткани,<br>
                  металла, силикона, дерева, тканевые петли в столешнице,<br>
                  оргстекло, мебельный линолеум, вальхромат)
                </p>
              </li>
            </ul><br>

            <p class="h-montserrat-regular mb-2" style="font-weight: bold;">
              Дошкольный возраст 3-7 лет
            </p>
            
            <p class="h-montserrat-regular">Ребёнок:</p>
            <ul class="h-montserrat-regular pl-7">
              <li>
                <p>
                  появление первых фобий и тревог
                </p>
              </li>
              <li>
                <p>
                  поиск увлечений и способов самовыражения
                </p>
              </li>
              <li>
                <p>
                  наглядно-образное мышление
                </p>
              </li>
            </ul>

            <p class="h-montserrat-regular">Столик «Anima»:</p>
            <ul class="h-montserrat-regular pl-7">
              <li>
                <p>
                  <span v-if="this.$vuetify.display.smAndUp">
                    образ дружественного создания, попытка создать атмос-<br>
                    феру собственного маленького уютного мира в детской комнате
                  </span>
                  <span v-else>
                    образ дружественного создания, попытка создать атмосферу собственного маленького уютного мира в детской комнате
                  </span>
                </p>
              </li>
              <li>
                <p>
                  <span v-if="this.$vuetify.display.smAndUp">
                    наклонные плоскости для рисования и чтения, оргстекло<br>
                    <span style="letter-spacing: -0.5px;">
                      для лепки, макетирования, система хранения для органи-<br>
                      зации
                    </span>
                    личного пространства
                  </span>
                  <span v-else>
                    наклонные плоскости для рисования и чтения, оргстекло для лепки, 
                    макетирования, система хранения для организации
                  </span>
                </p>
              </li>
              <li>
                <p>
                  образное решение стола навевает приятные ассоциации,<br>
                  дизайн способствует развитию воображения, фантазии
                </p>
              </li>
            </ul><br>

            <p class="h-montserrat-regular mb-2" style="font-weight: bold;">
              Младший школьный возраст 7-11 лет
            </p>

            <p class="h-montserrat-regular">Ребёнок:</p>
            <ul class="h-montserrat-regular pl-7">
              <li>
                <p>
                  <span v-if="this.$vuetify.display.smAndUp">
                    зависимость от мнения окружающих, волнение по поводу<br>
                    успеваемости в школе и своего положения в обществе,<br>
                    желание быть частью коллектива
                  </span>
                  <span v-else>
                    зависимость от мнения окружающих, волнение по поводу
                    успеваемости в школе и своего положения в обществе,
                    желание быть частью коллектива
                  </span>
                </p>
              </li>
              <li>
                <p>
                  словесно-логическое мышление
                </p>
              </li>
            </ul>

            <p class="h-montserrat-regular">Столик «Anima»:</p>
            <ul class="h-montserrat-regular pl-7">
              <li>
                <p>
                  всесторонний доступ стола позволяет нескольким людям<br>
                  одновремено заниматься, возможность социализации
                </p>
              </li>
              <li>
                <p>
                  <span v-if="this.$vuetify.display.smAndUp">
                    если крылья надоели, хочется более «взрослый» стол,<br>
                    <span style="letter-spacing: -0.2px;">
                      то можно разложить столешницу и переключить внимание на фактурные ножки 
                    </span>
                  </span>
                  <span v-else>
                    если крылья надоели, хочется более «взрослый» стол, 
                    то можно разложить столешницу и переключить внимание на фактурные ножки 
                  </span>
                </p>
              </li>
            </ul>
          </v-col>
        </v-row>

        <v-row class="ml-0 mr-0 mb-0 def-mar-top">
          <h1 class="h-neucha-regular h-mb">
            Эскизирование
          </h1>
          <v-col cols="12" class="pa-0 h-mb">
            <full-image :d-lg-h-v=45 :d-md-h-v=65 :d-sm-h-v=65 :d-h-v=55 d-h-u="vw" class="anima-sketches-width" src="../src/images/AnimaPage/sketches.jpg" alt="Sketches"/>
          </v-col>
          <v-col cols="12" class="pa-0 mt-sm-0 mt-12">
            <p class="h-montserrat-regular red-line" v-if="this.$vuetify.display.smAndUp">
              В начале эскизирования я ставила для себя задачу выявить<br>
              <span style="letter-spacing: 0.3px;">
                наиболее яркие образные решения и лишь потом продумы-<br>
                вать конструктивную часть. Также я искала возможность кас-<br>
                томизировать те или иные элементы. Чтобы прийти к наибо-<br>
                лее яркому визуальному решению я стремилась разрушить<br>
                стереотипные конструкции, фиксировались все сумасшед-<br>
              </span>
              шие идеи. Не менее важно было создать предмет мебели, ко-<br>
              торый впишется в любую конфигурацию квартиры, необходи-<br>
              мо было сделать доступ к нему с наибольшего количества<br>
              сторон. Рассматривались варианты того, чтобы стол был удо-<br>
              бен для разновозрастных детей. Постепенно я обозначила<br>
              для себя наиболее желаемый функционал. Обязательно<br>
              <span style="letter-spacing: 0.3px;">
                включить наклонную плоскость, которая будет соответство-<br>
              </span>
              вать потребностям ребёнка в разные периоды жизни. Выде-<br>
              лить систему хранения, как отдельный элемент, до опреде-<br>
              <span style="letter-spacing: -0.1px;">
                лённого возраста ребёнка. Наличие собственной зоны  хране-<br>
              </span>
              ния с детства приучит ребёнка к порядку и самоорганизации.
            </p>
            <p class="h-montserrat-regular red-line" v-else>
              В начале эскизирования я ставила для себя задачу выявить
              наиболее яркие образные решения и лишь потом продумывать 
              конструктивную часть. Также я искала возможность кастомизировать
              те или иные элементы. Чтобы прийти к наиболее
              яркому визуальному решению я стремилась разрушить
              стереотипные конструкции, фиксировались все сумасшедшие 
              идеи. Не менее важно было создать предмет мебели, который
              впишется в любую конфигурацию квартиры, необходимо было сделать доступ к нему с наибольшего количества
              сторон. Рассматривались варианты того, чтобы стол был удобен для разновозрастных детей. Постепенно я обозначила
              для себя наиболее желаемый функционал. Обязательно
              включить наклонную плоскость, которая будет соответствовать 
              потребностям ребёнка в разные периоды жизни. Выделить 
              систему хранения, как отдельный элемент, до определённого 
              возраста ребёнка. Наличие собственной зоны хранения с детства приучит ребёнка к порядку и самоорганизации.
            </p>

          </v-col>
        </v-row>

        <v-row class="ml-0 mr-0 mb-0 def-mar-top">
          <h1 class="h-neucha-regular h-mb">
            Макетирование
          </h1>

          <v-col cols="12" class="pa-0 h-mb">
            <v-row class="ma-0">
              <v-col cols="12" sm="6" class="pa-0 text-center text-sm-start">
                <full-image :d-lg-h-v=40 :d-md-h-v=50 :d-h-v=55 d-h-u="vw" class="anima-img9-h" src="../src/images/AnimaPage/prototyping1.jpg" alt="Prototyping"/>
              </v-col>
              <v-col cols="12" sm="6" class="pa-0 text-center text-sm-end mt-6 mt-sm-0">
                <full-image :d-lg-h-v=40 :d-md-h-v=50 :d-h-v=55 d-h-u="vw" class="anima-img9-h" src="../src/images/AnimaPage/prototyping2.jpg" alt="Prototyping"/>
              </v-col>
            </v-row>
            <v-row class="ml-0 mr-0 mb-0 mt-6 mt-md-4 mt-lg-6">
              <v-col cols="12" sm="6" class="pa-0 text-center text-sm-start">
                <full-image :d-lg-h-v=40 :d-md-h-v=50 :d-h-v=55 d-h-u="vw" class="anima-img9-h" src="../src/images/AnimaPage/prototyping3.jpg" alt="Prototyping"/>
              </v-col>
              <v-col cols="12" sm="6" class="pa-0 text-center text-sm-end mt-6 mt-sm-0">
                <full-image :d-lg-h-v=40 :d-md-h-v=50 :d-h-v=55 d-h-u="vw" class="anima-img9-h" src="../src/images/AnimaPage/prototyping4.jpg" alt="Prototyping"/>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12" class="pa-0" v-if="this.$vuetify.display.smAndUp">
            <p class="h-montserrat-regular red-line">
              Для лучшего понимания конструктивных особенностей был<br>
              создан габаритный макет стола. Макетирование, в отличие<br>
              от 3d моделирования и скетчинга, помогает нашему мозгу бо-<br>
              <span style="letter-spacing: 0.3px;">
                лее целостно воспринять предмет. На макете, даже таком ус-<br>
                ловном и лишённом эстетической составляющей, мы можем<br>
                сразу обсудить сценарии использования, возможные проб-<br>
              </span>
              лемы и методы решения. 
            </p>
            <p class="h-montserrat-regular red-line">
              <span style="letter-spacing: 0.3px;">
                Макет дал понимание того, что подвижным частям столеш-<br>
              </span>
              ницы необходима дополнительная поддержка. Также активно<br>
              <span style="letter-spacing: 0.3px;">
                обсуждался поворотный механизм. В мастерской был изго-<br>
                товлен небольшой прототип деревянной петли, внутрь кото-<br>
                рой устанавливался металлический плунжер, но так как из-<br>
                бранная толщина элементов столешницы была 8 мм, приш-<br>
                лось признать, что внедрять в неё какую-либо фурнитуру не-<br>
              </span>
              безопасно с точки зрения срока эксплуатации. 
            </p>
            <p class="h-montserrat-regular red-line">
              Следующим вариантом стала идея крепления из ткани.<br>
              И в макете, и в прототипе была использована ткань под наз-<br>
              ванием оксфорд, которая применяется для изготовления<br>
              тентов торговых палаток, туристической мебели, снаряжения,<br>
              <span style="letter-spacing: 0.3px;">
                курток, рассчитанных на экстремальные условия, отличается<br>
                повышенной прочностью, имеет водоотталкивающую про-<br>
              </span>
              питку. В ткань был вшит деревянный штырь диаметром 8 мм.<br>
              <span style="letter-spacing: 0.4px;">
                Далее ткань закрепили под оргстекло на статичной части<br>
                столешницы, а другую сторону вклеили между мебельным<br>
                линолеумом и вальхроматом. Подобная конструкция оказа-<br>
                лась более безопасной для детских пальчиков и сохранила<br>
                возможность использовать минимальную толщину столеш-<br>
              </span>
              ницы, значительно облегчив конструкцию. Благодаря макети-<br>
              рованию были выявлены проблемные зоны и найдены нес-<br>
              тандартные решения. Форма и функция
            </p>
          </v-col>
          <v-col cols="12" class="mt-12" v-else>
            <p class="h-montserrat-regular red-line">
              Для лучшего понимания конструктивных особенностей был
              создан габаритный макет стола. Макетирование, в отличие
              от 3d моделирования и скетчинга, помогает нашему мозгу более целостно воспринять предмет. 
              На макете, даже таком условном и лишённом эстетической составляющей, мы можем
              сразу обсудить сценарии использования, возможные проблемы и методы решения.
            </p>
            <p class="h-montserrat-regular red-line">
              Макет дал понимание того, что подвижным частям столешницы необходима дополнительная поддержка. Также активно
              обсуждался поворотный механизм. В мастерской был изготовлен небольшой прототип деревянной петли, 
              внутрь которой устанавливался металлический плунжер, но так как избранная толщина элементов столешницы была 8 мм, пришлось признать, 
              что внедрять в неё какую-либо фурнитуру небезопасно с точки зрения срока эксплуатации.
            </p>
            <p class="h-montserrat-regular red-line">
              Следующим вариантом стала идея крепления из ткани.
              И в макете, и в прототипе была использована ткань под названием оксфорд, которая применяется для изготовления
              тентов торговых палаток, туристической мебели, снаряжения,
              курток, рассчитанных на экстремальные условия, отличается
              повышенной прочностью, имеет водоотталкивающую пропитку. В ткань был вшит деревянный штырь диаметром 8 мм.
              Далее ткань закрепили под оргстекло на статичной части
              столешницы, а другую сторону вклеили между мебельным
              линолеумом и вальхроматом. Подобная конструкция оказалась более безопасной для детских пальчиков и сохранила
              возможность использовать минимальную толщину столешницы, значительно облегчив конструкцию. Благодаря макетированию были выявлены проблемные зоны и найдены нес-
              тандартные решения. Форма и функция
            </p>
          </v-col>
        </v-row>

        <v-row class="ml-0 mr-0 mb-0 def-mar-top">
          <h1 class="h-neucha-regular h-mb">
            Форма и функция
          </h1>

          <v-col cols="12" class="pa-0 mb-6 mb-lg-6 mb-md-1">
            <v-row class="ma-0">
              <v-col cols="12" sm="6" class="pa-0 text-center text-sm-start">
                <full-image :d-lg-h-v=40 :d-md-h-v=45 :d-h-v=55 d-h-u="vw" class="anima-img10-h" src="../src/images/AnimaPage/formandfunction1.jpg" alt="Dragon"/>
              </v-col>
              <v-col cols="12" sm="6" class="pa-0 text-center text-sm-end">
                <full-image :d-lg-h-v=40 :d-md-h-v=45 :d-h-v=55 d-h-u="vw" class="anima-img10-h" src="../src/images/AnimaPage/formandfunction2.jpg" alt="Boxes"/>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" class="pa-0 mb-6 mb-lg-6 mb-md-1">
            <v-row class="ma-0">
              <v-col cols="12" sm="6" class="pa-0 text-center text-sm-start">
                <full-image :d-lg-h-v=40 :d-md-h-v=45 :d-h-v=55 d-h-u="vw" class="anima-img10-h" src="../src/images/AnimaPage/formandfunction3.jpg" alt="Table legs 1"/>
              </v-col>
              <v-col cols="12" sm="6" class="pa-0 text-center text-sm-end">
                <full-image :d-lg-h-v=40 :d-md-h-v=45 :d-h-v=55 d-h-u="vw" class="anima-img10-h" src="../src/images/AnimaPage/formandfunction4.jpg" alt="Table legs 2"/>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" class="pa-0 h-mb">
            <v-row class="ma-0">
              <v-col cols="12" sm="6" class="pa-0 text-center text-sm-start">
                <full-image :d-lg-h-v=35 :d-md-h-v=45 :d-h-v=55 d-h-u="vw" class="anima-img10-h" src="../src/images/AnimaPage/formandfunction5.jpg" alt="Baby and adult table"/>
              </v-col>
              <v-col cols="12" sm="6" class="pa-0 text-center text-sm-end">
                <full-image :d-lg-h-v=35 :d-md-h-v=45 :d-h-v=55 d-h-u="vw" class="anima-img10-h" src="../src/images/AnimaPage/formandfunction6.jpg" alt="Table with opened wings"/>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12" class="pa-0">
            <p class="h-montserrat-regular red-line h-mb" style="font-style: italic;">
              <span v-if="this.$vuetify.display.smAndUp">
                <span style="letter-spacing: 0.7px;">
                  «Стул не должен быть «вертикальным» или «горизонталь-<br>
                  ным», он не должен быть «экспрессивным» или «конструк-<br>
                  тивистским»; не должен быть произведен исключительно<br>
                </span>
                <span style="letter-spacing: 0.3px;">
                  из соображений целесообразности, или чтобы соответство-<br>
                </span>
                вать столу; он должен быть просто хорошим стулом и в таком<br>
                качестве хорошему столу он обязательно подойдет». 
              </span>
              <span v-else>
                «Стул не должен быть «вертикальным» или «горизонтальным», 
                он не должен быть «экспрессивным» или «конструктивистским»; 
                не должен быть произведен исключительно
                из соображений целесообразности, или чтобы соответствовать 
                столу; он должен быть просто хорошим стулом и в таком
                качестве хорошему столу он обязательно подойдет». 
              </span>
            </p>

            <p class="h-montserrat-regular text-end mb-10" style="font-style: italic;">
              Марсель Бройер
            </p>
            <p class="h-montserrat-regular red-line h-mb" v-if="this.$vuetify.display.smAndUp">
              <span style="letter-spacing: 0.3px;">
                На мой взгляд декоративный элемент становится в разы<br>
              </span>
              интереснее, когда в нём прослеживается логика, форма дол-<br>
              жна быть неразрывно связана с функцией. Каждая деталь<br>
              <span style="letter-spacing: -0.3px;">
                стола должна была иметь яркое образное решение, но учиты-<br>
              </span>
              вая возрастной диапазон и разницу восприятия, было важно<br>
              выполнить их деликатно.  
            </p>
            <p class="h-montserrat-regular red-line h-mb" v-else>
              На мой взгляд декоративный элемент становится в разы
              интереснее, когда в нём прослеживается логика, форма должна быть неразрывно связана с функцией. Каждая деталь
              стола должна была иметь яркое образное решение, но учитывая возрастной диапазон и разницу восприятия, было важно
              выполнить их деликатно.
            </p>

            <p class="h-montserrat-regular" style="font-weight: bold;">
              Система хранения:
            </p>
            <p class="h-montserrat-regular red-line h-mb" style="letter-spacing: 0.3px">
              Было решено отказаться от «глазастых» ящиков, в отличие<br>
              от крыльев, их невозможно со временем скрыть, да и слиш-<br>
              ком прямолинейный образ, быстро наскучит. 
            </p>
            <p class="h-montserrat-regular" style="font-weight: bold;">
              Ножки:
            </p>
            <p class="h-montserrat-regular red-line h-mb">
              <span v-if="this.$vuetify.display.smAndUp">
                С течением времени акцент смещается на нестандартные<br>
                ножки. Их расширяющаяся к низу форма придаёт столу до-<br>
                <span style="letter-spacing: -0.1px;">
                  полнительную устойчивость, а диагональная направленность<br>
                </span>
                <span style="letter-spacing: 0.3px;">
                  сохраняет больше пространства для ног. Пропорции ножки<br>
                  отлично сочетаются как с «маленьким» столиком, создавая<br>
                  ощущение комичных толстых лапок, так и с более высоким,<br>
                </span>
                тяжеловесным  «взрослым» столом. 
              </span>
              <span v-else>
                С течением времени акцент смещается на нестандартные
                ножки. Их расширяющаяся к низу форма придаёт столу 
                дополнительную устойчивость, а диагональная направленность  
                сохраняет больше пространства для ног. Пропорции ножки
                отлично сочетаются как с «маленьким» столиком, создавая
                ощущение комичных толстых лапок, так и с более высоким,
                тяжеловесным  «взрослым» столом. 
              </span>
            </p>
            <p class="h-montserrat-regular" style="font-weight: bold;">
              Фиксирующие оргстекло накладки: 
            </p>
            <p class="h-montserrat-regular red-line h-mb">
              <span v-if="this.$vuetify.display.smAndUp">
                В первых визуализациях накладки были слишком широки-<br>
                <span style="letter-spacing: 0.4px;">
                  ми и массивными, забирали много места от рабочего прос-<br>
                  транства стола, поэтому финальная форма стала более тон-<br>
                  кой, имела отступы от края стола и скрывала место крепле-<br>
                </span>
                ния новой ткневой петли. 
              </span>
              <span v-else>
                В первых визуализациях накладки были слишком широкими 
                и массивными, забирали много места от рабочего пространства 
                стола, поэтому финальная форма стала более тонкой, 
                имела отступы от края стола и скрывала место крепления 
                новой ткневой петли. 
              </span>
            </p>
            <p class="h-montserrat-regular" style="font-weight: bold;">
              Уголок-дракончик:
            </p>
            <p class="h-montserrat-regular red-line">
              <span v-if="this.$vuetify.display.smAndUp">
                <span style="letter-spacing: 0.4px;">
                Изначально дракончик должен был крепиться рожками<br>
                в отверстия в подвижных частях столешницы («спинка» 37°,<br>
                </span>
                «голова» 55°, а хвостик отсоединялся и имел угол 18°), но из-за<br>
                новой формы накладки он потерял своую устойчивость<br>
                и превратился в зубра и носорога. 
              </span>
              <span v-else>
                Изначально дракончик должен был крепиться рожками
                в отверстия в подвижных частях столешницы («спинка» 37°,
                «голова» 55°, а хвостик отсоединялся и имел угол 18°), но из-за
                новой формы накладки он потерял своую устойчивость
                и превратился в зубра и носорога. 
              </span>
            </p><br>
            <p class="h-montserrat-regular red-line">
              <span v-if="this.$vuetify.display.smAndUp">
                Выражаю огромную благодарность моему дипломному ру-<br>
                ководителю Еве Гордеевой @evahysum. Это было прекрасное<br>
                и плодотворное сотрудничество! 
              </span>
              <span v-else>
                Выражаю огромную благодарность моему дипломному руководителю 
                Еве Гордеевой @evahysum. Это было прекрасное
                и плодотворное сотрудничество! 
              </span>
            </p>
          </v-col>
        </v-row>

        <v-col cols="12" class="pa-0 text-center pt-12 pb-12">
          <img class="anima-img11-w" src="../images/AnimaPage/cyclop.png" alt="Cyclop" />
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>

<script>
  import FullImage from '@/components/FullImage.vue';

  ///splide
  import { Splide, SplideSlide } from '@splidejs/vue-splide';
  import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
  import '@splidejs/vue-splide/css/core';

export default {
  name: "AnimaPage",
  data() {
    return {
      splideOptions: {
        arrows: false, 
        pagination: false, 
        autoWidth: true, 
        type: 'loop', 
        drag: 'free',
        autoScroll: {
          speed: 0.7,
        },
        wheel: false
      }
    }
  },
  components: {
      FullImage,
      ///splide
      Splide,
      SplideSlide,
    },
  setup() {
    return {
      extensions: { AutoScroll },
    };
  },
  computed: {
    styleOfImageSlideProp() {
      if (this.$vuetify.display.smAndUp) {
        return {
          height: "19.145833333333332vw",
          marginRight: "25px",
        } 
      } else {
        return {
          height: "70vw",
          marginRight: "15px",
        } 
      }
    }
  }
}
</script>

<style scoped>

  .background1 {
    background-image: url('../src/images/AnimaPage/background.png'); 
    background-size: cover;
  }
  .background2 {
    background-image: url('../src/images/AnimaPage/background2.png'); 
    background-size: cover;
  }
  .sheep-width {
    width: 70vw;
  }
  .padding {
    padding-left: 9vw; 
    padding-right: 9vw;
  }
  .padding2 {
    padding-left: 25vw; 
    padding-right: 25vw;
    padding-top: 2500px;
  }
  .h-mb {
    margin-bottom: 2vh;
  }
  .red-line {
    text-indent: 1.4vw;
  }

  .def-pad-top {
    padding-top: 9.572916666666666vw;
  }

  .def-mar-top {
    margin-top: 9.572916666666666vw;
  }

  .spec-mt {
    margin-top: 330px;
  }

  p {
    font-size: 1.5vw;
  }

  h1 {
    font-size: 2.3vw;
  }

  .anima-img11-w {
    width: 30vw;
  }

  @media (max-width: 599px) { 

    p {
      font-size: 4.3vw;
    }

    h1 {
      font-size: 9vw;
    }

    .padding {
      padding-left: 4vw; 
      padding-right: 4vw;
    }

    .padding2 {
      padding-top: unset;
      padding-left: 4vw; 
      padding-right: 4vw;
    }

    .sheep-width {
      width: 90vw;
    }

    .h-mb {
      margin-bottom: 1vh;
    }

    .background2 {
      background-image: unset; 
      background-size: unset;
    }

    .background1 {
      background-image: unset; 
      background-size: unset;
    }

    .red-line {
      text-indent: unset;
    }

    .spec-mt {
      margin-top: 0px;
    }

    .anima-img11-w {
      width: 80vw;
    }
  }
</style>

<style>

  .anima-img1-h {
    width: 32vw;
  }

  .anima-img2-img3-h {
    width: 32vw;
  }

  .anima-img4-h {
    width: 100%;
  }

  .anima-img567-h {
    width: 32vw;
  }

  .anima-img8-h {
    width: 32vw;
  }

  .anima-img9-h {
    width: 23.8vw;
  }

  .anima-img10-h {
    width: 23.8vw;
  }

  .anima-sketches-width {
    width: 100%;
  }

  @media (max-width: 599px) { 
    .anima-img1-h {
      width: 90vw;
    }

    .anima-img2-img3-h {
      width: 90vw;
    }

    .anima-img567-h {
      width: 90vw;
    }

    .anima-img8-h {
      width: 90vw;
    }

    .anima-img9-h {
      width: 90vw;
    }

    .anima-img10-h {
      width: 90vw;
    }
  }

</style>
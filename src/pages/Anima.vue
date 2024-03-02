<template>
  <v-container class="pa-0" fluid style="overflow: hidden;">
    <v-parallax src="../images/AnimaPage/anima.webp" v-if="this.$vuetify.display.smAndUp">
      <v-row class="ma-0" style="height: 100vh;">
        <v-col cols="12" class="pa-0 align-self-center">
          <p lang="en" class="mt-12 text-center h-neucha-regular" style="font-weight: bold; font-size: 9.094270833333333vw;">
            ANIMA
          </p>
          <p class="mt-1 text-center h-montserrat-regular" style="font-size: 1.2vw;">
            <span v-if="$i18n.locale === 'ru'">
              Проект трансформируемого стола для детей от 3-х до 9-ти лет
            </span>
            <span lang="en" v-else>
              Project of a transformable table for children from 3 to 9 years old
            </span>
          </p>
        </v-col>
      </v-row>
    </v-parallax>
    <v-row class="ma-0" style="height: 100vh;" v-else>
        <v-col cols="12" class="pa-0 align-self-center">
          <p lang="en" class="text-center h-neucha-regular" style="font-weight: bold; font-size: 20vw;">
            ANIMA
          </p>
          <p class="mt-1 text-center h-montserrat-regular">
            <span v-if="$i18n.locale === 'ru'">
              Проект трансформируемого стола для детей от 3-х до 9-ти лет
            </span>
            <span lang="en" v-else>
              Project of a transformable table for children from 3 to 9 years old
            </span>
          </p>
        </v-col>
    </v-row>

    <v-row class="ma-0" :style="background1Style">
      <Splide :options="splideOptions" :extensions="extensions">
        <SplideSlide>
          <full-image :d-lg-h-v=90 :d-md-h-v=70 :d-sm-h-v=49 :d-h-v=37 d-h-u="vh" :src-zoom="imgPath('Carousel/table_with_child_zoom.webp')" :src="imgPath('Carousel/table_with_child.webp')" :style="styleOfImageSlideProp" alt="Child near table 1"/>
        </SplideSlide>
        <SplideSlide>
          <full-image :d-lg-h-v=90 :d-md-h-v=70 :d-sm-h-v=56 :d-h-v=49 d-h-u="vh" :src-zoom="imgPath('Carousel/2tables_zoom.webp')" :src="imgPath('Carousel/2tables.webp')" :style="styleOfImageSlideProp" alt="Two tables"/>
        </SplideSlide>
        <SplideSlide>
          <full-image :d-lg-h-v=90 :d-md-h-v=70 :d-sm-h-v=49 :d-h-v=37 d-h-u="vh" :src-zoom="imgPath('Carousel/table_with_child2_zoom.webp')" :src="imgPath('Carousel/table_with_child2.webp')" :style="styleOfImageSlideProp" alt="Child near table 2"/>
        </SplideSlide>
        <SplideSlide>
          <full-image :d-lg-h-v=90 :d-md-h-v=70 :d-sm-h-v=49 :d-h-v=37 d-h-u="vh" :src-zoom="imgPath('Carousel/easel_zoom.webp')" :src="imgPath('Carousel/easel.webp')" :style="styleOfImageSlideProp" alt="Table's wing as easel"/>
        </SplideSlide>
        <SplideSlide>
          <full-image :d-lg-h-v=90 :d-md-h-v=70 :d-sm-h-v=49 :d-h-v=37 d-h-u="vh" :src-zoom="imgPath('Carousel/function_of_boxes_zoom.webp')" :src="imgPath('Carousel/function_of_boxes.webp')" :style="styleOfImageSlideProp" alt="Functionality of boxes 1"/>
        </SplideSlide>
        <SplideSlide>
          <full-image :d-lg-h-v=90 :d-md-h-v=70 :d-sm-h-v=56 :d-h-v=49 d-h-u="vh" :src-zoom="imgPath('Carousel/function_of_boxes2_zoom.webp')" :src="imgPath('Carousel/function_of_boxes2.webp')" :style="styleOfImageSlideProp" alt="Functionality of boxes 2"/>
        </SplideSlide>
        <SplideSlide>
          <full-image :d-lg-h-v=90 :d-md-h-v=70 :d-sm-h-v=49 :d-h-v=37 d-h-u="vh" :src-zoom="imgPath('Carousel/function_of_boxes3_zoom.webp')" :src="imgPath('Carousel/function_of_boxes3.webp')" :style="styleOfImageSlideProp" alt="Functionality of boxes 3"/>
        </SplideSlide>
        <SplideSlide>
          <full-image :d-lg-h-v=90 :d-md-h-v=70 :d-sm-h-v=56 :d-h-v=49 d-h-u="vh" :src-zoom="imgPath('Carousel/separate_pieces2_zoom.webp')" :src="imgPath('Carousel/separate_pieces2.webp')" :style="styleOfImageSlideProp" alt="Separate pieces 2"/>
        </SplideSlide>
      </Splide>
      <v-row class="ma-0 def-pad-top padding">
        <v-row class="ma-0">
          <v-col cols="12" sm="6" class="pa-0" >
            <h1 lang="en" class="h-neucha-regular h-mb">
              Anima
            </h1>
            <p class="h-montserrat-regular span1-width">
              <span v-if="$i18n.locale === 'ru'">
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
              </span>
              <span lang="en" v-else>
                Anima — means "soul" in Latin.
                The table is transformed not only
                in terms of ergonomics, but also evolutionary
                niziruetsya from the point of view of the figurative
                solutions. Emphases are shifting, asso-
                tions become more complex
                and intuitive.
              </span>
            </p>
          </v-col>
          <v-col cols="12" sm="6" class="pa-0 text-center text-sm-right mt-sm-0 mt-12 mb-sm-0 mb-5">
            <full-image :d-lg-h-v=40 :d-md-h-v=45 :d-h-v=55 d-h-u="vw" class="anima-img1-h" :src-zoom="imgPath('interior_zoom.webp')" :src="imgPath('interior.webp')" :zoomxs="false" alt="Interior"/>
          </v-col>
        </v-row>

        <v-row class="ml-0 mr-0 mb-0 def-mar-top">
          <v-col align="center" cols="12" class="pa-0 align-self-center">
            <img src="../images/AnimaPage/sheepOfImages.webp" class="sheep-width" alt="Sheep of images" />
          </v-col>
        </v-row>

        <v-row class="ml-0 mr-0 mb-0 def-mar-top">
          <v-col cols="12" class="pa-0">
            <h1 class="h-neucha-regular h-mb">
              <span v-if="$i18n.locale === 'ru'">
                Эргономика
              </span>
              <span lang="en" v-else>
                Ergonomics
              </span>
            </h1>
          </v-col>
          <v-col cols="12" sm="6" class="pa-0">
            <p class="h-montserrat-regular red-line span2-width">
              <span v-if="$i18n.locale === 'ru'">
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
              </span>
              <span lang="en" v-else>
                I wanted to create a children's table,
                which will be associated
                not with the first copybooks and calculations, but will be a source of inspiration and space for implementation
                the baby's wildest ideas. Trees
                and the cobblestones will become your favorite construction set and develop fine motor skills,
                which is important in the formation of speech. The moving parts of the tabletop are equipped with holes for brushes
                and glasses of water. Rhino figures
                and buffalo - functional elements with the help of which the
                the inclination of the moving parts, and their horns
                made of soft materials that will provide contrast in tactile
                sensations.
              </span>
            </p>
            <p class="h-montserrat-regular red-line span3-width">
              <span v-if="$i18n.locale === 'ru'">
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
              </span>
              <span lang="en" v-else>
                Table transformation takes place
                using growth attachments for legs and drawers, which up to a certain point are separate
                storage system. Boxes are placed
                on the underframe, and the tabletop is placed on top, falling into the grooves on the lids,
                because their location and size
                similar to the holes in the underframe, the wings are removed from the bottom
                table and inserted into the side grooves
                boxes.
              </span>
            </p>
          </v-col>
          <v-col cols="12" sm="6" class="pa-0">
            <v-row class="ma-0 fill-height">
              <v-col cols="12" class="pa-0 align-self-sm-start text-center text-sm-right mt-sm-0 mt-12">
                <full-image :d-lg-h-v=40 :d-md-h-v=50 :d-h-v=55 d-h-u="vw" class="anima-img2-img3-h" :zoomxs="false" :src-zoom="imgPath('drawingGirl_zoom.webp')" :src="imgPath('drawingGirl.webp')" alt="Drawing girl"/>
              </v-col>
              <v-col cols="12" class="pa-0 align-self-sm-end text-center text-sm-right mt-sm-0 mt-12">
                <full-image :d-lg-h-v=40 :d-md-h-v=50 :d-h-v=55 d-h-u="vw" class="anima-img2-img3-h" :zoomxs="false" :src-zoom="imgPath('removableTabletop_zoom.webp')" :src="imgPath('removableTabletop.webp')" alt="Removable table top"/>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-row class="ml-0 mr-0 mb-0 def-mar-top">
          <v-col align="center" cols="12" class="pa-0 align-self-center">
            <full-image :d-lg-h-v=35 :d-md-h-v=45 :d-h-v=55 d-h-u="vw" class="anima-img4-h" :zoomxs="false" :src-zoom="imgPath('tableDrawing_zoom.webp')" :src="imgPath('tableDrawing.webp')" alt="Table drawing"/>
          </v-col>
        </v-row>

        <v-row class="ma-0 def-pad-top" :style="dragonStyle">
          <v-col cols="12" class="pa-0">
            <h1 class="h-neucha-regular h-mb">
              <span v-if="$i18n.locale === 'ru'">
                Образ
              </span>
              <span lang="en" v-else>
                Image
              </span>
            </h1>
          </v-col>
          <v-col cols="12" sm="6" class="pa-0">
            <p class="h-montserrat-regular" style="font-weight: bold;">
              <span v-if="$i18n.locale === 'ru'">
                Зачем крылья?
              </span>
              <span lang="en" v-else>
                Why wings?
              </span>
            </p>
            <span v-if="$i18n.locale === 'ru'">
              <p class="h-montserrat-regular red-line">
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
            </span>
            <span v-else>
              <p lang="en" class="h-montserrat-regular red-line span4-width">
                In my opinion,<br>
                wings always add a<br>
                certain fabulousness to<br>
                any, even the simplest object,<br>
                because Pegasus without wings is an ordinary horse, and a dragon is an overgrown lizard. 
                This greatly influences the image of the object, but no less important is that over time, 
                the child will increasingly use the tabletop unfolded, and the wings supporting it will not 
                be conspicuous, and the appearance of the table will become more adult, shifting the emphasis 
                to the expressive shape of the legs.
              </p>
            </span>
            
            <br>
            <p class="h-montserrat-regular" style="font-weight: bold;">
              <span v-if="$i18n.locale === 'ru'">
                Почему без привычной фурнитуры?
              </span>
              <span lang="en" v-else>
                Why without the usual fittings?
              </span>
            </p>
            <p class="h-montserrat-regular red-line span4-width">
              <span v-if="$i18n.locale === 'ru'">
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
              </span>
              <span lang="en" v-else>
                I wanted the child to independently interact with the table
                without the risk of injuring yourself. I believe that harsh metal parts take away the tenderness of children's furniture
                and lightness, and thanks to the fabric loops the table looks atypical
                a piece of furniture, but a fabulous designer. The "Anima" table is not just
                a piece of furniture, but a fabulous creature that came to us from unprecedented
                worlds to create and grow together
                with kids!
              </span>
            </p>
          </v-col>
          <v-col cols="12" sm="6" class="pa-0">
            <v-row class="ma-0 fill-height">
              <v-col cols="12" class="pa-0 align-self-sm-start text-center text-sm-right mt-sm-0 mt-12">
                <full-image :d-lg-h-v=40 :d-md-h-v=45 :d-h-v=55 d-h-u="vw" class="anima-img567-h" :zoomxs="false" :src-zoom="imgPath('constructor_zoom.webp')" :src="imgPath('constructor.webp')" alt="Сonstructor"/>
              </v-col>
              <v-col cols="12" class="pa-0 align-self-sm-center text-center text-sm-right mt-sm-0 mt-12">
                <full-image :d-lg-h-v=40 :d-md-h-v=45 :d-h-v=55 d-h-u="vw" class="anima-img567-h" :zoomxs="false" :src-zoom="imgPath('table_zoom.webp')" :src="imgPath('table.webp')" alt="Tables"/>
              </v-col>
              <v-col cols="12" class="pa-0 align-self-sm-end text-center text-sm-right mt-sm-0 mt-12">
                <full-image :d-lg-h-v=40 :d-md-h-v=45 :d-h-v=55 d-h-u="vw" class="anima-img567-h" :zoomxs="false" :src-zoom="imgPath('tableWithChild_zoom.webp')" :src="imgPath('tableWithChild.webp')" alt="Tables with child"/>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-row>
    </v-row>

    <v-row class="ma-0 def-pad-top" :style="background2Style">
      <v-row class="ma-0 padding">
        <v-col cols="12" class="pa-0">
          <h1 class="h-neucha-regular h-mb">
            <span v-if="$i18n.locale === 'ru'">
              Материалы
            </span>
            <span lang="en" v-else>
              Materials
            </span>
          </h1>
        </v-col>
        <v-col cols="12" sm="6" class="pa-0">
          <p class="h-montserrat-regular red-line span5-width">
            <span v-if="$i18n.locale === 'ru'">
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
            </span>
            <span lang="en" v-else>
              Materials selected for the project
              safe and environmentally friendly. Valchromat,
              used for making tabletops and wings, has long been used
              in the decoration of children's playrooms,
              since it has increased moisture resistance and high density
              and environmental friendliness. Moving parts
              The outside countertops are covered with Forbo furniture linoleum
              Furniture that is easy to clean and will protect the surface from moisture and paint.
              The tabletop is also equipped with silicone protrusions and pads
              made of Valchromat, providing a safe gap that will not allow
              press the baby's fingers. Under
              organic glass can be used to lay the masterpieces of a young creator, such
              visualization of the work process will have a beneficial effect on self-esteem,
              and, of course, plexiglass will bravely withstand the tests of plasticine and glue!
            </span>
          </p>
        </v-col>
        <v-col cols="12" sm="6" class="pa-0 text-center text-sm-right mt-sm-0 mt-12">
          <full-image :d-lg-h-v=45 :d-md-h-v=60 :d-sm-h-v=65 :d-h-v=55 d-h-u="vw" class="anima-img8-h" :zoomxs="false" :src-zoom="imgPath('explosionDiagram_zoom.webp')" :src="imgPath('explosionDiagram.webp')" alt="Explosion diagram"/>
        </v-col>
      </v-row>

      <v-row class="ma-0" :style="padding2">
        <v-col cols="12" class="pa-0 text-center mt-sm-0 mt-12 mb-sm-0 mb-10">
          <h1 class="h-neucha-regular text-center" style="font-size: 2.8vw;" v-if="this.$vuetify.display.smAndUp">
            <span v-if="$i18n.locale === 'ru'">
              История создания
            </span>
            <span lang="en" v-else>
              History of creation
            </span>
          </h1>
          <h1 class="h-neucha-regular text-center" style="font-size: 10vw;" v-else>
            <span v-if="$i18n.locale === 'ru'">
              История создания
            </span>
            <span lang="en" v-else>
              History of creation
            </span>
          </h1>
        </v-col>

        <v-row class="ml-0 mr-0 mb-0 spec-mt">
          <v-col cols="12" class="pa-0">
            <h1 class="h-neucha-regular h-mb">
              <span v-if="$i18n.locale === 'ru'">
                Анализ потребностей
              </span>
              <span lang="en" v-else>
                Needs Analysis
              </span>
            </h1>
            <span v-if="$i18n.locale === 'ru'">
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
              </p>
            </span>
            <span v-else>
              <p lang="en" class="h-montserrat-regular red-line">
                Childhood — is a time filled with miracles and vivid impressions. 
                And this is an important process of personality formation. Each 
                stage is unique and requires appropriate solutions. For the competent, 
                holistic development of a child, it is necessary to create favorable 
                conditions. The environment should encourage the baby to explore the world. 
                Unusual things with a non-standard set of functions or appearance will contribute
                to the development of flexible thinking and imagination.
              </p>
            </span>
            <br>

            <p class="h-montserrat-regular mb-2" style="font-weight: bold;">
              <span v-if="$i18n.locale === 'ru'">
                Раннее детство 1-3 года
              </span>
              <span lang="en" v-else>
                Early childhood 1-3 years
              </span>
            </p>

            <p class="h-montserrat-regular">
              <span v-if="$i18n.locale === 'ru'">
                Ребёнок:
              </span>
              <span lang="en" v-else>
                Child:
              </span>
            </p>
            <ul class="h-montserrat-regular pl-7">
              <li>
                <p>
                  <span v-if="$i18n.locale === 'ru'">
                    учится ходить и говорить, познаёт мир
                  </span>
                  <span lang="en" v-else>
                    learns to walk and talk, discovers the world
                  </span>
                </p>
              </li>
              <li>
                <p>
                  <span v-if="$i18n.locale === 'ru'">
                    хочет всё делать сам, но не всегда может
                  </span>
                  <span lang="en" v-else>
                    wants to do everything himself, but he can't always
                  </span>
                </p>
              </li>
              <li>
                <p>
                  <span v-if="$i18n.locale === 'ru'">
                    наглядно-действенное мышление
                  </span>
                  <span lang="en" v-else>
                    visual-effective thinking
                  </span>
                </p>
              </li>
            </ul>

            <p class="h-montserrat-regular">
              <span v-if="$i18n.locale === 'ru'">
                Столик «Anima»: 
              </span>
              <span lang="en" v-else>
                Table "Anima":
              </span>
            </p>
            <ul class="h-montserrat-regular pl-7">
              <li>
                <p>
                  <span v-if="$i18n.locale === 'ru'">
                    конструктор отлично подойдёт для развития мелкой<br>
                    моторики, которая напрямую связана с речью
                  </span>
                  <span lang="en" v-else>
                    The constructor is perfect for developing fine motor skills, which are directly related to speech.
                  </span>
                </p>
              </li>
              <li>
                <p>
                  <span v-if="$i18n.locale === 'ru'">
                    безопасная фурнитура, интуитивный дизайн
                  </span>
                  <span lang="en" v-else>
                    safe fittings, intuitive design
                  </span>
                </p>
              </li>
              <li>
                <p>
                  <span v-if="$i18n.locale === 'ru'">
                    <span style="letter-spacing: -0.5px;">
                      тактильные ощущения благодаря разнообразным<br>
                      материалам
                    </span>
                    стола (ручки ящиков выполнены из ткани,<br>
                    металла, силикона, дерева, тканевые петли в столешнице,<br>
                    оргстекло, мебельный линолеум, вальхромат)
                  </span>
                  <span lang="en" v-else>
                    tactile sensations thanks to various
                    table materials (drawer handles are made of fabric,
                    metal, silicone, wood, fabric loops in the tabletop,
                    plexiglass, furniture linoleum, valchromat)
                  </span>
                </p>
              </li>
            </ul><br>

            <p class="h-montserrat-regular mb-2" style="font-weight: bold;">
              <span v-if="$i18n.locale === 'ru'">
                Дошкольный возраст 3-7 лет  
              </span>
              <span lang="en" v-else>
                Preschool age 3-7 years
              </span>
            </p>
            
            <p class="h-montserrat-regular">
              <span v-if="$i18n.locale === 'ru'">
                Ребёнок: 
              </span>
              <span lang="en" v-else>
                Child:
              </span>
            </p>
            <ul class="h-montserrat-regular pl-7">
              <li>
                <p>
                  <span v-if="$i18n.locale === 'ru'">
                    появление первых фобий и тревог
                  </span>
                  <span lang="en" v-else>
                    the appearance of the first phobias and anxieties
                  </span>
                </p>
              </li>
              <li>
                <p>
                  <span v-if="$i18n.locale === 'ru'">
                    поиск увлечений и способов самовыражения
                  </span>
                  <span lang="en" v-else>
                    Finding hobbies and ways to express yourself
                  </span>
                </p>
              </li>
              <li>
                <p>
                  <span v-if="$i18n.locale === 'ru'">
                    наглядно-образное мышление
                  </span>
                  <span lang="en" v-else>
                    visual-figurative thinking
                  </span>
                </p>
              </li>
            </ul>

            <p class="h-montserrat-regular">
              <span v-if="$i18n.locale === 'ru'">
                Столик «Anima»:
              </span>
              <span lang="en" v-else>
                Table "Anima":
              </span>
            </p>
            <ul class="h-montserrat-regular pl-7">
              <li>
                <p>
                  <span v-if="$i18n.locale === 'ru'">
                    <span v-if="this.$vuetify.display.smAndUp">
                      образ дружественного создания, попытка создать атмос-<br>
                      феру собственного маленького уютного мира в детской комнате
                    </span>
                    <span v-else>
                      образ дружественного создания, попытка создать атмосферу собственного маленького уютного мира в детской комнате
                    </span>
                  </span>
                  <span lang="en" v-else>
                    the image of a friendly creature, an attempt to create the atmosphere of your own small cozy world in the children's room
                  </span>
                </p>
              </li>
              <li>
                <p>
                  <span v-if="$i18n.locale === 'ru'">
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
                  </span>
                  <span lang="en" v-else>
                    inclined planes for drawing and reading, plexiglass for modeling, prototyping, storage system for organization
                  </span>
                </p>
              </li>
              <li>
                <p>
                  <span v-if="$i18n.locale === 'ru'">
                    образное решение стола навевает приятные ассоциации,<br>
                    дизайн способствует развитию воображения, фантазии
                  </span>
                  <span lang="en" v-else>
                    the figurative design of the table evokes pleasant associations,
                    design promotes the development of imagination and fantasy
                  </span>
                </p>
              </li>
            </ul><br>

            <p class="h-montserrat-regular mb-2" style="font-weight: bold;">
              <span v-if="$i18n.locale === 'ru'">
                Младший школьный возраст 7-11 лет 
              </span>
              <span lang="en" v-else>
                Junior school age 7-11 years
              </span>
            </p>

            <p class="h-montserrat-regular">
              <span v-if="$i18n.locale === 'ru'">
                Ребёнок: 
              </span>
              <span lang="en" v-else>
                Child:
              </span>
            </p>
            <ul class="h-montserrat-regular pl-7">
              <li>
                <p>
                  <span v-if="$i18n.locale === 'ru'">
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
                  </span>
                  <span lang="en" v-else>
                    dependence on the opinions of others, anxiety about school performance and one's position in society, the desire to be part of a team
                  </span>
                </p>
              </li>
              <li>
                <p>
                  <span v-if="$i18n.locale === 'ru'">
                    словесно-логическое мышление
                  </span>
                  <span lang="en" v-else>
                    verbal-logical thinking
                  </span>
                </p>
              </li>
            </ul>

            <p class="h-montserrat-regular">
              <span v-if="$i18n.locale === 'ru'">
                Столик «Anima»:
              </span>
              <span lang="en" v-else>
                Table "Anima":
              </span>
            </p>
            <ul class="h-montserrat-regular pl-7">
              <li>
                <p>
                  <span v-if="$i18n.locale === 'ru'">
                    всесторонний доступ стола позволяет нескольким людям<br>
                    одновременно заниматься, возможность социализации
                  </span>
                  <span lang="en" v-else>
                    comprehensive table access allows several people to study at the same time, the possibility of socialization
                  </span>
                </p>
              </li>
              <li>
                <p>
                  <span v-if="$i18n.locale === 'ru'">
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
                  </span>
                  <span lang="en" v-else>
                    if you're tired of the wings and want a more "grown-up" 
                    table, then you can unfold the tabletop and turn your attention to the textured legs
                  </span>
                </p>
              </li>
            </ul>
          </v-col>
        </v-row>

        <v-row class="ml-0 mr-0 mb-0 def-mar-top">
          <h1 class="h-neucha-regular h-mb">
            <span v-if="$i18n.locale === 'ru'">
              Эскизирование    
            </span>
            <span lang="en" v-else>
              Sketching
            </span>
          </h1>
          <v-col cols="12" class="pa-0 h-mb">
            <full-image :d-lg-h-v=45 :d-md-h-v=65 :d-sm-h-v=65 :d-h-v=55 d-h-u="vw" class="anima-sketches-width" :zoomxs="false" :src-zoom="imgPath('sketches_zoom.webp')" :src="imgPath('sketches.webp')" alt="Sketches"/>
          </v-col>
          <v-col cols="12" class="pa-0 mt-sm-0 mt-12">
            <span v-if="$i18n.locale === 'ru'">
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
            </span>
            <span v-else>
              <p lang="en" class="h-montserrat-regular red-line">
                At the beginning of sketching, I set myself the task of identifying
                the most striking imaginative solutions and only then think through
                structural part. I was also looking for an opportunity to customize
                certain elements. To come to the most
                I tried to destroy the bright visual solution
                stereotypical designs, all the crazy ones were recorded
                ideas. It was equally important to create a piece of furniture that
                will fit into any apartment configuration, it was necessary to make it accessible from the greatest number
                sides Options were considered to make the table convenient for children of different ages. Gradually I identified
                the most desired functionality for yourself. Necessarily
                include an inclined plane that will fit
                the needs of the child at different periods of life. Select
                storage system, as a separate element, up to a certain
                child's age. Having your own storage area from childhood will teach your child to order and self-organization.
              </p>
            </span>
          </v-col>
        </v-row>

        <v-row class="ml-0 mr-0 mb-0 def-mar-top">
          <h1 class="h-neucha-regular h-mb">
            <span v-if="$i18n.locale === 'ru'">
              Макетирование   
            </span>
            <span lang="en" v-else>
              Layout
            </span>
          </h1>

          <v-col cols="12" class="pa-0 h-mb">
            <v-row class="ma-0">
              <v-col cols="12" sm="6" class="pa-0 text-center text-sm-start">
                <full-image :d-lg-h-v=40 :d-md-h-v=50 :d-h-v=55 d-h-u="vw" class="anima-img9-h" :zoomxs="false" :src-zoom="imgPath('prototyping1_zoom.webp')" :src="imgPath('prototyping1.webp')" alt="Prototyping"/>
              </v-col>
              <v-col cols="12" sm="6" class="pa-0 text-center text-sm-end mt-6 mt-sm-0">
                <full-image :d-lg-h-v=40 :d-md-h-v=50 :d-h-v=55 d-h-u="vw" class="anima-img9-h" :zoomxs="false" :src-zoom="imgPath('prototyping2_zoom.webp')" :src="imgPath('prototyping2.webp')" alt="Prototyping"/>
              </v-col>
            </v-row>
            <v-row class="ml-0 mr-0 mb-0 mt-6 mt-md-4 mt-lg-6">
              <v-col cols="12" sm="6" class="pa-0 text-center text-sm-start">
                <full-image :d-lg-h-v=40 :d-md-h-v=50 :d-h-v=55 d-h-u="vw" class="anima-img9-h" :zoomxs="false" :src-zoom="imgPath('prototyping3_zoom.webp')" :src="imgPath('prototyping3.webp')" alt="Prototyping"/>
              </v-col>
              <v-col cols="12" sm="6" class="pa-0 text-center text-sm-end mt-6 mt-sm-0">
                <full-image :d-lg-h-v=40 :d-md-h-v=50 :d-h-v=55 d-h-u="vw" class="anima-img9-h" :zoomxs="false" :src-zoom="imgPath('prototyping4_zoom.webp')" :src="imgPath('prototyping4.webp')" alt="Prototyping"/>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12" class="pa-0 mt-12 mt-sm-0">
            <span v-if="$i18n.locale === 'ru'">
              <span v-if="this.$vuetify.display.smAndUp">
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
              </span>
              <span v-else>
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
              </span>
            </span>
            <span lang="en" v-else>
              <p class="h-montserrat-regular red-line">
                For a better understanding of the design features, there was
                A dimensional mock-up of the table was created. Layout, in contrast
                from 3D modeling and sketching, helps our brain perceive the subject more holistically.
                On a layout, even such a conventional one and devoid of an aesthetic component, we can
                immediately discuss use cases, possible problems and solutions.
              </p>
              <p class="h-montserrat-regular red-line">
                The layout made it clear that the moving parts of the tabletop needed additional support. Also active
                the turning mechanism was discussed. A small prototype of a wooden hinge was made in the workshop,
                inside which a metal plunger was installed, but since the chosen thickness of the tabletop elements was 8 mm, I had to admit that
                that introducing any accessories into it is unsafe from the point of view of service life.
              </p>
              <p class="h-montserrat-regular red-line">
                The next option was the idea of fastening made of fabric.
                Both the mockup and the prototype used a fabric called oxford, which is used to make
                awnings, trade tents, tourist furniture, equipment,
                jackets designed for extreme conditions are different
                increased strength, has water-repellent impregnation. A wooden pin with a diameter of 8 mm was sewn into the fabric.
                Next, the fabric was secured under plexiglass on the static part
                tabletops, and the other side was glued between the furniture
                linoleum and valchromate. This design turned out to be safer for children’s fingers and preserved
                the ability to use the minimum thickness of the tabletop, significantly facilitating the design. Thanks to prototyping, problem areas were identified and deficiencies were found.
                standard solutions. Form and function
              </p>
            </span>
          </v-col>
        </v-row>

        <v-row class="ml-0 mr-0 mb-0 def-mar-top">
          <h1 class="h-neucha-regular h-mb">
            <span v-if="$i18n.locale === 'ru'">
              Форма и функция
            </span>
            <span lang="en" v-else>
              Form and function
            </span>
          </h1>

          <v-col cols="12" class="pa-0 mb-6 mb-lg-6 mb-md-1">
            <v-row class="ma-0">
              <v-col cols="12" sm="6" class="pa-0 text-center text-sm-start">
                <full-image :d-lg-h-v=40 :d-md-h-v=45 :d-h-v=55 d-h-u="vw" class="anima-img10-h" :zoomxs="false" :src-zoom="imgPath('formandfunction1_zoom.webp')" :src="imgPath('formandfunction1.webp')" alt="Dragon"/>
              </v-col>
              <v-col cols="12" sm="6" class="pa-0 text-center text-sm-end">
                <full-image :d-lg-h-v=40 :d-md-h-v=45 :d-h-v=55 d-h-u="vw" class="anima-img10-h" :zoomxs="false" :src-zoom="imgPath('formandfunction2_zoom.webp')" :src="imgPath('formandfunction2.webp')" alt="Boxes"/>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" class="pa-0 mb-6 mb-lg-6 mb-md-1">
            <v-row class="ma-0">
              <v-col cols="12" sm="6" class="pa-0 text-center text-sm-start">
                <full-image :d-lg-h-v=40 :d-md-h-v=45 :d-h-v=55 d-h-u="vw" class="anima-img10-h" :zoomxs="false" :src-zoom="imgPath('formandfunction3_zoom.webp')" :src="imgPath('formandfunction3.webp')" alt="Table legs 1"/>
              </v-col>
              <v-col cols="12" sm="6" class="pa-0 text-center text-sm-end">
                <full-image :d-lg-h-v=40 :d-md-h-v=45 :d-h-v=55 d-h-u="vw" class="anima-img10-h" :zoomxs="false" :src-zoom="imgPath('formandfunction4_zoom.webp')" :src="imgPath('formandfunction4.webp')" alt="Table legs 2"/>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" class="pa-0 h-mb">
            <v-row class="ma-0">
              <v-col cols="12" sm="6" class="pa-0 text-center text-sm-start">
                <full-image :d-lg-h-v=35 :d-md-h-v=45 :d-h-v=55 d-h-u="vw" class="anima-img10-h" :zoomxs="false" :src-zoom="imgPath('formandfunction5_zoom.webp')" :src="imgPath('formandfunction5.webp')" alt="Baby and adult table"/>
              </v-col>
              <v-col cols="12" sm="6" class="pa-0 text-center text-sm-end">
                <full-image :d-lg-h-v=35 :d-md-h-v=45 :d-h-v=55 d-h-u="vw" class="anima-img10-h" :zoomxs="false" :src-zoom="imgPath('formandfunction6_zoom.webp')" :src="imgPath('formandfunction6.webp')" alt="Table with opened wings"/>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12" class="pa-0">
            <p class="h-montserrat-regular red-line h-mb" style="font-style: italic;">
              <span v-if="$i18n.locale === 'ru'">
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
              </span>
              <span lang="en" v-else>
                "A chair should not be "vertical" or "horizontal"
                it should not be "expressive" or "constructivist";
                should not be produced exclusively
                for reasons of expediency, or to comply
                table; he should just be a good chair and like that
                It will definitely suit a good table."
              </span>
            </p>

            <p class="h-montserrat-regular text-end mb-10" style="font-style: italic;">
              <span v-if="$i18n.locale === 'ru'">
                Марсель Бройер
              </span>
              <span lang="en" v-else>
                Marcel Breuer
              </span>
            </p>
            <p class="h-montserrat-regular red-line h-mb">
              <span v-if="$i18n.locale === 'ru'">
                <span v-if="this.$vuetify.display.smAndUp">
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
                </span>
                <span v-else>
                  На мой взгляд декоративный элемент становится в разы
                  интереснее, когда в нём прослеживается логика, форма должна быть неразрывно связана с функцией. Каждая деталь
                  стола должна была иметь яркое образное решение, но учитывая возрастной диапазон и разницу восприятия, было важно
                  выполнить их деликатно.
                </span>
              </span>
              <span lang="en" v-else>
                In my opinion, the decorative element becomes significantly
                It's more interesting when logic is traced in it; form should be inextricably linked with function. Every detail
                the table had to have a bright imagery, but given the age range and difference in perception, it was important
                perform them delicately.
              </span>
            </p>

            <p class="h-montserrat-regular" style="font-weight: bold;">
              <span v-if="$i18n.locale === 'ru'">
                Система хранения:
              </span>
              <span lang="en" v-else>
                Storage system:
              </span>
            </p>
            <p class="h-montserrat-regular red-line h-mb" style="letter-spacing: 0.3px">
              <span v-if="$i18n.locale === 'ru'">
                Было решено отказаться от «глазастых» ящиков, в отличие<br>
                от крыльев, их невозможно со временем скрыть, да и слиш-<br>
                ком прямолинейный образ, быстро наскучит. 
              </span>
              <span lang="en" v-else>
                It was decided to abandon the "big-eyed" boxes, in contrast
                from the wings, they cannot be hidden over time, and a too straightforward image will quickly become boring.
              </span>
            </p>
            <p class="h-montserrat-regular" style="font-weight: bold;">
              <span v-if="$i18n.locale === 'ru'">
                Ножки:
              </span>
              <span lang="en" v-else>
                Legs:
              </span>
            </p>
            <p class="h-montserrat-regular red-line h-mb">
              <span v-if="$i18n.locale === 'ru'">
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
              </span>
              <span lang="en" v-else>
                Over time, the emphasis shifts to non-standard
                legs. Their shape, expanding towards the bottom, gives the table
                additional stability, and diagonal orientation
                saves more legroom. Leg proportions
                go well with both a "small" table, creating
                a feeling of comically thick paws, and with a taller one,
                a heavy "adult" table.
              </span>
            </p>
            <p class="h-montserrat-regular" style="font-weight: bold;">
              <span v-if="$i18n.locale === 'ru'">
                Фиксирующие оргстекло накладки: 
              </span>
              <span lang="en" v-else>
                Plexiglas fixing pads:
              </span>
            </p>
            <p class="h-montserrat-regular red-line h-mb">
              <span v-if="$i18n.locale === 'ru'">
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
              </span>
              <span lang="en" v-else>
                In the first renderings the overlays were too wide
                and massive, took up a lot of space from the workspace
                table, so the final shape became thinner,
                had indentations from the edge of the table and hid the attachment point
                new fabric loop.
              </span>
            </p>
            <p class="h-montserrat-regular" style="font-weight: bold;">
              <span v-if="$i18n.locale === 'ru'">
                Уголок-дракончик:
              </span>
              <span lang="en" v-else>
                Dragon corner:
              </span>
            </p>
            <p class="h-montserrat-regular red-line">
              <span v-if="$i18n.locale === 'ru'">
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
              </span>
              <span lang="en" v-else>
                Initially, the dragon was supposed to be attached with horns
                into the holes in the moving parts of the tabletop ("back" 37°,
                "head" 55°, and the tail was detached and had an angle of 18°), but due to
                new shape of the lining it has lost its stability
                and turned into a bison and a rhinoceros.
              </span>


            </p><br>
            <p class="h-montserrat-regular red-line">
              <span v-if="$i18n.locale === 'ru'">
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
              </span>
              <span lang="en" v-else>
                I express my deep gratitude to my thesis supervisor
                Eva Gordeeva @evahysum. It was wonderful
                and fruitful cooperation!
              </span>
            </p>
          </v-col>
        </v-row>

        <v-col cols="12" class="pa-0 text-center pt-12 pb-12">
          <img class="anima-img11-w" src="../images/AnimaPage/cyclop.webp" alt="Cyclop" />
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

  import dragon from '@/images/AnimaPage/dragon.webp'
  import background1 from '@/images/AnimaPage/background.webp'
  import background2 from '@/images/AnimaPage/background2.png'
  
export default {
  name: "AnimaPage",
  data() {
    return {
      dragon: dragon,
      background1: background1,
      background2: background2,
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
  methods: {
    imgPath(img) {
      return new URL(`../images/AnimaPage/${img}`, import.meta.url).href;
    },
  },
  computed: {
    dragonStyle() {
      if (this.$vuetify.display.smAndUp) {
        return {
          'background-image': `url(${dragon})`,
          'background-repeat': 'no-repeat',
          'background-size': '35%',
          'background-position': '20% 12.5%'
        };
      } else {
        return {
          'background-image': `url(${dragon})`,
          'background-repeat': 'no-repeat',
          'background-size': '60%',
          'background-position': '96% 5%',
        }
      }
    },
    background1Style() {
      if (this.$vuetify.display.smAndUp) {
        return {
          'background-image': `url(${background1})`,
          'background-size': 'cover',
        };
      } else {
        return {
          'background-image': 'unset',
          'background-size': 'unset',
        }
      }
    },
    background2Style() {
      if (this.$vuetify.display.smAndUp) {
        return {
          'background-image': `url(${background2})`,
          'background-size': 'cover',
        };
      } else {
        return {
          'background-image': 'unset',
          'background-size': 'unset',
        }
      }
    },
    padding2() {
      if (this.$vuetify.display.smAndUp) {
        if (this.$i18n.locale === 'ru') {
          return {
            paddingLeft: "25vw",
            paddingRight: "25vw",
            paddingTop: "130.20833333333334vw",
          };
        } else {
          return {
            paddingLeft: "25vw",
            paddingRight: "25vw",
            paddingTop: "132vw",
          };
        }
      } else {
        return {
          paddingTop: "unset",
          paddingLeft: "4vw",
          paddingRight: "4vw",
        }
      }
    },
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
  .sheep-width {
    width: 70vw;
  }
  .padding {
    padding-left: 9vw; 
    padding-right: 9vw;
  }
  .h-mb {
    margin-bottom: 0.9572916666666667vw;
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

  .span1-width {
    width: 29.84375vw;
  }
  .span2-width {
    width: 30.520833333333332vw;
  }

  .span3-width {
    width: 30.729166666666668vw
  }

  .span4-width {
    width: 32.03125vw;
  }

  .span5-width {
    width: 30.78125vw;
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

    .sheep-width {
      width: 90vw;
    }

    .h-mb {
      margin-bottom: 1vh;
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

    .span1-width {
      width: unset;
    }
    .span2-width {
      width: unset;
    }

    .span3-width {
      width: unset;
    }

    .span4-width {
      width: unset;
    }

    .span5-width {
      width: unset;
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
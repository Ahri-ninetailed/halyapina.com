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
              A transformable table project for children aged 3 to 9
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
              A transformable table project for children aged 3 to 9
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
            <p class="h-montserrat-regular">
              <span v-if="$i18n.locale === 'ru'">
                Anima — в переводе с латыни «душа».<br>
                <span class="letter-spacing03">
                  Столик трансформируется не только
                </span><br>
                в плане эргономики, но и эволюцио-<br>
                нирует с точки зрения образного<br>
                <span class="letter-spacing03">
                  решения. Акценты смещаются, ассо-
                </span><br>
                <span class="letter-spacing03">
                  циации становятся более сложными
                </span><br>
                и интуитивными.
              </span>
              <span lang="en" v-else>
                Anima — means "soul" in Latin.
                The table transforms not only in terms of ergonomics,
                but also evolves in its visual concept.
                The accents shift, and the associations become
                more complex and intuitive.
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
            <p class="h-montserrat-regular red-line">
              <span v-if="$i18n.locale === 'ru'">
                Я стремилась создать детский стол,<br>
                который будет ассоциироваться<br>
                не с первыми прописями и вычисле-<br>
                ниями, а будет источником вдохнове-<br>
                ния и пространством для реализации<br>
                самых смелых идей малыша. Деревца<br>
                и булыжники станут любимым конст-<br>
                <span class="letter-spacing-minus-05">
                  руктором и разовьют мелкую моторику,
                </span><br>
                <span class="letter-spacing-minus-01">
                  которая важна при формировании ре-
                </span><br>
                <span class="letter-spacing02">
                  чи. Подвижные части столешницы ос-
                </span><br>
                нащены отверстиями для кисточек<br>
                и стакана с водой. Фигурки носорога<br>
                <span class="letter-spacing-minus-02">
                  и буйвола — функциональные элемен-
                </span><br>
                ты, при помощи которых регулируется<br>
                <span class="letter-spacing02">
                  наклон подвижных частей, а их рожки
                </span><br>
                <span class="letter-spacing02">
                  выполнены из мягких материалов, ко-
                </span><br>
                торые подарят контраст в тактильных<br>
                ощущениях.<br>
              </span>
              <span lang="en" v-else>
                I wanted to create a children's table that would be associated
                not with first copybooks and arithmetic, but would become a source of
                inspiration and a space for bringing a child's boldest ideas to life.
                The little trees and cobblestones become a favorite construction set
                and develop the fine motor skills that are so important for speech development.
                The movable parts of the tabletop are fitted with holes for brushes
                and a glass of water. The rhino and buffalo figures are functional elements
                used to adjust the tilt of the movable parts, and their horns are made
                of soft materials that add a contrast in tactile sensations.
              </span>
            </p>
            <p class="h-montserrat-regular red-line">
              <span v-if="$i18n.locale === 'ru'">
                Трансформация стола происходит<br>
                при помощи ростовых насадок для но-<br>
                <span class="letter-spacing03">
                  жек и ящиков, которые до определён-
                </span><br>
                ного момента являются отдельной<br>
                системой хранения. Ящики ставятся<br>
                <span class="letter-spacing03">
                  на подстолье, а сверху кладется сто-
                </span><br>
                лешница, попадая в пазы на крышках,<br>
                так как их местоположение и размер<br>
                <span class="letter-spacing-minus-03">
                  схожи с отверстиями в подстолье, кры-
                </span><br>
                <span class="letter-spacing03">
                  лья же вынимаются из нижней части
                </span><br>
                стола и вставляются в боковые пазы<br>
                ящиков. 
              </span>
              <span lang="en" v-else>
                The table transforms with the help of height extensions for the legs
                and the drawers, which up to a certain point function as a separate
                storage system. The drawers are placed onto the underframe, and the
                tabletop is then laid on top, fitting into the grooves on the lids —
                their location and size match the holes in the underframe. The wings
                are removed from the lower part of the table and inserted into the
                side grooves of the drawers.
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
              <p lang="en" class="h-montserrat-regular red-line">
                In my opinion,<br>
                wings always add a<br>
                touch of fairytale magic<br>
                to any object, even the simplest one —<br>
                after all, Pegasus without wings is just an ordinary horse, and a dragon
                is an oversized lizard. This greatly influences the image of an object.
                But no less important is the fact that over time the child will use the
                tabletop unfolded more and more often, and the wings supporting it will
                become less prominent, so the appearance of the table will become more
                grown-up, shifting the emphasis to the expressive shape of the legs.
              </p>
            </span>
            
            <br>
            <p class="h-montserrat-regular" style="font-weight: bold;">
              <span v-if="$i18n.locale === 'ru'">
                Почему без привычной фурнитуры?
              </span>
              <span lang="en" v-else>
                Why no conventional hardware?
              </span>
            </p>
            <p class="h-montserrat-regular red-line">
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
                I wanted the child to be able to interact with the table on their own,
                without any risk of getting hurt. I believe that harsh metal parts strip
                children's furniture of its tenderness and lightness, while the fabric
                loops make the table look not like a typical piece of furniture, but
                like a magical construction set. The "Anima" table is not just a piece
                of furniture — it is a fairytale creature that has come to us from
                unseen worlds to create and grow together with children!
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
          <p class="h-montserrat-regular red-line">
            <span v-if="$i18n.locale === 'ru'">
              Материалы, выбранные для проекта,<br>
              безопасны и экологичны. Valchromat,<br>
              используемый для изготовления сто-<br>
              <span class="letter-spacing-minus-03">
                лешницы и крыльев, давно применяют<br>
                в отделке детских игровых помещений,<br>
              </span>
              <span class="letter-spacing-minus-04">
                так как он обладает повышенной влаго-<br>
              </span>
              стойкостью, большой плотностью<br>
              <span class="letter-spacing04">
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
              <span class="letter-spacing04">
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
              The materials chosen for this project are safe and eco-friendly.
              Valchromat, used to make the tabletop and the wings, has long been
              used in the finishing of children's playrooms, thanks to its high
              moisture resistance, density, and environmental friendliness. The
              outer surfaces of the movable parts of the tabletop are covered
              with Forbo Furniture linoleum, which is easy to maintain and
              protects the surface from moisture and paint. The tabletop is also
              fitted with silicone bumpers and Valchromat overlays that provide
              a safe gap to keep the child from pinching their fingers. Beneath
              the plexiglass you can slip in the masterpieces of a young creator —
              such visualization of the working process has a wonderful effect
              on self-esteem, and of course, the plexiglass will bravely withstand
              every test of plasticine and glue!
            </span>
          </p>
        </v-col>
        <v-col cols="12" sm="6" class="pa-0 text-center text-sm-right mt-sm-0 mt-12">
          <full-image :d-lg-h-v=45 :d-md-h-v=60 :d-sm-h-v=65 :d-h-v=55 d-h-u="vw" class="anima-img8-h" :zoomxs="false" :src-zoom="explosionaDiagramZoom" :src="explosionaDiagram" alt="Explosion diagram"/>
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
                <span class="letter-spacing-minus-03">
                  создать благоприятные условия. Окружающая обстановка дол-
                </span><br>
                <span class="letter-spacing-minus-03">
                  жна подталкивать малыша к изучению мира. Необычные вещи
                </span><br>
                <span class="letter-spacing01">
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
                Childhood is a time filled with wonders and vivid impressions.
                It is also an important process of personality formation. Each
                stage is unique and calls for its own approach. To support the
                well-rounded, holistic development of a child, you need to create
                favorable conditions. The surroundings should encourage the child
                to explore the world. Unusual things — with non-standard sets of
                functions or unconventional appearances — help develop flexible
                thinking and imagination.
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
                    wants to do everything by themselves, but can't always manage
                  </span>
                </p>
              </li>
              <li>
                <p>
                  <span v-if="$i18n.locale === 'ru'">
                    наглядно-действенное мышление
                  </span>
                  <span lang="en" v-else>
                    visual-active thinking
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
                    the construction set is perfect for developing fine motor skills, which are directly linked to speech
                  </span>
                </p>
              </li>
              <li>
                <p>
                  <span v-if="$i18n.locale === 'ru'">
                    безопасная фурнитура, интуитивный дизайн
                  </span>
                  <span lang="en" v-else>
                    safe hardware, intuitive design
                  </span>
                </p>
              </li>
              <li>
                <p>
                  <span v-if="$i18n.locale === 'ru'">
                    <span class="letter-spacing-minus-05">
                      тактильные ощущения благодаря разнообразным<br>
                      материалам
                    </span>
                    стола (ручки ящиков выполнены из ткани,<br>
                    металла, силикона, дерева, тканевые петли в столешнице,<br>
                    оргстекло, мебельный линолеум, вальхромат)
                  </span>
                  <span lang="en" v-else>
                    a varied tactile experience thanks to the diverse materials used
                    in the table (drawer handles made of fabric, metal, silicone and
                    wood; fabric loops in the tabletop; plexiglass; furniture linoleum;
                    Valchromat)
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
                    searching for hobbies and ways of self-expression
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
                    the image of a friendly creature — an attempt to create the atmosphere of a small cozy world of one's own inside the child's room
                  </span>
                </p>
              </li>
              <li>
                <p>
                  <span v-if="$i18n.locale === 'ru'">
                    <span v-if="this.$vuetify.display.smAndUp">
                      наклонные плоскости для рисования и чтения, оргстекло<br>
                      <span class="letter-spacing-minus-05">
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
                    inclined planes for drawing and reading, plexiglass for modeling and prototyping, a storage system to organize personal space
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
                    the table's figurative design evokes pleasant associations and fosters the development of imagination and creativity
                  </span>
                </p>
              </li>
            </ul><br>

            <p class="h-montserrat-regular mb-2" style="font-weight: bold;">
              <span v-if="$i18n.locale === 'ru'">
                Младший школьный возраст 7-11 лет 
              </span>
              <span lang="en" v-else>
                Primary school age 7-11 years
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
                    dependence on the opinions of others, worries about school performance and one's place in society, the desire to be part of a group
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
                    all-around access to the table lets several people work at it at the same time, opening up opportunities for socialization
                  </span>
                </p>
              </li>
              <li>
                <p>
                  <span v-if="$i18n.locale === 'ru'">
                    <span v-if="this.$vuetify.display.smAndUp">
                      если крылья надоели, хочется более «взрослый» стол,<br>
                      <span class="letter-spacing-minus-02">
                        то можно разложить столешницу и переключить внимание на фактурные ножки 
                      </span>
                    </span>
                    <span v-else>
                      если крылья надоели, хочется более «взрослый» стол, 
                      то можно разложить столешницу и переключить внимание на фактурные ножки 
                    </span>
                  </span>
                  <span lang="en" v-else>
                    once the wings start to feel tired and a more "grown-up" table is wanted, the tabletop can be unfolded and the focus can shift to the textured legs
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
            <full-image :d-lg-h-v=45 :d-md-h-v=65 :d-sm-h-v=65 :d-h-v=55 d-h-u="vw" class="anima-sketches-width" :zoomxs="false" :src-zoom="sketchesZoom" :src="sketches" alt="Sketches"/>
          </v-col>
          <v-col cols="12" class="pa-0 mt-sm-0 mt-12">
            <span v-if="$i18n.locale === 'ru'">
              <p class="h-montserrat-regular red-line" v-if="this.$vuetify.display.smAndUp">
                В начале эскизирования я ставила для себя задачу выявить<br>
                <span class="letter-spacing03">
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
                <span class="letter-spacing03">
                  включить наклонную плоскость, которая будет соответство-<br>
                </span>
                вать потребностям ребёнка в разные периоды жизни. Выде-<br>
                лить систему хранения, как отдельный элемент, до опреде-<br>
                <span class="letter-spacing-minus-01">
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
                At the start of the sketching stage, I set myself the task of finding
                the most striking visual concepts first, and only then thinking through
                the structural side of the design. I was also looking for opportunities
                to customize particular elements. To arrive at the boldest visual solution,
                I tried to break free from stereotypical designs and recorded every wild
                idea that came to mind. It was equally important to create a piece of
                furniture that would fit any apartment layout, so I needed to make it
                accessible from as many sides as possible. I considered options that
                would make the table convenient for children of different ages.
                Gradually, I outlined the functionality I wanted most. The table absolutely
                had to include an inclined surface that would meet the child's needs at
                different stages of life. The storage system needed to be set apart as a
                separate element up to a certain age — having their own storage space
                from childhood teaches a child order and self-organization.
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
              Mock-up
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
                  <span class="letter-spacing03">
                    лее целостно воспринять предмет. На макете, даже таком ус-<br>
                    ловном и лишённом эстетической составляющей, мы можем<br>
                    сразу обсудить сценарии использования, возможные проб-<br>
                  </span>
                  лемы и методы решения. 
                </p>
                <p class="h-montserrat-regular red-line">
                  <span class="letter-spacing03">
                    Макет дал понимание того, что подвижным частям столеш-<br>
                  </span>
                  ницы необходима дополнительная поддержка. Также активно<br>
                  <span class="letter-spacing03">
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
                  <span class="letter-spacing03">
                    курток, рассчитанных на экстремальные условия, отличается<br>
                    повышенной прочностью, имеет водоотталкивающую про-<br>
                  </span>
                  питку. В ткань был вшит деревянный штырь диаметром 8 мм.<br>
                  <span class="letter-spacing04">
                    Далее ткань закрепили под оргстекло на статичной части<br>
                    столешницы, а другую сторону вклеили между мебельным<br>
                    линолеумом и вальхроматом. Подобная конструкция оказа-<br>
                    лась более безопасной для детских пальчиков и сохранила<br>
                    возможность использовать минимальную толщину столеш-<br>
                  </span>
                  ницы, значительно облегчив конструкцию. Благодаря макети-<br>
                  рованию были выявлены проблемные зоны и найдены нес-<br>
                  тандартные решения.
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
                  тандартные решения.
                </p>
              </span>
            </span>
            <span lang="en" v-else>
              <p class="h-montserrat-regular red-line">
                To gain a better understanding of the structural features, a full-scale
                mock-up of the table was built. Unlike 3D modeling and sketching,
                making a physical mock-up helps the brain perceive the object more
                holistically. Even with such a rough mock-up, devoid of any aesthetic
                component, we could immediately discuss usage scenarios, potential
                problems, and ways to solve them.
              </p>
              <p class="h-montserrat-regular red-line">
                The mock-up made it clear that the movable parts of the tabletop needed
                additional support. The pivot mechanism was also discussed in depth.
                A small prototype of a wooden hinge was made in the workshop, with a
                metal plunger installed inside it, but since the chosen thickness of
                the tabletop elements was 8 mm, we had to admit that embedding any
                hardware in it would be unsafe in terms of long-term durability.
              </p>
              <p class="h-montserrat-regular red-line">
                The next option was the idea of a fabric mount. Both the mock-up and
                the prototype used a fabric called Oxford, which is used to make
                awnings for market tents, camping furniture, gear, and jackets
                designed for extreme conditions — it offers exceptional strength
                and has a water-repellent treatment. An 8 mm wooden pin was sewn
                into the fabric. The fabric was then fixed under the plexiglass
                on the static part of the tabletop, while the other side was glued
                between the furniture linoleum and the Valchromat. This design
                proved safer for children's fingers and made it possible to keep
                the tabletop at its minimum thickness, significantly lightening the
                construction. Thanks to the mock-up process, problem areas were
                identified and unconventional solutions were found.
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
                  <span style="letter-spacing: 0.036458333333333336vw;">
                    «Стул не должен быть «вертикальным» или «горизонталь-<br>
                    ным», он не должен быть «экспрессивным» или «конструк-<br>
                    тивистским»; не должен быть произведен исключительно<br>
                  </span>
                  <span class="letter-spacing03">
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
                "A chair should not be 'vertical' or 'horizontal',
                it should not be 'expressive' or 'constructivist';
                it should not be made purely for reasons of utility,
                nor solely to match a table; it should simply be a good chair,
                and as such it will undoubtedly suit a good table."
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
                  <span class="letter-spacing03">
                    На мой взгляд декоративный элемент становится в разы<br>
                  </span>
                  интереснее, когда в нём прослеживается логика, форма дол-<br>
                  жна быть неразрывно связана с функцией. Каждая деталь<br>
                  <span class="letter-spacing-minus-03">
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
                In my view, a decorative element becomes far more interesting when
                there is a clear logic behind it — form should be inextricably linked
                with function. Every detail of the table needed a vivid figurative
                solution, but given the age range and the differences in perception,
                it was important to handle them delicately.
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
            <p class="h-montserrat-regular red-line h-mb letter-spacing03">
              <span v-if="$i18n.locale === 'ru'">
                Было решено отказаться от «глазастых» ящиков, в отличие<br>
                от крыльев, их невозможно со временем скрыть, да и слиш-<br>
                ком прямолинейный образ, быстро наскучит. 
              </span>
              <span lang="en" v-else>
                I decided to drop the "googly-eyed" drawers — unlike the wings,
                they can't be hidden over time, and an image that is too literal
                quickly grows boring.
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
                  <span class="letter-spacing-minus-01">
                    полнительную устойчивость, а диагональная направленность<br>
                  </span>
                  <span class="letter-spacing03">
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
                Over time, the emphasis shifts to the unconventional legs. Their
                shape, widening towards the bottom, gives the table extra stability,
                while their diagonal orientation preserves more legroom. The leg
                proportions work equally well with the "smaller" table — where they
                create the feeling of comically chubby paws — and with the taller,
                more substantial "grown-up" version.
              </span>
            </p>
            <p class="h-montserrat-regular" style="font-weight: bold;">
              <span v-if="$i18n.locale === 'ru'">
                Фиксирующие оргстекло накладки: 
              </span>
              <span lang="en" v-else>
                Plexiglass fixing pads:
              </span>
            </p>
            <p class="h-montserrat-regular red-line h-mb">
              <span v-if="$i18n.locale === 'ru'">
                <span v-if="this.$vuetify.display.smAndUp">
                  В первых визуализациях накладки были слишком широки-<br>
                  <span class="letter-spacing04">
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
                In the first renderings, the pads were too wide and bulky, taking
                up a lot of room on the table's working surface, so the final shape
                became slimmer, was inset from the edge of the table, and concealed
                the attachment point of the new fabric loop.
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
                  <span class="letter-spacing04">
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
                Originally, the little dragon was meant to be attached by its horns
                into the holes in the movable parts of the tabletop ("back" at 37°,
                "head" at 55°, while the tail was detachable and set at an 18° angle),
                but with the new shape of the pads it lost its stability and was
                transformed into a bison and a rhinoceros.
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
                I would like to express my deepest gratitude to my thesis supervisor,
                Eva Gordeeva @evahysum. It was a wonderful and fruitful collaboration!
              </span>
            </p>
          </v-col>
        </v-row>

        <v-col cols="12" class="pa-0 text-center pt-12 pb-12">
          <img class="anima-img11-w" :src="cyclop" alt="Cyclop" />
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
    sketchesZoom() {
      if (this.$i18n.locale === 'ru') {
        return this.imgPath('sketches_zoom.webp');
      } else {
        return this.imgPath('sketches_en_zoom.webp');
      }
    },
    sketches() {
      if (this.$i18n.locale === 'ru') {
        return this.imgPath('sketches.webp');
      } else {
        return this.imgPath('sketches_en.webp');
      }
    },
    cyclop() {
      if (this.$vuetify.display.smAndUp) {
        if (this.$i18n.locale === 'ru') {
          return this.imgPath('cyclop.webp');
        } else {
          return this.imgPath('cyclop_en.webp');
        }
      } else {
        if (this.$i18n.locale === 'ru') {
          return this.imgPath('cyclop_mobile.webp');
        } else {
          return this.imgPath('cyclop_mobile_en.webp');
        }
      }
    },
    explosionaDiagram() {
      if (this.$i18n.locale === 'ru') {
        return this.imgPath('explosionDiagram.webp');
      } else {
        return this.imgPath('explosionDiagram_en.webp');
      }
    },
    explosionaDiagramZoom() {
      if (this.$i18n.locale === 'ru') {
        return this.imgPath('explosionDiagram_zoom.webp');
      } else {
        return this.imgPath('explosionDiagram_en_zoom.webp');
      }
    },
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
            paddingTop: "146vw",
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
          marginRight: "1.3020833333333333vw",
        } 
      } else {
        return {
          height: "70vw",
          marginRight: "0.78125vw",
        } 
      }
    }
  }
}
</script>

<style scoped>
  .letter-spacing01 {
    letter-spacing: 0.005208333333333333vw;
  }

  .letter-spacing-minus-01 {
    letter-spacing: -0.005208333333333333vw;
  }

  .letter-spacing02 {
    letter-spacing: 0.010416666666666666vw;
  }

  .letter-spacing-minus-02 {
    letter-spacing: -0.010416666666666666vw;
  }

  .letter-spacing03 {
    letter-spacing: 0.015625vw;
  }
  .letter-spacing-minus-03 {
    letter-spacing: -0.015625vw;
  }

  .letter-spacing04 {
    letter-spacing: 0.020833333333333332vw;
  }
  .letter-spacing-minus-04 {
    letter-spacing: -0.020833333333333332vw;
  }

  .letter-spacing-minus-05 {
    letter-spacing: -0.026041666666666668vw;
  }
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
    margin-top: 35.908596300326444vh;
  }

  p {
    font-size: 1.481vw;
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
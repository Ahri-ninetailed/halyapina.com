<template>
  <v-container class="pa-0" fluid>
    <v-parallax src="../images/AnimaPage/anima.jpg">
      <v-row class="ma-0" style="height: 100vh;">
        <v-col cols="12" class="pa-0 align-self-center">
          <p class="text-center h-neucha-regular" style="font-weight: bold; font-size: 9.094270833333333vw;">
            ANIMA
          </p>
        </v-col>
      </v-row>
    </v-parallax>

    <Splide :options="splideOptions" :extensions="extensions">
      <SplideSlide>
        <full-image :d-md-h-v=66 :d-sm-h-v=49 :d-h-v=37 d-h-u="vh" src="../src/images/AnimaPage/Carousel/table_with_child2.jpg" :style="styleOfImageSlideProp" alt="Child near table 2"/>
      </SplideSlide>
      <SplideSlide>
        <full-image :d-md-h-v=66 :d-sm-h-v=56 :d-h-v=49 d-h-u="vh" src="../src/images/AnimaPage/Carousel/2tables.jpg" :style="styleOfImageSlideProp" alt="Two tables"/>
      </SplideSlide>
      <SplideSlide>
        <full-image :d-md-h-v=66 :d-sm-h-v=49 :d-h-v=37 d-h-u="vh" src="../src/images/AnimaPage/Carousel/2tables_grey.jpg" :style="styleOfImageSlideProp" alt="Two tables with grey wings"/>
      </SplideSlide>
      <SplideSlide>
        <full-image :d-md-h-v=66 :d-sm-h-v=49 :d-h-v=37 d-h-u="vh" src="../src/images/AnimaPage/Carousel/function_of_boxes.jpg" :style="styleOfImageSlideProp" alt="Functionality of boxes 1"/>
      </SplideSlide>
      <SplideSlide>
        <full-image :d-md-h-v=66 :d-sm-h-v=56 :d-h-v=49 d-h-u="vh" src="../src/images/AnimaPage/Carousel/function_of_boxes2.jpg" :style="styleOfImageSlideProp" alt="Functionality of boxes 2"/>
      </SplideSlide>
      <SplideSlide>
        <full-image :d-md-h-v=66 :d-sm-h-v=49 :d-h-v=37 d-h-u="vh" src="../src/images/AnimaPage/Carousel/function_of_boxes3.jpg" :style="styleOfImageSlideProp" alt="Functionality of boxes 3"/>
      </SplideSlide>
      <SplideSlide>
        <full-image :d-md-h-v=66 :d-sm-h-v=49 :d-h-v=37 d-h-u="vh" src="../src/images/AnimaPage/Carousel/interyer.jpg" :style="styleOfImageSlideProp" alt="Interyer"/>
      </SplideSlide>
      <SplideSlide>
        <full-image :d-md-h-v=66 :d-sm-h-v=56 :d-h-v=49 d-h-u="vh" src="../src/images/AnimaPage/Carousel/constructor.jpg" :style="styleOfImageSlideProp" alt="Constructor"/>
      </SplideSlide>
      <SplideSlide>
        <full-image :d-md-h-v=66 :d-sm-h-v=56 :d-h-v=49 d-h-u="vh" src="../src/images/AnimaPage/Carousel/prototype.jpg" :style="styleOfImageSlideProp" alt="Prototype"/>
      </SplideSlide>
      <SplideSlide>
        <full-image :d-md-h-v=66 :d-sm-h-v=49 :d-h-v=37 d-h-u="vh" src="../src/images/AnimaPage/Carousel/render_with_child.jpg" :style="styleOfImageSlideProp" alt="Render with child"/>
      </SplideSlide>
      <SplideSlide>
        <full-image :d-md-h-v=66 :d-sm-h-v=56 :d-h-v=49 d-h-u="vh" src="../src/images/AnimaPage/Carousel/separate_pieces.jpg" :style="styleOfImageSlideProp" alt="Separate pieces 1"/>
      </SplideSlide>
      <SplideSlide>
        <full-image :d-md-h-v=66 :d-sm-h-v=56 :d-h-v=49 d-h-u="vh" src="../src/images/AnimaPage/Carousel/separate_pieces2.jpg" :style="styleOfImageSlideProp" alt="Separate pieces 2"/>
      </SplideSlide>
      <SplideSlide>
        <full-image :d-md-h-v=66 :d-sm-h-v=49 :d-h-v=37 d-h-u="vh" src="../src/images/AnimaPage/Carousel/table_with_child.jpg" :style="styleOfImageSlideProp" alt="Child near table 1"/>
      </SplideSlide>
    </Splide>

    <v-row class="ma-0 def-pad-top" style="padding-left: 8vw; padding-right: 8vw;">
      <v-row class="ma-0">
        <v-col cols="6" class="pa-0" >
          <h1 class="h-neucha-regular">
            Anima
          </h1>
          <p class="h-montserrat-regular red-line">
            Anima — в переводе с латыни «душа».<br>
            Столик трансформируется не только<br>
            в плане эргономики, но и эволюцио-<br>
            нирует с точки зрения образного<br>
            решения. Акценты смещаются, ассо-<br>
            циации становятся более сложными<br>
            и интуитивными.
          </p>
        </v-col>
        <v-col align="end" cols="6" class="pa-0" >
          <full-image :d-lg-h-v=35 :d-md-h-v=45 :d-h-v=55 d-h-u="vw" class="anima-img1-h" src="../src/images/AnimaPage/interior.jpg" alt="Interior"/>
        </v-col>
      </v-row>

      <v-row class="ml-0 mr-0 mb-0 def-mar-top">
        <v-col align="center" cols="12" class="pa-0 align-self-center">
          <img style="width: 70vw;" src="../images/AnimaPage/sheepOfImages.jpg" alt="Sheep of images" />
        </v-col>
      </v-row>

      <v-row class="ml-0 mr-0 mb-0 def-mar-top">
        <v-col cols="6" class="pa-0">
          <h1 class="h-neucha-regular">
            Эргономика
          </h1>
          <p class="h-montserrat-regular red-line">
            Я стремилась создать детский стол,<br>
            который будет ассоциироваться<br>
            не с первыми прописями и вычисле-<br>
            ниями, а будет источником вдохнове-<br>
            ния и пространством для реализации<br>
            самых смелых идей малыша. Деревца<br>
            и булыжники станут любимым конст-<br>
            руктором и разовьют мелкую моторику,<br>
            которая важна при формировании ре-<br>
            чи. Подвижные части столешницы ос-<br>
            нащены отверстиями для кисточек<br>
            и стакана с водой. Фигурки носорога<br>
            и буйвола — функциональные элемен-<br>
            ты, при помощи которых регулируется<br>
            наклон подвижных частей, а их рожки<br>
            выполнены из мягких материалов, ко-<br>
            торые подарят контраст в тактильных<br>
            ощущениях.<br>
          </p>
          <p class="h-montserrat-regular red-line">
            Трансформация стола происходит<br>
            при помощи ростовых насадок для но-<br>
            жек и ящиков, которые до определён-<br>
            ного момента являются отдельной<br>
            системой хранения. Ящики ставятся<br>
            на подстолье, а сверху кладется сто-<br>
            лешница, попадая в пазы на крышках,<br>
            так как их местоположение и размер<br>
            схожи с отверстиями в подстолье, кры-<br>
            лья же вынимаются из нижней части<br>
            стола и вставляются в боковые пазы<br>
            ящиков. 
          </p>
        </v-col>
        <v-col cols="6" class="pa-0">
          <v-row class="ma-0">
            <v-col align="end" cols="12" class="pa-0 align-self-start">
              <full-image :d-lg-h-v=35 :d-md-h-v=45 :d-h-v=55 d-h-u="vw" class="anima-img2-img3-h" src="../src/images/AnimaPage/drawingGirl.jpg" alt="Drawing girl"/>
            </v-col>
            <v-col align="end" cols="12" class="pa-0 align-self-end">
              <full-image :d-lg-h-v=35 :d-md-h-v=45 :d-h-v=55 d-h-u="vw" class="anima-img2-img3-h" src="../src/images/AnimaPage/removableTabletop.jpg" alt="Removable table top"/>
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
        <v-col cols="6" class="pa-0">
          <h1 class="h-neucha-regular">
            Образ
          </h1>
          <p class="h-montserrat-regular">
            Зачем крылья?
          </p>
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
            <br>
            Почему без привычной фурнитуры?<br>
            <br>
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
        <v-col cols="6" class="pa-0">
          <v-row class="ma-0">
            <v-col cols="12" align="end" class="pa-0">
              <full-image :d-lg-h-v=35 :d-md-h-v=45 :d-h-v=55 d-h-u="vw" class="anima-img567-h" src="../src/images/AnimaPage/constructor.jpg" alt="Сonstructor"/>
            </v-col>
            <v-col cols="12" align="end" class="pa-0">
              <full-image :d-lg-h-v=35 :d-md-h-v=45 :d-h-v=55 d-h-u="vw" class="anima-img567-h" src="../src/images/AnimaPage/table.jpg" alt="Tables"/>
            </v-col>
            <v-col cols="12" align="end" class="pa-0">
              <full-image :d-lg-h-v=35 :d-md-h-v=45 :d-h-v=55 d-h-u="vw" class="anima-img567-h" src="../src/images/AnimaPage/tableWithChild.jpg" alt="Tables with child"/>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row class="ml-0 mr-0 mb-0 def-mar-top">
        <v-col cols="6" class="pa-0">
          <h1 class="h-neucha-regular">
            Материалы
          </h1>
          <p class="h-montserrat-regular red-line">
            Материалы, выбранные для проекта,<br>
            безопасны и экологичны. Valchromat,<br>
            используемый для изготовления сто-<br>
            лешницы и крыльев, давно применяют<br>
            в отделке детских игровых помещений,<br>
            так как он обладает повышенной влаго-<br>
            стойкостью, большой плотностью<br>
            и экологичностью. Подвижные части<br>
            столешницы с внешней стороны пок-<br>
            рыты мебельным линолеумом Forbo<br>
            Furniture, который прост в уходе и за-<br>
            щитит поверхность от влаги и краски.<br>
            Также столешница оснащена силико-<br>
            новыми выступами и накладками<br>
            из Valchromat, обеспечивающими бе-<br>
            зопасный зазор, который не позволит<br>
            малышу придавить себе пальцы. Под<br>
            органическое стекло можно подкла-<br>
            дывать шедевры юного творца, такая<br>
            визуализация рабочего процесса бла-<br>
            готворно повлияет на самооценку,<br>
            и, конечно, оргстекло отважно выдер-<br>
            жит испытания пластилином и клеем!
          </p>
        </v-col>
        <v-col cols="6" align="end" class="pa-0">
          <full-image :d-lg-h-v=35 :d-md-h-v=45 :d-h-v=55 d-h-u="vw" class="anima-img8-h" src="../src/images/AnimaPage/explosionDiagram.jpg" alt="Explosion diagram"/>
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
        wheel: true
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
      return {
        height: "19.145833333333332vw",
        marginRight: "25px",
      } 
    }
  }
}
</script>

<style scoped>

  .red-line {
    text-indent: 1.4vw;
  }

  .def-pad-top {
    padding-top: 9.572916666666666vw;
  }

  .def-mar-top {
    margin-top: 9.572916666666666vw;
  }

  p {
    font-size: 1.5vw;
  }

  h1 {
    font-size: 2.5vw;
  }
</style>

<style>

  .anima-img1-h {
    width: 35vw;
  }

  .anima-img2-img3-h {
    width: 35vw;
  }

  .anima-img4-h {
    width: 100%;
  }

  .anima-img567-h {
    width: 35vw;
  }

  .anima-img8-h {
    width: 35vw;
  }

</style>
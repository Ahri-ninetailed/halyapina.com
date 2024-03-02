<template>
  <project :header-text="$t('projects.duo')" :swiper-imgs="images" :background-img="this.background">
    <p class="h-montserrat-regular text-start p-project-size">
      <span v-if="$i18n.locale === 'ru'">
        <span v-if="this.$vuetify.display.smAndUp">
          Они созданы друг для друга. Его строгость<br>
          и геометричность, её плавность линий и кон-<br>
          траст холодного металла с мягкой солнечной<br>
          обивкой. Эта неповторимая парочка спроекти-<br>
          рована для людей, предпочитающих работать<br>
          на дому. Подобный комплект мебели поможет<br>
          организовать рабочее пространство не только<br>
          удобно, но и стильно.
        </span>
        <span v-else>
          Они созданы друг для друга. Его строгость и
          геометричность, её плавность линий и контраст
          холодного металла с мягкой солнечной обивкой.
          Эта неповторимая парочка спроектирована для людей,
          предпочитающих работать на дому. Подобный комплект
          мебели поможет организовать рабочее пространство не
          только удобно, но и стильно.
        </span>
      </span>
      <span lang="en" v-else>
        They are made for each other. Its rigor
        and geometricity, its smooth lines and
        the contrast of cold metal with soft
        sunny upholstery. This unique pair is
        designed for people who prefer to work
        from home. Such a set of furniture will help
        organize your workspace not only conveniently,
        but also stylishly.
      </span>
    </p>
  </project>
</template>

<script>
import Project from '@/components/Project.vue';
import background from '@/images/Projects/Duo/background.webp'

export default {
  name: 'DuoPage',
  components: {
    Project
  },
  data() {
    return {
      background: background,
      images: [
        { src: "Duo/Images/duo_chair_table.webp", srcZoom: "Duo/Images/duo_chair_table_zoom.webp", alt: "Duo chair and table" },
        { src: "Duo/Images/4chairs.webp", srcZoom: "Duo/Images/4chairs_zoom.webp", alt: "4 duo chairs" },
        { src: "Duo/Images/table_chair_human.webp", srcZoom: "Duo/Images/table_chair_human_zoom.webp", alt: "Duo chair and table with human" },
      ]
    }
  }
}
</script>

<style scoped>

</style>

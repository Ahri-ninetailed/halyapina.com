<template>
  <project :header-text="$t('projects.firefly')" :swiper-imgs="images" :background-img="this.background">
    <p class="h-montserrat-regular text-start p-project-size">
      <span v-if="$i18n.locale === 'ru'">
        <span v-if="this.$vuetify.display.smAndUp">
          Тёплый мягкий свет плавно рассеивается<br>
          в пространстве, проходя через полуматовое<br>
          стекло светильника «Firefly». Включение осу-<br>
          ществляется нажатием на «крылышки», кото-<br>
          рые раскрываются и активируют светильник,<br>
          механизм выключения аналогичен.
        </span>
        <span v-else>
          Тёплый мягкий свет плавно рассеивается в пространстве,
          проходя через полуматовое стекло светильника «Firefly».
          Включение осуществляется нажатием на «крылышки», которые
          раскрываются и активируют светильник, механизм выключения
          аналогичен. 
        </span>
      </span>
      <span lang="en" v-else>
        Warm, soft light gently diffuses through the
        semi-frosted glass of the "Firefly" lamp. It is
        turned on by pressing the "wings", which open up
        to activate the light; turning it off works the same way.
      </span>
    </p>
  </project>
</template>

<script>
import Project from '@/components/Project.vue';
import background from '@/images/Projects/Firefly/background.webp'

export default {
  name: 'FireflyPage',
  components: {
    Project
  },
  data() {
    return {
      background: background,
      images: [
        { src: "Firefly/Images/lamps_dark.webp", srcZoom: "Firefly/Images/lamps_dark_zoom.webp", alt: "Three firefly lamps in the dark" },
        { src: "Firefly/Images/lamps_opening.webp", srcZoom: "Firefly/Images/lamps_opening_zoom.webp", alt: "Opening the firefly lamp" },
        { src: "Firefly/Images/lamps_interior.webp", srcZoom: "Firefly/Images/lamps_interior_zoom.webp", alt: "Firefly lamps in the interior" },
      ]
    }
  }
}
</script>

<style scoped>

</style>

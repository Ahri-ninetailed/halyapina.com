<template>
  <project :header-text="$t('projects.dragonfly')" :swiper-imgs="images" :background-img="this.background">
    <p class="h-montserrat-regular text-start p-project-size">
      <span v-if="$i18n.locale === 'ru'">
        <span v-if="this.$vuetify.display.smAndUp">
          Насекомые всегда являлись отличным источ-<br>
          ником вдохновения. Строение их тела, столь<br>
          отличное от нашего, поражает воображение.<br>
          Конструкция светильников «Dragonfly» пред-<br>
          ставляет собой сочетание прозрачного стекла<br>
          во внешнем слое и матового внутри, первый<br>
          создаёт объёмные блики, а второй скрывает<br>
          техническую сторону проекта, крылышки вы-<br>
          полнены из металлической проволоки.<br>
        </span>
        <span v-else>
          Насекомые всегда являлись отличным источником вдохновения.
          Строение их тела, столь  отличное от нашего, поражает воображение.
          Конструкция светильников «Dragonfly» представляет собой
          сочетание прозрачного стекла во внешнем слое и матового
          внутри, первый создаёт объёмные блики, а второй скрывает
          техническую сторону проекта, крылышки выполнены из
          металлической проволоки. 
        </span>
      </span>
      <span v-else>
        Insects have always been a great source of inspiration.
        The structure of their body, so different from ours, is
        amazing. The design of the Dragonfly lamps is a combination
        of transparent glass in the outer layer and frosted glass
        inside, the first creates volumetric glare, and the second
        hides the technical side of the project, the wings are made
        of metal wire.
      </span>
    </p>
  </project>
</template>

<script>
import Project from '@/components/Project.vue';
import background from '@/images/Projects/Dragonfly/background.webp'

export default {
  name: 'DragonflyPage',
  components: {
    Project
  },
  data() {
    return {
      background: background,
      images: [
        { src: "Dragonfly/Images/lamp.webp", srcZoom: "Dragonfly/Images/lamp_zoom.webp", alt: "Dragonfly lamp" },
        { src: "Dragonfly/Images/lamp_dark.webp", srcZoom: "Dragonfly/Images/lamp_dark_zoom.webp", alt: "Dragonfly lamp in the dark" },
      ]
    }
  }
}
</script>

<style scoped>

</style>

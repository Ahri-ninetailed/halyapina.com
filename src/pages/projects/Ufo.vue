<template>
  <project :header-text="$t('projects.ufo')" :swiper-imgs="images" :background-img="this.background">
    <p class="h-montserrat-regular text-start p-project-size">
      <span v-if="$i18n.locale === 'ru'">
        <span v-if="this.$vuetify.display.smAndUp">
          Благодаря эргономике стола малыш с детства<br>
          будет приучаться к порядку и самоорганиза-<br>
          ции. Купол из органического стекла предназ-<br>
          начен для экспозиции наиболее любимых<br>
          игрушек, в органайзерах удобно хранить раз-<br>
          ную канцелярию, а в стул можно покидать ос-<br>
          тальное богатство.
        </span>
        <span v-else>
          Благодаря эргономике стола малыш с детства
          будет приучаться к порядку и самоорганизации.
          Купол из органического стекла предназначен для
          экспозиции наиболее любимых игрушек, в органайзерах
          удобно хранить разную канцелярию, а в стул можно
          покидать остальное богатство.
        </span>
      </span>
      <span lang="en" v-else>
        Thanks to the ergonomics of the table,
        the baby will learn order and self-organization
        from childhood. The plexiglass dome is designed
        to display your most favorite toys, the organizers
        are convenient for storing various office supplies,
        and the rest of your wealth can be stored in a chair.
      </span>
    </p>
  </project>
</template>

<script>
import Project from '@/components/Project.vue';
import background from '@/images/Projects/Ufo/background.webp'

export default {
  name: 'UfoPage',
  components: {
    Project
  },
  data() {
    return {
      background: background,
      images: [
        { src: "Ufo/Images/3_quarter_view.webp", srcZoom: "Ufo/Images/3_quarter_view_zoom.webp", alt: "3 quarter UFO table view" },
        { src: "Ufo/Images/removable_desk_storage_cover.webp", srcZoom: "Ufo/Images/removable_desk_storage_cover_zoom.webp", alt: "Removable desk storage cover" },
        { src: "Ufo/Images/child_with_table.webp", srcZoom: "Ufo/Images/child_with_table_zoom.webp", alt: "Child with UFO table" },
        { src: "Ufo/Images/storage_night_light.webp", srcZoom: "Ufo/Images/storage_night_light_zoom.webp", alt: "Storage-chair as a night light" },
      ]
    }
  }
}
</script>

<style scoped>

</style>

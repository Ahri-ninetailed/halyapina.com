<template>
  <project header-text="Crown bed" :swiper-imgs="images" background-img="../src/images/Projects/CrownBed/background.png">
    <p class="h-montserrat-regular text-start p-project-size">
      <span v-if="$i18n.locale === 'ru'">
        Коллекция кроватей «Crown bed» создаст в вашей<br>
        квартире атмосферу единения с природой. Уни-<br>
        версальное для всех моделей изголовье упростит<br>
        производство, а вы сможете побаловать себя лю-<br>
        бым вариантом «кроны»!
      </span>
      <span v-else>
        The Crown bed collection will create an atmosphere of unity with nature in your apartment. 
        A headboard that is universal for all models will simplify production, and you can pamper yourself with any “crown” option!
      </span>
    </p>
  </project>
</template>

<script>
import Project from '@/components/Project.vue';

export default {
  name: 'CrownBed',
  components: {
    Project
  },
  data() {
    return {
      images: [
        { src: "../src/images/Projects/CrownBed/Images/bed1.jpg", alt: "Bed1" },
        { src: "../src/images/Projects/CrownBed/Images/bed3.jpg", alt: "Bed3" },
        { src: "../src/images/Projects/CrownBed/Images/bed2.jpg", alt: "Bed2" },
        { src: "../src/images/Projects/CrownBed/Images/beds.jpg", alt: "Three beds" },
        { src: "../src/images/Projects/CrownBed/Images/child_bed.jpg", alt: "Bed for child" },
      ]
    }
  }
}
</script>

<style scoped>

</style>

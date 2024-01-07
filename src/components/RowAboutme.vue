<template>
  <v-row 
    class="fill-height ma-0" 
    :style="this.$vuetify.display.sm || this.$vuetify.display.md ? 'width: 100%;' : ''"
  >
    <v-col cols="12" class="pa-0">
      <v-row class="fill-height margin" :style="this.$props.style">
        <slot></slot>
      </v-row>
    </v-col>
    
  </v-row>
</template>

<script>
export default {
  name: 'RowAboutme',
  props: {
    style: {
      type: Object,
      required: false,
    },
  },
}
</script>

<style scoped>
  .margin {
    margin-left: 6vw;
    margin-right: 6vw;
    margin-bottom: 0vh;
    margin-top: 0vh;
  }
</style>

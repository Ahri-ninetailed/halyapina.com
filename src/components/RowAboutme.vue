<template>
  <v-row 
    :class="fillHeight"
    class="ma-0" 
  >
    <v-col cols="12" class="pa-0">
      <v-row :class="fillHeight" class="margin" :style="this.$props.style">
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
  computed: {
    fillHeight() {
      if (this.$vuetify.display.smAndUp) {
        return "fill-height";
      } else {
        return "";
      }
    }
  }
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

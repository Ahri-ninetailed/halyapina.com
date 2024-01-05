<template>
  <div>
    <img 
      :src="this.$props.src" 
      :style="this.$props.style" 
      :alt="this.$props.alt"
      @click="openImage"
    />
    <v-dialog v-model="dialog" :max-width="dialogMaxWidth">
      <img :src="this.$props.src" :style="dialogHeight" style="object-fit: contain;" :alt="this.$props.alt"/>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'FullImage',
  data() {
    return {
      dialog: false,
    }
  },
  props: {
    src: {
      type: String,
      required: true,
    },
    style: {
      type: Object,
      required: false,
    },
    alt: {
      type: String,
      required: false,
      default: '',
    },
    dialogHeightValue: {
      type: Number,
      required: false,
      default: 66,
    },
    dialogHeightUnit: {
      type: String,
      required: false,
      default: 'vh',
    },
  },
  methods: {
    openImage() {
      this.dialog = true;
    },
    getImageWidth() {
      const img = new Image();
      img.src = this.$props.src;
      return (this.dialogHeightValue * img.width) / img.height;
    },
  },
  computed: {
    dialogMaxWidth() {
      return `${this.getImageWidth()}${this.dialogHeightUnit}`;
    },
    dialogHeight() {
      return {
        height: `${this.dialogHeightValue}${this.dialogHeightUnit}`
      };
    },
  }
}

</script>

<style scoped>
/* Your component's CSS styles go here */
</style>

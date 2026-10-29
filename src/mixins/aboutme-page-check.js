export default {
    computed: {
      isAboutPage() {
        return this.$route.path === '/aboutme';
      },
    },
  };
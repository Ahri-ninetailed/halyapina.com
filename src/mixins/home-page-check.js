export default {
    computed: {
      isHomePage() {
        return this.$route.path === '/';
      },
    },
  };
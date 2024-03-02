export default {
    computed: {
      isAboutPage() {
        return window.location.pathname === '/aboutme';
      },
    },
  };
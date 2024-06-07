<template>
  <nav-heder />
  <router-view />
  <infor-footer-section />
</template>

<script>
import InforFooterSection from "./components/InforFooterSection.vue";
import NavHeder from "./components/NavHeder.vue";

export default {
  name: "App",
  header() {
    return {
      title: import.meta.env.VITE_APP_TITLE,
    };
  },
  components: {
    NavHeder,
    InforFooterSection,
  },
};
</script>

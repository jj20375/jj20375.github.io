<template>
  <div id="app">
    <Content/>
  </div>
</template>
<script>
import Content from "./views/layout/Content.vue";
import "./plugins/fontawesome";
import Vue from "vue";
import owlCarousel from "vue-owl-carousel2";
Vue.component("owl-carousel", owlCarousel);

export default {
  components: {
    Content
  }
}
</script>

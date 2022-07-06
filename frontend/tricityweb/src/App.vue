<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {},
  metaInfo() {
    return {
      title: this.title,
    };
  },
  data() {
    return {
      name: "",
      title: null,
    };
  },

};
</script>

<style>
</style>
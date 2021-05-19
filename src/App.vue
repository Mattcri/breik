<template>
  <div id="app">
    <TheNavBar />
    <router-view class="p-6 md:p-8 lg:px-16" />
  </div>
</template>

<script>
import TheNavBar from './components/TheNavBar.vue';
import { mapState, mapActions } from 'vuex';

export default {
  components: {
    TheNavBar,
  },
  computed: {
    ...mapState(['locations']),
  },
  methods: {
    ...mapActions(['getLocations']),
  },
  created() {
    this.getLocations();
  },
};
</script>

<style>
#app {
  color: #0d1422;
}
</style>

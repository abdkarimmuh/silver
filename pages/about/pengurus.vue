<template>
  <div>
    <pengurus-about-screen />
  </div>
</template>

<script>
import PengurusAboutScreen from '~/containers/about/Pengurus.vue'
export default {
  name: 'PengurusAboutPages',
  components: { PengurusAboutScreen },
  layout: 'about',
  mounted() {
    this.$store.commit('ui/setActiveMenu', 'about')
  },
}
</script>

<style scoped></style>

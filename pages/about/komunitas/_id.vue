<template>
  <div>
    <detail-komunitas-about-screen />
  </div>
</template>

<script>
import DetailKomunitasAboutScreen from '~/containers/about/DetailKomunitas.vue'
export default {
  name: 'DetailKomunitasAboutPages',
  components: { DetailKomunitasAboutScreen },
  layout: 'about',
  mounted() {
    this.$store.commit('ui/setActiveMenu', 'about')
  },
}
</script>

<style scoped></style>

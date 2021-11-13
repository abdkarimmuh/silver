<template>
  <div>
    <komunitas-about-screen />
  </div>
</template>

<script>
import KomunitasAboutScreen from '~/containers/about/Komunitas.vue'
export default {
  name: 'KomunitasAboutPages',
  components: { KomunitasAboutScreen },
  layout: 'about',
  mounted() {
    this.$store.commit('ui/setActiveMenu', 'about')
  },
}
</script>

<style scoped></style>

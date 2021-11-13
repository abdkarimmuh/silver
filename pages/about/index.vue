<template>
  <div>
    <about-screen />
  </div>
</template>

<script>
import AboutScreen from '~/containers/about'
export default {
  name: 'AboutPages',
  components: { AboutScreen },
  layout: 'about',
  mounted() {
    this.$store.commit('ui/setActiveMenu', 'about')
  },
}
</script>

<style scoped></style>

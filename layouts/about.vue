<template>
  <div id="app">
    <header-layout />
    <nuxt />
    <footer-layout />
  </div>
</template>

<script>
import HeaderLayout from '~/components/layouts/HeaderAbout.vue'
import FooterLayout from '~/components/layouts/Footer'

export default {
  name: 'LandingLayout',
  components: { HeaderLayout, FooterLayout },
}
</script>

<style scoped></style>

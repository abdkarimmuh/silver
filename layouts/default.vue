<template>
  <div id="app">
    <header-layout />
    <nuxt />
    <footer-layout />
  </div>
</template>

<script>
import HeaderLayout from '~/components/layouts/Header'
import FooterLayout from '~/components/layouts/Footer'

export default {
  name: 'DefaultLayout',
  components: { HeaderLayout, FooterLayout },
}
</script>

<style scoped></style>

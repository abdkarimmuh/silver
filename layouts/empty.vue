<template>
  <div id="app" class="login-page">
    <header-layout />
    <nuxt />
    <footer-layout />
  </div>
</template>

<script>
import HeaderLayout from '~/components/layouts/HeaderEmpty.vue'
import FooterLayout from '~/components/layouts/FooterEmpty.vue'

export default {
  name: 'EmptyLayout',
  components: { HeaderLayout, FooterLayout },
}
</script>

<style scoped></style>

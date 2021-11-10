<template>
  <div id="app">
    <header-layout />
    <div class="container mt-5">
      <breadcumb-components />
    </div>
    <nuxt />
    <footer-layout />
  </div>
</template>

<script>
import HeaderLayout from '~/components/layouts/Header'
import FooterLayout from '~/components/layouts/Footer'
import BreadcumbComponents from '~/components/Breadcrumb.vue'

export default {
  name: 'DefaultLayout',
  components: { HeaderLayout, FooterLayout, BreadcumbComponents },
}
</script>

<style scoped></style>

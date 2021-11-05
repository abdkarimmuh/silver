<template>
  <div id="app">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/layouts/landing/Header'
import Footer from '~/components/layouts/landing/Footer'

export default {
  components: {
    Header,
    Footer,
  },
}
</script>

<style scoped></style>

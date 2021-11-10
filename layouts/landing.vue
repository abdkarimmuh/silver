<template>
  <div id="app">
    <header-layout v-if="!isLoading" />
    <nuxt />
    <footer-layout v-if="!isLoading" />
  </div>
</template>

<script>
import HeaderLayout from '~/components/layouts/HeaderLanding'
import FooterLayout from '~/components/layouts/Footer'

export default {
  name: 'LandingLayout',
  components: { HeaderLayout, FooterLayout },
  computed: {
    isLoading() {
      return this.$store.getters['ui/getIsLoading']
    },
  },
}
</script>

<style scoped></style>

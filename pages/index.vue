<template>
  <div>
    <loading-screen v-if="isLoading" />
    <landing-screen v-else />
  </div>
</template>

<script>
import LandingScreen from '~/containers/landing'
import LoadingScreen from '~/components/layouts/Loading.vue'

export default {
  name: 'LandingPages',
  components: { LandingScreen, LoadingScreen },
  layout: 'landing',
  computed: {
    isLoading() {
      return this.$store.getters['ui/getIsLoading']
    },
  },
  async mounted() {
    await this.callServices()
  },
  methods: {
    async callServices() {
      this.$store.dispatch('ui/showLoading')
      await this.$store.dispatch('landing/getAllDataLanding')
      this.$store.dispatch('ui/hideLoading')
    },
  },
}
</script>

<style scoped></style>

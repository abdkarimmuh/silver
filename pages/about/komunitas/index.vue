<template>
  <div>
    <loading-components v-if="isFetch" />
    <komunitas-about-screen v-else />
  </div>
</template>

<script>
import KomunitasAboutScreen from '~/containers/about/Komunitas.vue'
import LoadingComponents from '~/components/Loading.vue'

export default {
  name: 'KomunitasAboutPages',
  components: { KomunitasAboutScreen, LoadingComponents },
  layout: 'about',
  data() {
    return {
      isFetch: false,
    }
  },
  created() {
    this.$store.commit('ui/setActiveMenu', 'about')
    this.$store.commit('ui/setTitleAbout', 'Komunitas')
  },
  async mounted() {
    this.isFetch = true
    await this.$store.dispatch('about/getCommunity')
    this.isFetch = false
  },
}
</script>

<style scoped></style>

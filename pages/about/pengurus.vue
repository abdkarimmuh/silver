<template>
  <div>
    <loading-components v-if="isFetch" />
    <pengurus-about-screen v-else />
  </div>
</template>

<script>
import PengurusAboutScreen from '~/containers/about/Pengurus.vue'
import LoadingComponents from '~/components/Loading.vue'

export default {
  name: 'PengurusAboutPages',
  components: { PengurusAboutScreen, LoadingComponents },
  layout: 'about',
  data() {
    return {
      isFetch: false,
    }
  },
  created() {
    this.$store.commit('ui/setActiveMenu', 'about')
    this.$store.commit('ui/setTitleAbout', 'Pengurus Silver')
  },
  async mounted() {
    this.isFetch = true
    await this.$store.dispatch('about/getOrganizer')
    this.isFetch = false
  },
}
</script>

<style scoped></style>

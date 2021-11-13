<template>
  <div>
    <loading-components v-if="isFetch" />
    <about-screen v-else />
  </div>
</template>

<script>
import AboutScreen from '~/containers/about'
import LoadingComponents from '~/components/Loading.vue'

export default {
  name: 'AboutPages',
  components: { AboutScreen, LoadingComponents },
  layout: 'about',
  data() {
    return {
      isFetch: false,
    }
  },
  created() {
    this.$store.commit('ui/setActiveMenu', 'about')
    this.$store.commit('ui/setTitleAbout', 'Tentang Silver')
  },
  async mounted() {
    this.isFetch = true
    await this.$store.dispatch('about/getAbout')
    await this.$store.dispatch('about/getCommunity')
    this.isFetch = false
  },
}
</script>

<style scoped></style>

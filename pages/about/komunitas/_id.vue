<template>
  <div>
    <loading-components v-if="isFetch" />
    <detail-komunitas-about-screen v-else />
  </div>
</template>

<script>
import utils from '~/utils'
import DetailKomunitasAboutScreen from '~/containers/about/DetailKomunitas.vue'
import LoadingComponents from '~/components/Loading.vue'

export default {
  name: 'DetailKomunitasAboutPages',
  components: { DetailKomunitasAboutScreen, LoadingComponents },
  layout: 'about',
  data() {
    return {
      isFetch: false,
    }
  },
  computed: {
    params() {
      return this.$route.params.id
    },
  },
  created() {
    this.$store.commit('ui/setActiveMenu', 'about')
    this.$store.commit(
      'ui/setTitleAbout',
      utils.firstWordUppercase(this.params)
    )
  },
  async mounted() {
    this.isFetch = true
    await this.$store.dispatch('about/getCommunityDetail', this.params)
    this.isFetch = false
  },
}
</script>

<style scoped></style>

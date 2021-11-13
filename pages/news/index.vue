<template>
  <div>
    <news-screen />
  </div>
</template>

<script>
import NewsScreen from '~/containers/news'
export default {
  name: 'NewsPages',
  components: { NewsScreen },
  mounted() {
    this.$store.commit('ui/setActiveMenu', 'news')
  },
}
</script>

<style scoped></style>

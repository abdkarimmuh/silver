<template>
  <div>
    <list-news-screen />
  </div>
</template>

<script>
import ListNewsScreen from '~/containers/news/list.vue'
export default {
  name: 'ArtScienceNewsPages',
  components: { ListNewsScreen },
  layout: 'default',
}
</script>

<style scoped></style>

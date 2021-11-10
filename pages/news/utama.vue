<template>
  <div>
    <list-news-screen />
  </div>
</template>

<script>
import ListNewsScreen from '~/containers/news/list.vue'
export default {
  name: 'UtamaNewsPages',
  components: { ListNewsScreen },
  layout: 'default',
}
</script>

<style scoped></style>

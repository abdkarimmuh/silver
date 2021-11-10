<template>
  <div>
    <detail-news-screen />
  </div>
</template>

<script>
import DetailNewsScreen from '~/containers/news/detail.vue'
export default {
  name: 'DetailNewsPages',
  components: { DetailNewsScreen },
  layout: 'default',
}
</script>

<style scoped></style>

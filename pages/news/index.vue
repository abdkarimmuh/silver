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
  layout: 'default',
}
</script>

<style scoped></style>

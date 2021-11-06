<template>
  <div>
    <blog-detail-screen />
  </div>
</template>

<script>
import BlogDetailScreen from '~/containers/blog/detail.vue'
export default {
  name: 'DetailBlogPages',
  components: { BlogDetailScreen },
  layout: 'default',
}
</script>

<style scoped></style>

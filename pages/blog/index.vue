<template>
  <div>
    <blog-screen />
  </div>
</template>

<script>
import BlogScreen from '~/containers/blog/index.vue'
export default {
  name: 'BlogPages',
  components: { BlogScreen },
  layout: 'default',
}
</script>

<style scoped></style>

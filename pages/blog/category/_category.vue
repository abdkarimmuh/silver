<template>
  <div>
    <blog-screen
      :title="title"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
    />
  </div>
</template>

<script>
import BlogScreen from '~/containers/blog/index.vue'
export default {
  name: 'BlogPages',
  components: { BlogScreen },
  layout: 'default',
  computed: {
    title() {
      return 'Category ' + this.$route.params.category
    },
  },
}
</script>

<style scoped></style>

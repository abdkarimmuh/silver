<template>
  <section class="miri-ui-kit-section">
    <div class="container">
      <div class="row">
        <div class="col-md-9">
          <blog-detail-screen />
        </div>
        <div class="col-md-3">
          <sidebar-component />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import BlogDetailScreen from '~/containers/blog/detail.vue'
import SidebarComponent from '~/containers/blog/components/Sidebar.vue'

export default {
  name: 'DetailBlogPages',
  components: { BlogDetailScreen, SidebarComponent },
}
</script>

<style scoped></style>

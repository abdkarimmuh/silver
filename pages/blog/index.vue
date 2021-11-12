<template>
  <section class="miri-ui-kit-section">
    <div class="container">
      <div class="row">
        <div class="col-md-9">
          <blog-screen />
        </div>
        <div class="col-md-3">
          <sidebar-component />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BlogScreen from '~/containers/blog'
import SidebarComponent from '~/containers/blog/components/Sidebar.vue'

export default {
  name: 'BlogPages',
  components: { BlogScreen, SidebarComponent },
}
</script>

<style scoped></style>

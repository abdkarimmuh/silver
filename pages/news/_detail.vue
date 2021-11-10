<template>
  <section class="miri-ui-kit-section">
    <div class="container">
      <div class="row">
        <div class="col-md-9">
          <news-detail-screen />
        </div>
        <div class="col-md-3">
          <sidebar-component />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import NewsDetailScreen from '~/containers/news/detail.vue'
import SidebarComponent from '~/containers/news/components/Sidebar.vue'

export default {
  name: 'DetailNewsPages',
  components: { NewsDetailScreen, SidebarComponent },
  layout: 'default',
}
</script>

<style scoped></style>

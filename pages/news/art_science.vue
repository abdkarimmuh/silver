<template>
  <section class="miri-ui-kit-section">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <list-news-screen title="Art & Science" />
        </div>
        <div class="col-md-4">
          <sidebar-component type="art_science" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ListNewsScreen from '~/containers/news/list.vue'
import SidebarComponent from '~/containers/news/components/SidebarList.vue'

export default {
  name: 'ArtScienceNewsPages',
  components: { ListNewsScreen, SidebarComponent },
}
</script>

<style scoped></style>

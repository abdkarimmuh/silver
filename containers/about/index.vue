<template>
  <section class="miri-ui-kit-section">
    <div class="container">
      <p>{{ about }}</p>
    </div>
    <div class="container mt-5 pb-5">
      <h3 class="mb-4 text-primary">Sejarah Silver</h3>
      <div v-html="history"></div>
    </div>
    <div class="container mt-5 pb-5">
      <h3 class="mb-4 text-primary text-center">Visi</h3>
      <p class="text-center font-italic">{{ vission }}</p>
      <h3 class="mb-4 text-primary text-center mt-5">Misi</h3>
      <div class="text-center" v-html="mission">{{ mission }}</div>
    </div>
    <div class="container mt-5">
      <h3 class="text-primary">Komunitas</h3>
      <div class="row justify-content-between">
        <div v-for="(item, index) in community" :key="index" class="col-md-6">
          <community-components
            :title="item.name"
            :desc="item.desc"
            :image-src="item.imageUrl"
            :slug="item.slug"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CommunityComponents from '~/components/Community.vue'

export default {
  name: 'AboutContainers',
  components: { CommunityComponents },
  computed: {
    about() {
      return this.$store.getters['about/getAbout']
    },
    history() {
      return this.$store.getters['about/getHistory']
    },
    vission() {
      return this.$store.getters['about/getVission']
    },
    mission() {
      return this.$store.getters['about/getMission']
    },
    community() {
      return this.$store.getters['about/getCommunity']
    },
  },
}
</script>

<style></style>

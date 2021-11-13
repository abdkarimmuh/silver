<template>
  <section class="miri-ui-kit-section">
    <div class="container">
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
  name: 'KomunitasContainers',
  components: { CommunityComponents },
  computed: {
    community() {
      return this.$store.getters['about/getCommunity']
    },
  },
}
</script>

<style></style>

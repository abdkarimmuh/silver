<template>
  <section class="miri-ui-kit-section">
    <div class="container">
      <div class="row justify-content-between">
        <div
          v-for="(item, index) in dataCommunity"
          :key="index"
          class="col-md-6"
        >
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
  name: 'CommunityLandingContainers',
  components: { CommunityComponents },
  computed: {
    dataCommunity() {
      return this.$store.getters['landing/getCommunity']
    },
  },
}
</script>

<style></style>

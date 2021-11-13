<template>
  <section class="miri-ui-kit-section">
    <div v-for="(value, name) in organizer" :key="name" class="container my-5">
      <h3 class="pb-3 text-center">{{ name }}</h3>
      <div class="row">
        <div v-for="(item, index) in value" :key="index" class="col-md-4">
          <organizer-components
            :name="item.name"
            :position="item.position"
            :motivation="item.motivation"
            :image-url="item.imageUrl"
            :facebook="item.facebook"
            :twitter="item.twitter"
            :instagram="item.instagram"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import OrganizerComponents from '~/components/Organizer.vue'

export default {
  name: 'PengurusContainers',
  components: { OrganizerComponents },
  computed: {
    organizer() {
      return this.$store.getters['about/getOrganizer']
    },
  },
}
</script>

<style></style>

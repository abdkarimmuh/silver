<template>
  <section class="miri-ui-kit-section">
    <div class="container">
      <div class="row">
        <div class="col-md-6 d-flex flex-column justify-content-center">
          <h6 class="text-warning mb-2">Tentang Silver</h6>
          <h2 class="h1 font-weight-semibold mb-4">Kenali kami lebih dekat.</h2>
          <p class="mb-5">
            {{ descAbout }}
          </p>
          <p>
            <button class="btn btn-primary" @click="$router.push('/about')">
              Selengkapnya
            </button>
          </p>
        </div>
        <div class="col-md-1"></div>
        <youtube
          nocookie
          class="col-md-5"
          :video-id="videoId"
          :player-vars="playerVars"
          @playing="playing"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { Youtube, getIdFromUrl } from 'vue-youtube'

export default {
  name: 'AboutLandingContainers',
  components: { Youtube },
  data() {
    return {
      playerVars: {
        autoplay: 0,
      },
    }
  },
  computed: {
    descAbout() {
      return this.$store.getters['landing/getAbout']
    },
    videoId() {
      return getIdFromUrl(
        'https://www.youtube.com/watch?v=8iuLXODzL04&ab_channel=Ayase%2FYOASOBI'
      )
    },
  },
  methods: {
    playing() {
      console.debug('we are watching!!!')
    },
  },
}
</script>

<style></style>

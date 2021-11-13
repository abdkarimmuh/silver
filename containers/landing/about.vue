<template>
  <section class="miri-ui-kit-section">
    <div class="container">
      <div class="row align-items-center">
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
          v-if="videoId"
          nocookie
          class="col-md-5"
          :video-id="videoId"
          :player-vars="playerVars"
          @playing="playing"
        />
        <div v-else class="col-md-5">
          <img src="~/assets/images/logo.svg" class="logo-about" alt="logo" />
        </div>
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
      return getIdFromUrl(this.$store.getters['about/getYoutubeUrl'])
    },
  },
  methods: {
    playing() {},
  },
}
</script>

<style scoped>
.logo-about {
  padding: 24px;
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>

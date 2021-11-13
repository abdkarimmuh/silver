<template>
  <section class="miri-ui-kit-section pb-0">
    <div class="container">
      <h2 class="text-center">Testimoni</h2>
      <p class="mb-4 text-center">Apa kata mereka tentang kami</p>
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="bd-example px-3">
            <div
              id="carouselTestimonialCaptions"
              class="carousel slide"
              data-ride="carousel"
            >
              <div class="carousel-inner px-5">
                <div
                  v-for="(item, index) in testimonial"
                  :key="index"
                  :class="['carousel-item', index === 0 ? 'active' : '']"
                >
                  <div class="card border-0">
                    <div class="card-body text-center">
                      <figure class="d-inline-block">
                        <img
                          :src="item.photoUrl"
                          class="rounded-circle custom-image-testimonial"
                        />
                      </figure>
                      <h5 class="card-title mb-0">{{ item.name }}</h5>
                      <p class="font-weight-medium designation">
                        {{ item.title }}
                      </p>
                      <p class="font-italic">
                        {{ item.testimonial }}
                      </p>
                      <p class="social-links">
                        <a
                          v-if="item.facebook"
                          href=""
                          class="icon-fb"
                          @click.prevent="window.open(item.facebook)"
                        >
                          <i class="mdi mdi-facebook-box"></i>
                        </a>
                        <a
                          v-if="item.twitter"
                          href=""
                          class="icon-twitter"
                          @click.prevent="window.open(item.twitter)"
                        >
                          <i class="mdi mdi-twitter-box"></i>
                        </a>
                        <a
                          v-if="item.instagram"
                          href=""
                          class="icon-insta"
                          @click.prevent="window.open(item.instagram)"
                        >
                          <i class="mdi mdi-instagram"></i>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselTestimonialCaptions"
                role="button"
                data-slide="prev"
              >
                <i class="mdi mdi-chevron-left"></i>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselTestimonialCaptions"
                role="button"
                data-slide="next"
              >
                <i class="mdi mdi-chevron-right"></i>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TestimonialLandingContainers',
  computed: {
    testimonial() {
      return this.$store.getters['landing/getTestimonial']
    },
  },
}
</script>

<style scoped>
.social-links {
  font-size: 24px;
  margin-right: 6px;
}
.custom-image-testimonial {
  height: 180px;
  width: 180px;
  object-fit: cover;
}
</style>

<template>
  <section class="miri-ui-kit-section">
    <div class="container">
      <div class="container">
        <section class="profile-header text-center">
          <div>
            <img
              :src="imageUrl"
              :alt="slug"
              class="img-rounded image-community mb-4"
            />
          </div>
          <h4>{{ name }}</h4>
          <p class="profile-intro">{{ desc }}</p>
        </section>
        <section class="profile-details mb-4 pb-4">
          <h5 class="mb-4">Pengurus</h5>
          <div class="row">
            <div
              v-for="(item, index) in organizer"
              :key="index"
              class="col-md-4"
            >
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
          <h5 class="mb-4 mt-5">Kegiatan</h5>
          <div class="row">
            <div class="col-md-6">
              <div class="row px-3 mb-4">
                <img
                  src="~/assets/images/img_1.jpg"
                  class="custom-image-news"
                />
                <div class="col">
                  <a href="#" style="text-decoration: none">
                    <h6 class="text-dark">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut. 1
                    </h6>
                  </a>
                  <div class="text-muted mb-2">19 September 2021</div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row px-3 mb-4">
                <img
                  src="~/assets/images/img_2.jpg"
                  class="custom-image-news"
                />
                <div class="col">
                  <a href="#" style="text-decoration: none">
                    <h6 class="text-dark">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut. 2
                    </h6>
                  </a>
                  <div class="text-muted mb-2">19 September 2021</div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row px-3 mb-4">
                <img
                  src="~/assets/images/img_3.jpg"
                  class="custom-image-news"
                />
                <div class="col">
                  <a href="#" style="text-decoration: none">
                    <h6 class="text-dark">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut. 3
                    </h6>
                  </a>
                  <div class="text-muted mb-2">19 September 2021</div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row px-3 mb-4">
                <img
                  src="~/assets/images/img_3.jpg"
                  class="custom-image-news"
                />
                <div class="col">
                  <a href="#" style="text-decoration: none">
                    <h6 class="text-dark">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut. 3
                    </h6>
                  </a>
                  <div class="text-muted mb-2">19 September 2021</div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-5 row justify-content-center">
            <button
              class="btn btn-sm btn-soft-primary px-5"
              @click="$router.push('/news')"
            >
              Lihat semua berita
            </button>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
import OrganizerComponents from '~/components/Organizer.vue'

export default {
  name: 'DetailKomunitasAboutScreen',
  components: { OrganizerComponents },
  computed: {
    community() {
      return this.$store.getters['about/getCommunityDetail']
    },
    name() {
      return this.community.name ? this.community.name : ''
    },
    desc() {
      return this.community.desc ? this.community.desc : ''
    },
    imageUrl() {
      return this.community.imageUrl ? this.community.imageUrl : ''
    },
    slug() {
      return this.community.slug ? this.community.slug : ''
    },
    organizer() {
      return this.community.organizer ? this.community.organizer : []
    },
  },
}
</script>

<style scoped>
.image-community {
  width: 160px;
  height: 160px;
  object-fit: cover;
}

.image-organizer {
  width: 100px;
  height: 100px;
  object-fit: cover;
}

.custom-image-news {
  width: 100px;
  height: 100px;
  object-fit: cover;
}
</style>

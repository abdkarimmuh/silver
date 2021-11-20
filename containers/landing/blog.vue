<template>
  <section class="miri-ui-kit-section">
    <div class="container">
      <div class="row align-items-center mb-4">
        <div class="col-md-8">
          <h2>Blog</h2>
          <p>Bacalah karya tulis dari kami</p>
        </div>
        <div class="col-md-4 text-right-responsive">
          <button class="btn btn-sm btn-primary" @click="$router.push('/blog')">
            Lihat semua blog
          </button>
        </div>
      </div>
      <div class="row">
        <div v-for="item in blogList" :key="item.id" class="col-md-4">
          <div class="card border-0">
            <img :src="item.imageUrl" class="custom-image-blog" />
            <div class="card-body px-0">
              <h5 class="card-title mb-0">{{ item.title }}</h5>
              <div class="font-weight-medium text-primary pt-1 pb-2">
                {{ item.authorName }}
              </div>
              <p>{{ item.content }}</p>
              <button
                class="btn btn-sm btn-soft-primary"
                @click.prevent="$router.push('/blog/' + item.id)"
              >
                Selengkapnya
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BlogLandingContainers',
  computed: {
    blogList() {
      const blogList = this.$store.getters['blog/getBlogList']
      return blogList.slice(0, 3)
    },
  },
}
</script>

<style scoped>
.custom-image-blog {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.text-right-responsive {
  text-align: right !important;
}

@media (max-width: 768px) {
  .text-right-responsive {
    text-align: left !important;
  }
}
</style>

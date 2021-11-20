<template>
  <div>
    <loading-components v-if="isFetch" />
    <div v-else>
      <img :src="detailBlog.imageUrl" class="custom-image-blog" />
      <h2 class="mt-5 mb-3">{{ detailBlog.title }}</h2>
      <p v-html="detailBlog.content" />
      <div class="miri-ui-kit-demo mt-4">
        <span
          v-for="(item, index) in detailBlog.category"
          :key="index"
          class="badge badge-pill badge-warning"
        >
          {{ item }}
        </span>
      </div>
      <div class="row align-items-center px-3 mt-5">
        <span class="author-pic">
          <img :src="detailBlog.authorImageUrl" class="custom-image-author" />
        </span>
        <div class="author-details">
          <div class="author-name">{{ detailBlog.authorName }}</div>
          <div class="author-time">
            Publikasi pada {{ detailBlog.postedDate }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoadingComponents from '~/components/Loading.vue'

export default {
  name: 'DetailBlogContainers',
  components: { LoadingComponents },
  data() {
    return {
      isFetch: false,
    }
  },
  computed: {
    detailBlog() {
      return this.$store.getters['blog/getDetailBlog']
    },
  },
  async mounted() {
    await this.getBlogDetail()
  },
  methods: {
    async getBlogDetail() {
      this.isFetch = true
      const id = this.$route.params.id
      await this.$store.dispatch('blog/getBlogDetail', id)
      this.isFetch = false
    },
  },
}
</script>

<style scoped>
.custom-image-blog {
  width: 100%;
  height: auto;
  max-height: 320px;
  object-fit: cover;
}
</style>

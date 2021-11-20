<template>
  <div>
    <div class="row">
      <loading-components v-if="isFetch" />
      <div v-for="item in blogList" v-else :key="item.id" class="col-md-6 mb-5">
        <div class="card border-0">
          <img :src="item.imageUrl" class="custom-image-blog" />
          <div class="card-body px-0">
            <h5 class="card-title mb-0">{{ item.title }}</h5>
            <div class="font-weight-medium text-primary pt-1 pb-2">
              {{ item.authorName }}
            </div>
            <p>{{ item.content }}</p>
            <a href="" class="text-muted" @click.prevent="detail(item.id)">
              Selengkapnya
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <pagination-components
        :max-page="maxPage"
        :active-page="activePage"
        :disabled-prev="disabledPrev"
        :disabled-next="disabledNext"
        @changePaginate="getBlogList"
      />
    </div>
  </div>
</template>

<script>
import PaginationComponents from '~/components/Pagination.vue'
import LoadingComponents from '~/components/Loading.vue'

export default {
  name: 'BlogContainers',
  components: { PaginationComponents, LoadingComponents },
  props: { category: { type: String, default: '' } },
  data() {
    return {
      isFetch: false,
    }
  },
  computed: {
    maxPage() {
      return this.$store.getters['blog/getMaxPage']
    },
    activePage() {
      return this.$store.getters['blog/getPage']
    },
    disabledPrev() {
      return this.$store.getters['blog/disabledPrev']
    },
    disabledNext() {
      return this.$store.getters['blog/disabledNext']
    },
    blogList() {
      return this.$store.getters['blog/getBlogList']
    },
  },
  async mounted() {
    await this.getBlogList(1)
  },
  methods: {
    async getBlogList(page) {
      this.isFetch = true
      await this.$store.dispatch('blog/getBlogList', {
        category: this.category,
        page,
      })
      this.isFetch = false
    },
    detail(id) {
      this.$router.push('/blog/' + id)
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

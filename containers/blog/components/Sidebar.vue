<template>
  <div>
    <div class="border-bottom mb-4">
      <h6 class="text-primary">Berita Terbaru</h6>
    </div>
    <div class="row px-3 mb-3">
      <img src="~/assets/images/img_1.jpg" class="custom-image-news" />
      <div class="col">
        <a
          href=""
          style="text-decoration: none"
          @click.prevent="$router.push('/news/1')"
        >
          <div class="text-dark font-weight-bold mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </div>
        </a>
        <div class="text-muted mb-2">19 September 2021</div>
      </div>
    </div>
    <div class="row px-3 mb-3">
      <img src="~/assets/images/img_2.jpg" class="custom-image-news" />
      <div class="col">
        <a
          href=""
          style="text-decoration: none"
          @click.prevent="$router.push('/news/1')"
        >
          <div class="text-dark font-weight-bold mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </div>
        </a>
        <div class="text-muted mb-2">19 September 2021</div>
      </div>
    </div>
    <div class="row px-3 mb-3">
      <img src="~/assets/images/img_3.jpg" class="custom-image-news" />
      <div class="col">
        <a
          href=""
          style="text-decoration: none"
          @click.prevent="$router.push('/news/1')"
        >
          <div class="text-dark font-weight-bold mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </div>
        </a>
        <div class="text-muted mb-2">19 September 2021</div>
      </div>
    </div>

    <div class="border-bottom mt-5 mb-3">
      <h6 class="text-primary">Kategori</h6>
    </div>
    <ul class="px-3">
      <li v-for="item in categoryList" :key="item.slug" class="mb-1">
        <a
          href=""
          class="url-text"
          @click.prevent="$router.push('/blog/category/' + item.slug)"
          >{{ item.name }}</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SideContentBlogComponents',
  computed: {
    categoryList() {
      return this.$store.getters['blog/getCategoryList']
    },
  },
  async mounted() {
    await this.getCategoryList()
  },
  methods: {
    async getCategoryList() {
      await this.$store.dispatch('blog/getCategoryList')
    },
  },
}
</script>

<style scoped>
.custom-image-news {
  width: 50px;
  height: 50px;
  object-fit: cover;
}
</style>
>

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
  </div>
</template>

<script>
export default {
  name: 'SideContentNewsComponents',
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

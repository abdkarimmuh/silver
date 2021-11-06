<template>
  <div>
    <div class="border-bottom mb-4">
      <h6 class="text-warning">Berita Terbaru</h6>
    </div>
    <div class="row px-3 mb-3">
      <img src="~/assets/images/img_1.jpg" class="custom-image-event" />
      <div class="col">
        <a href="#" style="text-decoration: none">
          <div class="text-dark font-weight-bold mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </div>
        </a>
        <div class="text-muted mb-2">19 September 2021</div>
      </div>
    </div>
    <div class="row px-3 mb-3">
      <img src="~/assets/images/img_2.jpg" class="custom-image-event" />
      <div class="col">
        <a href="#" style="text-decoration: none">
          <div class="text-dark font-weight-bold mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </div>
        </a>
        <div class="text-muted mb-2">19 September 2021</div>
      </div>
    </div>
    <div class="row px-3 mb-3">
      <img src="~/assets/images/img_3.jpg" class="custom-image-event" />
      <div class="col">
        <a href="#" style="text-decoration: none">
          <div class="text-dark font-weight-bold mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </div>
        </a>
        <div class="text-muted mb-2">19 September 2021</div>
      </div>
    </div>

    <div class="border-bottom mt-5 mb-3">
      <h6 class="text-warning">Kategori</h6>
    </div>
    <ul class="px-3">
      <li class="mb-1">
        <a href="#" class="url-text">Category 1</a>
      </li>
      <li class="mb-1">
        <a href="#" class="url-text">Category 2</a>
      </li>
      <li class="mb-1">
        <a href="#" class="url-text">Category 3</a>
      </li>
      <li class="mb-1">
        <a href="#" class="url-text">Category 4</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SideContentBlogComponents',
}
</script>

<style scoped>
.custom-image-event {
  width: 50px;
  height: 50px;
  object-fit: cover;
}
</style>
>

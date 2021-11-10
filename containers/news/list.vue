<template>
  <div>
    <h5 class="text-primary mb-4">{{ title }}</h5>
    <div class="row mb-4 px-3">
      <img src="~/assets/images/img_1.jpg" class="custom-image-news" />
      <div class="col">
        <a
          href=""
          style="text-decoration: none"
          @click.prevent="$router.push('/news/1')"
        >
          <h6 class="text-dark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut. 1
          </h6>
        </a>
        <div class="text-muted mb-2">19 September 2021</div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed esse
          doloremque nostrum, fuga fugit minima quod delectus magni explicabo
          quis aliquam laborum molestiae sint voluptatum ea beatae sunt rerum!
          Saepe.
        </p>
      </div>
    </div>
    <div class="row mb-4 px-3">
      <img src="~/assets/images/img_2.jpg" class="custom-image-news" />
      <div class="col">
        <a
          href=""
          style="text-decoration: none"
          @click.prevent="$router.push('/news/1')"
        >
          <h6 class="text-dark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut. 2
          </h6>
        </a>
        <div class="text-muted mb-2">19 September 2021</div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed esse
          doloremque nostrum, fuga fugit minima quod delectus magni explicabo
          quis aliquam laborum molestiae sint voluptatum ea beatae sunt rerum!
          Saepe.
        </p>
      </div>
    </div>
    <div class="row mb-4 px-3">
      <img src="~/assets/images/img_3.jpg" class="custom-image-news" />
      <div class="col">
        <a
          href=""
          style="text-decoration: none"
          @click.prevent="$router.push('/news/1')"
        >
          <h6 class="text-dark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut. 3
          </h6>
        </a>
        <div class="text-muted mb-2">19 September 2021</div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed esse
          doloremque nostrum, fuga fugit minima quod delectus magni explicabo
          quis aliquam laborum molestiae sint voluptatum ea beatae sunt rerum!
          Saepe.
        </p>
      </div>
    </div>
    <div class="row mb-4 px-3">
      <img src="~/assets/images/img_1.jpg" class="custom-image-news" />
      <div class="col">
        <a
          href=""
          style="text-decoration: none"
          @click.prevent="$router.push('/news/1')"
        >
          <h6 class="text-dark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut. 1
          </h6>
        </a>
        <div class="text-muted mb-2">19 September 2021</div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed esse
          doloremque nostrum, fuga fugit minima quod delectus magni explicabo
          quis aliquam laborum molestiae sint voluptatum ea beatae sunt rerum!
          Saepe.
        </p>
      </div>
    </div>
    <div class="row mb-4 px-3">
      <img src="~/assets/images/img_2.jpg" class="custom-image-news" />
      <div class="col">
        <a
          href=""
          style="text-decoration: none"
          @click.prevent="$router.push('/news/1')"
        >
          <h6 class="text-dark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut. 2
          </h6>
        </a>
        <div class="text-muted mb-2">19 September 2021</div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed esse
          doloremque nostrum, fuga fugit minima quod delectus magni explicabo
          quis aliquam laborum molestiae sint voluptatum ea beatae sunt rerum!
          Saepe.
        </p>
      </div>
    </div>
    <div class="row mb-4 px-3">
      <img src="~/assets/images/img_3.jpg" class="custom-image-news" />
      <div class="col">
        <a
          href=""
          style="text-decoration: none"
          @click.prevent="$router.push('/news/1')"
        >
          <h6 class="text-dark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut. 3
          </h6>
        </a>
        <div class="text-muted mb-2">19 September 2021</div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed esse
          doloremque nostrum, fuga fugit minima quod delectus magni explicabo
          quis aliquam laborum molestiae sint voluptatum ea beatae sunt rerum!
          Saepe.
        </p>
      </div>
    </div>
    <div class="row mb-4 px-3">
      <img src="~/assets/images/img_1.jpg" class="custom-image-news" />
      <div class="col">
        <a
          href=""
          style="text-decoration: none"
          @click.prevent="$router.push('/news/1')"
        >
          <h6 class="text-dark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut. 1
          </h6>
        </a>
        <div class="text-muted mb-2">19 September 2021</div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed esse
          doloremque nostrum, fuga fugit minima quod delectus magni explicabo
          quis aliquam laborum molestiae sint voluptatum ea beatae sunt rerum!
          Saepe.
        </p>
      </div>
    </div>
    <div class="row justify-content-center">
      <pagination-components />
    </div>
  </div>
</template>

<script>
import PaginationComponents from '~/components/Pagination.vue'

export default {
  name: 'ListNewsContainers',
  components: { PaginationComponents },
  props: { title: { type: String, default: 'Berita Utama' } },
}
</script>

<style scoped>
.custom-image-news {
  width: 120px;
  height: 140px;
  object-fit: cover;
}
</style>

<template>
  <div class="px-3 row mt-5">
    <figure class="d-inline-block">
      <figure class="d-inline-block">
        <img
          :src="imageSrc"
          :alt="slug"
          class="rounded-circle image-community"
        />
      </figure>
    </figure>
    <div class="col">
      <div class="pl-3">
        <h3 class="mb-2">{{ title }}</h3>
        <p>{{ desc }}</p>
        <button
          class="btn btn-soft-primary btn-sm"
          @click.prevent="$router.push('/about/komunitas/' + slug)"
        >
          Selengkapnya
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommunityComponents',
  props: {
    title: { type: String, default: '' },
    desc: { type: String, default: '' },
    imageSrc: { type: String, default: '~/assets/images/img_1.jpg' },
    slug: { type: String, default: '' },
  },
}
</script>

<style scoped>
.image-community {
  width: 160px;
  height: 160px;
  object-fit: cover;
}
</style>

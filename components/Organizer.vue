<template>
  <div class="team-card card border-0 raise-on-hover">
    <img :src="imageUrl" :alt="name" class="card-img-top organizer-picture" />
    <div class="card-body px-0">
      <h5 class="card-title mb-0">{{ name }}</h5>
      <p
        :class="
          'font-weight-medium ' +
          (position === 'Anggota' ? 'designation-secondary' : 'designation')
        "
      >
        {{ position }}
      </p>
      <p>{{ motivation }}</p>
      <p class="social-links">
        <a href="" class="icon-fb" @click.prevent="clickSosmed(facebook)"
          ><i class="mdi mdi-facebook-box"></i
        ></a>
        <a href="" class="icon-twitter" @click.prevent="clickSosmed(twitter)"
          ><i class="mdi mdi-twitter-box"></i
        ></a>
        <a href="" class="icon-insta" @click.prevent="clickSosmed(instagram)"
          ><i class="mdi mdi-instagram"></i
        ></a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, default: '' },
    position: { type: String, default: '' },
    motivation: { type: String, default: '' },
    imageUrl: { type: String, default: '' },
    facebook: { type: String, default: '' },
    twitter: { type: String, default: '' },
    instagram: { type: String, default: '' },
  },
  methods: {
    clickSosmed(url) {
      window.open(url)
    },
  },
}
</script>

<style></style>

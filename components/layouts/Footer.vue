<template>
  <footer class="pt-5 mt-5 bg-light">
    <div class="container">
      <section>
        <div class="row justify-content-between">
          <div class="col-md-4">
            <img src="~/assets/images/logo.svg" class="custom-logo-footer" />
            <p class="mt-3">{{ about }}</p>
          </div>
          <div class="col-md-2">
            <div class="font-weight-bold mb-2">Tentang</div>
            <ul class="px-3">
              <li>
                <a href="/about" class="url-text">Tentang Silver</a>
              </li>
              <li>
                <a href="/about/komunitas" class="url-text">Komunitas</a>
              </li>
              <li>
                <a href="/about/pengurus" class="url-text">Pengurus</a>
              </li>
            </ul>
            <div class="font-weight-bold mb-2">Publikasi</div>
            <ul class="px-3">
              <li>
                <a href="/news" class="url-text">Berita</a>
              </li>
              <li>
                <a href="/blog" class="url-text">Blog</a>
              </li>
            </ul>
          </div>
          <div class="col-md-2">
            <div class="font-weight-bold mb-2">Komunitas</div>
            <ul class="px-3">
              <li v-for="(item, index) in community" :key="index">
                <a :href="`/about/komunitas/${item.slug}`" class="url-text">
                  {{ item.name }}
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-3">
            <p class="footer-social-links">
              <a href="" class="icon-fb" @click.prevent="clickSosmed(facebook)">
                <i class="mdi mdi-facebook-box"> </i>
              </a>
              <a
                href=""
                class="icon-twitter"
                @click.prevent="clickSosmed(twitter)"
              >
                <i class="mdi mdi-twitter-box"> </i>
              </a>
              <a
                href=""
                class="icon-insta"
                @click.prevent="clickSosmed(instagram)"
              >
                <i class="mdi mdi-instagram"> </i>
              </a>
            </p>
            <div class="mb-2">
              Telepon&nbsp;:
              <span class="font-weight-bold">{{ phone }}</span>
            </div>
            <div class="mb-2">
              Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
              <span class="font-weight-bold">{{ email }}</span>
            </div>
            <div v-if="address" class="mb-2">
              Kesekretariatan<br />
              <span class="font-weight-bold">{{ address }}</span>
            </div>
          </div>
        </div>
      </section>
      <nav
        class="
          navbar navbar-light
          bg-transparent
          navbar-expand
          d-block d-sm-flex
          text-center
        "
      >
        <span class="navbar-text">
          &copy; {{ years }}.
          <a href="https://github.com/setakarim/silver" target="_blank">
            Silver Web Apps.
          </a>
          All rights reserved.
        </span>
        <div class="navbar-nav ml-auto justify-content-center">
          <a href="#" class="nav-link">Support</a>
          <a href="#" class="nav-link">Terms</a>
          <a href="#" class="nav-link">Privacy</a>
        </div>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterLayoutComponents',
  computed: {
    about() {
      return this.$store.getters['landing/getAbout']
    },
    facebook() {
      return this.$store.getters['landing/getContact'].facebook
    },
    twitter() {
      return this.$store.getters['landing/getContact'].twitter
    },
    instagram() {
      return this.$store.getters['landing/getContact'].instagram
    },
    phone() {
      return this.$store.getters['landing/getContact'].phone
    },
    email() {
      return this.$store.getters['landing/getContact'].email
    },
    address() {
      return this.$store.getters['landing/getContact'].address
    },
    community() {
      return this.$store.getters['landing/getFooterCommunity']
    },
    years() {
      return process.env.years
    },
  },
  methods: {
    clickSosmed(url) {
      window.open(url)
    },
  },
}
</script>

<style></style>

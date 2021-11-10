<template>
  <header id="home" class="miri-ui-kit-header header-navbar-full">
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-transparent fixed-on-scroll"
    >
      <div class="container">
        <a class="navbar-brand" @click="$router.push('/')">
          <img src="~/assets/images/logo-dark.svg" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#miriUiKitNavbarLanding"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="mdi mdi-menu"></span>
        </button>

        <div id="miriUiKitNavbarLanding" class="collapse navbar-collapse">
          <div class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#home">Beranda</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#about">Tentang</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#event">Agenda</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#blog">Blog</a>
            </li>

            <button
              class="btn btn-outline-primary btn-sm ml-lg-3"
              @click="$router.push('/join')"
            >
              Gabung
            </button>
          </div>
        </div>
      </div>
    </nav>
    <div
      class="
        miri-ui-kit-header-content
        container
        text-white
        justify-content-center
      "
    >
      <h1 class="display-3 text-white">Silver</h1>
      <p class="h3 font-weight-light text-white">
        A beautiful premium bootstrap 4 developed by bootstrapdash.
      </p>
      <p class="mt-3 mb-5">
        <button class="btn btn-soft-primary" @click="$router.push('#about')">
          Lihat lebih lanjut
        </button>
      </p>
    </div>
    <div class="container">
      <div class="header-social pb-5">
        <h6 class="text-white">Ikuti Sosial Media Kami</h6>
        <a
          class="header-social-icon icon-fb pr-2"
          href=""
          @click.prevent="clickSosmed(facebook)"
        >
          <i class="mdi mdi-facebook-box"></i>
        </a>
        <a
          class="header-social-icon icon-twitter pr-2"
          href=""
          @click.prevent="clickSosmed(twitter)"
        >
          <i class="mdi mdi-twitter-box"></i>
        </a>
        <a
          class="header-social-icon icon-insta pr-2"
          href=""
          @click.prevent="clickSosmed(instagram)"
        >
          <i class="mdi mdi-instagram"></i>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderLandingLayoutComponents',
  computed: {
    facebook() {
      return this.$store.getters['landing/getContact'].facebook
    },
    twitter() {
      return this.$store.getters['landing/getContact'].twitter
    },
    instagram() {
      return this.$store.getters['landing/getContact'].instagram
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

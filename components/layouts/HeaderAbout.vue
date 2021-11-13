<template>
  <header id="home" class="miri-ui-kit-header">
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-transparent fixed-on-scroll"
    >
      <div class="container">
        <a class="navbar-brand" href="/">
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
              <a
                :class="'nav-link' + (activeMenu === 'home' ? ' active' : '')"
                href="/"
                >Beranda</a
              >
            </li>

            <li class="nav-item dropdown">
              <a
                href=""
                :class="
                  'nav-link dropdown-toggle' +
                  (activeMenu === 'about' ? ' active' : '')
                "
                data-toggle="dropdown"
              >
                Tentang
              </a>
              <div class="dropdown-menu dropdown-menu-right">
                <a href="/about" class="dropdown-item">
                  <i class="dropdown-item-icon mdi mdi-shape-outline"></i>
                  Tentang Silver
                </a>
                <a href="/about/komunitas" class="dropdown-item">
                  <i class="dropdown-item-icon mdi mdi-lock-outline"></i>
                  Komunitas
                </a>
                <a href="/about/pengurus" class="dropdown-item">
                  <i
                    class="dropdown-item-icon mdi mdi-shield-account-outline"
                  ></i>
                  Pengurus Silver
                </a>
              </div>
            </li>

            <li class="nav-item">
              <a
                :class="'nav-link' + (activeMenu === 'news' ? ' active' : '')"
                href="/news"
              >
                Berita
              </a>
            </li>

            <li class="nav-item">
              <a
                :class="'nav-link' + (activeMenu === 'blog' ? ' active' : '')"
                href="/blog"
              >
                Blog
              </a>
            </li>

            <button
              class="btn btn-soft-primary btn-sm ml-lg-3"
              :disabled="activeMenu === 'join'"
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
        text-white
        justify-content-center
        d-flex
      "
    >
      <h1 class="display-3 text-white align-self-end">{{ title }}</h1>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderAboutLayoutComponents',
  computed: {
    activeMenu() {
      return this.$store.getters['ui/getActiveMenu']
    },
    title() {
      return this.$store.getters['ui/getTitleAbout']
    },
  },
}
</script>

<style></style>

<template>
  <header id="home" class="miri-ui-kit-header">
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
              <a class="nav-link" href="/">Beranda</a>
            </li>

            <li class="nav-item dropdown">
              <a
                href=""
                class="nav-link dropdown-toggle"
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
              <a class="nav-link" href="/news">Berita</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/blog">Blog</a>
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
        text-white
        justify-content-center
        d-flex
      "
    >
      <h1 class="display-3 text-white align-self-end">Tentang Silver</h1>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderAboutLayoutComponents',
}
</script>

<style></style>

<template>
  <header class="bg-dark">
    <nav class="navbar navbar-expand-lg navbar-dark fixed-on-scroll">
      <div class="container">
        <a class="navbar-brand" @click="$router.push('/')">
          <img src="~/assets/images/logo-dark.svg" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#miriUiKitNavbar"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="mdi mdi-menu"></span>
        </button>

        <div id="miriUiKitNavbar" class="collapse navbar-collapse">
          <div class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" @click="$router.push('/')">Beranda</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" @click="$router.push('/about')">Tentang</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" @click="$router.push('/news')">Berita</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" @click="$router.push('/blog')">Blog</a>
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
  </header>
</template>

<script>
export default {
  name: 'HeaderLayoutComponents',
}
</script>

<style></style>

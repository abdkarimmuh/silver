<template>
  <header
    id="home"
    class="miri-ui-kit-header header-navbar-full landing-header header-bg-2"
  >
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
          data-target="#miriUiKitNavbar"
          aria-controls="navbarSupportedContent2"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="mdi mdi-menu"></span>
        </button>

        <div id="miriUiKitNavbar" class="collapse navbar-collapse">
          <div class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#home">Beranda</a>
            </li>

            <!-- <li class="nav-item dropdown">
              <a
                href="#about"
                class="nav-link dropdown-toggle"
                data-toggle="dropdown"
              >
                Tentang
              </a>
              <div class="dropdown-menu dropdown-menu-right">
                <a href="landing.html" class="dropdown-item"
                  ><i class="dropdown-item-icon mdi mdi-shape-outline"></i
                  >Landing Page</a
                >
                <a href="login.html" class="dropdown-item"
                  ><i class="dropdown-item-icon mdi mdi-lock-outline"></i>Login
                  Page</a
                >
                <a href="profile.html" class="dropdown-item"
                  ><i
                    class="dropdown-item-icon mdi mdi-shield-account-outline"
                  ></i
                  >Profile Page</a
                >
              </div>
            </li> -->

            <li class="nav-item">
              <a class="nav-link" href="#about">Tentang</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#event">Agenda</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#blog">Blog</a>
            </li>

            <li class="nav-item mx-3">
              <a class="nav-link nav-icon icon-fb" href="#"
                ><i class="mdi mdi-facebook-box"></i
              ></a>

              <a class="nav-link nav-icon icon-twitter" href="#"
                ><i class="mdi mdi-twitter-box"></i
              ></a>

              <a class="nav-link nav-icon icon-insta" href="#"
                ><i class="mdi mdi-instagram"></i
              ></a>
            </li>

            <form action="#" class="form-inline ml-lg-3">
              <button class="btn btn-outline-primary btn-sm">Gabung</button>
            </form>
          </div>
        </div>
      </div>
    </nav>
    <!-- <div
      class="
        miri-ui-kit-header-content
        text-center text-white
        d-flex
        flex-column
        justify-content-center
        align-items-center
        px-5
      "
    >
      <h1 class="display-3 text-white">Silver</h1>
      <p class="h3 font-weight-light text-white">
        A beautiful premium bootstrap 4 developed by bootstrapdash.
      </p>
      <p class="mt-4">
        <button
          class="btn btn-soft-primary btn-pill mr-2"
          @click="$router.push('/#about')"
        >
          Selengkapnya
        </button>
      </p>
    </div> -->
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
      <p class="mt-3">
        <button class="btn btn-soft-primary" @click="$router.push('/#about')">
          Selengkapnya
        </button>
      </p>
      <div class="row">
        <a class="nav-link nav-icon icon-fb" href="#"
          ><i class="mdi mdi-facebook-box"></i
        ></a>

        <a class="nav-link nav-icon icon-twitter" href="#"
          ><i class="mdi mdi-twitter-box"></i
        ></a>

        <a class="nav-link nav-icon icon-insta" href="#"
          ><i class="mdi mdi-instagram"></i
        ></a>
      </div>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style></style>

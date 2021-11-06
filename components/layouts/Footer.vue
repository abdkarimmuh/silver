<template>
  <footer class="pt-5 mt-5 bg-light">
    <div class="container">
      <section>
        <div class="row justify-content-between">
          <div class="col-md-4">
            <img src="~/assets/images/logo.svg" class="custom-logo-footer" />
            <p>
              If there is something we can help you with, just let us know.
              We'll be more than happy to offer you our help.
            </p>
          </div>
          <div class="col-md-2">
            <div class="font-weight-bold mb-2">Tentang</div>
            <ul class="px-3">
              <li>
                <a href="#" class="url-text">Tentang Silver</a>
              </li>
              <li>
                <a href="#" class="url-text">Sejarah</a>
              </li>
              <li>
                <a href="#" class="url-text">Pengurus</a>
              </li>
            </ul>
            <div class="font-weight-bold mb-2">Publikasi</div>
            <ul class="px-3">
              <li>
                <a href="#" class="url-text">Agenda</a>
              </li>
              <li>
                <a href="#" class="url-text">Blog</a>
              </li>
            </ul>
          </div>
          <div class="col-md-2">
            <div class="font-weight-bold mb-2">Komunitas</div>
            <ul class="px-3">
              <li>
                <a href="#" class="url-text">Studio</a>
              </li>
              <li>
                <a href="#" class="url-text">Masjid Community</a>
              </li>
              <li>
                <a href="#" class="url-text">Art & Science</a>
              </li>
              <li>
                <a href="#" class="url-text">Sport</a>
              </li>
            </ul>
          </div>
          <div class="col-md-3">
            <p class="footer-social-links">
              <a href="#" class="icon-fb">
                <i class="mdi mdi-facebook-box"> </i>
              </a>
              <a href="#" class="icon-twitter">
                <i class="mdi mdi-twitter-box"> </i>
              </a>
              <a href="#" class="icon-insta">
                <i class="mdi mdi-instagram"> </i>
              </a>
            </p>
            <div class="mb-2">
              Telepon&nbsp;:
              <span class="font-weight-bold">0812 3456 7890</span>
            </div>
            <div class="mb-2">
              Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
              <span class="font-weight-bold">silvercimanggis@gmail.com</span>
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
          &copy; 2021.
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
}
</script>

<style></style>

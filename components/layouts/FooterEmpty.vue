<template>
  <footer>
    <div class="container">
      <nav
        class="
          navbar navbar-dark
          bg-transparent
          navbar-expand
          footer-navbar
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
  name: 'FooterEmptyLayoutComponents',
  computed: {
    years() {
      return process.env.years
    },
  },
}
</script>

<style></style>

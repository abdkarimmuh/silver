<template>
  <section class="miri-ui-kit-section">
    <div class="container">
      <div class="card bg-dark border-0">
        <div class="card-body px-5 py-5">
          <div class="row align-items-center px-5">
            <div class="col-md-6">
              <h3 class="text-white">Gabung Bersama Kami</h3>
              <p class="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut.
              </p>
            </div>
            <div class="col-md-6 text-right-responsive">
              <button class="btn btn-primary px-5">Gabung</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'JoinLandingContainers',
}
</script>

<style scoped>
.text-right-responsive {
  text-align: right !important;
}

@media (max-width: 768px) {
  .text-right-responsive {
    text-align: left !important;
  }
}
</style>

<template>
  <section class="miri-ui-kit-section">
    <div class="container">
      <div class="row align-items-center mb-4">
        <div class="col-md-8">
          <h2>Blog</h2>
          <p>Bacalah karya tulis dari kami</p>
        </div>
        <div class="col-md-4 text-right-responsive">
          <button class="btn btn-sm btn-primary" @click="$router.push('/blog')">
            Lihat semua blog
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="card border-0">
            <img src="~/assets/images/team-1.jpg" class="custom-image-blog" />
            <div class="card-body px-0">
              <h5 class="card-title mb-0">Judul Blog 1</h5>
              <div class="font-weight-medium text-primary pt-1 pb-2">
                Anonymus
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut.
              </p>
              <button class="btn btn-sm btn-soft-primary">Selengkapnya</button>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card border-0">
            <img src="~/assets/images/team-2.jpg" class="custom-image-blog" />
            <div class="card-body px-0">
              <h5 class="card-title mb-0">Judul Blog 2</h5>
              <div class="font-weight-medium text-primary pt-1 pb-2">
                Anonymus
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut.
              </p>
              <button class="btn btn-sm btn-soft-primary">Selengkapnya</button>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card border-0">
            <img src="~/assets/images/team-3.jpg" class="custom-image-blog" />
            <div class="card-body px-0">
              <h5 class="card-title mb-0">Judul Blog 3</h5>
              <div class="font-weight-medium text-primary pt-1 pb-2">
                Anonymus
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut.
              </p>
              <button class="btn btn-sm btn-soft-primary">Selengkapnya</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BlogLandingContainers',
}
</script>

<style scoped>
.custom-image-blog {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.text-right-responsive {
  text-align: right !important;
}

@media (max-width: 768px) {
  .text-right-responsive {
    text-align: left !important;
  }
}
</style>

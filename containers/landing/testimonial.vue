<template>
  <section class="miri-ui-kit-section pb-0">
    <div class="container">
      <h2 class="text-center">Testimoni</h2>
      <p class="mb-4 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="bd-example px-3">
            <div
              id="carouselTestimonialCaptions"
              class="carousel slide"
              data-ride="carousel"
            >
              <div class="carousel-inner px-5">
                <div class="carousel-item active">
                  <div class="card border-0">
                    <div class="card-body text-center">
                      <figure class="d-inline-block">
                        <img
                          src="~/assets/images/img_1.jpg"
                          class="rounded-circle"
                        />
                      </figure>
                      <h5 class="card-title mb-0">Afonso Pinto</h5>
                      <p class="font-weight-medium designation">
                        Founded & Chairman
                      </p>
                      <p class="font-italic">
                        Achieve virtually any design and layout from with in the
                      </p>
                      <p class="social-links">
                        <a href="#" class="icon-fb">
                          <i class="mdi mdi-facebook-box"></i>
                        </a>
                        <a href="#" class="icon-twitter">
                          <i class="mdi mdi-twitter-box"></i>
                        </a>
                        <a href="#" class="icon-insta">
                          <i class="mdi mdi-instagram"></i>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="card border-0">
                    <div class="card-body text-center">
                      <figure class="d-inline-block">
                        <img
                          src="~/assets/images/img_2.jpg"
                          class="rounded-circle"
                        />
                      </figure>
                      <h5 class="card-title mb-0">Irene Sotelo</h5>
                      <p class="font-weight-medium designation">
                        Frontend Developer
                      </p>
                      <p class="font-italic">
                        Achieve virtually any design and layout from with in the
                      </p>
                      <p class="social-links">
                        <a href="#" class="icon-fb">
                          <i class="mdi mdi-facebook-box"></i>
                        </a>
                        <a href="#" class="icon-twitter">
                          <i class="mdi mdi-twitter-box"></i>
                        </a>
                        <a href="#" class="icon-insta">
                          <i class="mdi mdi-instagram"></i>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="card border-0">
                    <div class="card-body text-center">
                      <figure class="d-inline-block">
                        <img
                          src="~/assets/images/img_3.jpg"
                          class="rounded-circle"
                        />
                      </figure>
                      <h5 class="card-title mb-0">Marmara Perera</h5>
                      <p class="font-weight-medium designation">
                        Designer & Creative Director
                      </p>
                      <p class="font-italic">
                        Achieve virtually any design and layout from with in the
                      </p>
                      <p class="social-links">
                        <a href="#" class="icon-fb">
                          <i class="mdi mdi-facebook-box"></i>
                        </a>
                        <a href="#" class="icon-twitter">
                          <i class="mdi mdi-twitter-box"></i>
                        </a>
                        <a href="#" class="icon-insta">
                          <i class="mdi mdi-instagram"></i>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselTestimonialCaptions"
                role="button"
                data-slide="prev"
              >
                <i class="mdi mdi-chevron-left"></i>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselTestimonialCaptions"
                role="button"
                data-slide="next"
              >
                <i class="mdi mdi-chevron-right"></i>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TestimonialLandingContainers',
}
</script>

<style scoped>
.social-links {
  font-size: 24px;
  margin-right: 6px;
}
</style>

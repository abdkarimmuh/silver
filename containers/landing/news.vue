<template>
  <section class="miri-ui-kit-section">
    <div class="container">
      <h2 class="mb-4 text-center">Berita</h2>
      <p class="mb-4 pb-3 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div class="row">
        <div class="col-lg-6 col-md-12 mb-5">
          <div class="bd-example px-3">
            <div
              id="carouselNewsCaptions"
              class="carousel slide"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselNewsCaptions"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li data-target="#carouselNewsCaptions" data-slide-to="1"></li>
                <li data-target="#carouselNewsCaptions" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="bg-carosel-news">
                    <div class="container-content-carosel-news pb-5 px-5">
                      <a href="#" style="text-decoration: none">
                        <h5 class="text-white">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut. 1
                        </h5>
                      </a>
                      <div class="text-muted">19 September 2021</div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="bg-carosel-news">
                    <div class="container-content-carosel-news pb-5 px-5">
                      <a href="#" style="text-decoration: none">
                        <h5 class="text-white">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut. 2
                        </h5>
                      </a>
                      <div class="text-muted">19 September 2021</div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="bg-carosel-news">
                    <div class="container-content-carosel-news pb-5 px-5">
                      <a href="#" style="text-decoration: none">
                        <h5 class="text-white">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut. 3
                        </h5>
                      </a>
                      <div class="text-muted">19 September 2021</div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselNewsCaptions"
                role="button"
                data-slide="prev"
              >
                <i class="mdi mdi-chevron-left"></i>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselNewsCaptions"
                role="button"
                data-slide="next"
              >
                <i class="mdi mdi-chevron-right"></i>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 mb-5">
          <div class="row px-3 mb-3">
            <img src="~/assets/images/img_1.jpg" class="custom-image-news" />
            <div class="col">
              <a href="#" style="text-decoration: none">
                <h6 class="text-dark">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut. 1
                </h6>
              </a>
              <div class="text-muted mb-2">19 September 2021</div>
            </div>
          </div>
          <div class="row px-3 mb-3">
            <img src="~/assets/images/img_2.jpg" class="custom-image-news" />
            <div class="col">
              <a href="#" style="text-decoration: none">
                <h6 class="text-dark">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut. 2
                </h6>
              </a>
              <div class="text-muted mb-2">19 September 2021</div>
            </div>
          </div>
          <div class="row px-3 mb-3">
            <img src="~/assets/images/img_3.jpg" class="custom-image-news" />
            <div class="col">
              <a href="#" style="text-decoration: none">
                <h6 class="text-dark">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut. 3
                </h6>
              </a>
              <div class="text-muted mb-2">19 September 2021</div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <button
          class="btn btn-sm btn-soft-primary px-5"
          @click="$router.push('/news')"
        >
          Lihat semua berita
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NewsLandingContainers',
}
</script>

<style scoped>
.bg-carosel-news {
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.8)
    ),
    url('https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80');
  width: 100%;
  height: 360px;
  background-size: cover;
  color: white;
}

.container-content-carosel-news {
  position: absolute;
  bottom: 0;
}

.custom-image-news {
  width: 110px;
  height: 110px;
  object-fit: cover;
}

@media (max-width: 768px) {
  .bg-carosel-news {
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.8)
      ),
      url('https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80');
    width: 100%;
    height: 250px;
    background-size: cover;
    color: white;
  }
}
</style>

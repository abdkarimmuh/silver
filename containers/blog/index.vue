<template>
  <section class="miri-ui-kit-section">
    <div class="container">
      <breadcumb-components />
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
      <div class="row">
        <div class="col-md-9">
          <div class="row">
            <div class="col-md-6 mb-5">
              <div class="card border-0">
                <img
                  src="~/assets/images/team-1.jpg"
                  class="custom-image-blog"
                />
                <div class="card-body px-0">
                  <h5 class="card-title mb-0">Judul Blog 1</h5>
                  <div class="font-weight-medium text-primary pt-1 pb-2">
                    Anonymus
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut.
                  </p>
                  <a href="" class="text-muted">Selengkapnya</a>
                </div>
              </div>
            </div>
            <div class="col-md-6 mb-5">
              <div class="card border-0">
                <img
                  src="~/assets/images/team-2.jpg"
                  class="custom-image-blog"
                />
                <div class="card-body px-0">
                  <h5 class="card-title mb-0">Judul Blog 2</h5>
                  <div class="font-weight-medium text-primary pt-1 pb-2">
                    Anonymus
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut.
                  </p>
                  <a href="" class="text-muted">Selengkapnya</a>
                </div>
              </div>
            </div>
            <div class="col-md-6 mb-5">
              <div class="card border-0">
                <img
                  src="~/assets/images/team-1.jpg"
                  class="custom-image-blog"
                />
                <div class="card-body px-0">
                  <h5 class="card-title mb-0">Judul Blog 1</h5>
                  <div class="font-weight-medium text-primary pt-1 pb-2">
                    Anonymus
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut.
                  </p>
                  <a href="" class="text-muted">Selengkapnya</a>
                </div>
              </div>
            </div>
            <div class="col-md-6 mb-5">
              <div class="card border-0">
                <img
                  src="~/assets/images/team-2.jpg"
                  class="custom-image-blog"
                />
                <div class="card-body px-0">
                  <h5 class="card-title mb-0">Judul Blog 2</h5>
                  <div class="font-weight-medium text-primary pt-1 pb-2">
                    Anonymus
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut.
                  </p>
                  <a href="" class="text-muted">Selengkapnya</a>
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <pagination-components />
          </div>
        </div>
        <div class="col-md-3">
          <sidebar />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import BreadcumbComponents from '~/components/Breadcrumb.vue'
import PaginationComponents from '~/components/Pagination.vue'

export default {
  name: 'BlogContainers',
  components: {
    BreadcumbComponents,
    PaginationComponents,
    Sidebar,
  },
  props: {
    title: { type: String, default: 'Blog' },
    description: { type: String, default: '' },
  },
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

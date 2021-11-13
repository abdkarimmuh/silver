<template>
  <section class="miri-ui-kit-section">
    <div class="container">
      <div class="d-md-flex justify-content-between">
        <div class="px-3 row d-md-flex mt-5">
          <figure class="d-inline-block">
            <figure class="d-inline-block">
              <img src="~/assets/images/img_1.jpg" class="rounded-circle" />
            </figure>
          </figure>
          <div class="col">
            <div class="pl-3">
              <h3 class="mb-2">Studio</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut.
              </p>
              <button
                class="btn btn-soft-primary btn-sm"
                @click.prevent="$router.push('/about/komunitas/studio')"
              >
                Selengkapnya
              </button>
            </div>
          </div>
        </div>
        <div class="px-3 row d-md-flex mt-5">
          <figure class="d-inline-block">
            <img src="~/assets/images/img_2.jpg" class="rounded-circle" />
          </figure>
          <div class="col">
            <div class="pl-3">
              <h3 class="mb-2">Masjid Community</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut.
              </p>
              <button
                class="btn btn-soft-primary btn-sm"
                @click.prevent="
                  $router.push('/about/komunitas/masjid_community')
                "
              >
                Selengkapnya
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-5">
      <div class="d-md-flex justify-content-between">
        <div class="px-3 row d-md-flex mt-5">
          <figure class="d-inline-block">
            <img src="~/assets/images/img_3.jpg" class="rounded-circle" />
          </figure>
          <div class="col">
            <div class="pl-3">
              <h3 class="mb-2">Sport</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut.
              </p>
              <button
                class="btn btn-soft-primary btn-sm"
                @click.prevent="$router.push('/about/komunitas/sport')"
              >
                Selengkapnya
              </button>
            </div>
          </div>
        </div>
        <div class="px-3 row d-md-flex mt-5">
          <figure class="d-inline-block">
            <img src="~/assets/images/img_4.jpg" class="rounded-circle" />
          </figure>
          <div class="col">
            <div class="pl-3">
              <h3 class="mb-2">Art & Science</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut.
              </p>
              <button
                class="btn btn-soft-primary btn-sm"
                @click.prevent="$router.push('/about/komunitas/art_science')"
              >
                Selengkapnya
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'KomunitasContainers',
}
</script>

<style></style>

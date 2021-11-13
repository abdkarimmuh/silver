<template>
  <section class="miri-ui-kit-section">
    <div class="container">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
    <div class="container mt-5 pb-5">
      <h3 class="mb-4 text-primary">Sejarah Silver</h3>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
    <div class="container mt-5 pb-5">
      <h3 class="mb-4 text-primary text-center">Visi</h3>
      <p class="text-center font-italic">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <h3 class="mb-4 text-primary text-center mt-5">Misi</h3>
      <p class="text-center">
        1. Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <p class="text-center">
        2. Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>
      <p class="text-center">
        3. Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's
      </p>
    </div>
    <div class="container mt-5">
      <h3 class="text-primary">Komunitas</h3>
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
  name: 'AboutContainers',
}
</script>

<style></style>

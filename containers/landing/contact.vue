<template>
  <section class="miri-ui-kit-section">
    <div class="container">
      <h2 class="text-center">Hubungi Kami</h2>
      <p class="text-center mb-4 pb-3">
        If there is something we can help you with, just let us know. We'll
        <br />
        be more than happy to offer you our help.
      </p>
      <div class="row justify-content-center">
        <div class="col-md-8">
          <form @submit.prevent="submitMessage">
            <div class="row mb-3">
              <div class="form-group col-md-6">
                <label for="name">Nama</label>
                <input
                  id="name"
                  v-model="name"
                  class="form-control"
                  placeholder="Nama Lengkap"
                  required
                />
              </div>
              <div class="form-group col-md-6">
                <label for="phone">Nomor Handphone</label>
                <input
                  id="phone"
                  v-model="phone"
                  v-mask="'#### ### ###'"
                  masked="false"
                  class="form-control"
                  placeholder="0812 3456 7890"
                  required
                />
              </div>
            </div>
            <div class="row mb-3">
              <div class="form-group col-md-12">
                <label for="email">Email</label>
                <input
                  id="email"
                  v-model="email"
                  class="form-control"
                  placeholder="email@example.com"
                  required
                />
              </div>
            </div>
            <div class="row mb-3">
              <div class="form-group col-md-12">
                <label for="message">Pesan</label>
                <textarea
                  id="message"
                  v-model="message"
                  multiple
                  class="form-control custom-text-area"
                  placeholder="Pesan"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <button class="btn btn-primary px-5" type="submit">
                  Kirim Pesan
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContanctLandingContainers',
  data() {
    return {
      name: '',
      phone: '',
      email: '',
      message: '',
    }
  },
  methods: {
    submitMessage() {
      console.debug('name', this.name)
      console.debug('phone', this.phone)
      console.debug('email', this.email)
      console.debug('message', this.message)
    },
  },
}
</script>

<style scoped>
.custom-text-area {
  height: 120px;
}
</style>

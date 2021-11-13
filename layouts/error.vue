<template>
  <div class="card login-card bg-white">
    <div class="card-body">
      <h2
        v-if="error.statusCode === 404"
        class="text-center font-weight-light mb-5"
      >
        Page not found
      </h2>
      <h2 v-else class="text-center font-weight-light mb-5">
        An error occurred
      </h2>
      <div class="row justify-content-center mt-5">
        <button
          class="btn btn-sm btn-soft-primary px-5"
          @click="$router.push('/')"
        >
          Home page
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorLayout',
  layout: 'empty',
  props: {
    error: { type: Object, default: () => {} },
  },
}
</script>

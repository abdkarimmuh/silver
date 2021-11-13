<template>
  <div>
    <form-join-screen />
  </div>
</template>

<script>
import FormJoinScreen from '~/containers/join'
export default {
  name: 'FormJoinPages',
  components: { FormJoinScreen },
  mounted() {
    this.$store.commit('ui/setActiveMenu', 'join')
  },
}
</script>

<style scoped></style>

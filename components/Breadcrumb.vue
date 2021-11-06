<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li
        v-for="(item, index) in breadcrumbList"
        :key="index"
        :class="[
          'breadcrumb-item',
          index + 1 === breadcrumbList.length ? 'active' : '',
        ]"
      >
        <span v-if="index + 1 === breadcrumbList.length">{{ item.label }}</span>
        <a v-else :href="'/' + item.path">{{ item.label }}</a>
      </li>
    </ol>
  </nav>
</template>

<script>
import Utils from '~/utils'
export default {
  name: 'BreadcumbComponents',
  computed: {
    breadcrumbList() {
      const pathList = this.$route.fullPath.split('/')
      pathList.shift()

      let arr = []
      let path = ''

      pathList.forEach((element, index) => {
        if (index === 0) {
          path = element
          arr = [
            {
              path,
              label: Utils.firstWordUppercase(element),
            },
          ]
        } else {
          path = path + '/' + element
          arr.push({
            path,
            label: Utils.firstWordUppercase(element),
          })
        }
      })

      return arr
    },
  },
}
</script>

<style></style>

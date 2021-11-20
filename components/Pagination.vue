<template>
  <nav>
    <ul class="pagination pagination-pill">
      <li :class="'page-item' + (disabledPrev ? ' disabled' : '')">
        <a class="page-link" href="" @click.prevent="prev()"
          ><i class="mdi mdi-chevron-left"></i
        ></a>
      </li>
      <li
        v-for="item in paginationList"
        :key="item"
        :class="'page-item' + (item === activePage ? ' active' : '')"
      >
        <a class="page-link" href="" @click.prevent="changePage(item)">
          {{ item }}
        </a>
      </li>
      <li :class="'page-item' + (disabledNext ? ' disabled' : '')">
        <a class="page-link" href="" @click.prevent="next()"
          ><i class="mdi mdi-chevron-right"></i
        ></a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'PaginationComponents',
  props: {
    maxPage: { type: Number, default: 5 },
    activePage: { type: Number, default: 3 },
    disabledPrev: { type: Boolean, default: true },
    disabledNext: { type: Boolean, default: true },
  },
  computed: {
    paginationList() {
      const arr = Array.from({ length: this.maxPage }, (_, i) => i + 1)
      return arr
    },
  },
  methods: {
    changePage(page) {
      this.$emit('changePaginate', page)
    },
    prev() {
      if (!this.disabledPrev) {
        this.$emit('changePaginate', this.activePage - 1)
      }
    },
    next() {
      if (!this.disabledNext) {
        this.$emit('changePaginate', this.activePage + 1)
      }
    },
  },
}
</script>

<style></style>

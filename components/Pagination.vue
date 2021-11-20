<template>
  <nav>
    <ul class="pagination pagination-pill">
      <li :class="'page-item' + (disabledPrev ? ' disabled' : '')">
        <a class="page-link" href="" @click.prevent="prev()">
          <i class="mdi mdi-chevron-left"></i>
        </a>
      </li>
      <li
        v-for="(item, index) in paginationList"
        :key="index"
        :class="
          'page-item' +
          (item === activePage ? ' active' : '') +
          (item === '...' ? ' disabled' : '')
        "
      >
        <a class="page-link" href="" @click.prevent="changePage(item)">
          {{ item }}
        </a>
      </li>
      <li :class="'page-item' + (disabledNext ? ' disabled' : '')">
        <a class="page-link" href="" @click.prevent="next()">
          <i class="mdi mdi-chevron-right"></i>
        </a>
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
      let arr = Array.from({ length: this.maxPage }, (_, i) => i + 1)
      if (arr.length > 5) {
        if (this.activePage === 1 || this.activePage === this.maxPage) {
          arr = arr.map((element) => {
            if (Math.abs(element - this.activePage) <= 5) {
              return element
            }
            return '...'
          })
        } else if (
          this.activePage === 2 ||
          this.activePage === this.maxPage - 1
        ) {
          arr = arr.map((element) => {
            if (Math.abs(element - this.activePage) <= 4) {
              return element
            }
            return '...'
          })
        } else if (
          this.activePage === 3 ||
          this.activePage === this.maxPage - 2
        ) {
          arr = arr.map((element) => {
            if (Math.abs(element - this.activePage) <= 3) {
              return element
            }
            return '...'
          })
        } else {
          arr = arr.map((element) => {
            if (Math.abs(element - this.activePage) <= 2) {
              return element
            }
            return '...'
          })
        }
      }
      let paginate = []
      arr.forEach((element, index) => {
        if (index === 0) {
          paginate = [element]
          return
        }
        if (index === arr.length - 1) {
          paginate.push(element)
          return
        }
        if (element !== '...') {
          paginate.push(element)
        }
      })
      return paginate
    },
  },
  methods: {
    changePage(page) {
      if (page !== '...') {
        this.$emit('changePaginate', page)
      }
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

<template>
  <nav>
    <ul class="pagination pagination-pill">
      <li class="page-item">
        <a class="page-link" href="#"><i class="mdi mdi-chevron-left"></i></a>
      </li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item active"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item">
        <a class="page-link d-none d-sm-block" href="#">4</a>
      </li>
      <li class="page-item">
        <a class="page-link d-none d-sm-block" href="#">5</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#"><i class="mdi mdi-chevron-right"></i></a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'PaginationComponents',
}
</script>

<style></style>

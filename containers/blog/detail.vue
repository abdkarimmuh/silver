<template>
  <section class="miri-ui-kit-section">
    <div class="container">
      <breadcumb-components />
      <div class="row mt-5">
        <div class="col-md-9">
          <img src="~/assets/images/team-1.jpg" class="custom-image-blog" />
          <h2 class="mt-5 mb-3">Detail</h2>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham.
          </p>
          <div class="miri-ui-kit-demo mt-4">
            <span class="badge badge-pill badge-warning">Kategori 1</span>
            <span class="badge badge-pill badge-warning">Kategori 2</span>
          </div>
          <div class="row align-items-center px-3 mt-5">
            <span class="author-pic">
              <img src="~/assets/images/face_1.jpg" />
            </span>
            <div class="author-details">
              <div class="author-name">Dominic Bowers</div>
              <div class="author-time">Publikasi pada 18 September 2021</div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <side-content-blog-components />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BreadcumbComponents from '~/components/Breadcrumb.vue'
import SideContentBlogComponents from '~/components/SideContentBlog.vue'
export default {
  name: 'DetailBlogContainers',
  components: {
    BreadcumbComponents,
    SideContentBlogComponents,
  },
}
</script>

<style scoped>
.custom-image-blog {
  width: 100%;
  height: auto;
  max-height: 320px;
  object-fit: cover;
}
</style>

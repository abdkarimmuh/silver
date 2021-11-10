<template>
  <div>
    <div v-if="type !== 'utama'" class="mb-4">
      <div class="mb-4">
        <h6 class="text-primary">Berita Terbaru</h6>
      </div>
      <div class="row px-3 mb-3">
        <img src="~/assets/images/img_1.jpg" class="custom-image-news" />
        <div class="col">
          <a
            href=""
            style="text-decoration: none"
            @click.prevent="$router.push('/news/1')"
          >
            <div class="text-dark font-weight-bold mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </div>
          </a>
          <div class="text-muted mb-2">19 September 2021</div>
        </div>
      </div>
      <div class="row px-3 mb-3">
        <img src="~/assets/images/img_2.jpg" class="custom-image-news" />
        <div class="col">
          <a
            href=""
            style="text-decoration: none"
            @click.prevent="$router.push('/news/1')"
          >
            <div class="text-dark font-weight-bold mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </div>
          </a>
          <div class="text-muted mb-2">19 September 2021</div>
        </div>
      </div>
      <div class="row px-3 mb-3">
        <img src="~/assets/images/img_3.jpg" class="custom-image-news" />
        <div class="col">
          <a
            href=""
            style="text-decoration: none"
            @click.prevent="$router.push('/news/1')"
          >
            <div class="text-dark font-weight-bold mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </div>
          </a>
          <div class="text-muted mb-2">19 September 2021</div>
        </div>
      </div>
    </div>
    <div v-if="type !== 'studio'" class="mb-4">
      <div class="mb-4">
        <h6 class="text-primary">Studio</h6>
      </div>
      <div class="row px-3 mb-3">
        <img src="~/assets/images/img_1.jpg" class="custom-image-news" />
        <div class="col">
          <a
            href=""
            style="text-decoration: none"
            @click.prevent="$router.push('/news/1')"
          >
            <div class="text-dark font-weight-bold mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </div>
          </a>
          <div class="text-muted mb-2">19 September 2021</div>
        </div>
      </div>
      <div class="row px-3 mb-3">
        <img src="~/assets/images/img_2.jpg" class="custom-image-news" />
        <div class="col">
          <a
            href=""
            style="text-decoration: none"
            @click.prevent="$router.push('/news/1')"
          >
            <div class="text-dark font-weight-bold mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </div>
          </a>
          <div class="text-muted mb-2">19 September 2021</div>
        </div>
      </div>
      <div class="row px-3 mb-3">
        <img src="~/assets/images/img_3.jpg" class="custom-image-news" />
        <div class="col">
          <a
            href=""
            style="text-decoration: none"
            @click.prevent="$router.push('/news/1')"
          >
            <div class="text-dark font-weight-bold mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </div>
          </a>
          <div class="text-muted mb-2">19 September 2021</div>
        </div>
      </div>
    </div>
    <div v-if="type !== 'masjid_community'" class="mb-4">
      <div class="mb-4">
        <h6 class="text-primary">Masid Community</h6>
      </div>
      <div class="row px-3 mb-3">
        <img src="~/assets/images/img_1.jpg" class="custom-image-news" />
        <div class="col">
          <a
            href=""
            style="text-decoration: none"
            @click.prevent="$router.push('/news/1')"
          >
            <div class="text-dark font-weight-bold mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </div>
          </a>
          <div class="text-muted mb-2">19 September 2021</div>
        </div>
      </div>
      <div class="row px-3 mb-3">
        <img src="~/assets/images/img_2.jpg" class="custom-image-news" />
        <div class="col">
          <a
            href=""
            style="text-decoration: none"
            @click.prevent="$router.push('/news/1')"
          >
            <div class="text-dark font-weight-bold mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </div>
          </a>
          <div class="text-muted mb-2">19 September 2021</div>
        </div>
      </div>
      <div class="row px-3 mb-3">
        <img src="~/assets/images/img_3.jpg" class="custom-image-news" />
        <div class="col">
          <a
            href=""
            style="text-decoration: none"
            @click.prevent="$router.push('/news/1')"
          >
            <div class="text-dark font-weight-bold mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </div>
          </a>
          <div class="text-muted mb-2">19 September 2021</div>
        </div>
      </div>
    </div>
    <div v-if="type !== 'sport'" class="mb-4">
      <div class="mb-4">
        <h6 class="text-primary">Sport</h6>
      </div>
      <div class="row px-3 mb-3">
        <img src="~/assets/images/img_1.jpg" class="custom-image-news" />
        <div class="col">
          <a
            href=""
            style="text-decoration: none"
            @click.prevent="$router.push('/news/1')"
          >
            <div class="text-dark font-weight-bold mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </div>
          </a>
          <div class="text-muted mb-2">19 September 2021</div>
        </div>
      </div>
      <div class="row px-3 mb-3">
        <img src="~/assets/images/img_2.jpg" class="custom-image-news" />
        <div class="col">
          <a
            href=""
            style="text-decoration: none"
            @click.prevent="$router.push('/news/1')"
          >
            <div class="text-dark font-weight-bold mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </div>
          </a>
          <div class="text-muted mb-2">19 September 2021</div>
        </div>
      </div>
      <div class="row px-3 mb-3">
        <img src="~/assets/images/img_3.jpg" class="custom-image-news" />
        <div class="col">
          <a
            href=""
            style="text-decoration: none"
            @click.prevent="$router.push('/news/1')"
          >
            <div class="text-dark font-weight-bold mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </div>
          </a>
          <div class="text-muted mb-2">19 September 2021</div>
        </div>
      </div>
    </div>
    <div v-if="type !== 'art_science'" class="mb-4">
      <div class="mb-4">
        <h6 class="text-primary">Art & Science</h6>
      </div>
      <div class="row px-3 mb-3">
        <img src="~/assets/images/img_1.jpg" class="custom-image-news" />
        <div class="col">
          <a
            href=""
            style="text-decoration: none"
            @click.prevent="$router.push('/news/1')"
          >
            <div class="text-dark font-weight-bold mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </div>
          </a>
          <div class="text-muted mb-2">19 September 2021</div>
        </div>
      </div>
      <div class="row px-3 mb-3">
        <img src="~/assets/images/img_2.jpg" class="custom-image-news" />
        <div class="col">
          <a
            href=""
            style="text-decoration: none"
            @click.prevent="$router.push('/news/1')"
          >
            <div class="text-dark font-weight-bold mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </div>
          </a>
          <div class="text-muted mb-2">19 September 2021</div>
        </div>
      </div>
      <div class="row px-3 mb-3">
        <img src="~/assets/images/img_3.jpg" class="custom-image-news" />
        <div class="col">
          <a
            href=""
            style="text-decoration: none"
            @click.prevent="$router.push('/news/1')"
          >
            <div class="text-dark font-weight-bold mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </div>
          </a>
          <div class="text-muted mb-2">19 September 2021</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideContentNewsListComponents',
  props: { type: { type: String, default: 'utama' } },
}
</script>

<style scoped>
.custom-image-news {
  width: 50px;
  height: 50px;
  object-fit: cover;
}
</style>
>

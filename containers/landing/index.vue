<template>
  <div>
    <!-- ABOUT -->
    <section id="about" class="pt-5"></section>
    <about-section />
    <!-- DIVISION -->
    <division-section />
    <!-- NEWS -->
    <section id="news" class="pt-5"></section>
    <news-section />
    <!-- PARTNER -->
    <partner-section />
    <!-- JOIN US -->
    <join-us-section />
    <!-- TESTIMONIAL -->
    <testimonial-section />
    <!-- BLOG -->
    <section id="blog" class="pt-5"></section>
    <blog-section />
    <!-- CONTACT -->
    <contact-section />
  </div>
</template>

<script>
import AboutSection from './about.vue'
import DivisionSection from './division.vue'
import NewsSection from './news.vue'
import PartnerSection from './partner.vue'
import JoinUsSection from './join.vue'
import TestimonialSection from './testimonial.vue'
import BlogSection from './blog.vue'
import ContactSection from './contact.vue'

export default {
  name: 'LandingContainers',
  components: {
    AboutSection,
    DivisionSection,
    NewsSection,
    PartnerSection,
    JoinUsSection,
    TestimonialSection,
    BlogSection,
    ContactSection,
  },
}
</script>

<style></style>

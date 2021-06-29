<template>
  <div class="w-100 login">
    <div class="w-100 banner">
      <img class="w-100 banner-image" src="/images/living-room-interior-with-blue-velvet-armchair-cabinet.jpg" alt="Living room interior with blue velvet armchair cabinet"/>
    </div>
    <div class="container-fluid bgColor-gray-10 pb-5">
      <div class="container">
        <div class="row hero justify-content-md-center">
          <div class="col-sm-12 col-md-10 col-lg-8 middle-align">
            <h2 class="text-center Color-gray-80 subhead mt-5 mt-lg-0 py-4">FAQ</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="w-100 banner">
      <img class="w-100 banner-image mb-5" src="/images/banner.jpg" alt="Banner"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {},
      error: ''
    }
  },
  methods: {
    
  },
  head() {
    return {
      title: `${process.env.title} | FAQ`,
      meta: [
        {
          hid: 'description',
          property: 'description',
          content: 'We only recruit the best candidates, giving you resume/CV options to go through before we set video interviews.'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${process.env.title} | FAQ`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'We only recruit the best candidates, giving you resume/CV options to go through before we set video interviews.'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${process.env.BASE}/faq`
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: `${process.env.title} | FAQ`
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: 'We only recruit the best candidates, giving you resume/CV options to go through before we set video interviews.'
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: `${process.env.BASE}/faq`,
        }
      ],
    }
  }
}
</script>
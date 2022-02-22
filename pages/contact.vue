<template>
  <div class="w-100 login">
    <div class="w-100 banner">
      <img class="w-100 banner-image" src="/images/smiling-woman.jpg" alt="Smiling Woman"/>
    </div>
    <div class="container-fluid bgColor-gray-10 pb-5">
      <div class="container">
        <div class="row hero justify-content-md-center">
          <div class="col-sm-12 col-md-5 col-lg-4">
            <p class="small mt-5">
              <br>  <span class="p-small">Corporate Office</span>
              <br>  440 US Hwy 377 Suite 1140
              <br>  Argyle, TX 76226
              <br>  (940) 757-0022 Office
              <br>  (940) 757-0045 Fax
              <br>  info@worxconnect.org
            </p>
          </div>
          <div class="col-sm-12 col-md-5 col-lg-4">
            <p class="small mt-5">
              <br>  <span class="p-small">International Office</span>
              <br>  8th Floor Joina City
              <br>  Harare, Zimbabwe
              <br>  (940) 757-0022 Office
              <br>  (940) 757-0045 Fax
              <br>  info@worxconnect.org
            </p>
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
      title: `${process.env.title} | Contact Us`,
      meta: [
        {
          hid: 'description',
          property: 'description',
          content: 'Contact us, we would love to hear from you.'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${process.env.title} | Contact Us`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Contact us, we would love to hear from you.'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://worxconnect.org/contact`
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: `${process.env.title} | Contact Us`
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: 'Contact us, we would love to hear from you.'
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: `https://worxconnect.org/contact`,
        }
      ],
    }
  }
}
</script>
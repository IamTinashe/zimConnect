<template>
  <div class="w-100 hire">
    <div class="container-fluid bgColor-gray-30 py-5">
      <div class="container">
        <div class="row hero">
          <div class="col-lg-12 middle-align">
            <p class="text-center text-hero Color-gray pb-1">
              HIRE A
              <br>
              <strong>TEAM MEMBER</strong>
            </p>
            <p class="text-center paragraph-large Color-black pb-5">
              Find a Team Member Tailored to your specification
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid bgColor-gray-10 py-5">
      <div class="container bgColor-white py-5">
        <div class="row justify-content-md-center">
          Hello World
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted(){
    
  },
  head() {
    return {
      title: `${process.env.title} | Hire`,
      meta: [
        {
          hid: 'description',
          property: 'description',
          content: ''
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${process.env.title} | Hire`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: ''
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${process.env.BASE}/hire`
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${process.env.BASE}/images/test.png`
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: `${process.env.title} | Hire`
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: ``
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: `${process.env.BASE}/images/test.png`
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: `${process.env.BASE}/hire`,
        }
      ],
    }
  }
}
</script>
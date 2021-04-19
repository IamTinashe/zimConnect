<template>
  <div class="w-100 home">
    <div class="container-fluid bgColor-gray-30 py-5">
      <div class="container">
        <div class="row hero">
          <div class="col-md-12 middle-align">
            <p class="text-center text-hero Color-gray pb-1">
              <strong style="font-weight: 600;">2500+</strong> Browse Jobs
            </p>
            <p class="text-center paragraph-large Color-black pb-5">
              Find Jobs, Employment & Career Opportunities
            </p>
            <div class="row justify-content-md-center">
              <div class="col-md-10">
                <form class="form">
                  <div class="row justify-content-md-center pb-5">
                    <div class="col-md-5">
                      <select class="px-3 select feature-paragraph Color-gray-60 mb-3">
                        <option>What are you looking for?</option>
                      </select>
                      <select class="px-3 select feature-paragraph Color-gray-60">
                        <option>All Types</option>
                      </select>
                    </div>
                    <div class="col-md-5">
                      <select class="px-3 select feature-paragraph Color-gray-60 mb-3">
                        <option>Work Schedule</option>
                      </select>
                      <select class="px-3 select feature-paragraph Color-gray-60">
                        <option>Proffession</option>
                      </select>
                    </div>
                  </div>
                  <div class="row pb-5 justify-content-md-center">
                    <div class="col-md-3">
                      <div class="button button-primary border-radius-8 w-75 py-1">
                        <i class="fa fa-search fa-1x Color-white"></i>
                        <span class="px-2">Search</span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid bgColor-gray-10 py-5">
      <div class="container">
        <div class="row justify-content-md-center">
          
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
      title: `${process.env.title} | Home`,
      meta: [
        {
          hid: 'description',
          property: 'description',
          content: ''
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${process.env.title} | Home`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: ''
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${process.env.BASE}/home`
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${process.env.BASE}/images/test.png`
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: `${process.env.title} | Home`
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
          href: `${process.env.BASE}/home`,
        }
      ],
    }
  }
}
</script>
<template>
  <div class="w-100 candidates">
    <div class="w-100 banner">
      <img class="w-100 banner-image" src="/images/people-sitting.jpg" alt="People Sitting"/>
      <div class="container">
        <h2 class="position-absolute Color-white title-large py-4 page-title">Candidates</h2>
      </div>
    </div>
    <div class="container-fluid bgColor-gray-10 py-5">
      <div class="container">
        <div class="row hero justify-content-md-center my-4">
          <div class="col-sm-12">
            <div class="card border-radius-2 box-shadow-1 text-left py-3 px-5 my-3">
              <div class="row">
                <div class="col-md-3 col-lg-2">
                  <div class="circular-portrait">
                    <img src="/images/smiling-woman-potrait.jpg" alt="Smiling Woman Potrait" class="img"/>
                  </div>
                </div>
                <div class="col-md-9 col-lg-10">
                  Info
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {

  },
  head() {
    return {
      title: `${process.env.title} | Candidates`,
      meta: [
        {
          hid: 'description',
          property: 'description',
          content: ''
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${process.env.title} | Candidates`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: ''
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${process.env.BASE}/candidates`
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${process.env.BASE}/images/test.png`
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: `${process.env.title} | Candidates`
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
          href: `${process.env.BASE}/candidates`,
        }
      ],
    }
  }
}
</script>
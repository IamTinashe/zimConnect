<template>
  <div class="w-100 register">
    <div class="container-fluid bgColor-gray-10 py-5">
      <div class="container">
        <div class="row justify-content-md-center hero">
          <div class="col-sm-12 col-md-10 col-lg-8 middle-align">
            <h2 class="text-center Color-gray-80 subhead">Register</h2>
            <form class="form pt-3">
              <label class="ml-2 Color-gray-80 feature-paragraph" for="email">Email Address*</label>
              <input type="email" id="email" class="form-input w-100 px-3 py-3 mb-4"/>

              <label class="ml-2 Color-gray-80 feature-paragraph" for="password">Password*</label>
              <input type="password" id="password" class="form-input w-100 px-3 py-3 mb-4"/>

              <label class="ml-2 Color-gray-80 feature-paragraph" for="password">Confirm Password*</label>
              <input type="password" id="confirm_password" class="form-input w-100 px-3 py-3 mb-4"/>

              <div class="button button-primary border-radius-16 py-3">
                REGISTER
              </div>
            </form>
          </div>
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
      title: `${process.env.title} | Register`,
      meta: [
        {
          hid: 'description',
          property: 'description',
          content: ''
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${process.env.title} | Register`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: ''
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${process.env.BASE}/register`
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${process.env.BASE}/images/test.png`
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: `${process.env.title} | Register`
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
          href: `${process.env.BASE}/register`,
        }
      ],
    }
  }
}
</script>
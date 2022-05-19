<template>
  <div class="w-100 login">
    <div class="w-100 banner">
      <img class="w-100 banner-image" src="/images/smiling-woman.jpg" alt="Smiling Woman"/>
    </div>
    <div class="container-fluid">
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-sm-12 col-md-8 col-lg-6">
            <span v-if="error" class="Color-red-80">{{ error }}</span>
            <form v-if="sent == false" class="form pt-3 pb-5" @submit.prevent="sendMessage()">
              <label class="ml-2 Color-gray-80 feature-paragraph" for="name">Name*</label>
              <input v-model="form.name" type="text" id="name" class="form-input w-100 px-3 py-2 py-md-3 mb-4"/>

              <label class="ml-2 Color-gray-80 feature-paragraph" for="email">Email*</label>
              <input v-model="form.email" type="email" id="email" class="form-input w-100 px-3 py-2 py-md-3 mb-4"/>

              <label class="ml-2 Color-gray-80 feature-paragraph" for="message">Message*</label>
              <textarea v-model="form.message" type="textarea" id="message" class="form-input w-100 px-3 py-2 py-md-3 mb-4"/>

              <button type="submit" class="button button-primary Color-white bgColor-primary borderColor-primary expanded border-radius-16 py-2 py-md-3">
                Send
              </button>

              <p class="title text-center my-5 Color-gray-40">OR</p>

              <Nuxt-Link to="/schedule" class="text-decoration-none">
                      <button
                        class="
                          button button-primary
                          bgColor-blue
                          py-3
                          px-5
                          my-5
                          mr-5
                          border-radius-16
                          borderColor-blue
                          body-detail
                          expanded
                        "
                      >
                        Schedule a Call
                      </button>
                    </Nuxt-Link>
            </form>
            <div v-else class="text-center">
              <h2 class="Color-gray-80 group-header mt-5 mt-lg-0 py-4">Your Message was successfully sent</h2>
              <NuxtLink to="/login" class="button button-primary Color-white bgColor-primary borderColor-primary expanded border-radius-16 py-2 py-md-3 mb-5">
                SIGN IN
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
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
              <br>  info@worxconnect.com
            </p>
          </div>
          <div class="col-sm-12 col-md-5 col-lg-4">
            <p class="small mt-5">
              <br>  <span class="p-small">International Office</span>
              <br>  8th Floor Joina City
              <br>  Harare, Zimbabwe
              <br>  (940) 757-0022 Office
              <br>  (940) 757-0045 Fax
              <br>  info@worxconnect.com
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
import contact from "@/assets/js/zimconnect/contact";
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: ""
      },
      error: '',
      sent: false
    }
  },
  methods: {
    async sendMessage(){
      try {
        const response = await contact.sendMessage(this.form);
        this.sent = true;
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
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
          content: `https://worxconnect.com/contact`
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
          href: `https://worxconnect.com/contact`,
        }
      ],
    }
  }
}
</script>
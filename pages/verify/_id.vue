<template>
  <div class="w-100 login">
    <div class="w-100 banner">
      <img class="w-100 banner-image" src="/images/living-room-interior-with-blue-velvet-armchair-cabinet.jpg" alt="Living room interior with blue velvet armchair cabinet"/>
    </div>
    <div class="container-fluid bgColor-gray-10 pb-5" v-if="verified == false">
      <div class="container">
        <div class="row hero justify-content-md-center">
          <div class="col-sm-12 col-md-10 col-lg-8 middle-align">
            <h2 class="text-center Color-gray-80 subhead mt-5 mt-lg-0 py-4">AUTHORIZE THIS USER</h2>
            <small class="text-center Color-error" v-if="error.length > 0">{{error}} </small>
            <form class="form pt-3 pb-5" @submit.prevent="userVerify()">
              <label class="ml-2 Color-gray-80 feature-paragraph" for="email">Email*</label>
              <input v-model="verify.email" type="email" id="email" class="form-input w-100 px-3 py-2 py-md-3 mb-4"/>

              <label class="ml-2 Color-gray-80 feature-paragraph" for="verificationCode">Authorization Code*</label>
              <input v-model="verify.verificationCode" type="text" id="verificationCode" class="form-input w-100 px-3 py-2 py-md-3 mb-4"/>

              <button type="submit" class="button button-primary Color-white bgColor-primary borderColor-primary expanded border-radius-16 py-2 py-md-3">
                CONFIRM
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid bgColor-gray-10 pb-5" v-else>
      <div class="container">
        <div class="row hero justify-content-md-center">
          <div class="col-sm-12 col-md-10 col-lg-8 middle-align">
            <h2 class="text-center Color-gray-80 group-header mt-5 mt-lg-0 py-4">USER WAS SUCCESSFULLY AUTHORIZED</h2>
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
import auth from "@/assets/js/zimconnect/auth";
export default {
  data() {
    return {
      verify: {
        email: '',
        verificationCode: ''
      },
      error: '',
      loggedIn: false,
      verified: false
    }
  },
  mounted(){
    this.loggedIn = this.$store.state.auth.loggedIn;
    this.verify.email = this.$route.params.id;
  },
  methods: {
    async userVerify() {
      try {
        await auth.verify(this.verify)
        .then(()=>{
          this.verified = true;
        });
      } catch (error) {
        this.error = ((typeof error.data.message === "undefined") && (error.data.message.length > 0))? error.data.message : 'Error while verifying';
      }
    },
  },
  head() {
    return {
      title: `${process.env.title} | Verify`,
      meta: [
        {
          hid: 'description',
          property: 'description',
          content: ''
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${process.env.title} | Verify`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: ''
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://worxconnect.org/verify`
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `https://worxconnect.org/images/test.png`
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: `${process.env.title} | Verify`
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: ``
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: `https://worxconnect.org/images/test.png`
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: `https://worxconnect.org/verify`,
        }
      ],
    }
  }
}
</script>
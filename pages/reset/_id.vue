<template>
  <div class="w-100 login">
    <div class="w-100 banner">
      <img class="w-100 banner-image" src="/images/living-room-interior-with-blue-velvet-armchair-cabinet.jpg" alt="Living room interior with blue velvet armchair cabinet"/>
    </div>
    <div class="container-fluid bgColor-gray-10 pb-5" v-if="confirmed == false">
      <div class="container">
        <div class="row hero justify-content-md-center">
          <div class="col-sm-12 col-md-10 col-lg-8 middle-align">
            <h2 class="text-center Color-gray-80 subhead mt-5 mt-lg-0 py-4">CREATE A NEW PASSWORD</h2>
            <small class="text-center Color-error" v-if="error.length > 0">{{error}} </small>
            <form class="form pt-3 pb-5" @submit.prevent="userReset()">
              <label class="ml-2 Color-gray-80 feature-paragraph" for="password">New Password*</label>
              <input v-model="confirm.password" type="password" id="password" class="form-input w-100 px-3 py-2 py-md-3 mb-4"/>

              <label class="ml-2 Color-gray-80 feature-paragraph" for="confirmPassword">Confirm Password*</label>
              <input v-model="confirmPassword" type="password" id="confirmPassword" class="form-input w-100 px-3 py-2 py-md-3 mb-4"/>

              <label class="ml-2 Color-gray-80 feature-paragraph" for="confirmationCode">Confirmation Code*</label>
              <input v-model="confirm.confirmationCode" type="text" id="confirmationCode" class="form-input w-100 px-3 py-2 py-md-3 mb-4"/>

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
            <h2 class="text-center Color-gray-80 group-header mt-5 mt-lg-0 py-4">PASSWORD WAS SUCCESSFULLY RESET</h2>
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
      confirm: {
        email: '',
        password: '',
        confirmationCode: ''
      },
      confirmPassword: '',
      error: '',
      loggedIn: false,
      confirmed: false
    }
  },
  mounted(){
    this.loggedIn = this.$store.state.auth.loggedIn;
    this.confirm.email = this.$route.params.id;
  },
  methods: {
    async userReset() {
      if(this.confirm.password == this.confirmPassword){
        try {
          await auth.resetPassword(this.confirm)
          .then(()=>{
            this.confirmed = true;
          });
        } catch (error) {
          this.error = ((typeof error.data.message === "undefined") && (error.data.message.length > 0))? error.data.message : 'Error while verifying';
        }
      }else{
        this.error = "Passwords do not match";
      }
    },
  },
  head() {
    return {
      title: `${process.env.title} | Reset Password`,
      meta: [
        {
          hid: 'description',
          property: 'description',
          content: ''
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${process.env.title} | Reset Password`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: ''
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${process.env.BASE}/reset`
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${process.env.BASE}/images/test.png`
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: `${process.env.title} | Reset Password`
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
          href: `${process.env.BASE}/reset`,
        }
      ],
    }
  }
}
</script>
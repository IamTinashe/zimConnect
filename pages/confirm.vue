<template>
  <div class="w-100 login">
    <div class="w-100 banner">
      <img class="w-100 banner-image" src="/images/living-room-interior-with-blue-velvet-armchair-cabinet.jpg" alt="Living room interior with blue velvet armchair cabinet"/>
    </div>
    <div class="container-fluid bgColor-gray-10 pb-5" v-if="confirmed == false">
      <div class="container">
        <div class="row hero justify-content-md-center">
          <div class="col-sm-12 col-md-10 col-lg-8 middle-align">
            <h2 class="text-center Color-gray-80 subhead mt-5 mt-lg-0 py-4">CONFIRM YOUR EMAIL</h2>
            <small class="text-center Color-error" v-if="error.length > 0">{{error}} </small>
            <form class="form pt-3 pb-5" @submit.prevent="userConfirm()">
              <label class="ml-2 Color-gray-80 feature-paragraph" for="email">Email*</label>
              <input v-model="confirm.email" type="email" id="email" class="form-input w-100 px-3 py-2 py-md-3 mb-4"/>

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
            <h2 class="text-center Color-gray-80 group-header mt-5 mt-lg-0 py-4">YOUR ACCOUNT WAS SUCCESSFULLY CONFIRMED</h2>
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
        confirmationCode: ''
      },
      error: '',
      loggedIn: false,
      confirmed: false
    }
  },
  mounted(){
    this.loggedIn = this.$store.state.auth.loggedIn;
    if(window.localStorage.getItem('id') != null) window.location.href = '/hire';
    
  },
  methods: {
    async userConfirm() {
      try {
        await auth.confirm(this.confirm)
        .then(()=>{
          this.confirmed = true;
        });
      } catch (error) {
        this.error = ((typeof error.data.message === "undefined") && (error.data.message.length > 0))? error.data.message : 'Error while confirming';
      }
    },
  },
  head() {
    return {
      title: `${process.env.title} | Confirm`,
      meta: [
        {
          hid: 'description',
          property: 'description',
          content: 'Confirm your email and get started on Zimconnect'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${process.env.title} | Confirm`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Confirm your email and get started on Zimconnect'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://zimconnect.org/confirm`
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: `${process.env.title} | Confirm`
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: 'Confirm your email and get started on Zimconnect'
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: `https://zimconnect.org/confirm`,
        }
      ],
    }
  }
}
</script>
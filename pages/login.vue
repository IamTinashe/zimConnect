<template>
  <div class="w-100 login">
    <div class="w-100 banner">
      <img class="w-100 banner-image" src="/images/living-room-interior-with-blue-velvet-armchair-cabinet.jpg" alt="Living room interior with blue velvet armchair cabinet"/>
    </div>
    <div class="container-fluid bgColor-gray-10 pb-5">
      <div class="container">
        <div class="row hero justify-content-md-center">
          <div class="col-sm-12 col-md-10 col-lg-8 middle-align">
            <h2 class="text-center Color-gray-80 subhead mt-5 mt-lg-0 py-4">LOGIN</h2>
            <small class="text-center feature-paragraph Color-error" v-if="error.length > 0">{{error}} </small>
            <form class="form pt-3 pb-5" @submit.prevent="userLogin()">
              <label class="ml-2 Color-gray-80 feature-paragraph" for="email">Email*</label>
              <input v-model="login.email" type="email" id="email" class="form-input w-100 px-3 py-2 py-md-3 mb-4"/>

              <label class="ml-2 Color-gray-80 feature-paragraph" for="password">Password*</label>
              <input v-model="login.password" type="password" id="password" class="form-input w-100 px-3 py-2 py-md-3 mb-4"/>

              <button type="submit" class="button button-primary Color-white bgColor-primary borderColor-primary expanded border-radius-16 py-2 py-md-3">
                LOGIN
              </button>
              <NuxtLink class="Color-primary float-right mt-3" to="/forgotpassword" title="Forgot Password">Forgot Password </NuxtLink>
            </form>
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
  middleware: ["auth"],
  data() {
    return {
      login: {
        email: '',
        password: ''
      },
      error: '',
      loggedIn: false
    }
  },
  mounted(){
    this.loggedIn = this.$store.state.auth.loggedIn;
    if(window.localStorage.getItem('id') != null) window.location.href = '/hire';
  },
  methods: {
    async userLogin() {
      try {
        await this.$store.dispatch("login", {email: this.login.email, password: this.login.password})
        .then(()=>{
          window.location.href = '/hire';
        });
      } catch (error) {
        this.error = error.data.message;
      }
    },
  },
  head() {
    return {
      title: `${process.env.title} | Login`,
      meta: [
        {
          hid: 'description',
          property: 'description',
          content: ''
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${process.env.title} | Login`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Login and start insourcing your next virtual assistant through WorXconnect.'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://worxconnect.com/login`
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: `${process.env.title} | Login`
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: 'Login and start insourcing your next virtual assistant through WorXconnect.'
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: `https://worxconnect.com/login`,
        }
      ],
    }
  }
}
</script>
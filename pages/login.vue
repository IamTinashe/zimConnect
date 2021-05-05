<template>
  <div class="w-100 login">
    <div class="w-100 banner">
      <img class="w-100 banner-image" src="/images/living-room-interior-with-blue-velvet-armchair-cabinet.jpg" alt="Living room interior with blue velvet armchair cabinet"/>
    </div>
    <div class="container-fluid bgColor-gray-10 pb-5">
      <div class="container">
        <div class="row hero justify-content-md-center">
          <div class="col-sm-12 col-md-10 col-lg-8 middle-align">
            <h2 class="text-center Color-gray-80 subhead py-4">LOGIN</h2>
            <form class="form pt-3 pb-5" @submit.prevent="userLogin">
              <label class="ml-2 Color-gray-80 feature-paragraph" for="username">Username*</label>
              <input v-model="login.username" type="text" id="username" class="form-input w-100 px-3 py-3 mb-4"/>

              <label class="ml-2 Color-gray-80 feature-paragraph" for="password">Password*</label>
              <input v-model="login.password" type="password" id="password" class="form-input w-100 px-3 py-3 mb-4"/>

              <button type="submit" class="button button-primary Color-white bgColor-primary borderColor-primary expanded border-radius-16 py-3">
                LOGIN
              </button>
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
  data() {
    return {
      login: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async userLogin() {
      try {
        let res = await this.$auth.loginWith('local', { data: {'username': this.login.username, 'password' : this.login.password}});
        console.log(res);
        //.then(this.$router.push('/hire'));
      } catch (error) {
        console.log(error)
      }
    }
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
          content: ''
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${process.env.BASE}/login`
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${process.env.BASE}/images/test.png`
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: `${process.env.title} | Login`
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
          href: `${process.env.BASE}/login`,
        }
      ],
    }
  }
}
</script>
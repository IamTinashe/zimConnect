<template>
  <div class="header position-fixed w-100 z-index-10">
    <div class="container-fluid px-4 py-4 bgColor-primary">
      <div class="row justify-content-md-center mx-lg-2">
        <div class="show-large-only col-md-6 Color-white">
          <span>PHONE: +75 8746 958</span>
          <span class="ml-2">EMAIL: ZIMCONNECT@ZIMWORX.COM</span>
        </div>
        <div class="show-large-only col-md-3 col-lg-4"></div>
        <div class="col-sm-12 col-md-3 col-lg-2 text-right">
          <NuxtLink class="Color-white text-decoration-none" to="/register" title="Register">
            <span class="mr-5">SIGNUP</span>
          </NuxtLink>
          <NuxtLink class="Color-white text-decoration-none" to="/login" title="Login">
            <span>SIGNIN</span>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div
      class="container-fluid py-3 position-absolute z-index-2"
      v-bind:class="{ bgColorPrimary: isActive, bgColorWhite: !isActive }"
    >
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-sm-12 col-md-2 col-lg-3">
            <transition name="fade" mode="out-in">
              <img :src="logo" class="logo" alt="ZimConnect" title="ZimConnect"/>
            </transition>
          </div>
          <div class="show-large-only col-md-10 col-lg-6">
            <ul class="body-detail mt-3" v-bind:class="{ ColorWhite: isActive, ColorGray: !isActive }">
              <li class="display-inline mx-2">
                <NuxtLink class="text-decoration-none" to="/" title="Home" v-bind:class="{ ColorWhite: isActive, ColorGray: !isActive }">
                  Home
                </NuxtLink>
              </li>
              <li class="display-inline mx-2">Jobs</li>
              <li class="display-inline mx-2">Candidates</li>
              <li class="display-inline mx-2">Employers</li>
              <li class="display-inline mx-2">Contact Us</li>
              <li class="display-inline mx-2"><i class="fa fa-search"></i></li>
            </ul>
          </div>
          <div class="show-large-only col-lg-3">
            <div v-if="loggedIn" class="text-decoration-none" title="Login">
              <div class="button button-primary border-radius-8 contracted" @click="logout()">
                LOGOUT
              </div>
            </div>
            <NuxtLink v-else class="text-decoration-none" to="/login" title="Login">
              <div class="button button-primary border-radius-8 contracted">
                FOR EMPLOYERS
              </div>
            </NuxtLink>
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
      isActive: true,
      scroll: 1,
      logo: '/icons/logo-white.png',
      loggedIn: false
    }
  },
  mounted () {
    console.log(this.$store.state.auth);
    document.addEventListener('scroll', this.handleScroll);
    this.loggedIn = this.$store.state.auth.loggedIn;
  },
  methods: {
    async logout() {
      await this.$store.dispatch('logout')
      .then(async ()=> {
        await this.$auth.logout();
        window.location.href = '/';
      })
    },
    handleScroll (event) {
      this.scroll = window.scrollY || window.scrollTop
      if(this.scroll < 5 || typeof(this.scroll) == 'undefined'){
        this.isActive = true;
        this.logo = '/icons/logo-white.png'
      }
      else{
        this.isActive = false;
        this.logo = '/icons/logo.png'
      }
    }
  }
}
</script>

<style scoped>
  .bgColorPrimary {
    transition: background-color 1s ease;
  }
  .bgColorWhite {
    transition: background-color 1s ease;
    background-color: #ffffff;
  }

  .ColorWhite {
    transition: color 1s ease;
    color: #ffffff;
  }
  .ColorGray {
    transition: color 1s ease;
    color: #818181;
  }
</style>

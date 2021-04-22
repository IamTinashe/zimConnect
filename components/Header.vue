<template>
  <div class="header">
    <div class="container-fluid px-4 py-4 bgColor-primary">
      <div class="row justify-content-md-center mx-lg-2">
        <div class="col-md-5 Color-white">
          <span>PHONE: +75 8746 958</span>
          <span class="ml-2">EMAIL: ZIMCONNECT@ZIMWORX.COM</span>
        </div>
        <div class="col-md-4 col-lg-5"></div>
        <div class="col-md-3 col-lg-2 text-right">
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
          <div class="col-md-3">
            <transition name="fade" mode="out-in">
              <img :src="logo" class="logo" alt="ZimConnect" title="ZimConnect"/>
            </transition>
          </div>
          <div class="col-md-6">
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
          <div class="col-md-3">
            <NuxtLink class="text-decoration-none" to="/login" title="Login">
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
      logo: '/icons/logo-white.png'
    }
  },
  mounted () {
    document.addEventListener('scroll', this.handleScroll);
  },
  methods: {
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
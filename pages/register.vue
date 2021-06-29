<template>
  <div class="w-100 register">
    <div class="w-100 banner">
      <img class="w-100 banner-image" src="/images/living-room-interior-with-blue-velvet-armchair-cabinet.jpg" alt="Living room interior with blue velvet armchair cabinet"/>
    </div>
    <div class="container-fluid bgColor-gray-10 pb-5">
      <div class="container">
        <div class="row justify-content-md-center pt-5 pt-lg-0 hero" v-if="message.length <= 0">
          <div class="col-sm-12 col-md-10 col-lg-8 middle-align">
            <h2 class="text-center Color-gray-80 subhead mt-5">Register</h2>
            <small class="text-center Color-error" v-if="error.length > 0">{{error}} </small>
            <form class="form pt-3" @submit.prevent="register()">
              <label class="ml-2 Color-gray-80 feature-paragraph" for="fullname">Fullname*</label>
              <input v-model="user.fullname" type="text" id="fullname" class="form-input w-100 px-3 py-2 py-lg-3 mb-4" required/>

              <label class="ml-2 Color-gray-80 feature-paragraph" for="username">Username*</label>
              <input v-model="user.username" type="text" id="username" class="form-input w-100 px-3 py-2 py-lg-3 mb-4" required/>

              <label class="ml-2 Color-gray-80 feature-paragraph" for="email">Email Address*</label>
              <input v-model="user.email" type="email" id="email" class="form-input w-100 px-3 py-2 py-lg-3 mb-4" required/>

              <label class="ml-2 Color-gray-80 feature-paragraph" for="company">Company*</label>
              <input v-model="user.companyID" type="text" id="company" class="form-input w-100 px-3 py-2 py-lg-3 mb-4" required/>

              <label class="ml-2 Color-gray-80 feature-paragraph" for="password">Password*</label>
              <input  v-model="user.password" type="password" id="password" class="form-input w-100 px-3 py-2 py-lg-3 mb-4" required/>

              <label class="ml-2 Color-gray-80 feature-paragraph" for="password">Confirm Password*</label>
              <input v-model="confirmpass" type="password" id="confirm_password" class="form-input w-100 px-3 py-2 py-lg-3 mb-4" required/>

              <button class="button button-primary Color-white bgColor-primary borderColor-primary border-radius-16 w-100 py-2 py-lg-3">
                REGISTER
              </button>
            </form>
          </div>
        </div>
        <div class="row justify-content-md-center pt-5 pt-lg-0 hero" v-else>
          <div class="col-sm-12 col-md-10 col-lg-8 middle-align">
            <h2 class="text-center Color-gray-80 group-header mt-5">Your Account was successfully created! We have sent a confirmation email to {{user.email}}</h2>
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
import company from "@/assets/js/zimconnect/company";
import users from "@/assets/js/zimconnect/users";
export default {
  middleware: ["auth"],
  data() {
    return {
      allCompanies: [],
      user: {
        fullname: '',
        username: '',
        email: '',
        companyID: '',
        password: '',
        roles: ["user", "mod"]
      },
      confirmpass: '',
      error: '',
      message: ''
    };
  },
  async mounted() {
    await this.getCompanies();
  },
  methods: {
    async getCompanies() {
      this.allCompanies = await company.getCompanies();
    },
    async register(){
      if (this.validateEmail(this.user.email)){
        if(this.validatePassword(this.user.password)){
          if(this.confirmPassword()){
            if(this.validateUsername(this.user.username)){
              try {
                let response = await users.addUser(this.user);
                this.message = response.message;
              }catch(error){
                this.error = error.data.message;
              }
            }else{
              this.error = 'Please remove any special characters in your username'
            }
          }else {
            this.error = 'Passwords do not match. Please confirm your password.'
          }
        }
      }else{
        this.error = 'Please enter a valid email address'
      }
    },
    validateEmail(email){
      return (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
    },
    confirmPassword(){
      return this.confirmpass == this.user.password;
    },
    validatePassword(password){
      let lowerCaseLetters = /[a-z]/g;
      let upperCaseLetters = /[A-Z]/g;
      let numbers = /[0-9]/g;
      if(!password.match(lowerCaseLetters)){
        this.error = 'Your password needs to have at least 1 lowercase letter';
        return false;
      }

      if(!password.match(upperCaseLetters)){
        this.error = 'Your password needs to have at least 1 uppercase letter';
        return false;
      }

      if(!password.match(numbers)){
        this.error = 'Your password needs to have at least 1 digit';
        return false;
      }

      if(password.length < 8){
        this.error = 'Your password needs to be at least 8 characters long';
        return false;
      }

      return true;
    },
    validateUsername(username){
      return (
        !username.startsWith(".") &&
        !username.startsWith("_") &&
        !username.endsWith(".") &&
        !username.endsWith("_") &&
        !username.includes("..") &&
        !username.includes("__") &&
        !username.includes("._") &&
        !username.includes(" ") &&
        !username.includes("'") &&
        !username.includes("_.")
      );
    }
  },
  head() {
    return {
      title: `${process.env.title} | Register`,
      meta: [
        {
          hid: 'description',
          property: 'description',
          content: 'Register and start insourcing your next virtual assistant through Zimconnect.'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${process.env.title} | Register`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Register and start insourcing your next virtual assistant through Zimconnect.'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${process.env.BASE}/register`
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: `${process.env.title} | Register`
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: 'Register and start insourcing your next virtual assistant through Zimconnect.'
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
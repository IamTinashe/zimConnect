<template>
  <div class="w-100 hire">
    <div class="container-fluid bg-image py-5">
      <div class="container">
        <div class="row justify-content-md-center hero">
          <div class="col-12 middle-align">
            <p class="text-center text-hero Color-white pt-5 mt-5 pb-1">
              HIRE A
              <br />
              <strong>TEAM MEMBER</strong>
            </p>
            <p class="text-center paragraph-large Color-white pb-5">
              Find a Team Member Tailored to your specification
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid bgColor-gray-10 py-5">
      <div class="container bgColor-white py-5">
        <div class="row justify-content-md-center">
          <div class="col-sm-12 col-md-11">
            <div class="meter mb-5">
              <span style="width: 20%"><span class="progress"></span></span>
            </div>
            <div class="sectionFocus w-100 position-relative pb-5 mb-5">
              <span
                class="bgColor-gray group-header Color-white left ml-2 py-2 py-sm-3 px-3 px-sm-4"
                >1</span
              >
              <span
                class="bgColor-gray-10 group-header Color-gray left ml-2 py-2 py-sm-3 px-3 px-sm-4"
                >2</span
              >
              <span
                class="bgColor-gray-10 group-header Color-gray left ml-2 py-2 py-sm-3 px-3 px-sm-4"
                >3</span
              >
              <span
                class="bgColor-gray-10 group-header Color-gray left ml-2 py-2 py-sm-3 px-3 px-sm-4"
                >4</span
              >
            </div>
            <div class="row position-relative mb-0 text-center-sm-left">
              <div class="col-sm-12 col-md-7 col-lg-8 mb-5">
                <h3 class="group-header Color-gray-60 mb-lg-2">SELECT THE PROPER</h3>
                <h2 class="section-header Color-primary mb-4">CATEGORY COMPANY</h2>
                <div class="companies">
                  <label class="mb-2" v-for="(company, index) in allCompanies" :key="index">
                    <input v-model="profile.company" type="radio" name="radio" />
                    <div class="box text-left text-regular pl-3 mr-0 mr-sm-3 pt-2">
                      <span>{{company.name}}</span>
                    </div>
                  </label>
                </div>
              </div>
              <div class="col-sm-12 col-md-5 col-lg-4 mb-5">
                <img
                  class="w-100"
                  src="/images/black-office-folders-3d-illustration.jpg"
                  alt="black office folders 3d illustration"
                />
              </div>
            </div>
            <hr class=" w-100 Color-gray-40 bgColor-gray-40 border-line">

            <div class="row position-relative mt-5 mb-0">
              <div class="col-sm-12 col-md-6 col-lg-3" v-for="(position, index) in positions" :key="index">
                <div class="w-100">
                  <div class="bgColor-primary text-center Color-white py-2 p-small w-100">
                    {{position.name}}
                  </div>
                  <div class="bgColor-gray-20 Color-black text-regular p-3 w-100">
                    <p v-for="(role, i) in position.positions" :key="i">
                      {{role}}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import company from '@/assets/js/zimconnect/company';
import positions from '@/assets/js/zimconnect/positions';
export default {
  data() {
    return {
      allCompanies: [],
      profile: {
        company: ''
      },
      positions: {},
      token: window.localStorage.getItem('undefined_token.local')
    }
  },
  async mounted() {
    await this.getCompanies();
    await this.getPositions();
  },
  methods: {
    async getCompanies(){
      this.allCompanies = await company.getCompanies(this.token);
    },
    async getPositions(){
      this.positions = await positions.getPositions(this.token);
      console.log(this.positions)
    }
  },
  head() {
    return {
      title: `${process.env.title} | Hire`,
      meta: [
        {
          hid: "description",
          property: "description",
          content: "",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: `${process.env.title} | Hire`,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: `${process.env.BASE}/hire`,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: `${process.env.BASE}/images/test.png`,
        },
        {
          hid: "twitter:title",
          property: "twitter:title",
          content: `${process.env.title} | Hire`,
        },
        {
          hid: "twitter:description",
          property: "twitter:description",
          content: ``,
        },
        {
          hid: "twitter:image",
          property: "twitter:image",
          content: `${process.env.BASE}/images/test.png`,
        },
      ],
      link: [
        {
          rel: "canonical",
          href: `${process.env.BASE}/hire`,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.meter {
  height: 15px;
  position: relative;
  background: #ffffff;
  overflow: hidden;
  border: 1px solid #2bbdb9;
  span {
    display: block;
    height: 100%;
  }
  .progress {
    background-color: #2bbdb9;
    animation: progressBar 3s ease-in-out;
    animation-fill-mode: both;
    border-radius: 0px;
  }
}

@keyframes progressBar {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
</style>
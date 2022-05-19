<template>
  <div class="w-100 candidates">
    <div class="w-100 banner">
      <img
        class="w-100 banner-image"
        src="/images/people-sitting.jpg"
        alt="People Sitting"
      />
      <div class="container">
        <h2 class="position-absolute Color-white title-large py-4 page-title">
          My Candidates
        </h2>
      </div>
    </div>
    <div class="container-fluid bgColor-gray-10 py-5">
      <div class="container">
        <div
          v-if="loader == true"
          class="row justify-content-md-center bgColor-white my-4"
        >
          <div class="col-sm-12 col-md-2">
            <img src="/images/spinner.gif" alt="spinner" />
          </div>
        </div>
        <div v-else class="row hero justify-content-md-center my-4">
          <div class="col-12">
            <div
              class="row my-2 p-4 bgColor-white"
              v-if="shortlisted.length > 0"
            >
              <div class="col-12">
                <h3 class="title Color-black">In Consideration</h3>
                <div
                  class="short-profile w-100 my-1"
                  v-for="(value, index) in shortlisted"
                  :key="index"
                >
                  <div class="w-90 float-left">
                    <div class="w-100">
                      <div class="float-left w-50">{{ value.fullname }}</div>
                      <div class="float-left w-50">
                        {{ getAge(value.dob) }} Years
                      </div>
                    </div>
                    <div class="w-100">
                      <div class="float-left w-50" v-if="value.profession">
                        {{ value.profession }}
                      </div>
                      <div class="float-left w-50" v-else>
                        Profession Not Specified
                      </div>
                      <div class="float-left w-50" v-if="value.gender">
                        {{ value.gender }}
                      </div>
                      <div class="float-left w-50" v-else>
                        Gender Not Specified
                      </div>
                    </div>
                    <div v-for="(education, i) in value.education" :key="i">
                      <div class="float-left w-50">{{ education.title }}</div>
                      <div class="float-left w-50">{{ education.academy }}</div>
                    </div>
                    <div class="float-left w-50" v-if="value.audioclip_url">
                      <audio class="audio float-left w-80 my-3" controls>
                        <source :src="value.audioclip_url" type="audio/mpeg" />
                      </audio>
                    </div>
                  </div>
                  <!-- <div class="w-10 float-left">
                    <p class="text-center">
                      <i
                        @click="removeShortlisted(value.email)"
                        class="fa Color-blue remove-candidate fa-2x fa-trash"
                        aria-hidden="true"
                      ></i>
                    </p>
                    <p class="pb-0 mb-0 text-center">${{ value.value }}</p>
                  </div> -->
                </div>
                <!-- <div class="total">
                  <div class="float-left w-90">Total</div>
                  <div class="float-left text-center w-10">
                    ${{ totalShortlistedValue }}
                  </div>
                </div> -->
                <div class="row justify-content-md-center">
                  <div class="col-12 col-md-8">
                    <div class="w-100 d-inline-flex">
                    <button
                      class="
                        button button-primary
                        bgColor-blue
                        py-3
                        px-5
                        my-5
                        ml-5
                        border-radius-16
                        borderColor-blue
                        body-detail
                      "
                      @click="sendQuote()"
                    >
                      Get a Quote
                    </button>
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
                        "
                      >
                        Schedule a Call
                      </button>
                    </Nuxt-Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="row hero justify-content-md-center bgColor-white my-4"
              v-if="quoteSent"
            >
              <div class="col-8">
                <p class="text-center paragraph-large my-5">
                  Your quote has been sent to your email. Zimworx and the
                  candidates will be notified that you are interested in the
                  candidates' profiles.
                </p>
                <NuxtLink to="/hire" title="Search More">
                  <button
                    class="
                      button button-primary
                      bgColor-light-blue
                      py-2
                      px-5
                      mb-5
                      border-radius-16
                      borderColor-light-blue
                      body-detail
                    "
                  >
                    Search More
                  </button>
                </NuxtLink>
              </div>
            </div>
            <div class="row my-2 p-4 bgColor-white" v-if="selected.length > 0">
              <div class="col-12">
                <h3 class="title Color-black">Selected Candidates</h3>
                <div
                  class="short-profile w-100 my-1"
                  v-for="(value, index) in selected"
                  :key="index"
                >
                  <div class="w-90 float-left">
                    <div class="w-100">
                      <div class="float-left w-50">{{ value.fullname }}</div>
                      <div class="float-left w-50">
                        {{ getAge(value.dob) }} Years
                      </div>
                    </div>
                    <div class="w-100">
                      <div class="float-left w-50">{{ value.profession }}</div>
                      <div class="float-left w-50">{{ value.gender }}</div>
                    </div>
                    <div v-for="(education, i) in value.education" :key="i">
                      <div class="float-left w-50">{{ education.title }}</div>
                      <div class="float-left w-50">{{ education.academy }}</div>
                    </div>
                    <audio
                      class="audio mx-2"
                      controls
                      v-if="value.audioclip_url"
                    >
                      <source :src="value.audioclip_url" type="audio/mpeg" />
                    </audio>
                  </div>
                  <!-- <div class="w-10 float-left">
                    <p class="pb-0 mb-0 text-center">${{ value.value }}</p>
                  </div> -->
                </div>
                <!-- <div class="total">
                  <div class="float-left w-90">Total</div>
                  <div class="float-left w-10 text-center">
                    ${{ totalSelectedValue }}
                  </div>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import users from "@/assets/js/zimconnect/users";
import shortlist from "@/assets/js/zimconnect/shortlist";
export default {
  data() {
    return {
      shortlisted: [],
      selected: [],
      loader: false,
      userEmail: "",
      user: {},
      error: "",
      totalShortlistedValue: 0,
      totalSelectedValue: 0,
      quoteSent: false,
    };
  },
  async mounted() {
    this.loader = true;
    if (localStorage.getItem("loggedIn") === null) {
      this.$router.push({ name: "login" });
    } else {
      this.userEmail = window.localStorage.getItem("email");
      this.getCandidates();
    }
    this.loader = false;
  },
  methods: {
    async getCandidates() {
      this.user = await users.getUserByEmail(this.userEmail);
      this.selected = [];
      this.shortlisted = [];
      this.user.myCandidates.forEach((element) => {
        if (element.availability == true) {
          this.shortlisted.push(element);
          this.totalShortlistedValue = this.getShortlistedTotal();
        } else {
          this.selected.push(element);
          this.totalSelectedValue = this.getSelectedTotal();
        }
      });
    },
    getShortlistedTotal() {
      let total = 0;
      this.shortlisted.forEach((element) => {
        total += element.value;
      });
      return total;
    },
    getSelectedTotal() {
      let total = 0;
      this.selected.forEach((element) => {
        total += element.value;
      });
      return total;
    },
    async removeShortlisted(candidateEmail) {
      try {
        await shortlist.removeShortlist({
          candidateEmail: candidateEmail,
          userEmail: this.userEmail,
        });
        this.user = await users.getUserByEmail(this.userEmail);
        await this.getCandidates();
      } catch (error) {
        console.error(error);
      }
    },
    activateModal(cv) {
      this.activeCV = cv;
      this.modalActive = true;
    },
    getAge(dob) {
      let birthday = +new Date(dob);
      return ~~((Date.now() - birthday) / 31557600000);
    },
    async sendQuote() {
      let data = {
        email: this.userEmail,
        candidates: this.shortlisted.map((a) => a.email),
      };
      await shortlist.select(data).then(async () => {
        await this.getCandidates();
      });
      this.quoteSent = true;
    },
  },
  head() {
    return {
      title: `${process.env.title} | My Candidates`,
      meta: [
        {
          hid: "description",
          property: "description",
          content: "Shortlisted candidates",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: `${process.env.title} | My Candidates`,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "Shortlisted candidates",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: `https://worxconnect.com/candidates`,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: `https://worxconnect.com/images/test.png`,
        },
        {
          hid: "twitter:title",
          property: "twitter:title",
          content: `${process.env.title} | My Candidates`,
        },
        {
          hid: "twitter:description",
          property: "twitter:description",
          content: "Shortlisted candidates",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: `https://worxconnect.com/candidates`,
        },
      ],
    };
  },
};
</script>
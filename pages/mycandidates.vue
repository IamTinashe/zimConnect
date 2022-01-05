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
                <h3 class="title Color-black">Shortlisted Candidates</h3>
                <div
                  class="short-profile w-100"
                  v-for="(value, index) in shortlisted"
                  :key="index"
                >
                  <div class="w-90 float-left">
                    <div class="w-100">
                      <div class="float-left w-40">{{ value.fullname }}</div>
                      <div class="float-left w-60">
                        {{ getAge(value.dob) }} Years
                      </div>
                    </div>
                    <div class="w-100">
                      <div class="float-left w-40">{{ value.profession }}</div>
                      <div class="float-left w-60">{{ value.gender }}</div>
                    </div>
                    <div v-for="(education, i) in value.education" :key="i">
                      <div class="float-left w-40">{{ education.title }}</div>
                      <div class="float-left w-60">{{ education.academy }}</div>
                    </div>
                    <audio
                      class="audio mx-2"
                      controls
                      v-if="value.audioclip_url"
                    >
                      <source :src="value.audioclip_url" type="audio/mpeg" />
                    </audio>
                  </div>
                  <div class="w-10 float-left">
                    <p class="pb-0 mb-0 text-center">${{ value.value }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row my-2 p-4 bgColor-white" v-if="selected.length > 0">
              <div class="col-12">
                <h3 class="title Color-black">Selected Candidates</h3>
                <div
                  class="short-profile w-100"
                  v-for="(value, index) in selected"
                  :key="index"
                >
                  <div class="w-90 float-left">
                    <div class="w-100">
                      <div class="float-left w-40">{{ value.fullname }}</div>
                      <div class="float-left w-60">
                        {{ getAge(value.dob) }} Years
                      </div>
                    </div>
                    <div class="w-100">
                      <div class="float-left w-40">{{ value.profession }}</div>
                      <div class="float-left w-60">{{ value.gender }}</div>
                    </div>
                    <div v-for="(education, i) in value.education" :key="i">
                      <div class="float-left w-40">{{ education.title }}</div>
                      <div class="float-left w-60">{{ education.academy }}</div>
                    </div>
                    <audio
                      class="audio mx-2"
                      controls
                      v-if="value.audioclip_url"
                    >
                      <source :src="value.audioclip_url" type="audio/mpeg" />
                    </audio>
                  </div>
                  <div class="w-10 float-left">
                    <p class="pb-0 mb-0 text-center">${{ value.value }}</p>
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
import users from "@/assets/js/zimconnect/users";
import resumes from "@/assets/js/zimconnect/resumes";
import shortlist from "@/assets/js/zimconnect/shortlist";
export default {
  data() {
    return {
      shortlisted: [],
      selected: [],
      loader: false,
      userEmail: "",
      user: {},
      myCandidatesLength: 0,
      error: "",
    };
  },
  async mounted() {
    this.loader = true;
    if (localStorage.getItem("loggedIn") === null) {
      this.$router.push({ name: "login" });
    } else {
      this.userEmail = window.localStorage.getItem("email");
      this.user = await users.getUserByEmail(this.userEmail);
      this.myCandidatesLength = this.user.myCandidates.length;
      this.getShortList();
    }
    this.loader = false;
  },
  methods: {
    getShortList() {
      this.user.myCandidates.forEach((element) => {
        if (element.availability == true) {
          this.shortlisted.push(element);
        } else {
          this.selected.push(element);
        }
      });
    },
    async removeShortlisted(candidateEmail) {
      try {
        await shortlist.removeShortlist({
          candidateEmail: candidateEmail,
          userEmail: this.userEmail,
        });
        this.user = await users.getUserByEmail(this.userEmail);
        await this.getResults(this.items);
        this.myCandidatesLength = this.user.myCandidates.length;
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
    showQuote(cv) {
      this.quoteActive = true;
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
          content: `https://zomconnect.org/candidates`,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: `https://zomconnect.org/images/test.png`,
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
          href: `https://zomconnect.org/candidates`,
        },
      ],
    };
  },
};
</script>
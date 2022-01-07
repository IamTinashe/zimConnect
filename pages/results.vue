<template>
  <div class="w-100 hire">
    <div class="container-fluid bg-image">
      <div class="loading" v-if="loading">Loading&#8230;</div>
      <div class="container wrapper">
        <div class="row justify-content-md-center hero">
          <div class="col-12 middle-align mt-5">
            <div class="w-100 position-absolute mt-5"></div>
            <p class="text-center text-hero Color-white pt-5 mt-5 pb-1">
              HIRE A
              <br />
              <strong>TEAM MEMBER</strong>
            </p>
            <p class="text-center paragraph-large Color-white pb-5">
              Find a Team Member tailored to your specification
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid bgColor-gray-10 py-5">
      <div class="container" v-if="allResumes.length > 0">
        <div class="row">
          <div class="col-12 col-sm-2">
            <NuxtLink
              to="/hire"
              class="
                button button-primary
                Color-white
                bgColor-primary
                borderColor-primary
                border-radius-1
                p-3
                mb-5
                p-small
              "
            >
              BACK TO SEARCH
            </NuxtLink>
          </div>
          <div class="col-12 col-sm-8">
            <input
              v-model="searchValue"
              type="text"
              id="searchValue"
              class="form-input border-none w-80 px-3 py-3 float-left"
            />
            <button
              class="
                button button-primary
                Color-white
                bgColor-primary
                borderColor-primary
                border-radius-1
                p-3
                w-20
                mb-5
                p-small
                float-left
              "
              @click="searchCandidates()"
            >
              SEARCH
            </button>
          </div>
          <div class="col-12 col-sm-2">
            <NuxtLink to="/mycandidates" title="My Candidates">
              <button
                v-if="!search"
                class="
                  button button-primary
                  Color-white
                  bgColor-light-blue
                  borderColor-light-blue
                  border-radius-1
                  px-2
                  py-3
                  p-small
                "
              >
                {{ myCandidatesLength }} Candidates Listed
              </button>
            </NuxtLink>
          </div>
        </div>
        <div class="row hero justify-content-md-center my-4">
          <div class="col-sm-12">
            <div
              class="
                card
                border-radius-2
                box-shadow-1
                text-left
                py-4
                px-2 px-lg-5
                my-3
              "
              v-for="(value, index) in max"
              :key="'max' + index"
            >
              <div class="row">
                <div class="col-md-3 col-lg-2">
                  <div class="circular-portrait">
                    <img
                      src="/images/placeholder-male.png"
                      :alt="allResumes[index].fullname"
                      class="img"
                    />
                  </div>
                </div>
                <div class="col-md-9 col-lg-10">
                  <p class="paragraph-large mb-0 pb-0">
                    {{ allResumes[index].fullname }}
                  </p>
                  <div class="row mb-2">
                    <div class="col-12">
                      <span
                        class="small"
                        v-for="(value, i) in allResumes[index].education"
                        :key="i"
                      >
                        {{ allResumes[index].education[i].title.toUpperCase()
                        }}<br />
                      </span>
                    </div>
                  </div>
                  <div class="row mb-4">
                    <div class="col-12">
                      <span
                        class="
                          small
                          Color-white
                          bgColor-primary
                          mr-2
                          border-radius-2
                          px-2
                        "
                        v-for="(skill, index) in allResumes[index].skills"
                        :key="'ski' + index"
                        >{{ skill.toUpperCase() }}
                      </span>
                    </div>
                  </div>
                  <button
                    class="
                      button button-primary
                      bgColor-primary
                      py-1
                      px-4
                      border-radius-8
                      float-left
                      borderColor-primary
                      text-regular
                    "
                    @click="activateModal(allResumes[index])"
                  >
                    View CV
                  </button>
                  <button
                    class="
                      button button-primary
                      bgColor-light-blue
                      py-1
                      px-4
                      border-radius-8
                      float-left
                      borderColor-light-blue
                      text-regular
                      ml-2
                    "
                    v-if="allResumes[index].cv_url"
                  >
                    <a
                      :href="allResumes[index].cv_url"
                      class="Color-white"
                      download="resume"
                      >Download CV</a
                    >
                  </button>
                  <audio
                    class="audio mx-2"
                    controls
                    v-if="allResumes[index].audioclip_url"
                  >
                    <source
                      :src="allResumes[index].audioclip_url"
                      type="audio/mpeg"
                    />
                  </audio>
                  <button
                    class="
                      button button-primary
                      bgColor-light-blue
                      py-1
                      px-4
                      mx-2
                      border-radius-8
                      float-left
                      borderColor-light-blue
                      text-regular
                    "
                    v-if="
                      allResumes[index].availability == true &&
                      allResumes[index].selectionStatus.length > 0 &&
                      allResumes[index].selectionStatus[0].user == userEmail
                    "
                    @click="removeShortlisted(allResumes[index].email)"
                  >
                    Remove Shortlisted
                  </button>
                  
                  <button
                    class="
                      button button-primary
                      bgColor-light-blue
                      py-1
                      px-4
                      mx-2
                      border-radius-8
                      float-left
                      borderColor-light-blue
                      text-regular
                    "
                    v-if="
                      allResumes[index].availability == true &&
                      allResumes[index].selectionStatus.length > 0 &&
                      allResumes[index].selectionStatus[0].user != userEmail ||
                      allResumes[index].availability == true &&
                      allResumes[index].selectionStatus.length == 0
                    "
                    @click="shortlist(allResumes[index].email)"
                  >
                    Shortlist
                  </button>
                  <p
                    class="py-1 px-4 mx-2 float-left small"
                    v-if="allResumes[index].availability == false"
                  >
                    Already Selected
                  </p>
                  <p
                    class="py-1 px-4 mx-2 float-left small"
                    v-if="allResumes[index].views"
                  >
                    {{ allResumes[index].views }} Views
                  </p>
                </div>
              </div>
            </div>
            <p class="text-right cursor-pointer" @click="max = max + 5">More</p>
            <div class="z-index-10 candidate-modal" v-if="modalActive">
              <span
                @click="(modalActive = false), (quoteActive = false)"
                class="close"
              ></span>
              <div class="container">
                <div
                  class="
                    card
                    bgColor-white
                    border-radius-2
                    box-shadow-1
                    my-4
                    py-5
                    px-5
                  "
                >
                  <h2 class="text-left title-large mb-1">
                    {{ activeCV.id }}
                    <span
                      v-if="activeCV.availability == false"
                      @click="shortlistCandidate(activeCV)"
                      class="
                        text-right
                        float-right
                        bgColor-primary
                        Color-white
                        text-regular
                        p-3
                        border-radius-4
                        cursor-pointer
                      "
                      >Consider For Interview</span
                    >
                    <span
                      v-else-if="activeCV.myaccount == true"
                      @click="removeShortlistCandidate(activeCV)"
                      class="
                        text-right
                        float-right
                        bgColor-gray-20
                        Color-white
                        text-regular
                        p-3
                        border-radius-4
                        cursor-pointer
                      "
                      >Remove From Interview List</span
                    >
                  </h2>
                  <p class="text-left body-detail mb-5 Color-black">
                    {{ activeCV.profession.toUpperCase() }}
                  </p>
                  <div class="row mb-5">
                    <div class="col-sm-12 col-md-7">
                      <p class="text-left body-detail mb-1 Color-black">
                        EDUCATION
                      </p>
                      <p
                        class="text-regular text-left Color-gray-60 mb-1"
                        v-for="(qualification, index) in activeCV.education"
                        :key="'qual' + index"
                      >
                        <span class="feature-paragraph">{{
                          qualification.title.toUpperCase()
                        }}</span
                        ><br />
                        <span class="small-thick">{{
                          qualification.academy.toUpperCase()
                        }}</span>
                        <br />
                        <span class="small">{{
                          qualification.description.toUpperCase()
                        }}</span
                        ><br /><br />
                      </p>
                      <br /><br />

                      <p class="text-left body-detail mb-1 Color-black">
                        SKILLS
                      </p>
                      <p
                        class="text-regular text-left Color-gray-60 mb-1"
                        v-for="(skill, index) in activeCV.skills"
                        :key="'skil' + index"
                      >
                        {{ skill.toUpperCase() }}
                      </p>
                      <br /><br />
                    </div>
                    <div class="col-sm-12 col-md-5">
                      <div class="row">
                        <div class="col-5">
                          <p class="small-thick text-left Color-black mb-1">
                            <i class="fa fa-calendar" aria-hidden="true"></i>
                            Age
                          </p>
                        </div>
                        <div class="col-7">
                          <p class="text-regular text-left Color-gray-60 mb-1">
                            {{ getAge(activeCV.dob) }}
                          </p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-5">
                          <p class="small-thick text-left Color-black mb-1">
                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                            Experience
                          </p>
                        </div>
                        <div class="col-7">
                          <p class="text-regular text-left Color-gray-60 mb-1">
                            {{ activeCV.yearsOfExp }} YEARS
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row justify-content-center my-5">
                    <div class="col-10 col-md-8">
                      <button
                        class="
                          button button-primary
                          border-radius-8
                          borderColor-primary
                          bgColor-primary
                          Color-white
                          w-100
                        "
                        @click="showQuote(activeCV)"
                      >
                        REQUEST ESTIMATED QUOTE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="container text-center Color-red"
        v-else-if="allResumes.length == 0 && loading == true"
      >
        Loading
      </div>
      <div class="container text-center Color-red" v-else>
        Could not find any CVs
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
      userEmail: "",
      user: {},
      myCandidatesLength: 0,
      allResumes: [],
      searchValue: "",
      max: 0,
      loading: false,
      modalActive: false,
      activeCV: {},
      search: false,
      items: {},
    };
  },
  async mounted() {
    if (localStorage.getItem("loggedIn") === null) {
      this.$router.push({ name: "login" });
    } else {
      this.loading = true;
      this.userEmail = window.localStorage.getItem("email");
      this.user = await users.getUserByEmail(this.userEmail);
      this.myCandidatesLength = this.user.myCandidates.length;
      if (Object.keys(this.$route.params).length === 0) {
        this.searchValue = "";
        await this.searchCandidates();
      } else {
        this.items = this.$route.params.items;
        await this.getResults(this.items);
      }
      this.loading == false;
    }
  },
  methods: {
    getVal(val) {
      console.log(val);
      return val;
    },
    async getResults(skillset) {
      this.allResumes = await resumes.getBySkillset(skillset);
      if (this.allResumes.length > 5) {
        this.max = 5;
      } else {
        this.max = this.allResumes.length;
      }
      this.loading = false;
      this.search = false;
    },
    async searchCandidates() {
      this.loading = true;
      try {
        this.allResumes = await resumes.getBySearchValue({
          skill: this.searchValue,
        });
        if (this.allResumes.length > 5) {
          this.max = 5;
        } else {
          this.max = this.allResumes.length;
        }
      } catch (error) {
        this.allResumes = [];
        this.max = 0;
        console.error(error);
      }
    },
    async shortlist(candidateEmail) {
      let max = this.max;
      try {
        await shortlist.shortlist({
          candidateEmail: candidateEmail,
          userEmail: this.userEmail,
        });
        this.user = await users.getUserByEmail(this.userEmail);
        await this.getResults(this.items);
        this.myCandidatesLength = this.user.myCandidates.length;
      } catch (error) {
        console.error(error);
      }
      this.max = max;
    },
    async removeShortlisted(candidateEmail) {
      let max = this.max;
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
      this.max = max;
    },

    async viewCount(email) {
      try {
        await shortlist.viewCount({ email: email });
      } catch (error) {
        console.error(error);
      }
    },
    async activateModal(cv) {
      this.activeCV = cv;
      this.modalActive = true;
      await this.viewCount(this.activeCV.email);
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
      title: `${process.env.title} | Results`,
      meta: [
        {
          hid: "description",
          property: "description",
          content:
            "Make use of our job matrix to define the virtual role you need for your business. Insource your next virtual assistant through Zimconnect.",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: `${process.env.title} | Results`,
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "Make use of our job matrix to define the virtual role you need for your business. Insource your next virtual assistant through Zimconnect.",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: `https://zimconnect.org/results`,
        },
        {
          hid: "twitter:title",
          property: "twitter:title",
          content: `${process.env.title} | Results`,
        },
        {
          hid: "twitter:description",
          property: "twitter:description",
          content:
            "Make use of our job matrix to define the virtual role you need for your business. Insource your next virtual assistant through Zimconnect.",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: `https://zimconnect.org/results`,
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
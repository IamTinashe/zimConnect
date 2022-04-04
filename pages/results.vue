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
      <div class="container" v-if="allResumes.length > 0 && loading == false">
        <div class="row">
          <div class="col-12 col-sm-2">
            <NuxtLink
              to="/hire"
              class="
                button button-primary
                Color-white
                bgColor-blue
                borderColor-blue
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
                bgColor-blue
                borderColor-blue
                border-radius-1
                p-3
                w-20
                mb-5
                p-small
                float-left
              "
              @click="quickSearch()"
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
                  bgColor-blue
                  borderColor-blue
                  border-radius-1
                  px-2
                  py-3
                  p-small
                "
              >
                <span v-if="myCandidatesLength == 1"> {{myCandidatesLength}} Candidate </span>
                <span v-else> {{myCandidatesLength}} Candidates </span>
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
                <div class="col-md-6 col-lg-7">
                  <p class="paragraph-large mb-2 pb-0">
                    {{ allResumes[index].fullname }}
                  </p>
                  <div class="row mb-2">
                    <div class="col-12">
                      <p
                        class="small my-0 py-0"
                        v-for="(value, i) in allResumes[index].education"
                        :key="i"
                      >
                        {{ allResumes[index].education[i].title.toUpperCase()
                        }}<br />
                      </p>
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
                </div>
                <div class="col-md-3 col-lg-3">
                  <p
                    class="
                      text-regular
                      bgColor-primary
                      Color-white
                      text-center
                      py-1
                      border-radius-2
                    "
                  >
                    MONTHLY RATE: ${{ allResumes[index].minSalary }} - ${{
                      allResumes[index].maxSalary
                    }}
                  </p>
                </div>
              </div>
              <div class="row justify-content-md-center">
                <div class="col-12 col-md-8">
                  <button
                    class="
                      button button-primary
                      bgColor-blue
                      py-1
                      px-4
                      border-radius-4
                      float-left
                      borderColor-blue
                      text-regular
                      button-wide-small
                    "
                    @click="activateModal(allResumes[index])"
                  >
                    View CV
                  </button>
                  <button
                    class="
                      button button-primary
                      bgColor-blue
                      py-1
                      px-4
                      border-radius-4
                      float-left
                      borderColor-blue
                      text-regular
                      mx-md-2
                      my-md-0
                      my-1
                      button-wide-small
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
                  <button
                    class="
                      button button-primary
                      bgColor-blue
                      py-1
                      px-4
                      mx-md-2
                      my-md-0
                      my-1
                      border-radius-4
                      float-left
                      borderColor-blue
                      text-regular
                      button-wide-small
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
                      bgColor-blue
                      py-1
                      px-4
                      mx-md-2
                      my-md-0
                      my-1
                      border-radius-4
                      float-left
                      borderColor-blue
                      text-regular
                      button-wide-small
                    "
                    v-if="
                      (allResumes[index].availability == true &&
                        allResumes[index].selectionStatus.length > 0 &&
                        allResumes[index].selectionStatus[0].user !=
                          userEmail) ||
                      (allResumes[index].availability == true &&
                        allResumes[index].selectionStatus.length == 0)
                    "
                    @click="shortlist(allResumes[index].email)"
                  >
                    Shortlist
                  </button>
                  <div
                    class="py-1 px-4 mx-2 my-3 my-md-0 float-left small button-wide-small"
                    v-if="allResumes[index].availability == false"
                  >
                    <p class="text-center">Already Selected</p>
                  </div>
                  <p
                    class="py-1 px-4 float-right small"
                    v-if="allResumes[index].views"
                  >
                    {{ allResumes[index].views }} Views
                  </p>
                </div>
              </div>
            </div>
            <p
              class="text-right cursor-pointer"
              v-if="allResumes.length != max"
              @click="addMax()"
            >
              More
            </p>
            <div class="z-index-10 candidate-modal" v-if="modalActive">
              <span
                @click="(modalActive = false), (quoteActive = false)"
                class="close"
              ></span>
              <div class="container">
                <div class="row justify-content-lg-center">
                  <div class="col-sm-12 col-lg-10">
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
                      </h2>
                      <div class="row justify-content-md-center">
                        <div class="col-sm-12 col-lg-10">
                          <img
                            title="zimworx"
                            src="/images/zimworx.png"
                            class="img-fluid w-100 mb-5"
                          />
                          <p class="text-left group-header mb-0 Color-black">
                            <label
                              class="
                                cv-label
                                bgColor-primary
                                Color-white
                                body-detail
                                w-10
                                mr-3
                                p-1
                              "
                              >NAME</label
                            >{{ activeCV.fullname.toUpperCase() }}
                          </p>
                          <p class="text-left body-detail mb-2 Color-black">
                            <label
                              class="
                                cv-label
                                bgColor-primary
                                Color-white
                                body-detail
                                w-10
                                mr-3
                                p-1
                              "
                              >TITLE</label
                            >{{ activeCV.profession.toUpperCase() }}
                          </p>
                          <hr
                            class="bgColor-primary Color-primary"
                            style="height: 2px"
                          />
                          <div class="row mb-5">
                            <div class="col-sm-12 col-lg-7 cv-border-right">
                              <p class="text-left body-detail mb-1 Color-black">
                                SKILLS
                              </p>
                              <p
                                class="
                                  text-regular text-left
                                  Color-gray-60
                                  mb-1
                                "
                                v-for="(skill, index) in activeCV.skills"
                                :key="'skil' + index"
                              >
                                {{ skill.toUpperCase() }}
                              </p>
                              <br /><br />
                              <hr
                                class="bgColor-primary Color-primary"
                                style="height: 1px"
                              />
                              <p class="text-left body-detail mb-1 Color-black">
                                EDUCATION
                              </p>
                              <p
                                class="
                                  text-regular text-left
                                  Color-gray-60
                                  mb-1
                                "
                                v-for="(
                                  qualification, index
                                ) in activeCV.education"
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
                            </div>
                            <div class="col-sm-12 col-lg-5">
                              <div class="row">
                                <div class="col-5">
                                  <p
                                    class="
                                      small-thick
                                      text-left
                                      Color-black
                                      mb-1
                                    "
                                  >
                                    <i
                                      class="fa fa-calendar"
                                      aria-hidden="true"
                                    ></i>
                                    Age
                                  </p>
                                </div>
                                <div class="col-7">
                                  <p
                                    class="
                                      text-regular text-left
                                      Color-gray-60
                                      mb-1
                                    "
                                  >
                                    {{ getAge(activeCV.dob) }}
                                  </p>
                                </div>
                              </div>
                              <div class="row mb-5">
                                <div class="col-5">
                                  <p
                                    class="
                                      small-thick
                                      text-left
                                      Color-black
                                      mb-1
                                    "
                                  >
                                    <i
                                      class="fa fa-briefcase"
                                      aria-hidden="true"
                                    ></i>
                                    Experience
                                  </p>
                                </div>
                                <div class="col-7">
                                  <p
                                    class="
                                      text-regular text-left
                                      Color-gray-60
                                      mb-1
                                    "
                                  >
                                    {{ activeCV.yearsOfExp }} YEARS
                                  </p>
                                </div>
                              </div>
                              <div
                                class="row"
                                v-if="activeCV.audioclip_url.length > 0"
                              >
                                <div class="col-12">
                                  <p
                                    class="
                                      text-left
                                      body-detail
                                      mb-3
                                      Color-black
                                    "
                                  >
                                    AUDIO
                                  </p>
                                  <audio
                                    class="audio"
                                    controls
                                    v-if="activeCV.audioclip_url"
                                  >
                                    <source
                                      :src="activeCV.audioclip_url"
                                      type="audio/mpeg"
                                    />
                                  </audio>
                                  <br /><br />
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
                                @click.prevent="shortlist(activeCV.email)"
                                v-if="activeCV.availability == true && (
                                  activeCV.selectionStatus.length == 0 ||
                                  activeCV.selectionStatus.filter(
                                    (user) => user.user == userEmail
                                  ).length == 0)
                                "
                              >
                                SHORTLIST
                              </button>
                              <button
                                class="
                                  button button-primary
                                  border-radius-8
                                  borderColor-primary
                                  bgColor-primary
                                  Color-white
                                  w-100
                                "
                                @click.prevent="
                                  removeShortlisted(activeCV.email)
                                "
                                v-else-if="
                                  activeCV.selectionStatus.length > 0 &&
                                  activeCV.selectionStatus[0].user == userEmail
                                "
                              >
                                REMOVE FROM LIST
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
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
      <BenefitsPopup/>
    </div>
  </div>
</template>

<script>
import users from "@/assets/js/zimconnect/users";
import resumes from "@/assets/js/zimconnect/resumes";
import shortlist from "@/assets/js/zimconnect/shortlist";
export default {
  components: {
    'BenefitsPopup': () => import('@/components/BenefitsPopup'),
  },
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
    addMax() {
      if (
        this.max < this.allResumes.length &&
        this.allResumes.length - this.max > 5
      ) {
        this.max = this.max + 5;
      } else if (
        this.max < this.allResumes.length &&
        this.allResumes.length - this.max < 5
      ) {
        this.max = this.max + (this.allResumes.length - this.max);
      }
    },
    async quickSearch() {
      this.loading = true;
      this.max = 0;
      this.allResumes = [];
      let skillset = {
        company: "",
        field: "",
        skills: [],
        workdays: [],
        advancedSearch: false,
        minBudget: 0,
        maxBudget: 1000000,
        minYears: 0,
        maxYears: 50,
        search: this.searchValue,
      };
      this.allResumes = await resumes.advancedSearch(skillset);
      this.addMax();
      this.loading = false;
    },
    async getResults(skillset) {
      if (skillset.advancedSearch == true) {
        try {
          this.allResumes = await resumes.advancedSearch(skillset);
        } catch (e) {
          console.log(e);
        }
      } else {
        try {
          this.allResumes = await resumes.getBySkillset(skillset);
        } catch (e) {
          console.log(e);
        }
      }
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
      this.loading = false;
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
        if (this.modalActive == true) {
          this.activeCV = this.allResumes.filter(
            (cv) => cv.email == this.activeCV.email
          )[0];
        }
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
        if (this.modalActive == true) {
          this.activeCV = this.allResumes.filter(
            (cv) => cv.email == this.activeCV.email
          )[0];
        }
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
            "Make use of our job matrix to define the virtual role you need for your business. Insource your next virtual assistant through WorXconnect.",
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
            "Make use of our job matrix to define the virtual role you need for your business. Insource your next virtual assistant through WorXconnect.",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: `https://worxconnect.com/results`,
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
            "Make use of our job matrix to define the virtual role you need for your business. Insource your next virtual assistant through WorXconnect.",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: `https://worxconnect.com/results`,
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
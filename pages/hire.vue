<template>
  <div class="w-100 hire">
    <div class="container-fluid bg-image">
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
              Find a Team Member Tailored to your specification
            </p>
          </div>
        </div>
      </div>
    </div>
    <form>
      <div class="container-fluid bgColor-gray-10 py-5">
        <div class="container bgColor-white py-5">
          <div class="row justify-content-md-center">
            <div class="col-sm-12 col-md-11">
              <div class="meter mb-2">
                <span style="width: 20%"><span class="progress"></span></span>
              </div>
              <div class="sectionFocus w-100 position-relative pb-5">
                <div class="row">
                  <div class="col-12 col-sm-3">
                    <NuxtLink to="/mycandidates" title="My Candidates">
                      <button
                        class="
                          button button-primary
                          Color-white
                          bgColor-light-blue
                          borderColor-light-blue
                          border-radius-1
                          px-2
                          py-3
                          ml-0
                          p-small
                        "
                      >
                        {{ myCandidatesLength }} Candidates
                      </button>
                    </NuxtLink>
                  </div>
                </div>
              </div>
              <div class="row position-relative mb-0 text-center-md-left">
                <div class="col-sm-12 col-md-7 col-lg-8 mb-5">
                  <h2 class="section-header Color-primary mb-4">CATEGORIES</h2>
                  <div class="companies">
                    <label
                      class="mb-2"
                      v-for="(company, index) in companies"
                      :key="'com' + index"
                    >
                      <input
                        v-model="profile.company"
                        type="radio"
                        :id="'company' + index"
                        name="company"
                        :value="company.name"
                      />
                      <div
                        class="
                          box
                          text-left text-regular
                          pl-3
                          mr-1 mr-sm-3
                          pt-2
                        "
                        @click="goto('roles')"
                      >
                        <span>{{ company.name }}</span>
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
              <hr class="w-100 Color-gray-40 bgColor-gray-40 border-line" />

              <div class="row position-relative my-5 mb-0" ref="roles">
                <div
                  class="col-sm-12 col-md-6 col-lg-3"
                  v-for="(position, index) in positions"
                  :key="'pos' + index"
                >
                  <div class="w-100 mb-3">
                    <div
                      class="
                        bgColor-primary
                        text-center
                        Color-white
                        py-2
                        p-small
                        w-100
                      "
                    >
                      {{ position.name }}
                    </div>
                    <div
                      class="
                        positions
                        bgColor-gray-20
                        Color-black
                        text-regular
                        p-3
                        w-100
                      "
                    >
                      <ul class="ul">
                        <li v-for="(role, i) in position.positions" :key="'pos2' + i">
                          <input
                            type="checkbox"
                            :id="'position' + index + i"
                            :name="role"
                            :value="role"
                            @change="chooseField(position.name), chooseSkills(role)"
                          />
                          <label class="text-regular Color-black" :for="'position' + index + i">{{ role }}</label>
                          <div class="check"><div class="inside"></div></div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <hr class="w-100 Color-gray-40 bgColor-gray-40 border-line" />

              <div class="row position-relative my-5">
                <div class="col-sm-12">
                  <h2 class="section-header Color-primary mb-5">
                    CATEGORY SKILL
                  </h2>
                </div>
                <div
                  class="col-sm-12 col-md-6 col-lg-2 px-1"
                  v-for="(skill, index) in skills"
                  :key="'skill' + index"
                >
                  <div class="w-100 mb-3">
                    <div
                      @click.prevent="
                        showSkills('skill' + index, 'parentSkill' + index)
                      "
                      class="
                        bgColor-gray-20
                        Color-gray-60
                        bgColor-hover-primary
                        Color-hover-white
                        text-center
                        cursor-pointer
                        py-2
                        small
                        w-100
                      "
                      :id="'parentSkill' + index"
                    >
                      {{ skill.name }}
                    </div>
                    <div
                      :id="'skill' + index"
                      class="
                        z-index-5
                        skills
                        display-none
                        position-absolute
                        bgColor-gray-20
                        Color-black
                        small
                        p-2
                      "
                    >
                      <ul class="ul">
                        <li v-for="(role, i) in skill.skills" :key="'role' + i">
                          <input
                            type="checkbox"
                            @change="chooseSkills(role)"
                            :id="'skill' + index + i"
                            :name="role"
                            :value="role"
                          />
                          <label
                            class="small Color-black"
                            :for="'skill' + index + i"
                            >{{ role }}</label
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <hr class="w-100 Color-gray-40 bgColor-gray-40 border-line" />

              <button
                class="
                  button button-primary
                  bgColor-primary
                  borderColor-primary
                  border-radius-8
                  py-2
                  px-4
                  small
                  float-right
                "
                @click.prevent="
                  profile.advancedSearch = !profile.advancedSearch
                "
              >
                ADVANCED SEARCH
              </button>
              <div
                class="row position-relative my-5"
                v-if="profile.advancedSearch == true"
              >
                <div class="col-sm-12">
                  <h2 class="section-header Color-primary">ADVANCED SEARCH</h2>
                  <div class="row position-relative my-5">
                    <div
                      class="
                        col-4 col-md-3 col-lg-2
                        paragraph-large
                        mt-2
                        Color-gray-40
                      "
                    >
                      SEARCH
                    </div>
                    <div class="col-8">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="SKILL"
                        v-model="profile.search"
                      />
                    </div>
                  </div>
                  <div class="row position-relative my-5">
                    <div
                      class="
                        col-4 col-md-3 col-lg-2
                        paragraph-large
                        mt-4
                        Color-gray-40
                      "
                    >
                      BUDGET
                    </div>
                    <div class="col-4 float-left">
                      <input
                        type="number"
                        class="form-control float-left"
                        :placeholder="profile.maxBudget"
                        v-model="profile.maxBudget"
                        id="max"
                      />
                    </div>
                  </div>
                  <div class="row position-relative my-5">
                    <div
                      class="
                        col-4 col-md-3 col-lg-2
                        paragraph-large
                        mt-4
                        Color-gray-40
                      "
                    >
                      YEARS OF EXPERIENCE
                    </div>
                    <div class="col-4 float-left">
                      <label
                        class="small Color-gray-60 float-left"
                        for="minyears"
                        >MIN</label
                      >
                      <input
                        type="text"
                        class="form-control float-left"
                        :placeholder="profile.minYears"
                        v-model="profile.minYears"
                        id="minyears"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="row justify-content-sm-center position-relative my-5">
                <div class="col-sm-10 col-md-8">
                  <button
                    class="
                      button button-primary
                      bgColor-primary
                      borderColor-primary
                      border-radius-12
                      w-100
                      py-3
                    "
                    @click.prevent="submitForm()"
                  >
                    <span class="body-detail Color-white">SUBMIT</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import users from "@/assets/js/zimconnect/users";
import company from "@/assets/js/zimconnect/company";
import positions from "@/assets/js/zimconnect/positions";
import skills from "@/assets/js/zimconnect/skills";
import workdays from "@/assets/js/zimconnect/workdays";
export default {
  components: {
    CandidateModal: () => import("@/components/CandidateModal"),
  },
  data() {
    return {
      userEmail: "",
      user: {},
      myCandidatesLength: 0,
      positions: [],
      skills: [],
      companies: [],
      workdays: [],
      profile: {
        company: "",
        field: "",
        skills: [],
        workdays: [],
        advancedSearch: false,
        minBudget: 0,
        maxBudget: 1000000,
        minYears: 0,
        maxYears: 50,
        search: "",
      },
      preservedList: [],
      previousSkillID: "",
      previousParentID: "",
    };
  },
  async mounted() {
    if (localStorage.getItem("loggedIn") === null) {
      this.$router.push({ name: "login" });
    } else {
      this.userEmail = window.localStorage.getItem("email");
      this.user = await users.getUserByEmail(this.userEmail);
      this.myCandidatesLength = this.user.myCandidates.length;
      await this.getCompanies();
      await this.getPositions();
      await this.getSkills();
      await this.getWorkdays();
    }
  },
  methods: {
    async getCompanies() {
      this.companies = await company.getCompanies();
    },
    async getPositions() {
      this.positions = await positions.getPositions(this.token);
    },
    async getSkills() {
      this.skills = await skills.getSkills(this.token);
    },
    async getWorkdays() {
      this.workdays = await workdays.getWorkdays(this.token);
    },
    chooseSkills(skill) {
      if (this.profile.skills.includes(skill)) {
        this.profile.skills.splice(
          this.profile.skills.indexOf(skill),
          this.profile.skills.indexOf(skill) + 1
        );
      } else {
        this.profile.skills.push(skill);
      }
    },
    chooseField(field) {
      if (field == "Dental | Medical | Healthcare")
        this.profile.field = "dental";
      else if (field == "Sales") this.profile.field = "marketing";
      else if (field == "Accounting") this.profile.field = "accounting";
      else if (field == "Human Resources") this.profile.field = "hr";
      else this.profile.field = "web";
    },
    chooseDay(day) {
      if (this.profile.workdays.includes(day))
        this.profile.workdays.splice(
          this.profile.workdays.indexOf(day),
          this.profile.workdays.indexOf(day) + 1
        );
      else this.profile.workdays.push(day);
    },
    showSkills(id, parentID) {
      if (this.previousSkillID == "" || this.previousParentID == "") {
        document.getElementById(id).classList.remove("display-none");
        document.getElementById(id).classList.add("display-block");
        document.getElementById(parentID).classList.remove("bgColor-gray-20");
        document.getElementById(parentID).classList.add("bgColor-primary");
      } else if (this.previousSkillID == id) {
        document.getElementById(id).classList.add("display-none");
        document.getElementById(id).classList.remove("display-block");
        document.getElementById(parentID).classList.add("bgColor-primary");
      } else {
        document.getElementById(id).classList.remove("display-none");
        document
          .getElementById(this.previousSkillID)
          .classList.add("display-none");
        document
          .getElementById(this.previousSkillID)
          .classList.remove("display-block");
        document.getElementById(id).classList.add("display-block");

        document
          .getElementById(this.previousParentID)
          .classList.remove("bgColor-primary");
        document
          .getElementById(this.previousParentID)
          .classList.add("bgColor-gray-20");
        document.getElementById(parentID).classList.remove("bgColor-gray-20");
        document.getElementById(parentID).classList.add("bgColor-primary");
      }
      this.previousSkillID = id;
      this.previousParentID = parentID;
    },
    computeBudget(){
      if(typeof this.profile.maxBudget === 'string' && this.profile.maxBudget.includes("$")){
        this.profile.maxBudget = parseFloat(this.profile.maxBudget.replace(/\$|,/g, ''));
      }
      if(this.profile.maxBudget > 0){
        this.profile.maxBudget = this.profile.maxBudget*1.2;
        this.profile.minBudget = this.profile.minBudget*0.8;
      }
    },
    computeYears(){
      if(this.profile.minYears > 0){
        this.profile.maxYears = 100;
      }
    },
    async submitForm() {
      this.computeBudget();
      this.computeYears();
      this.$router.push({
        name: "results",
        params: {
          items: this.profile,
        },
      });
    },
    goto(refName) {
      var element = this.$refs[refName];
      window.scrollTo({
        top: 700,
        behavior: 'smooth',
      });
    }
  },
  head() {
    return {
      title: `${process.env.title} | Hire`,
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
          content: `${process.env.title} | Hire`,
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
          content: `https://worxconnect.com/hire`,
        },
        {
          hid: "twitter:title",
          property: "twitter:title",
          content: `${process.env.title} | Hire`,
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
          href: `https://worxconnect.com/hire`,
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
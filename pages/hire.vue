<template>
  <div class="w-100 hire">
    <div class="container-fluid bg-image">
      <div class="container wrapper">
        <div class="row justify-content-md-center hero">
          <div class="col-12 middle-align mt-5">
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
    <form  v-if="search">
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
              <div class="row position-relative mb-0 text-center-md-left">
                <div class="col-sm-12 col-md-7 col-lg-8 mb-5">
                  <h3 class="group-header Color-gray-60 mb-lg-2">
                    SELECT THE PROPER
                  </h3>
                  <h2 class="section-header Color-primary mb-4">
                    CATEGORY COMPANY
                  </h2>
                  <div class="companies">
                    <label
                      class="mb-2"
                      v-for="(company, index) in allCompanies"
                      :key="index"
                    >
                      <input
                        v-model="profile.company"
                        type="radio"
                        :id="'company' + index"
                        name="company"
                        :value="company.name"
                      />
                      <div
                        class="box text-left text-regular pl-3 mr-1 mr-sm-3 pt-2"
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

              <div class="row position-relative my-5 mb-0">
                <div
                  class="col-sm-12 col-md-6 col-lg-3"
                  v-for="(position, index) in positions"
                  :key="index"
                >
                  <div class="w-100 mb-3">
                    <div
                      class="bgColor-primary text-center Color-white py-2 p-small w-100"
                    >
                      {{ position.name }}
                    </div>
                    <div
                      class="positions bgColor-gray-20 Color-black text-regular p-3 w-100"
                    >
                      <ul class="ul">
                        <li v-for="(role, i) in position.positions" :key="i">
                          <input
                            type="radio"
                            v-model="profile.position"
                            :id="'position' + index + i"
                            name="position"
                            :value="role"
                          />
                          <label
                            class="text-regular Color-black"
                            :for="'position' + index + i"
                            >{{ role }}</label
                          >
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
                  <h3 class="group-header Color-gray-60 mb-lg-2">
                    SELECT THE PROPER
                  </h3>
                  <h2 class="section-header Color-primary mb-5">
                    CATEGORY SKILL
                  </h2>
                </div>
                <div
                  class="col-sm-12 col-md-6 col-lg-2 px-1"
                  v-for="(skill, index) in skills"
                  :key="index"
                >
                  <div class="w-100 mb-3">
                    <div
                      @click.prevent="
                        showSkills('skill' + index, 'parentSkill' + index)
                      "
                      class="bgColor-gray-20 Color-gray-60 bgColor-hover-primary Color-hover-white text-center cursor-pointer py-2 small w-100"
                      :id="'parentSkill' + index"
                    >
                      {{ skill.name }}
                    </div>
                    <div
                      :id="'skill' + index"
                      class="z-index-5 skills display-none position-absolute bgColor-gray-20 Color-black small p-2"
                    >
                      <ul class="ul">
                        <li v-for="(role, i) in skill.skills" :key="i">
                          <input
                            type="checkbox"
                            @change="chooseSkill(role)"
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

              <div class="row position-relative my-5">
                <div class="col-sm-12 col-md-6">
                  <h3 class="group-header Color-gray-60 mb-lg-2">
                    SELECT THE PROPER
                  </h3>
                  <h2 class="section-header Color-primary">
                    CATEGORY SCHEDULE
                  </h2>
                  <h3 class="body-detail Color-gray-60 mb-5">
                    (40hrs Standard)
                  </h3>
                  <div class="row">
                    <div class="col-sm-12 col-md-6" v-for="(day, index) in workdays" :key="index">
                      <input
                        type="checkbox"
                        @change="chooseDay(day.name)"
                        :id="'day' + index"
                        :name="day.name"
                        :value="day.name"
                      />
                      <label
                        class="small Color-black"
                        :for="'day' + index"
                      >{{ day.name }}</label>
                    </div>
                  </div>
                </div>
                <div class="col-sm-12 col-md-6">
                  <div class="w-100 mb-3">
                    <img
                      class="w-100"
                      src="/images/agenda-showing-digital-tablet.jpg"
                      alt="Agenda Showing Digital Tablet"
                    />
                  </div>
                </div>
              </div>

              <div class="row justify-content-sm-center position-relative my-5">
                <div class="col-sm-10 col-md-8">
                  <button class="button button-primary bgColor-primary borderColor-primary border-radius-12 w-100 py-3" @click.prevent="submitForm()">
                    <span class="body-detail Color-white">SUBMIT</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>

    <div class="container-fluid bgColor-gray-10 py-5" v-else>
      <div class="container">
        <div class="row hero justify-content-md-center my-4">
          <div class="col-sm-12">
            <div class="card border-radius-2 box-shadow-1 text-left py-3 px-2 px-lg-5 my-3" v-for='index in max' :key='index'>
              <div class="row">
                <div class="col-md-3">
                  <div class="circular-portrait">
                    <img :src="rankedCVs[index].image" :alt="rankedCVs[index].fullname" class="img"/>
                  </div>
                </div>
                <div class="col-md-9">
                  <p class="paragraph-large mb-0 pb-0">{{rankedCVs[index].fullname}} </p>
                  <div class="row">
                    <div class="col-4 col-sm-3 col-md-2"><p class="text-regular my-2">Skills:</p></div>
                    <div class="col-8 col-sm-9 col-md-10">
                      <span
                      class="small Color-white bgColor-primary mx-1 border-radius-2 px-2"
                      v-for="(skill, index) in rankedCVs[index].skills"
                      :key="index"
                    >{{skill.toUpperCase()}} </span>
                    </div>
                  </div>
                  <div class="row" v-if="rankedCVs[index].qualifications.length > 0 || rankedCVs[index].qualifications[0] != '' || rankedCVs[index].qualifications != ''">
                    <div class="col-4 col-sm-3 col-md-2"><p class="text-regular my-2">Description:</p></div>
                    <div class="col-8 col-sm-9 col-md-10">
                      <span
                      class="small Color-black mr-2"
                      v-for="(qualification, index) in rankedCVs[index].qualifications"
                      :key="index"
                    >{{qualification.toUpperCase()}} </span>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-4 col-sm-3 col-md-2"><p class="text-regular my-2">Education:</p></div>
                    <div class="col-8 col-sm-9 col-md-10">
                      <span
                      class="p-small Color-black mr-4"
                      v-for="(school, index) in rankedCVs[index].attendedSchools"
                      :key="index"
                    >{{school.toUpperCase()}} </span>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-4 col-sm-3 col-md-2"><p class="text-regular my-2">Weight:</p></div>
                    <div class="col-8 col-sm-9 col-md-10">
                      <span
                      class="p-small Color-black mr-4"
                    >{{rankedCVs[index].weight}} </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p class="text-right cursor-pointer" @click="max = max + 5">More</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import company from "@/assets/js/zimconnect/company";
import positions from "@/assets/js/zimconnect/positions";
import skills from "@/assets/js/zimconnect/skills";
import cvmatching from "@/assets/js/zimbojobs/cvmatching";
import workdays from "@/assets/js/zimconnect/workdays";
export default {
  data() {
    return {
      allCompanies: [],
      profile: {
        company: "",
        position: "",
        skill: [],
        workdays: []
      },
      positions: {},
      skills: {},
      token: "",
      previousSkillID: "",
      previousParentID: "",
      workdays: [],
      search: true,
      rankedCVs: [],
      max: 5
    };
  },
  async mounted() {
    if (localStorage.getItem("loggedIn") === null) 
      window.location.href = '/login';
    else
      this.token = window.localStorage.getItem("accessToken");
    await this.getCompanies();
    await this.getPositions();
    await this.getSkills();
    await this.getWorkdays();
  },
  methods: {
    async getCompanies() {
      this.allCompanies = await company.getCompanies();
    },
    async getPositions() {
      this.positions = await positions.getPositions(this.token);
    },
    async getSkills() {
      this.skills = await skills.getSkills(this.token);
    },
    async getWorkdays(){
      this.workdays = await workdays.getWorkdays(this.token);
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
    async submitForm (){
      let cvs = await cvmatching.getCVs();
      cvs = cvmatching.filterByGoodName(cvs);
      let filteredCVs = cvmatching.filterBySkills(cvs, this.profile);
      filteredCVs = cvmatching.filterByEducation(cvs, filteredCVs);
      filteredCVs = cvmatching.filterByExperience(cvs, filteredCVs);
      this.rankedCVs = cvmatching.getRankedCVs(cvs, filteredCVs);
      this.rankedCVs = cvmatching.sortFilters(this.rankedCVs);
      this.search = false;
    },
    chooseSkill(skill){
      if(this.profile.skill.includes(skill)){
        this.profile.skill.splice(this.profile.skill.indexOf(skill), this.profile.skill.indexOf(skill) + 1);
      }else{
        this.profile.skill.push(skill);
      }
    },
    chooseDay(day){
      if(this.profile.workdays.includes(day))
        this.profile.workdays.splice(this.profile.workdays.indexOf(day), this.profile.workdays.indexOf(day) + 1);
      else
        this.profile.workdays.push(day);
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
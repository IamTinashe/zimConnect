<template>
  <div class="w-100 hire">
    <div class="container-fluid bg-image">
      <div class="loading" v-if="loading">Loading&#8230;</div>
      <div class="container wrapper">
        <div class="row justify-content-md-center hero">
          <div class="col-12 middle-align mt-5">
            <div class="w-100 position-absolute mt-5">
        
            </div>
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
    <form v-if="search">
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
                      :key="'com'+index"
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
                  :key="'pos' + index"
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
                        <li v-for="(role, i) in position.positions" :key="'pos2'+ i">
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
                  :key="'skill' + index"
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
                        <li v-for="(role, i) in skill.skills" :key="'role' + i">
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
                    <div
                      class="col-sm-12 col-md-6"
                      v-for="(day, index) in workdays"
                      :key="'work'+ index"
                    >
                      <input
                        type="checkbox"
                        @change="chooseDay(day.name)"
                        :id="'day' + index"
                        :name="day.name"
                        :value="day.name"
                      />
                      <label class="small Color-black" :for="'day' + index">{{
                        day.name
                      }}</label>
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
                  <button
                    class="button button-primary bgColor-primary borderColor-primary border-radius-12 w-100 py-3"
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

    <div class="container-fluid bgColor-gray-10 py-5" v-else>
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-2">
            <button
                class="button button-primary Color-white bgColor-primary borderColor-primary border-radius-1 p-3 mb-5 p-small"
                @click="(search = !search), (max = 5)"
                v-if="!search"
              >
                BACK TO SEARCH
              </button>
          </div>
          <div class="col-12 col-sm-8">
            <input v-model="searchValue" type="text" id="searchValue" class="form-input border-none w-80 px-3 py-3 float-left"/>
            <button
                class="button button-primary Color-white bgColor-primary borderColor-primary border-radius-1 p-3 w-20 mb-5 p-small float-left"
                @click="searchCandidates()"
              >
                SEARCH
              </button>
          </div>
          <div class="col-12 col-sm-2">
            <button
                v-if="!search"
                class="button button-primary Color-white bgColor-light-blue borderColor-light-blue border-radius-1 px-2 py-3 p-small"
              >
                {{shortlistOnMyAccount.length}} Candidates Listed
              </button>
          </div>
        </div>
        <div class="row hero justify-content-md-center my-4">
          <div class="col-sm-12">
            <div
              class="card border-radius-2 box-shadow-1 text-left py-4 px-2 px-lg-5 my-3"
              v-for="(value, index) in max"
              :key="'max' + index"
            >
              <div class="row">
                <div class="col-md-3 col-lg-2">
                  <div class="circular-portrait">
                    <img
                      :src="rankedCVs[index].image"
                      :alt="'Candidate ' + rankedCVs[index].id"
                      class="img"
                    />
                  </div>
                </div>
                <div class="col-md-9 col-lg-10">
                  <p class="paragraph-large mb-0 pb-0">
                    Candidate {{ rankedCVs[index].id }}
                  </p>
                  <div
                    class="row mb-2"
                    v-if="rankedCVs[index].description.length > 0"
                  >
                    <div class="col-12">
                      <span
                        class="small Color-black mr-2"
                        v-for="(descript, index) in rankedCVs[index]
                          .description"
                        :key="'desc' + index"
                        >{{ descript.toUpperCase() }}
                      </span>
                    </div>
                  </div>
                  <div class="row mb-4">
                    <div class="col-12">
                      <span
                        class="small Color-white bgColor-primary mr-2 border-radius-2 px-2"
                        v-for="(skill, index) in rankedCVs[index].skills"
                        :key="'ski' + index"
                        >{{ skill.toUpperCase() }}
                      </span>
                    </div>
                  </div>
                  <button
                    class="button button-primary bgColor-primary py-1 px-4 border-radius-8 float-left borderColor-primary text-regular"
                    @click="activateModal(rankedCVs[index])"
                  >
                    MORE
                  </button>
                  <button
                    class="button button-primary bgColor-gray-40 py-1 px-4 border-radius-8 float-left borderColor-gray-40 text-regular ml-2"
                  >
                    LISTEN
                  </button>
                  <button
                    class="button button-primary bgColor-light-blue py-1 px-4 mx-2 border-radius-8 float-left borderColor-light-blue text-regular"
                    v-if="rankedCVs[index].considered == true"
                  >
                    ALREADY SHORTLISTED
                  </button>
                </div>
              </div>
            </div>
            <p class="text-right cursor-pointer" @click="max = max + 5">More</p>
            <div class="z-index-10 candidate-modal" v-if="modalActive">
              <span @click="modalActive = false, quoteActive = false" class="close"></span>
              <div class="container">
                <div
                  class="card bgColor-white border-radius-2 box-shadow-1 my-4 py-5 px-5"
                >
                  <h2 class="text-left title-large mb-1">
                    Candidate {{ activeCV.id }}
                    <span v-if="activeCV.considered == false" @click="shortlistCandidate(activeCV)" class="text-right float-right bgColor-primary Color-white text-regular p-3 border-radius-4 cursor-pointer">Consider For Interview</span>
                    <span v-else @click="removeShortlistCandidate(activeCV)" class="text-right float-right bgColor-gray-20 Color-white text-regular p-3 border-radius-4 cursor-pointer">Remove From Interview List</span>
                  </h2>
                  <p class="text-left body-detail mb-5 pb-3 Color-gray-40">
                    {{ activeCV.sector.toUpperCase() }}
                  </p>
                  <div class="row mb-5">
                    <div class="col-sm-12 col-md-7">
                      <p class="text-regular text-left Color-gray-60 mb-1">
                        <span
                          v-for="(descript, index) in activeCV.description"
                          :key="'des' + index"
                        >
                          {{ descript.toUpperCase() }}.
                        </span>
                      </p>
                      <br /><br />
                      <p class="text-left body-detail mb-1 Color-black">
                        SKILLS
                      </p>
                      <p
                        class="text-regular text-left Color-gray-60 mb-1"
                        v-for="(skill, index) in activeCV.skills"
                        :key="'skil'+index"
                      >
                        {{ skill.toUpperCase() }}
                      </p>
                      <br /><br />
                      <p class="text-left body-detail mb-1 Color-black">
                        QUALIFICATIONS
                      </p>
                      <p
                        class="text-regular text-left Color-gray-60 mb-1"
                        v-for="(
                          qualification, index
                        ) in activeCV.qualifications"
                        :key="'qual'+index"
                      >
                        {{ qualification.toUpperCase() }}
                      </p>
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
                            {{ activeCV.yoe }} YEARS
                          </p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-5">
                          <p class="small-thick text-left Color-black mb-1">
                            <i
                              class="fa fa-balance-scale"
                              aria-hidden="true"
                            ></i>
                            CV Weight
                          </p>
                        </div>
                        <div class="col-7">
                          <p class="text-regular text-left Color-gray-60 mb-1">
                            {{ Math.round(activeCV.weight * 10) / 10 }} %
                          </p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-12">
                          <p class="text-regular text-left Color-gray-60 mb-1">
                            CV weight is calculated based on the candidate's qualifications, skills selected
                            as well as work experience. For each selected skill that a candidate has, the system
                            adds a weight to their CV. For each year of experience that a candidate has, a weight
                            is added to it. On qualifications, weights are added based on level of education e.g.
                            someone with a Masters will have a higher weight than a someone with a Bachelors. And then
                            there are special qualifications for instance in accounts, ACCA is a prestigious
                            qualification and that will carry a significant amount of weight.<br>
                            Each person's weights will be added together to come up with a final score and then CVs will
                            will be ranked. This is done through an algorithm that I named "THE HEAVY WEIGHT ALGORITHM"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row justify-content-center my-5">
                    <div class="col-10 col-md-8">
                      <button
                        class="button button-primary border-radius-8 borderColor-primary bgColor-primary Color-white w-100"
                        @click="showQuote(activeCV)"
                      >
                        REQUEST ESTIMATED QUOTE
                      </button>
                    </div>
                  </div>
                  <div class="row justify-content-center my-5 quote" v-if="quoteActive">
                    <div class="col-12 col-md-10">
                      <table class="body-wrap">
                        <tbody>
                          <tr>
                            <td></td>
                            <td class="container" width="600">
                              <div class="content">
                                <table
                                  class="main"
                                  width="100%"
                                  cellpadding="0"
                                  cellspacing="0"
                                >
                                  <tbody>
                                    <tr>
                                      <td class="content-wrap aligncenter">
                                        <table
                                          width="100%"
                                          cellpadding="0"
                                          cellspacing="0"
                                        >
                                          <tbody>
                                            <tr>
                                              <td class="content-block">
                                                <table class="invoice">
                                                  <tbody>
                                                    <tr>
                                                      <td>
                                                        Candidate {{activeCV.id}}<br/>
                                                        {{today}}
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td>
                                                        <table
                                                          class="invoice-items"
                                                          cellpadding="0"
                                                          cellspacing="0"
                                                        >
                                                          <tbody>
                                                            <tr>
                                                              <td>Services</td>
                                                              <td
                                                                class="alignright"
                                                              >
                                                                $ {{ Math.ceil(Math.round(activeCV.weight * 35)/100) *100 }}
                                                              </td>
                                                            </tr>
                                                            <tr class="total">
                                                              <td
                                                                class="alignright"
                                                                width="80%"
                                                              >
                                                                Total
                                                              </td>
                                                              <td
                                                                class="alignright"
                                                              >
                                                                $ {{ Math.ceil(Math.round(activeCV.weight * 35)/100) *100 }}
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td class="content-block">
                                                Global BP Solutions, Texas, United States
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <div class="footer">
                                  <table width="100%">
                                    <tbody>
                                      <tr>
                                        <td class="aligncenter content-block">
                                          Questions? Email
                                          <a href="mailto:"
                                            >info@zimworx.com</a
                                          >
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </td>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>
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
</template>

<script>
import company from "@/assets/js/zimconnect/company";
import positions from "@/assets/js/zimconnect/positions";
import skills from "@/assets/js/zimconnect/skills";
import cvmatching from "@/assets/js/zimbojobs/cvmatching";
import workdays from "@/assets/js/zimconnect/workdays";
import shortlist from "@/assets/js/zimconnect/shortlist";
export default {
  components: {
    CandidateModal: () => import("@/components/CandidateModal"),
  },
  data() {
    return {
      allCVS: {},
      userID: '',
      searchValue: '',
      allCompanies: [],
      preservedList: [],
      profile: {
        company: "",
        position: "",
        skill: [],
        workdays: [],
      },
      positions: {},
      skills: {},
      token: "",
      previousSkillID: "",
      previousParentID: "",
      workdays: [],
      search: true,
      rankedCVs: [],
      max: 5,
      loading: false,
      modalActive: false,
      activeCV: {},
      quote: {},
      today : '',
      quoteActive: false,
      shortListed: [],
      shortlistOnMyAccount: []
    };
  },
  async mounted() {
    if (localStorage.getItem("loggedIn") === null){
      window.location.href = "/login";
      if(window.localStorage.getItem('id') != null){
        this.userID = window.localStorage.getItem('id');
      }
    }
    else this.token = window.localStorage.getItem("accessToken");
    await this.getCompanies();
    await this.getPositions();
    await this.getSkills();
    await this.getWorkdays();
    this.shortListed = await shortlist.getAllShortlisted();
    this.allCVS = await cvmatching.getCVs();
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
    async getWorkdays() {
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
    async submitForm() {
      this.loading = true;
      console.log(this.allCVS)
      let cvs = this.allCVS;
      let pool = this.getPositionRole();
      cvs = cvmatching.filterByGoodName(cvs);
      let filteredCVs = cvmatching.filterBySkills(cvs, this.profile);
      filteredCVs = cvmatching.filterByEducation(cvs, filteredCVs);
      filteredCVs = cvmatching.filterByExperience(cvs, filteredCVs);
      filteredCVs = await cvmatching.findPattern(cvs, pool, filteredCVs);
      this.rankedCVs = cvmatching.getRankedCVs(cvs, filteredCVs);
      this.rankedCVs = cvmatching.eliminateUnwanted(this.rankedCVs);
      this.rankedCVs = cvmatching.advancedFilter(this.rankedCVs, pool)
      this.rankedCVs = cvmatching.sortFilters(this.rankedCVs);
      this.rankedCVs = cvmatching.setScore(this.rankedCVs, this.profile.skill.length);
      this.preservedList = this.rankedCVs;
      this.findShortlisted();
      this.search = false;
      this.loading = false;
    },
    chooseSkill(skill) {
      if (this.profile.skill.includes(skill)) {
        this.profile.skill.splice(
          this.profile.skill.indexOf(skill),
          this.profile.skill.indexOf(skill) + 1
        );
      } else {
        this.profile.skill.push(skill);
      }
    },
    chooseDay(day) {
      if (this.profile.workdays.includes(day))
        this.profile.workdays.splice(
          this.profile.workdays.indexOf(day),
          this.profile.workdays.indexOf(day) + 1
        );
      else this.profile.workdays.push(day);
    },
    activateModal(cv) {
      this.activeCV = cv;
      this.modalActive = true;
    },
    getAge(dob) {
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth();
      month = month < 10 ? "0" + month : "" + month;
      this.today = year + "-" + month+1 + "-01";
      return cvmatching.dateDifference(new Date(dob), new Date(this.today));
    },
    showQuote(cv) {
      this.quoteActive = true;
    },
    getPositionRole(){
      let index = 0;
      for(index in this.positions){
        if(this.positions[index].positions.includes(this.profile.position)){
          if(this.positions[index].name == 'Dental | Medical | Healthcare') return 'dental'
          else if(this.positions[index].name == 'Sales') return 'sales'
          else if(this.positions[index].name == 'Accounting') return 'accounting'
          else if(this.positions[index].name == 'Human Resources') return 'hr'
          else return 'it'
        }
      }
    },
    async shortlistCandidate(cv){
      await shortlist.shortlist({
        userID: window.localStorage.getItem('id'),
        candidateID: cv.id,
        email: cv.email,
        considered: true
      }).then(() => {
        this.shortlistOnMyAccount.push(cv);
        this.activeCV.considered = true;
      })
    },
    async removeShortlistCandidate(cv){
      this.shortListed = await shortlist.getAllShortlisted();
      let index = 0;
      for(index in this.shortListed){
        if(this.shortListed[index].email == cv.email){
          await shortlist.removeShortlist(this.shortListed[index].id).then(() => {
            this.activeCV.considered = false;
          })
        }
      }
    },
    findShortlisted(){
      let i, j;
      for(i in this.rankedCVs){
        for(j in this.shortListed){
          if(this.rankedCVs[i].email == this.shortListed[j].email){
            this.rankedCVs[i].considered = true;
            this.rankedCVs[i].employerID = this.shortListed[j].userID;
            this.shortlistOnMyAccount.push(this.shortListed[j]);
          }
        }
      }
    },
    searchCandidates(){
      this.rankedCVs = this.preservedList;
      let index;
      for(index in this.rankedCVs){
        if(this.rankedCVs[index].description.includes(this.searchValue.toLowerCase()) || this.rankedCVs[index].sector.includes(this.searchValue.toLowerCase()) || this.rankedCVs[index].skills.includes(this.searchValue.toLowerCase())){
          this.rankedCVs[index].weight = this.rankedCVs[index].weight * 10;
        }
      }
      this.rankedCVs = cvmatching.sortFilters(this.rankedCVs);
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
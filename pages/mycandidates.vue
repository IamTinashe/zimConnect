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
        <div v-if="loader == true" class="row justify-content-md-center bgColor-white my-4">
          <div class="col-sm-12 col-md-2">
            <img src="/images/spinner.gif" alt="spinner"/>
          </div>
        </div>
        <div v-else class="row hero justify-content-md-center my-4">
          <div class="col-12" v-if="submitted == false">
            <div class="row">
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
                  v-for="(value, index) in shortlisted"
                  :key="index"
                >
                  <div class="row">
                    <div class="col-md-3 col-lg-2">
                      <div class="circular-portrait">
                        <img
                          src="/images/placeholder-male.png"
                          :alt="'Candidate ' + shortlisted[index].id"
                          class="img"
                        />
                      </div>
                    </div>
                    <div class="col-md-9 col-lg-10">
                      <p class="paragraph-large mb-0 pb-0">
                        Candidate {{ shortlisted[index].id }}
                      </p>
                      <div
                        class="row mb-2"
                        v-if="shortlisted[index].education.length > 0"
                      >
                        <div class="col-12">
                          <span
                            class="small Color-black mr-2"
                            v-for="(descript, index) in shortlisted[index]
                              .education"
                            :key="'desc' + index"
                            >{{ descript.toUpperCase() }}
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
                            v-for="(skill, index) in shortlisted[index].skills"
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
                        @click="activateModal(shortlisted[index])"
                      >
                        MORE
                      </button>
                      <button
                        class="
                          button button-primary
                          bgColor-gray-40
                          py-1
                          px-4
                          border-radius-8
                          float-left
                          borderColor-gray-40
                          text-regular
                          ml-2
                        "
                      >
                        LISTEN
                      </button>
                    </div>
                  </div>
                </div>
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
                        Candidate {{ activeCV.id }}
                        <span
                          v-if="activeCV.considered == false"
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
                          v-else
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
                      <p class="text-left body-detail mb-5 pb-3 Color-gray-40">
                        {{ activeCV.sector.toUpperCase() }}
                      </p>
                      <div class="row mb-5">
                        <div class="col-sm-12 col-md-7">
                          <p class="text-regular text-left Color-gray-60 mb-1">
                            <span
                              v-for="(descript, index) in activeCV.education"
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
                            :key="'skil' + index"
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
                            :key="'qual' + index"
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
                      <div
                        class="row justify-content-center my-5 quote"
                        v-if="quoteActive"
                      >
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
                                                            Candidate
                                                            {{ activeCV.id }}<br />
                                                            {{ today }}
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
                                                                    class="
                                                                      alignright
                                                                    "
                                                                  >
                                                                    $
                                                                    {{
                                                                      Math.ceil(
                                                                        Math.round(
                                                                          activeCV.weight *
                                                                            35
                                                                        ) / 100
                                                                      ) * 100
                                                                    }}
                                                                  </td>
                                                                </tr>
                                                                <tr class="total">
                                                                  <td
                                                                    class="
                                                                      alignright
                                                                    "
                                                                    width="80%"
                                                                  >
                                                                    Total
                                                                  </td>
                                                                  <td
                                                                    class="
                                                                      alignright
                                                                    "
                                                                  >
                                                                    $
                                                                    {{
                                                                      Math.ceil(
                                                                        Math.round(
                                                                          activeCV.weight *
                                                                            35
                                                                        ) / 100
                                                                      ) * 100
                                                                    }}
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
                                                    Global BP Solutions, Texas,
                                                    United States
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
                                              <a href="mailto:">info@zimworx.com</a>
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
                  @click="submitCandidates()"
                >
                  SUBMIT CANDIDATES
                </button>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-10 col-lg-8 middle-align" v-else>
            <h2 class="text-center Color-gray-80 group-header mt-5">Your Candidates have been submitted. Our Team will reach out to you.</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import shortlist from "@/assets/js/zimconnect/shortlist";
import cvmatching from "@/assets/js/zimbojobs/cvmatching";
export default {
  data() {
    return {
      dbList: [],
      shortlisted: [],
      allcvs: [],
      activeCV: {},
      modalActive: false,
      userID: "",
      quoteActive: false,
      submitted: false,
      loader: false,
      error: ""
    };
  },
  async mounted() {
    this.loader = true;
    if (localStorage.getItem("loggedIn") === null) {
      this.$router.push({name: "login" });
    } else {
      if (window.localStorage.getItem("id") != null) {
        this.userID = window.localStorage.getItem("id");
        this.allcvs = await cvmatching.getCVs();
        await this.computeRequiredList();
        this.computeRequiredCVs();
      }
    }
    this.loader = false;
  },
  methods: {
    async computeRequiredList() {
      let list = await shortlist.getAllShortlisted();
      this.dbList = [];
      let i;
      for (i in list) {
        if (list[i].userID == this.userID && list[i].selected != true) {
          this.dbList.push(list[i]);
        }else if(list[i].userID == this.userID && list[i].selected == true){
          this.submitted = true;
        }
      }
    },
    computeRequiredCVs() {
      let j, i;
      this.shortlisted = [];
      for (j in this.allcvs) {
        for (i in this.dbList) {
          if (this.allcvs[j].email == this.dbList[i].email && this.dbList[i].selected != true) {
            this.allcvs[j].considered = true;
            this.allcvs[j].userID = this.userID;
            this.allcvs[j].id = this.dbList[i].candidateID;
            this.shortlisted.push(this.allcvs[j]);
          }else if(this.dbList[i].email && this.dbList[i].selected == true){
            this.submitted = true;
          }
        }
      }
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
      this.today = year + "-" + month + 1 + "-01";
      return cvmatching.dateDifference(new Date(dob), new Date(this.today));
    },
    async shortlistCandidate(cv) {
      await shortlist
        .shortlist({
          userID: window.localStorage.getItem("id"),
          candidateID: cv.id,
          email: cv.email,
          considered: true,
        })
        .then(() => {
          this.shortlisted.push(cv);
          this.activeCV.considered = true;
        });
    },
    async removeShortlistCandidate(cv) {
      let index = 0;
      for (index in this.dbList) {
        if (this.dbList[index].email == cv.email) {
          await shortlist
            .removeShortlist(this.dbList[index].id)
            .then(async () => {
              await this.computeRequiredList();
              this.computeRequiredCVs();
              this.activeCV.considered = false;
            });
        }
      }
    },
    showQuote(cv) {
      this.quoteActive = true;
    },
    async submitCandidates(){
      await shortlist.sendCVs(this.shortlisted, window.localStorage.getItem("id")).then(() =>{
        this.submitted = true;
      }).catch(error => {
        this.error = error;
      })
    }
  },
  head() {
    return {
      title: `${process.env.title} | Candidates`,
      meta: [
        {
          hid: "description",
          property: "description",
          content: "Shortlisted candidates",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: `${process.env.title} | Candidates`,
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
          content: `${process.env.title} | Candidates`,
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
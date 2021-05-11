<template>
  <div class="bgColor-gray-10 py-5">
    <div class="trending container-fluid">
      <div class="container">
        <div class="box-shadow-2 bgColor-white tr-section">
          <div class="row">
            <div class="col-sm-12 col-lg-2 bgColor-primary Color-white px-5 px-lg-0 py-5">
              <h2 class="text-center py-5 title">TRENDING JOBS</h2>
            </div>
            <div class="col-sm-12 col-lg-3 bgColor-white wrapper px-5 px-lg-4 py-4">
              <h3 class="Color-primary feature-paragraph pb-1">
                Dental Coordinator
              </h3>
              <br>
              <p class="small Color-gray">
                Looking for dynamic people who would to be virtual dental coordinators. All you need
                is a Bachelor's degree and we will train you and then help place you with the right company.
              </p>
            </div>
            <div class="col-sm-12 col-lg-3 bgColor-white wrapper px-5 px-lg-3 py-4">
              <h3 class="Color-primary feature-paragraph pb-1">
                IT Client Liaison/Compliance & Security Officer
              </h3>
              <p class="small Color-gray">
                Monitoring network usage to ensure compliance with security policies. Keeping up to date with
                developments in IT security standards and threats. Performing penetration tests to find any
                flaws. Collaborating with management and the IT department to improve security. They will be
                responsible for HIPAA compliance and continually update policies as and when improvements are
                made to the network.
              </p>
            </div>
            <div class="col-sm-12 col-lg-3 bgColor-white px-5 px-lg-4 py-4">
              <h3 class="Color-primary feature-paragraph pb-1">
                Telemarketer
              </h3>
              <br>
              <p class="small Color-gray">
                Need highly aggressive sales people who are great on the phone. Team player who will be
                interactive with the sales team. Sales experience required.
              </p>
            </div>
          </div>
        </div>
        <div class="py-5">
          <h2 class="title-large Color-gray-60 py-5">
            <span class="text-underline">RECENT</span> JOBS
          </h2>
          <div class="row">
            <div class="col-lg-12">
              <div
                class="bgColor-white pt-3 px-4 px-lg-5 box-shadow-1 mb-5 border-radius-2 recent-card"
                v-for="(job, index) in listedJobs"
                :key="index"
              >
                <div class="row">
                  <div class="col-sm-12 col-md-3 mb-3 mb-lg-0">
                    <div class="circular-portrait">
                      <img :src="job.featured_img_src" :alt="job.title" class="img"/>
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-9 middle-align mb-3 mb-lg-0">
                    <h3 class="p-small Color-gray-80 mb-1">{{job.title}}</h3>
                    <pre class="Color-gray pre text-regular">{{job.description}}</pre>
                    <a
                      :href="'https://www.zimbojobs.com/job/' + job.slug"
                      :title="job.title"
                      target="_blank"
                    >
                      <div class="button button-primary bgColor-primary borderColor-primary border-radius-4 px-3 py-1 float-left">
                        <span class="small">APPLY</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <small
                class="float-right Color-gray-80 text-regular cursor-pointer"
                title="View More Jobs"
                @click="moreJobs()"
                v-if="!maxReached"

              >More</small>
              <a
                href="https://zimbojobs.com"
                target="_blank"
                class="float-right Color-gray-80 text-regular cursor-pointer"
                title="View More Jobs"
                v-else

              >View More on Zimbojobs</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Jobs from '@/assets/js/zimbojobs/jobs';
export default {
  data() {
    return {
      allJobs: [],
      listedJobs: [],
      count: 3,
      maxReached: false
    }
  },
  async created(){
    await this.jobs();
  },
  methods: {
    async jobs(){
      this.allJobs = await Jobs.getJobs();
      this.listedJobs  = Jobs.correctsData(this.allJobs, this.count);
    },

    async moreJobs(){
      this.count = (this.count < (this.allJobs.length - 2)) ?  (this.count + 2) : (this.allJobs.length - 1);
      this.maxReached = (this.count == (this.allJobs.length - 1));
      this.listedJobs  = Jobs.correctsData(this.allJobs, this.count);
    }
  }
}
</script>

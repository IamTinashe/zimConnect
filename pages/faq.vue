<template>
  <div class="w-100 login">
    <div class="w-100 banner">
      <img class="w-100 banner-image" src="/images/people-sitting.jpg" alt="People Sitting"/>
    </div>
    <div class="container-fluid bgColor-gray-10 pb-5">
      <div class="container">
        <div class="row hero justify-content-md-center pt-5">
          <div class="col-sm-12 col-md-6">
            <div class="card w-100 mt-4 cursor-pointer" @click="q.one = !q.one">
              <p class="text-left py-3 px-2 mb-0 small-thick Color-primary">
                Where is the Corporate Office?
                <span class="float-right">
                  <i class="fa fa-plus" aria-hidden="true"></i>
                </span>
              </p>
              <p class="text-left py-3 pl-3 mb-0 small Color-gray-60" v-if="q.one == true">
                We are a U.S. based, Texas LLC assisting ministries throughout the world. Our partner company is located in Harare, Zimbabwe.
              </p>
            </div>
            <div class="card w-100 mt-4 cursor-pointer" @click="q.two = !q.two">
              <p class="text-left py-3 px-2 mb-0 small-thick Color-primary">
                What if I no longer need my team member?
                <span class="float-right">
                  <i class="fa fa-plus" aria-hidden="true"></i>
                </span>
              </p>
              <p class="text-left py-3 pl-3 mb-0 small Color-gray-60" v-if="q.two == true">
                There are no long term contracts, you can discontinue with a 30 days notice.
              </p>
            </div>
            <div class="card w-100 mt-4 cursor-pointer" @click="q.five = !q.five">
              <p class="text-left py-3 px-2 mb-0 small-thick Color-primary">
                What kind of education and professionalism do the team members have?
                <span class="float-right">
                  <i class="fa fa-plus" aria-hidden="true"></i>
                </span>
              </p>
              <p class="text-left py-3 pl-3 mb-0 small Color-gray-60" v-if="q.five == true">
                Equipped with high standards of education and training, our team is ready to use their
                advanced degrees and skills necessary to perform their specific role within your organization.
                Our team of passionate and highly motivated individuals are here to serve your needs.
              </p>
            </div>
          </div>
          <div class="col-sm-12 col-md-6">
            <div class="card w-100 mt-4 cursor-pointer" @click="q.three = !q.three">
              <p class="text-left py-3 px-2 mb-0 small-thick Color-primary">
                What is provided for my team member?
                <span class="float-right">
                  <i class="fa fa-plus" aria-hidden="true"></i>
                </span>
              </p>
              <p class="text-left py-3 pl-3 mb-0 small Color-gray-60" v-if="q.three == true">
                What we provide for your virtual team members.
                <br>&nbsp;  A workstation
                <br>&nbsp;  PC with monitor and camera
                <br>&nbsp;  Noise cancellation headsets
                <br>&nbsp;  Keyboard and mouse
                <br>&nbsp;  Dedicated high speed internet
                <br>&nbsp;  A conference room with video conferencing built in
                <br>&nbsp;  A comfortable, secure atmosphere in which to work
              </p>
            </div>
            <div class="card w-100 mt-4 cursor-pointer" @click="q.four = !q.four">
              <p class="text-left py-3 px-2 mb-0 small-thick Color-primary">
                What extra costs will I have?
                <span class="float-right">
                  <i class="fa fa-plus" aria-hidden="true"></i>
                </span>
              </p>
              <p class="text-left py-3 pl-3 mb-0 small Color-gray-60" v-if="q.four == true">
                You will have a set fee that you pay every month, there are no hidden fees. We will work with you on any additional costs to provide specialized PC’s, software, or equipment that your team member may require.
              </p>
            </div>
            <div class="card w-100 mt-4 cursor-pointer" @click="q.six = !q.six">
              <p class="text-left py-3 px-2 mb-0 small-thick Color-primary">
                What are some of the positions I can look to hire?
                <span class="float-right">
                  <i class="fa fa-plus" aria-hidden="true"></i>
                </span>
              </p>
              <p class="text-left py-3 pl-3 mb-0 small Color-gray-60" v-if="q.six == true">
                Zimbabwe has over 2 million university-educated men and women in all areas of
                expertise. Some examples would be Data Entry, Accounting, Video Production,
                Website Design, Social Media, Marketing and Customer Service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-100 banner">
      <img class="w-100 banner-image mb-5" src="/images/banner.jpg" alt="Banner"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      q: {
        "one": false,
        "two": false,
        "three": false,
        "four": false,
        "five": false,
        "six": false
      },
      error: ''
    }
  },
  methods: {
    
  },
  head() {
    return {
      title: `${process.env.title} | FAQ`,
      meta: [
        {
          hid: 'description',
          property: 'description',
          content: 'We only recruit the best candidates, giving you resume/CV options to go through before we set video interviews.'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${process.env.title} | FAQ`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'We only recruit the best candidates, giving you resume/CV options to go through before we set video interviews.'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://worxconnect.com/faq`
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: `${process.env.title} | FAQ`
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: 'We only recruit the best candidates, giving you resume/CV options to go through before we set video interviews.'
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: `https://worxconnect.com/faq`,
        }
      ],
    }
  }
}
</script>
<template>
  <div class="w-100">
    <div class="w-100 banner">
      <img class="w-100 banner-image" src="/images/people-sitting.jpg" alt="People Sitting" />
      <div class="container">
        <h2 class="position-absolute Color-white title-large py-4 page-title">
          Schedule
        </h2>
      </div>

      <div class="row">
        <div class="col-12">
          <client-only>
            <!-- <div class="calendly-inline-widget" data-url="https://calendly.com/yuliana-4/60min" style="min-width:320px;height:630px;"></div> -->
            <vue-calendly url="https://calendly.com/gbps/worxconnect-discovery-call"></vue-calendly>
          </client-only>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    const recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js')
    document.head.appendChild(recaptchaScript)
  },
  head() {
    return {
      title: `${process.env.title} | Schedule a Call`,
      meta: [
        {
          hid: "description",
          property: "description",
          content: "Schedule a call and get a free consultation with our experts.",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: `${process.env.title} | Schedule a Call`,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "Schedule a call and get a free consultation with our experts.",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: `https://worxconnect.com/schedule`,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: `https://worxconnect.com/images/test.png`,
        },
        {
          hid: "twitter:title",
          property: "twitter:title",
          content: `${process.env.title} | Schedule a Call`,
        },
        {
          hid: "twitter:description",
          property: "twitter:description",
          content: "Schedule a call and get a free consultation with our experts.",
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
}
</script>
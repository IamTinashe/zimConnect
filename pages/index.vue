<template>
  <div class="">
    <BGLayout/>
    <div class="container-fluid position-absolute px-0">
      <Hero/>
      <TrendingBox/>
      <WhatsInIt/>
      <clientsBanner/>
      <Footer/>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    "BGLayout": () => import("@/components/BGLayout"),
    "Hero": () => import("@/components/Hero"),
    "TrendingBox": () => import("@/components/TrendingBox"),
    "WhatsInIt": () => import("@/components/WhatsInIt"),
    "clientsBanner": () => import("@/components/ClientsBanner"),
    "Footer": () => import("@/components/Footer")
  },
  mounted(){
  },
  head() {
    return {
      title: `${process.env.title} | Home`,
      meta: [
        {
          hid: 'description',
          property: 'description',
          content: 'We are an insourcing company that helps companies find the best employees for their business. Insource your next virtual assistant through WorXconnect.'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${process.env.title} | Home`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'We are an insourcing company that helps companies find the best employees for their business. Insource your next virtual assistant through WorXconnect.'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://worxconnect.com/home`
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: `${process.env.title} | Home`
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: 'We are an insourcing company that helps companies find the best employees for their business. Insource your next virtual assistant through WorXconnect.'
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: `https://worxconnect.com`,
        }
      ],
    }
  }
}
</script>
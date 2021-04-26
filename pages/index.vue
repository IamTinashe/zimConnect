<template>
  <div class="video-bg-layout">
    <BGLayout/>
    <div class="container-fluid position-absolute px-0">
      <Hero/>
      <TrendingBox/>
      <WhatsInIt/>
      <ClientsBanner/>
    </div>
    
  </div>
</template>

<script>
export default {
  components: {
    'BGLayout': () => import('@/components/BGLayout'),
    'Hero': () => import('@/components/Hero'),
    'TrendingBox': () => import('@/components/TrendingBox'),
    'WhatsInIt': () => import('@/components/WhatsInIt'),
    'ClientsBanner': () => import('@/components/ClientsBanner')
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
          content: ''
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${process.env.title} | Home`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: ''
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${process.env.BASE}/home`
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${process.env.BASE}/images/test.png`
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: `${process.env.title} | Home`
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: ``
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: `${process.env.BASE}/images/test.png`
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: `${process.env.BASE}/home`,
        }
      ],
    }
  }
}
</script>
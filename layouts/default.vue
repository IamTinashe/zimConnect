<template>
  <div>
    <Header/>
    <nuxt/>
    <div
      v-if="$route.name != 'index'"
      class="container-fluid position-absolute px-0"
    >
      <Footer/>
    </div>
  </div>
</template>

<style>
html {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>


<script>
export default {
  components: {
    'Header': () => import('@/components/Header'),
    'Footer': () => import('@/components/Footer')
  }
}
</script>

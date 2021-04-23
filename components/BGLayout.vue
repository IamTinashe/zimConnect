<template>
  <div class="">
    <section class="section">
      <div class=""></div>
      <video id="hero-video" video autobuffer autoplay muted loop ref="video" class="hero-video">
        <source id="mp4" src="/videos/hero-video.mov" type="video/mp4">
      </video>
    </section>
  </div>
</template>

<script>
export default {
  mounted(){
    this.$refs.video.playbackRate = 1.3;
  }
}
</script>
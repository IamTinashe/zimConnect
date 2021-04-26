<template>
  <div class="video-bg-layout">
    <section class="section">
      <div class="video_overlay"></div>
      <video id="hero-video" video autobuffer autoplay muted loop ref="video" class="hero-video">
        <source id="mp4" src="/videos/hero-video.mov" type="video/mp4">
      </video>
    </section>
  </div>
</template>

<script>
export default {
  mounted(){
    this.$refs.video.playbackRate = 2;
  }
}
</script>
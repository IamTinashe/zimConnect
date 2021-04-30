<template>
  <div class="video-bg-layout">
    <section class="section">
      <div class="video_overlay"></div>
      <video id="hero-video" video autobuffer autoplay muted loop ref="video" class="hero-video">
        <source id="mp4" src="/videos/hero-video.mp4" type="video/mp4">
      </video>
    </section>
    <div class="container-fluid">
      <div class="container">
        <div class="row test">
          <div class="col-lg-12 bgColor-primary">
            Hello
            <br>
            <br>
            Hello
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted(){
    this.$refs.video.playbackRate = 1.3;
  }
}
</script>
<template lang="html">
  <div class="con-notifications">

  </div>
</template>

<script>
export default {
  mounted() {
    this.openNotification();
  },
  methods: {
    openNotification() {
      setTimeout(
        this.$vs.notify({
          time: 10000,
          progress: "auto",
          title: "What comes with the monthly fee?",
          text: `<ol style="padding-left: 20px;">
            <li>Pastoral Care</li>
            <li>Health Benefits</li>
            <li>Holiday Pay</li>
            <li>IT Services</li>
            <li>Access to the Internet</li>
          </ol>`,
        }), 10000);
    },
  },
};
</script>
<template>
  <div>
    <section class="section">
      <div class="container">
        <h1>Edouard Duplessis</h1>
        <nuxt/>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.$route.name
    };
  },
  mounted: function(){
    if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }
  }


  
};
</script>
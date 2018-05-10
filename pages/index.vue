<template>
<div>
  <ul class="posts">
    <li v-for="post in posts" :key="post.title" class="post">
      <img :src="post.image" alt="" class="thumbnail">
      <nuxt-link :to="post.permalink" >
        <div>

        {{ post.title }}

        </div>
        
      </nuxt-link>
    </li>
    <li class="post"></li>
  </ul>
</div>
</template>

<script>
export default {
  async asyncData({ app }) {
    return {
      posts: await app.$content("/").getAll()
    };
  }
};
</script>


<style lang="scss" scoped>
 .post{
   img.thumbnail{
     width: 100%;
     height:100%;
     object-fit: cover;
     position: absolute;
     filter: grayscale(100%);
     transition: filter 0.265s ease-in-out;
   }
   &:hover img.thumbnail{
     filter: grayscale(0);
   }
   
   a{
     position: absolute;
     width: 100%;
     height: 100%;
   }

 }
 
</style>

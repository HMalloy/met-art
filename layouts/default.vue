<template>
  <div>
    <!-- shared main nav -->
    <MainNav/>
    <b-container fluid class="p-5 mt-5">
    <div v-if="home">
          <Nuxt />
          <b-row>
            <b-col md="4" class="pt-5">
              <!-- featured art-->
              <FeaturedArt/>
            </b-col>
            <b-col md="4">
              <!-- latest blog post-->
              <LatestBlog/>
            </b-col>
            <b-col md="4">
              <!-- Upcoming Event-->
              <Events/>
            </b-col>
          </b-row>
        </div>
        <div v-else>
          <b-row class="d-flex justify-content-between">
            <!-- main content -->
            <b-col class="col-12 col-sm-10 col-md-8 col-lg-6">
              <Nuxt />
            </b-col>
            <!-- shared sidebar -->
            <b-col class="col-12 col-md-4 mt-3 mt-md-0">
              <!-- featured art -->
              <FeaturedArt/>
              <!-- latest blog post -->
              <LatestBlog/>
              <!-- Upcoming Event -->
              <Events/>
            </b-col>
          </b-row>
        </div>
    </b-container>
  </div>
</template>

<script type="text/javascript">
  export default {
    computed:{
      home(){
        return this.$route.path ==='/'
      }
    }
  }
</script>

<style lang="scss">
.art {
    // start of 75% opacity
    img {
      opacity: .75;
      transition: all 0.2s;
      // on clicking image add border and 100% opacity
      &.active {
        border:3px solid #dc3545;
        opacity:1;
      }
      // on hover go from circle to square
      &:hover {
        border-radius: 0!important;
      }
    }
    // on hover image 100% opacity
    &:hover img {
      opacity: 1;
      cursor: pointer;
    }
    // on hover transition from circle to square button
    &__img.rounded-circle, &__btn.rounded-circle {
      transition: all 0.2s;
      &:hover {
        border-radius: 0!important;
      }
    }
  }
</style>

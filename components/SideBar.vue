<template lang="html">
  <b-row class="d-flex justify-content-between">
      <!-- main content -->
      <b-col class="col-12 col-sm-10 col-md-8 col-lg-6">
        <router-view/>
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
</template>

<script>
export default {
  name:'SideBar'
}
</script>

<style lang="css" scoped>
</style>

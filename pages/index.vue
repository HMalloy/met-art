<template>
  <div>
    <div>
      <h1 slot="heading">{{title}}</h1>
      <p>A fun site to play with the art of The Met!</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Welcome to Met Art'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>

<style>

</style>

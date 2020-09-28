<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="danger" class="m-0">
      <b-navbar-brand href="#">Met Art</b-navbar-brand>

      <b-navbar-toggle target="main-nav"></b-navbar-toggle>

      <b-collapse id="main-nav" is-nav>
        <b-navbar-nav>
          <li class="nav-item"><nuxt-link class="nav-link" to="/">Home</nuxt-link></li>
          <li class="nav-item"><nuxt-link class="nav-link" to="Art">Art</nuxt-link></li>
          <li class="nav-item"><nuxt-link class="nav-link" to="Blog">Blog</nuxt-link></li>
          <li class="nav-item"><nuxt-link class="nav-link" to="Contact">Contact</nuxt-link></li>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style>

</style>

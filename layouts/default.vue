<template>
  <div id="home" style="width:100% !important;font-family:monospace;">
    <b-navbar
      sticky
      fixed
      toggleable="lg"
      :type="typeNavComputed"
      :variant="variantNavComputed"
      class="shadow-sm p-3 mb-5 rounded"
    >
      <b-navbar-brand href="https://t.me/firmansyah2018" style="font-family:monospace;">
        <font-awesome-icon :icon="['fas', 'code']" />
        <!-- <b-img src="~/assets/img/logoV1.png" width="40" rounded fluid alt="Fajar Firmansyah" /> -->
        Fajar Firmansyah
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" class="text-white" />
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto" style="font-size:16px;">
          <b-nav-item to="/">
            <span>Kembali</span>
          </b-nav-item>
          <b-nav-item @click="darkModeSwitch">
            <font-awesome-icon
              :icon="['fas', $colorMode.preference === 'dark'?'sun':'moon']"
            />
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <main class="container-fluid">
      <Nuxt keep-alive :keep-alive-props="{ exclude: ['modal'] }"/>
    </main>
    <footer id="kontak" class="mt-5">
      <h5 class="text-center" style="font-weight:bold;">
        <font style="text-decoration:underline;">
          Kontak
        </font>
      </h5>
      <p class="text-center text-lg">
        <a target="_blank" href="https://t.me/firmansyah2018">
          <font-awesome-icon class="m-2 fa-lg text-primary" :icon="['fab','telegram']" />
        </a>
        <a target="_blank" href="https://wa.me/6289684328441">
          <font-awesome-icon class="m-2 fa-lg text-success" :icon="['fab','whatsapp']" />
        </a>
        <a target="_blank" href="https://www.facebook.com/firmansyah.fajar">
          <font-awesome-icon class="m-2 fa-lg" :icon="['fab','facebook-square']" />
        </a>
        <a target="_blank" href="https://www.instagram.com/firmansyah_2017">
          <font-awesome-icon class="m-2 fa-lg text-danger" :icon="['fab','instagram']" />
        </a>
        <a target="_blank" href="mailto: mail.firmansyah93@gmail.com">
          <font-awesome-icon class="m-2 fa-lg text-primary" :icon="['fab','google']" />
        </a>
      </p>
      <p class="text-center text-underlined">
        <font-awesome-icon class="text-primary" :icon="['fas','map-marker-alt']" /> Indonesia, Surabaya, Gunung Anyar Tambak
      </p>
      <p class="text-center">
        © 2020 Copyright Fajar Firmansyah, S.Kom - Mega Wahyu S.Si, Zakia Aulia Rahma
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  auth: false,
  data () {
    return {
      scrolled: 'up'
    }
  },
  computed: {
    variantNavComputed () {
      if (this.$colorMode.preference === 'dark') {
        return 'dark'
      }
      if (this.$colorMode.preference === 'light') {
        return this.scrolled === 'up' ? 'primary' : 'white'
      }
      return 'primary'
    },
    typeNavComputed () {
      if (this.$colorMode.preference === 'dark') {
        return this.scrolled === 'up' ? 'white' : 'white'
      }
      if (this.$colorMode.preference === 'light') {
        return this.scrolled === 'down' ? 'light' : 'dark'
      }
      return 'white'
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    darkModeSwitch () {
      this.$colorMode.preference = this.$colorMode.preference === 'dark' ? 'light' : 'dark'
    },
    handleScroll (e) {
      this.scrolled = window.scrollY === 0 ? 'up' : 'down'
    },
    logout () {
      this.$auth.logout('google')
        .then(() => {
          this.$router.push('/login')
        })
    }
  }
}
</script>

<style scoped>

</style>
<style>
  html {
    scroll-behavior: smooth;
  }
</style>

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
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto" style="font-size:16px;">
          <b-nav-item href="#home">
            <span :class="$route.fullPath.includes('#home')?'bg-white text-dark rounded p-2':''">Home</span>
          </b-nav-item>
          <b-nav-item href="#tentang">
            <span :class="$route.fullPath.includes('#tentang')?'bg-primary text-white rounded p-2':''">Tentang</span>
          </b-nav-item>
          <b-nav-item href="#pengalaman">
            <span :class="$route.fullPath.includes('#pengalaman')?'bg-primary text-white rounded p-2':''">Pengalaman</span>
          </b-nav-item>
          <b-nav-item href="#kontak">
            <span :class="$route.fullPath.includes('#kontak')?'bg-primary text-white rounded p-2':''">Kontak</span>
          </b-nav-item>
          <b-nav-item href="https://blog.fajarfirmansyah.com">
            <span>Blog</span>
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
      <div>
        <b-jumbotron
          id="jumbo"
          style="border-bottom:1px solid black"
          :bg-variant="$colorMode.preference === 'dark'?'dark':'white'"
        >
          <template #header>
            Hi, There
          </template>

          <template #lead>
            <h1 style="display:none">
              Fajar Firmansyah Programmer
            </h1>
            <span class="primary shadow-sm">
              I am a programmer.<br> I have a good life.</span>
          </template>

          <hr class="my-4" style="width:60%">

          <p>Yuk Kenalan,</p>
          <b-button variant="primary" href="https://t.me/firmansyah2018">
            Contact Me <font-awesome-icon :icon="['fas', 'paper-plane']" />
          </b-button>
        </b-jumbotron>
      </div>

      <b-row style="margin-top:2%">
        <b-col md="6">
          <b-img src="~/assets/svg/profileman.svg" fluid alt="Fajar Firmansyah" />
        </b-col>
        <b-col md="6 shadow-sm">
          <p class="mt-5 pr-md-4 text-justify p-1 font-size:15px;">
            <b>Salam kenal,</b><br><br>
            Selamat datang di gubug digital saya. Sebuah website simple sebagai sample perwakilan diri saya.
            Website ini tak lebih hanya sebagai tanda pengenal kepada pembaca. Saya senang menambah relasi dengan
            rekan-rekan baik yang memiliki <i>hobby</i> sama yakni dunia IT maupun yang bukan. Semuanya sangat memberi warna
            dan inspirasi bagi saya.<br><br>
            Besar harapan saya selain berkenalan melalui gubug digital ini, tentu juga pertemuan di dunia nyata dengan rekan-rekan yang baik. Bergaul, bertukar fikiran, berbagi informasi, ilmu pengetahuan, dan pekerjaan adalah hal-hal yang sangat menyenangkan.<br><br>
            Jangan lupa <i>add contact</i> di bawah ya gan. Semoga saling menjadi inspirasi satu sama lain ya. Salam Super!
          </p>
        </b-col>
      </b-row>

      <b-row id="pengalaman" style="margin-top:3%" class="px-3">
        <b-col md="6 shadow-sm">
          <h5 class="text-left" style="font-weight:bold;">
            <font style="text-decoration:underline;">
              Pengalaman
            </font>
            <font-awesome-icon class="ml-1" :icon="['fas', 'user-check']" />
          </h5>
          <ul class="list-unstyled">
            <b-media tag="li">
              <template #aside>
                <b-img src="~/assets/svg/logo-php.svg" width="60" alt="placeholder" />
              </template>
              <h5 class="mt-0 mb-1">
                PHP
              </h5>
              <p class="mb-0">
                Laravel Framework, Lumen Api Framework, CodeIgniter, Slim PHP
              </p>
            </b-media>

            <b-media tag="li" class="my-2">
              <template #aside>
                <b-img src="~/assets/svg/logo-sql.svg" width="60" alt="placeholder" />
              </template>

              <h5 class="mt-0 mb-1">
                Database
              </h5>
              <p class="mb-0">
                SQL-PL/SQL (PostgreSQL, MySQL), Mongo DB, Hadoop, Apache-Hbase
              </p>
            </b-media>

            <b-media tag="li">
              <template #aside>
                <b-img src="~/assets/svg/logo-vue.svg" width="60" alt="placeholder" />
              </template>

              <h5 class="mt-0 mb-1">
                Frontend
              </h5>
              <p class="mb-0">
                Vanilla JS, JQuery, Vue/Nuxt JS, Ext JS, Java Android, Flutter
              </p>
            </b-media>

            <b-media tag="li" class="my-2">
              <template #aside>
                <b-img class="text-white" src="~/assets/svg/logo-os.svg" width="60" alt="placeholder" />
              </template>

              <h5 class="mt-0 mb-1">
                OS Administration
              </h5>
              <p class="mb-0">
                Linux OS, VPS, Docker, Virtualisasi, Networking
              </p>
            </b-media>

            <b-media tag="li">
              <template #aside>
                <b-img src="~/assets/svg/logo-erp.svg" width="60" alt="placeholder" />
              </template>

              <h5 class="mt-0 mb-1">
                ERP System
              </h5>
              <p class="mb-0">
                Trading, Manufacturer, Multi Channel Access, Automation
              </p>
            </b-media>
          </ul>
        </b-col>
        <b-col md="6" class="pt-5">
          <b-img src="~/assets/svg/codethinking.svg" fluid alt="Fajar Firmansyah" class="mt-3" />
        </b-col>
      </b-row>

      <div id="tentang" style="margin-top:30px;margin-bottom:10px;padding:0px 10px 0px 10px;" class="shadow-sm">
        <b-card class="text-center" :bg-variant="$colorMode.preference === 'dark'?'dark':'white'">
          <b-row>
            <div class="col-md-9">
              <b-media right-align vertical-align="center">
                <h5 class="text-right" style="font-weight:bold;">
                  <font style="text-decoration:underline;">
                    Tentang Saya
                  </font>
                  <font-awesome-icon class="ml-1" :icon="['fas', 'user-tag']" />
                </h5>
                <p class="text-justify" style="font-family:monospace; font-size:15px;">
                  <b>S</b>aya dilahirkan di Kota Kediri pada 04 Maret 1993 yang dititipkan Tuhan kepada kedua orang tua yang sangat saya cintai. Sejak kecil saya senang menonton film bertajuk teknologi, termasuk komputer. Dimulai dari ajakan teman untuk bermain game-online sejak SMP, kenyamanan berinteraksi dengan teman-teman sesama pecinta hal-hal tentang komputer sangat saya nikmati. Hingga pada akhirnya Tuhan mengizinkan saya memiliki profesi sebagai programmer. Saya selalu belajar kepada siapa dan apapun yang saya temui, karena belajar adalah hal yang menyenangkan. Saya bersyukur selalu dikelilingi oleh orang-orang yang selalu menginsipirasi saya tentang kebaikan.
                </p>
              </b-media>
            </div>
            <div class="col-md-3">
              <b-avatar alt="Fajar Firmansyah" src="~/assets/img/me.jpg" size="12rem" class="shadow-sm mt-3" />
            </div>
          </b-row>
        </b-card>
      </div>
    </main>
    <footer id="kontak" class="mt-5">
      <h5 class="text-center" style="font-weight:bold;">
        <font style="text-decoration:underline;">
          Kontak Saya
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
#jumbo{
  background-image: url('~assets/svg/business_man.svg');
  background-repeat:no-repeat;
  background-size:contain;
  background-position:right;
}
#kontak{
  background-image: url('~assets/svg/contact.svg');
  background-repeat:no-repeat;
}
@media only screen and (min-width: 1200px) {
  main{
    padding:0 100px 0 100px;
  }
}
@media only screen and (max-width: 600px) {
  #jumbo{
    background-image: url('~assets/svg/business_man.svg');
    background-repeat:no-repeat;
    background-size:contain;
    background-position:center;
  }
  #kontak{
    background-image: url('~assets/svg/contact.svg');
    /* background-position:center; */
  }
}

</style>
<style>
  html {
    scroll-behavior: smooth;
  }
</style>

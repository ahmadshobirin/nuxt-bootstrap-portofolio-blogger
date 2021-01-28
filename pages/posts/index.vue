<template>
  <div class="container">
    <b-card-group v-if="posts.length===0" deck>
      <b-card
        v-for="i in 3"
        :key="i"
        no-body
        img-top
        class="p-2 pt-3 shadow-sm"
        :bg-variant="$colorMode.preference === 'dark'?'dark':'white'"
      >
        <b-skeleton-img card-img="top" style="height:140" />
        <template #footer>
          <p class="text-muted text-center mb-0">
            <small style="font-weight:bold;">&nbsp;</small>
          </p>
          <p class="text-muted text-center mt-0">
            <small style="font-weight:bold;">&nbsp;</small>
          </p>
        </template>
      </b-card>
    </b-card-group>
    <b-row v-else deck>
      <b-col
        v-for="(item,index) in posts"
        :key="index"
        class="col-md-3 col-12 p-2"
      >
        <b-card
          class="p-2 pt-3 shadow-sm"
          :bg-variant="$colorMode.preference === 'dark'?'dark':'white'"
          img-src="/svg/post.svg"
          img-alt="Fajar Firmansyah"
          img-height="120"
          img-top
        >
          <b-card-text class="paragraph-title">
            {{ item.title}}
          </b-card-text>
          <template #footer>
            <p class="text-muted text-center mb-0">
              <small style="font-weight:bold;"> Published on {{ item.published.split("T")[0] }} @blogger</small>
            </p>
            <p class="text-muted text-center mt-0">
              <b-link :class="'btn btn-sm '+ ($colorMode.preference === 'light'?'text-white bg-primary':'text-dark bg-light') " :href="item.url">
                Go to Original Post
              </b-link>
            </p>
          </template>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  computed: {
    blogger () {
      return process.env.blogger
    },
    posts () {
      return this.$store.state.posts
    }
  },
  created () {
    this.getPosts()
  },
  mounted () {
  },
  methods: {
    async getPosts () {
      if (this.posts.length > 0) { return }
      const url = 'https://www.googleapis.com/blogger/v3/blogs'
      const posts = await this.$axios.$get(`${url}/${this.blogger.id}/posts?key=${this.blogger.key}`)
      this.$store.commit('set', ['posts', posts.items])
    }
  }
}
</script>

<style scoped>
  .paragraph-title {
    min-height: 70px;;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    font-size: 16px;
  }
</style>

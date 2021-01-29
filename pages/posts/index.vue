<template>
  <div class="container">
    <b-row v-if="posts.length===0" deck>
      <b-col v-for="i in 8" :key="i" class="col-md-3 col-12 p-2">
        <b-card
          no-body
          img-top
          class="p-2 pt-3 shadow-sm"
          :bg-variant="$colorMode.preference === 'dark'?'dark':'white'"
        >
          <b-skeleton-img card-img="top" style="height:160" />
          <template #footer>
            <p class="text-muted text-center mb-0">
              <small style="font-weight:bold;">&nbsp;</small>
            </p>
            <p class="text-muted text-center mt-0">
              <small style="font-weight:bold;">&nbsp;</small>
            </p>
          </template>
        </b-card>
      </b-col>
    </b-row>
    <b-row v-else deck>
      <b-col
        v-for="(item,index) in posts"
        :key="index"
        class="col-md-3 col-12 p-2"
      >
        <!-- item.images?item.images[0].url: -->
        <b-card
          class="p-2 pt-3 shadow-sm"
          :bg-variant="$colorMode.preference === 'dark'?'dark':'white'"
          :img-src="item.images?item.images[0].url:'/svg/post.svg'"
          img-alt="Fajar Firmansyah"
          img-height="160"
          img-top
        >
          <b-card-text class="paragraph-title">
            {{ item.title }}
          </b-card-text>
          <template #footer>
            <p class="text-muted text-center mb-0">
              <small style="font-weight:bold;"> Published at {{ item.published.split("T")[0] }}</small>
            </p>
            <p class="text-muted text-center mt-0">
              <b-link
                :class="'btn btn-sm '+ ($colorMode.preference === 'light'?'text-white bg-primary':'text-dark bg-light') "
                :to="'posts/'+item.id"
              >
                Read
              </b-link>
            </p>
          </template>
        </b-card>
      </b-col>
    </b-row>
    <div class="text-center mt-2">
      <b-pagination
        :value="currentPage"
        :total-rows="totalRows"
        :per-page="1"
        first-text="First"
        prev-text="Prev"
        next-text="Next"
        :last-number="false"
        :limit="1"
        align="center"
        :hide-ellipsis="true"
        @change="change"
      >
        <!-- <template #page>
          ...
        </template> -->
      </b-pagination>
    </div>
  </div>
</template>

<script>
export default {
  scrollToTop: false,
  data () {
    return {

    }
  },
  computed: {
    currentPage () {
      return this.$store.state.currentPage
    },
    totalRows () {
      return this.$store.state.totalRows
    },
    blogger () {
      return process.env.blogger
    },
    posts () {
      const posts = this.$store.state.blogPost.items
      return posts
    }
  },
  created () {
  },
  mounted () {
    this.getPosts()
  },
  methods: {
    change (input) {
      this.$store.commit('set', ['currentPage', input])
      this.getPosts(input)
    },
    async getPosts (page = false) {
      if (this.posts.length > 0 && !page) { return }
      const url = 'https://www.googleapis.com/blogger/v3/blogs'
      let formattedUrl = `${url}/${this.blogger.id}/posts?key=${this.blogger.key}&fetchImages=true&fetchBodies=false&maxResults=12`

      if (page) {
        const allPosts = this.$store.state.allPosts
        const selectedPosts = allPosts[page - 1]
        if (selectedPosts !== undefined) {
          const me = this
          me.$store.commit('set', ['blogPost', { nextPageToken: me.$store.state.blogPost.nextPageToken, items: [] }])
          const delay = t => new Promise(resolve => setTimeout(resolve, t))
          delay(300).then(() => {
            me.$store.commit('set', ['blogPost', selectedPosts])
            window.scrollTo({ top: 0, behavior: 'smooth' })
          })
          return
        } else {
          formattedUrl += `&pageToken=${this.$store.state.blogPost.nextPageToken}`
        }
      }
      this.$store.commit('set', ['blogPost', { nextPageToken: this.$store.state.blogPost.nextPageToken, items: [] }])
      const posts = await this.$axios.$get(formattedUrl)
      const totalRows = posts.nextPageToken === undefined ? this.currentPage : (this.currentPage + 1)
      this.$store.commit('set', ['totalRows', totalRows])
      this.$store.commit('set', ['blogPost', posts])
      const allPosts = JSON.parse(JSON.stringify(this.$store.state.allPosts))
      allPosts.push(posts)
      this.$store.commit('set', ['allPosts', allPosts])
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>

<style scoped>
  .paragraph-title {
    min-height: 68px;;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    font-size: 14px;
  }
</style>

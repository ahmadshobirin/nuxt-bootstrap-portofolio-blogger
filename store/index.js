export const state = () => ({
  blogPost: {
    items: []
  },
  allPosts:[]
})

export const mutations = {
  set (state, [variable, value]) {
    state[variable] = value
  }
}

export const actions = {

}

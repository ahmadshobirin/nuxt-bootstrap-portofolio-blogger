export const state = () => ({
  blogPost: {
    items: []
  },
  allPosts:[],
  currentPage:1,
  totalRows:1
})

export const mutations = {
  set (state, [variable, value]) {
    state[variable] = value
  }
}

export const actions = {

}

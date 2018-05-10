const mutations = {
  setFilters (state, filters) {
    state.filters = filters
  },
  addFilter (state, { method, args }) {
    state.filters.push({ method, args })
  },
  setSplitter (state, { method, args }) {
    state.splitter = {
      method,
      args,
    }
  },
}

export default mutations
const mutations = {
  reset (state) {
    state.refresh = true
    state.filters = []
    state.splitter = null
    state.display.color = {
      default: 'black',
      method: null,
      params: null,
    }
    state.display.radius = {
      default: 10,
      method: null,
      params: null,
    }
  },
  setRefresh (state, refresh) {
    state.refresh = refresh
  },
  setFilters (state, filters) {
    state.filters = filters
  },
  addFilter (state, { method, args, type }) {
    state.filters.push({ method, args, type })
    state.refresh = true
  },
  updateFilter (state, filter ) {
    state.filters.forEach((singleFilter, index) => {
      if (singleFilter.type === filter.type) {
        state.filters[index].method = filter.method
        state.filters[index].args = filter.args
        state.refresh = true
      }
    })
  },
  removeFilter (state, filterType) {
    state.filters = state.filters.filter((filter) => {
      return filter.type !== filterType
    })
    state.refresh = true
  },
  setSplitter (state, { method, args }) {
    state.splitter = {
      method,
      args,
    }
    state.refresh = true
  },
  setDisplayColor (state, { method, args }) {
    state.display.color = {
      method,
      args,
      default: state.display.color.default,
    }
  },
  setDisplayRadius (state, { method, args }) {
    state.display.radius = {
      method,
      args,
      default: state.display.radius.default,
    }    
  },
}

export default mutations
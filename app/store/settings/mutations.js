const mutations = {
  setFilters (state, filters) {
    state.filters = filters
  },
  addFilter (state, { method, args, type }) {
    state.filters.push({ method, args, type })
  },
  updateFilter (state, filter ) {
    state.filters.forEach((singleFilter, index) => {
      if (singleFilter.type === filter.type) {
        state.filters[index].method = filter.method
        state.filters[index].args = filter.args
      }
    })
  },
  removeFilter (state, filterType) {
    state.filters = state.filters.filter((filter) => {
      return filter.type !== filterType
    })
  },
  setSplitter (state, { method, args }) {
    state.splitter = {
      method,
      args,
    }
  },
  setDisplayColor (state, { method, args }) {
    state.display.color = {
      method,
      args,
    }
  }
}

export default mutations
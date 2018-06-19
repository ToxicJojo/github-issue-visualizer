const mutations = {
  reset (state) {
    state.refresh = true
    state.filters = []
    state.splitter.method = null
    state.splitter.args = []
    state.display.color = {
      default: 'black',
      method: null,
      params: null,
    }
    state.display.radius.method = null
    state.display.radius.params = null

    state.markedIssues = []
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
  addMarkedIssue (state, { issue, color }) {
    state.markedIssues.push({
      issue,
      color,
    })
  },
  removeMarkedIssue (state, issue) {
    state.markedIssues = state.markedIssues.filter((markedIssue) => {
      return markedIssue.issue.id !== issue.id
    })
  },
  updateDefaultRadius (state, radius) {
    state.display.radius.default = radius
    state.refresh = true
  },
}

export default mutations
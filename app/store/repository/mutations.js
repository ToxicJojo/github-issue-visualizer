const mutations = {
  setIssues (state, issues) {
    state.issues = issues
  },
  setLabels (state, labels) {
    state.labels = labels
  },
  setContributors (state, contributors) {
    state.contributors = contributors 
  }, 
}

export default mutations
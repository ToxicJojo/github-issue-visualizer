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
  setIssueAuthors (state, issueAuthors) {
    state.issueAuthors = issueAuthors 
  }, 
  setComputedIssues (state, issues) {
    state.computedIssues = issues
  }
}

export default mutations
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
  },
  setInfo (state, { owner, repo }) {
    state.info.owner = owner
    state.info.repo = repo
  },
  setLoaded (state, loaded) {
    state.loaded = loaded
  },
}

export default mutations
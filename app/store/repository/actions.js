import githubApi from '../../js/api'

const actions = {
  async loadIssues ({ commit }, { owner, repo }) {
    const issues = await githubApi.getIssues(owner, repo)
    commit('setIssues', issues)
  },
  async loadLabels ({ commit }, { owner, repo }) {
    const labels = await githubApi.getLabels(owner, repo)
    commit('setLabels', labels)
  },
  async loadContributors ({ commit }, { owner, repo }) {
    const contributors = await githubApi.getContributors(owner, repo)
    commit('setContributors', contributors)
  },
}

export default actions
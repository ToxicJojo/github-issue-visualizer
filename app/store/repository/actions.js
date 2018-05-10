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
}

export default actions
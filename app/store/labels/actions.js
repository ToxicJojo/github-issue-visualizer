import githubApi from '../../js/api'

const actions = {
  async loadLabels ({ commit }, { owner, repo }) {
    const labels = await githubApi.getLabels(owner, repo)
    commit('setLabels', labels)
  }
}

export default actions
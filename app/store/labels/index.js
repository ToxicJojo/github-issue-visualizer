import state from './state'
import mutations from './mutations'
import actions from './actions'

const moduleLabels = {
  namespaced: true,
  state,
  mutations,
  actions,
}

export default moduleLabels
import state from './state'
import mutations from './mutations'
import actions from './actions'

const moduleRepository = {
  namespaced: true,
  state,
  mutations,
  actions,
}

export default moduleRepository
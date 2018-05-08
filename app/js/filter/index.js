import state from './filter-state'
import label from './filter-label'

const filterList = [
  {
    name: 'State Open',
    filter: state.filterStateOpen,
  },
  {
    name: 'State Closed',
    filter: state.filterStateClosed,
  },
  {
    name: 'Label',
    filter: label.filterLabel,
  }
]

export default {
  state,
  label,
  filterList,
}
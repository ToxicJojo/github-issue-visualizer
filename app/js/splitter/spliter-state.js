import filter from '../filter'
import createGroup from '../util/create-group'

const splitState = (issues) => {
  const openIssues = filter.state.filterStateOpen(issues)
  const closedIssues = filter.state.filterStateClosed(issues)

  const groupOpen = createGroup(filter.state.STATE_OPEN, openIssues)
  const groupClosed = createGroup(filter.state.STATE_CLOSED, closedIssues)

  /*return [
    groupOpen,
    groupClosed,
  ]*/
  return [openIssues, closedIssues]
}

export default {
  splitState,
}
import filter from '../filter'

// Retuns an array with to items. Each of the items is an array
// containing the open/closed issues.
const splitState = (issues) => {
  const openIssues = filter.state.filterStateOpen(issues)
  const closedIssues = filter.state.filterStateClosed(issues)

  return [openIssues, closedIssues]
}

export default {
  splitState,
}
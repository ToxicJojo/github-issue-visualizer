const STATE_OPEN = 'open'
const STATE_CLOSED = 'closed'

const filterState = (issues, state) => {
  return issues.filter((issue) => {
    return issue.state === state
  })
}

const filterStateOpen = (issues) => {
  return filterState(issues, STATE_OPEN)
}

const filterStateClosed = (issues) => {
  return filterState(issues, STATE_CLOSED)
}

export default {
  filterState,
  filterStateOpen,
  filterStateClosed,
  STATE_OPEN,
  STATE_CLOSED,
}
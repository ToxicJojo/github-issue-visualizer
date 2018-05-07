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

module.exports.filterState = filterState
module.exports.filterStateOpen = filterStateOpen
module.exports.filterStateClosed = filterStateClosed
module.exports.STATE_OPEN = STATE_OPEN
module.exports.STATE_CLOSED = STATE_CLOSED
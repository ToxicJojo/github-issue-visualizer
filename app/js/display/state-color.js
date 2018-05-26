const COLOR_OPEN = 'blue'
const COLOR_CLOSED = 'red'

const stateColor = (issue) => {
  if (issue.state === 'open') {
    return COLOR_OPEN
  }
  return COLOR_CLOSED
}

export default stateColor
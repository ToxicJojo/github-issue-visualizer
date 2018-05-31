const COLOR_OPEN = '#2CBE4E'
const COLOR_CLOSED = '#cb2431'

const stateColor = (issue) => {
  if (issue.state === 'open') {
    return COLOR_OPEN
  }
  return COLOR_CLOSED
}

export default stateColor
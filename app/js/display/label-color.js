
const labelColor = (issue) => {
  if (issue.labels[0]) {
    return `#${issue.labels[0].color}`
  }
  return 'black'
}

export default labelColor
// Returns a an array of objects with a label and count property sorted by
// the count. The count represents how often the specific label has been used
// in the issues.
const getLabelCount = (issues, labels) => {
  const labelCount = labels.map((label) => {
    return {
      count: 0,
      label,
    }
  })

  issues.forEach((issue) => {
    issue.labels.forEach((issueLabel) => {
      labelCount.forEach((labelC) => {
        if (labelC.label.id === issueLabel.id) {
          labelC.count++
        }
      })
    })
  })

  labelCount.sort((a, b) => {
    if (a.count < b.count) {
      return 1
    }
    return -1
  })

  return labelCount
}

export default getLabelCount
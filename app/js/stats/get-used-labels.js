const getUsedLabels = (issues) => {
  let labels = []

  issues.forEach((issue) => {
    issue.labels.forEach((label) => {
      const isInSet = !labels.every((knownLabel) => {
        return knownLabel.id !== label.id
      })

      if (!isInSet) {
        labels.push(label)
      }
    })
  })

  return labels
}

export default getUsedLabels
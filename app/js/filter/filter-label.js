const filterLabel = (issues, labelId) => {
  return issues.filter((issue) => {
    return issue.labels.some((label) => {
      return label.id === labelId
    })
  })
}

export default {
  filterLabel,
}
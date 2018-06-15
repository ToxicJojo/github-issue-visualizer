const filterLabel = (issues, ...labelIds) => {

  return issues.filter((issue) => {
    return issue.labels.some((label) => {
      return labelIds.some((labelId) => {
        return label.id === labelId
      })
    })
  })
}

export default {
  filterLabel,
}
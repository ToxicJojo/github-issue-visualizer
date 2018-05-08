import filter from '../filter'
import createGroup from '../util/create-group'

const splitLabel = (issues, labels) => {
  let labelGroups = []

  labels.forEach((label) => {
    const issuesWithLabel = filter.label.filterLabel(issues, label.id)
  
    const labelGroup = createGroup(label.name, issuesWithLabel)
    labelGroups = [...labelGroups, labelGroup]
  })

  return labelGroups
}

export default {
  splitLabel,
}
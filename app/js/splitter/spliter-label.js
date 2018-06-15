import filter from '../filter' 

const splitLabel = (issues, labels) => {
  const labelGroups = []

  //console.log(labels)
  //console.log(issues)
  labels.forEach((label) => {
    const filterdLabels = filter.label.filterLabel(issues, label.id)
    if (filterdLabels.length > 0) {
      labelGroups.push(filterdLabels)
    }
  })
  
  //console.log(labelGroups)
  return labelGroups
}

export default {
  splitLabel,
}
import getLabelCount from './get-label-count'


const getMostUsedLabel = (issues, labels) => {
  const labelCount = getLabelCount(issues, labels)

  return labelCount[0].label
}

export default getMostUsedLabel
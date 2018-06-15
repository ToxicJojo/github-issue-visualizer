import getLabelCount from './get-label-count'


const getMostUsedLabelCount = (issues, labels) => {
  const labelCount = getLabelCount(issues, labels)

  return labelCount[0].count
}

export default getMostUsedLabelCount
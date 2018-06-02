const getEarliestDate = (issues) => {
  return issues.reduce((earliestDate, issue) => {
    const issueDate = new Date(issue.created_at)
    if (issueDate.getTime() < earliestDate.getTime()) {
      return issueDate
    }
    return earliestDate
  }, new Date())
}

export default getEarliestDate
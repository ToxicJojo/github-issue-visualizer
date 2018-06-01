// Filtes for issues that have been created between dateStart and dateEnd
const filterDate = (issues, dateStart, dateEnd) => {
  return issues.filter((issue) => {
    const issueDate = new Date(issue.created_at)
    return (issueDate.getTime() > dateStart.getTime() && issueDate.getTime() < dateEnd.getTime())
  })
}

export default {
  filterDate,
}
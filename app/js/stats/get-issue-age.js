// Returns the age of an issue in days.
const DAY_DIVIDER = (1000 * 60 * 60 * 24)

const getIssueAge = (issue) => {
  const issueAge = new Date().getTime() - new Date(issue.created_at).getTime() 
  return Math.floor(issueAge / DAY_DIVIDER)
}

export default getIssueAge
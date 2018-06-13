
const getMostDiscussedIssue = (issues) => {
  return issues.reduce((mostDiscussedIssue, issue) => {
    if (mostDiscussedIssue.comments < issue.comments) {
      return issue
    }
    return mostDiscussedIssue
  }, issues[0])
}

export default getMostDiscussedIssue
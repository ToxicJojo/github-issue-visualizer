const filterPullRequest = (issues, isPullRequest) => {
  isPullRequest = (isPullRequest === 'true')
  return issues.filter((issue) => {
    if (issue.pull_request) {
      return isPullRequest
    }
    return !isPullRequest
  })
}

export default {
  filterPullRequest,
}
const newestIssue = (issues) => {
  return issues.reduce((oldest, current) => {
    if (new Date(oldest.created_at) > new Date(current.created_at)) {
      return oldest
    }
    return current
  }, issues[0])
}

export default newestIssue
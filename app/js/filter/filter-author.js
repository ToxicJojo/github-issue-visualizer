const filterAuthor = (issues, authorId) => {
  return issues.filter((issue) => {
    return issue.user.id === authorId
  })
}

export default {
  filterAuthor,
}
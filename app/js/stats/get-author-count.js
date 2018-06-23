import filter from '../filter'

const getAuthorCount = (issues, issueAuthors) => {
  const authorCount = issueAuthors.map((author) => {
    const filterIssues = filter.author.filterAuthor(issues, author.id)
    return {
      id: author.id,
      count: filterIssues.length,
    }
  })

  authorCount.sort((element1, element2) => {
    if (element1.count < element2.count) {
      return 1
    }
    return -1
  })

  return authorCount
}

export default getAuthorCount
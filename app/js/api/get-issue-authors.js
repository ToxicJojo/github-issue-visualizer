const getIssueAuthors = (issues) => {
  const authors = issues.reduce((accumulator, issue) => {
    const isInSet = ! accumulator.every((author) => {
      return author.id !== issue.user.id
    })

    if (!isInSet || accumulator.length === 0) {
      return [...accumulator, issue.user]
    }

    return accumulator
  }, [])
  
  return authors
}


export default getIssueAuthors
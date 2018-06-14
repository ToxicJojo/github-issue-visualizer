// Gets all authors for the issues passed in
const getIssueAuthors = (issues) => {
  const authors = issues.reduce((accumulator, issue) => {
    // Is the author of the issue already in the author set?
    const isInSet = !accumulator.every((author) => {
      return author.id !== issue.user.id
    })

    // If the author is not yet in the set add them
    if (!isInSet || accumulator.length === 0) {
      return [...accumulator, issue.user]
    }

    return accumulator
  }, [])
  
  return authors
}


export default getIssueAuthors
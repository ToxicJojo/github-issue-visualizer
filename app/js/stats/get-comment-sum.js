import statsUtil from './util'

const getCommentSum = (issues) => {
  const commentsCount = issues.map((issue) => {
    return issue.comments
  })

  return statsUtil.getSum(commentsCount)
}

export default getCommentSum
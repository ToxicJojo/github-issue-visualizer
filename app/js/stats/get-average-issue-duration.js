import statsUtil from './util'
import util from './util';

const getAverageIssueDuration = (issues) => {
  const issueDurations = issues.map((issue) => {
    const createdDate = new Date(issue.created_at)
    // If the issue is not yet closed use the current date as the closedDate
    const closedDate = issue.closed_at ? new Date(issue.closed_at) : new Date()

    return closedDate - createdDate
  })

  return util.getAverage(issueDurations)
}

export default getAverageIssueDuration
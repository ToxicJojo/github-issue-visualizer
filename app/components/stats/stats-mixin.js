import stats from '../../js/stats'
import millisecondsToDays from '../../js/util/milliseconds-to-days'

const statsMixin = {
 computed: {
  issueCount () {
    return this.issues.length
  },
  commentCount () {
    return stats.getCommentSum(this.issues)
  },
  averageCommentCount () {
    return (this.commentCount / this.issueCount).toFixed(2)
  },
  issueWithMostComments () {
    return stats.getMostDiscussedIssue(this.issues)
  },
  oldestIssue () {
    return stats.oldestIssue(this.issues)
  },
  oldestIssueAge () {
    return stats.getIssueAge(this.oldestIssue)
  },
  newestIssue () {
    return stats.newestIssue(this.issues)
  },
  newestIssueAge () {
    return stats.getIssueAge(this.newestIssue)
  },
  averageIssueDuration () {
    return millisecondsToDays(stats.getAverageIssueDuration(this.issues))
  },
 },
}

export default statsMixin
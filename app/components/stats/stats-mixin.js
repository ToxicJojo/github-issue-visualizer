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
  labelCount () {
    return this.$store.state.repository.labels.length
  },
  usedLabels () {
    return stats.getUsedLabels(this.issues)
  },
  usedLabelsCount () {
    return this.usedLabels.length
  },
  mostUsedLabel () {
    return stats.getMostUsedLabel(this.issues, this.$store.state.repository.labels)
  },
  mostUsedLabelCount () {
    return stats.getMostUsedLabelCount(this.issues, this.$store.state.repository.labels)
  },
  mostActiveCreator () {
    const author = this.$store.state.repository.issueAuthors.find((author) => {
      return author.id === stats.getAuthorCount(this.issues, this.$store.state.repository.issueAuthors)[0].id
    })
    return author
  },
  mostActiveCreatorCount () {
    return stats.getAuthorCount(this.issues, this.$store.state.repository.issueAuthors)[0].count
  },
 },
}

export default statsMixin
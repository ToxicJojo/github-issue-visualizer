<template lang='pug'>
  .stats
    .panel
      p.panel-heading Stats
      .panel-block
        span Issue count: {{ issueCount }}
        span Comment count: {{ commentCount }}
        span Average comment count: {{ averageCommentCount }}
        span(v-if='issueWithMostComments') Most comments: {{ issueWithMostComments.comments}} - \#{{ issueWithMostComments.number }} {{ issueWithMostComments.title }}
      .panel-block
        span(v-if='oldestIssue') Oldest Issue: {{ oldestIssueAge }} Days - \#{{ oldestIssue.number }} {{ oldestIssue.title }}
        span(v-if='newestIssue') Newest Issue: {{ newestIssueAge }} Days - \#{{ newestIssue.number }} {{ newestIssue.title }}
        span Average Issue Duration: {{ averageIssueDuration }} Days
      .panel-block
        span Label count: {{ labelCount }}
        span Used labels count : {{ usedLabelsCount }}
        span Most used label: {{ mostUsedLabel.name }} with {{ mostUsedLabelCount }} uses

</template>

<script>
import statsMixin from './stats-mixin'

export default {
  name: 'App',
  data () {
    return {
    }
  },
  computed: {
    issues () {
      return this.$store.state.repository.computedIssues
    }
  },
  mixins: [
    statsMixin,
  ],
}
</script>

<style lang="scss" scoped>

.panel-block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

</style>

<template lang='pug'>
  .presentation
    IssueGraph.issue-graph(:initialIssues='initialIssues')
    .repo-info
      .info-block.active
        h2.title Issue overview
        p.info-content The repository iamkun/dayjs has {{ initialIssues.length }} issues. Scroll down to learn more.
      .info-block
        h2.title Open vs Closed
        p.info-content Of these {{ initialIssues.length }} issues {{ openIssuesCount }} are open issues and {{ closedIssuesCount }} are closed issues.
      .info-block
        h2.title Age
        p.info-content The oldest issue is {{ oldestIssueAge }} days old while the newset is only {{ newestIssueAge }} days old.
      .info-block
        h2.title Longstanding Issue
        p.info-content Of all open issues Issue 
          a(:href='oldestOpenIssue.html_url') \#{{ oldestOpenIssue.number }} {{ oldestOpenIssue.title }} 
          | is open the longest for {{ oldestIssueAge }} days. On average issues get closed in {{ averageIssueDuration }} days.
      .info-block
        h2.title Discussion
        p.info-content Among all issues developers left 123 comments discussing issues. Thats an average of 2.34 comments per issue. The most discussed issue is: Prototype System with 20 comments.
      .info-block
        h2.title Community Contribrution
        p.info-content There are 21 pull requests.
</template>

<script>
import IssueGraph from './IssueGraph.vue'
import splitter  from '../js/splitter'
import filters  from '../js/filter'
import stateColor from '../js/display/state-color'
import radiusAge from '../js/display/radius-age'
import radiusComments from '../js/display/radius-comments'
import stats from '../js/stats'

import millisecondsToDays from '../js/util/milliseconds-to-days'

export default {
  name: 'Presentation',
  data () {
    return {
    }
  },
  mounted () {
    const infoBlocks = document.querySelectorAll('.info-block');
    window.onscroll = (e) => {
      const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop

      infoBlocks.forEach((block, i) => {
        const distanceToTop = block.getBoundingClientRect().top

        if (distanceToTop > 180 && distanceToTop < 400) {

          if (!block.classList.contains('active')) {
            this.$store.commit('settings/reset')
            if (i === 1) {
              this.$store.commit('settings/setSplitter', {
                method: splitter.state.splitState,
              })
              this.$store.commit('settings/setDisplayColor', {
                method: stateColor,
                args: [],
              })
            } else if (i === 2) {
              this.$store.commit('settings/setSplitter', {
                method: splitter.state.splitState,
              })
              this.$store.commit('settings/setDisplayColor', {
                method: stateColor,
                args: [],
              })
              this.$store.commit('settings/setDisplayRadius', {
                  method: radiusAge,
                  args: [],
              })
              this.$store.commit('settings/setRefresh', true)
            } else if (i === 3) {
              this.$store.commit('settings/setDisplayColor', {
                method: stateColor,
                args: [],
              })
              this.$store.commit('settings/setDisplayRadius', {
                  method: radiusAge,
                  args: [],
              })
              this.$store.commit('settings/addFilter', {
                type: 'filterState',
                method: filters.state.filterState,
                args: ['open'],
              })
            } else if (i === 4) {
              this.$store.commit('settings/setDisplayColor', {
                method: stateColor,
                args: [],
              })
              this.$store.commit('settings/setDisplayRadius', {
                  method: radiusComments,
                  args: [],
              })
            } else if (i === 5) {
              this.$store.commit('settings/setDisplayColor', {
                method: stateColor,
                args: [],
              }) 

              this.$store.commit('settings/addFilter', {
                type: 'filterPullRequest',
                method: filters.pullRequest.filterPullRequest,
                args: ['true'],
              })
            }
          }

          block.classList.toggle('active', true)


        } else {
          block.classList.toggle('active', false)
        }
      })

    }
  },
  computed: {
    repository () {
      return this.$store.state.repository
    },
    openIssuesCount () {
      return filters.state.filterState(this.initialIssues, 'open').length
    },
    closedIssuesCount () {
      return filters.state.filterState(this.initialIssues, 'closed').length 
    },
    oldestIssue () {
      return stats.oldestIssue(this.initialIssues)
    },
    oldestIssueAge () {
      return stats.getIssueAge(this.oldestIssue)
    },
    oldestOpenIssue () {
      return stats.oldestIssue(filters.state.filterState(this.initialIssues, 'open'))
    },
    oldestOpenIssueAge () {
      return stats.getIssueAge(this.oldestOpenIssue)
    },
    newestIssue () {
      return stats.newestIssue(this.initialIssues)
    },
    newestIssueAge () {
      return stats.getIssueAge(this.newestIssue)
    },
    averageIssueDuration () {
      return millisecondsToDays(stats.getAverageIssueDuration(this.initialIssues))
    },
  },
  components: {
    IssueGraph,
  },
  props: ['initialIssues']
}
</script>

<style lang="scss" scoped>

.issue-graph {
  position: fixed;
  right: 20px;
  width: 70%;
}

.presentation {
  display: flex;
  width: 100%;
  position: relative;
  padding: 30px;
}

.repo-info {
  width: 25%;
  margin-bottom: 50vh;
}

.info-block {
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  margin-top: 100px;
  color: rgba(0, 0, 0, .2);

  h2 {
    color: rgba(0, 0, 0, .3);
  }

  b {
    background-color: #00000010;
  }

  &.active {
    color: inherit;
    
    h2 {
      color: inherit;
    }
  }
}






</style>
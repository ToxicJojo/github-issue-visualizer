<template lang='pug'>
  .presentation
    .fixed-block
      IssueGraph.issue-graph(:initialIssues='initialIssues')
      transition(name='fade')
        .scroll-info(v-if='scrollIndex === 0')
          span Scroll down
          b-icon(icon='chevron-down' size='is-large')
    .repo-info
      .info-block.active
        h2.title Issue overview
        p.info-content The repository 
          a(:href='"https://github.com/" + repository' target='_blank') {{ repository }}
          |  has {{ initialIssues.length }} issues. Scroll down to learn more.
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
        p.info-content Among all issues developers left {{ commentCount }} comments discussing issues. Thats an average of {{ averageCommentCount }} comments per issue. The most discussed issue is:
          a(:href='issueWithMostComments.html_url') \#{{ issueWithMostComments.number }} {{ issueWithMostComments.title }} 
          | with {{ issueWithMostComments.comments }} comments.
      .info-block
        h2.title Community Contribrution
        p.info-content There are {{ pullRequestCount }} pull requests of which {{ pullRequestCount - openPullRequestCount }} have been already closed.
      .info-block
        h2.title Labels
        p.info-content There are {{ labelCount }} labels of which only {{ usedLabelsCount }} are being used. The label that has been assigned to the most issues is 
          label.tag(:style='{"background-color": "#" + mostUsedLabel.color}') {{ mostUsedLabel.name }}  
          | which has been used {{ mostUsedLabelCount }} times.
    .explore
      h2.title.has-text-light If you want to explore the dataset more head to the playground!
      router-link(to='/').button.is-rounded Go to Playground
</template>

<script>
import IssueGraph from './IssueGraph.vue'
import splitter  from '../js/splitter'
import filters  from '../js/filter'
import stats from '../js/stats'
import statsMixin from './stats/stats-mixin'


import radius from '../js/display/radius'
import color from '../js/display/color'

import millisecondsToDays from '../js/util/milliseconds-to-days'

export default {
  name: 'Presentation',
  data () {
    return {
      scrollIndex: 0,
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
            this.scrollIndex = i
            this.$store.commit('settings/reset')
            if (i === 1) {
              this.$store.commit('settings/setSplitter', {
                method: splitter.state.splitState,
              })
              this.$store.commit('settings/setDisplayColor', {
                method: color.stateColor,
                args: [],
              })
            } else if (i === 2) {
              this.$store.commit('settings/setSplitter', {
                method: splitter.state.splitState,
              })
              this.$store.commit('settings/setDisplayColor', {
                method: color.stateColor,
                args: [],
              })
              this.$store.commit('settings/setDisplayRadius', {
                  method: radius.radiusAge,
                  args: [],
              })

              this.$store.commit('settings/addMarkedIssue', {
                issue: this.oldestIssue,
                color: '#7957d5',
                })
              this.$store.commit('settings/addMarkedIssue', {
                issue: this.newestIssue,
                color: '#7957d5', 
              })
            } else if (i === 3) {
              this.$store.commit('settings/setDisplayColor', {
                method: color.stateColor,
                args: [],
              })
              this.$store.commit('settings/setDisplayRadius', {
                  method: radius.radiusAge,
                  args: [],
              })
              this.$store.commit('settings/addFilter', {
                type: 'filterState',
                method: filters.state.filterState,
                args: ['open'],
              })
              this.$store.commit('settings/addMarkedIssue', {
                issue: this.oldestOpenIssue,
                color: '#7957d5',
                })
            } else if (i === 4) {
              this.$store.commit('settings/setDisplayColor', {
                method: color.stateColor,
                args: [],
              })
              this.$store.commit('settings/setDisplayRadius', {
                  method: radius.radiusComments,
                  args: [],
              })
              this.$store.commit('settings/addMarkedIssue', {
                issue: this.issueWithMostComments,
                color: '#7957d5',
                })
            } else if (i === 5) {
              this.$store.commit('settings/setDisplayColor', {
                method: color.stateColor,
                args: [],
              }) 

              this.$store.commit('settings/addFilter', {
                type: 'filterPullRequest',
                method: filters.pullRequest.filterPullRequest,
                args: ['true'],
              })
            } else if (i === 6) {
              this.$store.commit('settings/setDisplayColor', {
                method: color.labelColor,
                args: [],
              })  

              this.$store.commit('settings/setSplitter', {
                method: splitter.label.splitLabel,
                args: this.$store.state.repository.labels,
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
    issues () {
      return this.initialIssues
    },
    repository () {
      return this.$store.state.repository.info.owner + '/' + this.$store.state.repository.info.repo
    },
    openIssuesCount () {
      return filters.state.filterState(this.initialIssues, 'open').length
    },
    closedIssuesCount () {
      return filters.state.filterState(this.initialIssues, 'closed').length 
    },
    oldestOpenIssue () {
      return stats.oldestIssue(filters.state.filterState(this.initialIssues, 'open'))
    },
    oldestOpenIssueAge () {
      return stats.getIssueAge(this.oldestOpenIssue)
    },
    pullRequestCount () {
      return filters.pullRequest.filterPullRequest(this.initialIssues, 'true').length
    },
    openPullRequestCount () {
      return filters.state.filterState(filters.pullRequest.filterPullRequest(this.initialIssues, 'true'), 'open').length  
    },
  },
  components: {
    IssueGraph,
  },
  mixins: [
    statsMixin,
  ],
  props: ['initialIssues']
}
</script>

<style lang="scss" scoped>

.issue-graph {
  width: 100%;
}

.presentation {
  display: flex;
  //align-items: flex-end;
  flex-direction: column;
  width: 100%;
  position: relative;
  //padding: 30px;
}

.repo-info {
  width: 25%;
  margin-bottom: 30vh;
  margin-left: 20px;
  //margin-bottom: 180px;
}

.info-block {
  display: flex;
  flex-direction: column;
  margin-bottom: 120px;
  margin-top: 120px;
  color: rgba(0, 0, 0, .2);

  h2, a {
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

    a {
      color: #7957d5;
    }
  }
}

.fixed-block {
  position: fixed;
  top: 100px;
  width: 70%;
  left: 30%;
}

.scroll-info {
  position: relative;
  width: 100%;
  bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba(0, 0, 0, .5);
  text-transform: uppercase;
}

.fade-enter-active {
  animation: fade-in .35s;
}
.fade-leave-active {
  animation: fade-in .35s reverse;
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.explore {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-bottom: 300px;
  padding-top: 48px;
  color: white;
  z-index: 4;
  background-image: linear-gradient(45deg, #312a6c, #852d91);

  h2 {
    margin-bottom: 32px;
  }

  &:before {
    content: '';
    position: relative;
    top: -68px;
    display: block;
    background-color: white;
    height: 30px;
    width: 101%;
    transform: rotate(.7deg);
    z-index: 2;
  }
}


</style>
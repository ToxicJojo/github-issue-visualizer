<template lang='pug'>
  .issue-graph
    button(@click='initGraph') Start simulation

    .issue-tooltip(v-if='selectedIssue' :style='tooltipStyle' @click='showIssueOnGithub(selectedIssue)')
      .row
        img.avatar(:src='selectedIssue.user.avatar_url')
        span {{ selectedIssue.title}}
      .tags
        b-tag(v-for='label in selectedIssue.labels' :style='{ backgroundColor: "#" + label.color }') {{ label.name }}
    svg(@click='hideIssueInfo')
      g
        circle(v-for='issue in computedIssues' r='5' :cx='issue.x' :cy='issue.y' :stroke-width='issue.strokeWidth' :stroke='issue.strokeColor' :fill='issueColor(issue)' :r='issue.radius' @click.stop='showIssueInfo($event, issue)')
</template>

<script>
import testData from '../../test/data/test-data.json'

import forceGraph from '../js/graph/force-graph'

export default {
  name: 'IssueGraph',
  data () {
    return {
      issues: this.initialIssues,
      selectedIssue: null,
      tooltipPosition: {
        x: 0,
        y: 0,
      },
      // Used to force computedIssues to get updated every tick of the simulation
      updater: 0,
    }
  },
  computed: {
    computedIssues ()  {
      if (this.$store.state.settings.refresh) {
        forceGraph.refreshAlpha(.5)
        this.$store.commit('settings/setRefresh', false)
      }
      // Make computedIssues dependent on this.updater to force updates on every tick of the simulation
      const x = this.updater

      const filters = this.$store.state.settings.filters

      this.issues = this.initialIssues

      filters.forEach((filter) => {
        this.issues = filter.method(this.issues, ...filter.args)
      })


      // We need to count the sum of the exponential radius to apply softmax
      let exponentialRadiusSum = 0;

      this.issues = this.issues.map((issue) => {
        issue.radius = this.issueRadius(issue)
        exponentialRadiusSum += Math.exp(issue.radius / 15)
        return issue
      })

      // Normalize radiuses using sotftmax (https://en.wikipedia.org/wiki/Softmax_function)
      this.issues = this.issues.map((issue) => {
        issue.radius = ((Math.exp(issue.radius / 15) / exponentialRadiusSum)) * this.issues.length * this.$store.state.settings.display.radius.default
        return issue
      })

      this.issues = this.issues.map((issue) => {
        issue.strokeWidth = '0'
        return issue
      })

      this.$store.state.settings.markedIssues.forEach((markedIssue) => {
        markedIssue.issue.strokeWidth = '3'
        markedIssue.issue.strokeColor = markedIssue.color
      })

      const spliter = this.$store.state.settings.splitter
      if (spliter) {
        const splitIssues = spliter.method(this.issues, spliter.args)

        forceGraph.updateClusters(splitIssues.length)
        
        this.issues = splitIssues.reduce((issueAcumulator, issueGroup, index) => {
          const clusterdIssues = issueGroup.map((issue) => {
            issue.cluster = index
            return issue
          })

          return [...issueAcumulator, ...clusterdIssues]
        }, [])  
      } else {
        this.issues = this.issues.map((issue) => {
          issue.cluster = 0
          return issue
        })
        forceGraph.updateClusters(1)
      }

      return this.issues
    },
    tooltipStyle () {
      const openColor = '#2CBE4E'
      const closedColor = '#cb2431'
      const tooltipStyle = {
        left: `${this.tooltipPosition.x}px`,
        top: `${this.tooltipPosition.y - 100}px`,
        borderTopColor: `${this.selectedIssue.state === "open"? openColor: closedColor}`
      }


      return tooltipStyle
    },
    settings () {
      this.$store.state.settings.filters
      this.$store.state.settings.splitter
      this.$store.state.settings.display.radius
      return this.$store.state.settings.filters
    }
  },
  methods: {
    initGraph () {
      forceGraph.init(this.computedIssues, this.updateNodes)
    },
    updateNodes () {
      this.updater++
      this.updater--
    },
    issueColor (issue) {
      const colorSetting = this.$store.state.settings.display.color
      if (colorSetting.method) {
        return colorSetting.method(issue, ...colorSetting.args)
      }

      return colorSetting.default
    },
    issueRadius (issue) {
      const radiusSettings = this.$store.state.settings.display.radius
      if (radiusSettings.method) {
        return radiusSettings.method(issue, ...radiusSettings.args)
      }
      return radiusSettings.default
    },
    showIssueInfo (e, issue) {
      this.tooltipPosition.x = e.pageX
      this.tooltipPosition.y = e.pageY
      this.selectedIssue = issue
    },
    hideIssueInfo (issue) {
      this.selectedIssue = null
    },
    showIssueOnGithub (issue) {
      window.open(issue.html_url, '_blank')
    },
  },
  watch: {
    computedIssues () {
      forceGraph.updateNodes(this.computedIssues)
    },
    initialIssues () {
      this.issues = this.initialIssues
      forceGraph.init(this.computedIssues, this.updateNodes)
    },
    settings () {
      //forceGraph.refreshAlpha(.5, this.computedIssues)
      console.log('seetings changed')
    },
  },
  props: [
    'initialIssues',
  ],
}
</script>

<style lang="scss" scoped>

svg {
  width: 100%;
  height: calc(100vh - 200px);

  border: 1px solid black;
}

.issue-graph {
  margin: 20px;
  flex-grow: 1;
}

.issue-tooltip {
  position: fixed;
  cursor: pointer;
  background-color: #F2F2F2;
  border-radius: 8px;
  border-top: 8px solid;
  padding: 8px;
}

.avatar {
  width: 32px;
  height: 32px;
  margin-right: 5px;
  border-radius: 100%;
}

.row {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

</style>
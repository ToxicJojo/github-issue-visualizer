<template lang='pug'>
  .app
    Navbar
    IssueGraph(:initialIssues='issues')
    Settings
    //svg
    //  g
    //    circle(v-for='issue in issues' r='5' :cx='issue.x' :cy='issue.y')
    // Node(:issues='issues' :meta='{ name: "Issuses" }')

</template>

<script>
import Navbar from './components/Navbar.vue'
import IssueGraph from './components/IssueGraph.vue'
import Settings from './components/Settings.vue'


import githubApi from './js/api'
import testData from '../test/data/test-data.json'
import testLabels from '../test/data/test-labels.json'
import splitter  from './js/splitter'
import filter  from './js/filter'

import forceGraph from './js/graph/force-graph'

export default {
  name: 'App',
  data () {
    return {
      repository: '',
      labels: testLabels,
      error: null,
    }
  },
  computed: {
    issues () {
      //return this.$store.state.repository.issues
      return testData
    },
  },
  methods: {
    async loadIssues () {
      const params = this.repository.split('/')
      const owner = params[0]
      const repo = params[1]

      try {
        this.error = null
        this.issues = await githubApi.getIssues(owner, repo)
        this.$store.dispatch('labels/loadLabels', { owner, repo })
      } catch (e) {
        this.error = 'Repository not found.'
      }
    },
    splitOpenClosed () {
      const splitIssues = splitter.state.splitState(this.issues)

      const groupedIssues = splitIssues.reduce((issuesAccumulator, issueGroup, index) => {
        return [...issuesAccumulator, ...issueGroup.issues.map((issue) => {
          issue.group = index
          return issue
        })]
      })

      this.issues = groupedIssues
    },
    filterOpen () {
      const filterdIssues = filter.state.filterStateOpen(this.issues)

      this.issues = filterdIssues
    },
    initSvg () {
      forceGraph.init(this.issues, this.updateNodes)
    },
    updateNodes () {
      this.issues.push({})
      this.issues.pop()
    }
  },
  watch: {
    issues () {
      forceGraph.updateNodes(this.issues)
    }
  },
  components: {
    Navbar,
    IssueGraph,
    Settings,
  }
}
</script>

<style lang="scss" scoped>

.error-message {
  color: red;
}

svg {
  width: 800px;
  height: 700px;
}

</style>

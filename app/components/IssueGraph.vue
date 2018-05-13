<template lang='pug'>
  .issue-graph
    button(@click='initGraph') Start simulation
    svg
      g
        circle(v-for='issue in computedIssues' r='5' :cx='issue.x' :cy='issue.y')
</template>

<script>
import testData from '../../test/data/test-data.json'

import forceGraph from '../js/graph/force-graph'

export default {
  name: 'IssueGraph',
  data () {
    return {
      issues: this.initialIssues,
      // Used to force computedIssues to get updated every tick of the simulation
      updater: 0,
    }
  },
  computed: {
    computedIssues ()  {
      // Make computedIssues depentent on this.updater to force updates on every tick of the simulation
      const x = this.updater

      const filters = this.$store.state.settings.filters

      this.issues = this.initialIssues

      filters.forEach((filter) => {
        this.issues = filter.method(this.issues, ...filter.args)
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
      }

      return this.issues
    },
  },
  methods: {
    initGraph () {
      forceGraph.init(this.computedIssues, this.updateNodes)
    },
    updateNodes () {
      this.updater++
      this.updater--
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
  },
  props: [
    'initialIssues',
  ],
}
</script>

<style lang="scss" scoped>

svg {
  width: 800px;
  height: 800px;

  border: 1px solid black;
}

</style>
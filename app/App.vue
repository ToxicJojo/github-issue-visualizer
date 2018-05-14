<template lang='pug'>
  .app
    Navbar
    .app-main
      IssueGraph(:initialIssues='issues')
      Settings

</template>

<script>
import Navbar from './components/Navbar.vue'
import IssueGraph from './components/IssueGraph.vue'
import Settings from './components/settings/Settings.vue'

import testData from '../test/data/test-data.json'
import testLabels from '../test/data/test-labels.json'
import testContributors from '../test/data/test-contributors.json'


export default {
  name: 'App',
  data () {
    return {
    }
  },
  computed: {
    issues () {
      return this.$store.state.repository.issues
    },
  },
  beforeMount () {
    this.$store.commit('repository/setIssues', testData)
    this.$store.commit('repository/setLabels', testLabels)
    this.$store.commit('repository/setContributors', testContributors)
    this.$store.dispatch('repository/loadIssueAuthors')
  },
  components: {
    Navbar,
    IssueGraph,
    Settings,
  }
}
</script>

<style lang="scss" scoped>

.app {
  display: flex;
  flex-direction: column
}

.app-main {
  display: flex;
}


</style>

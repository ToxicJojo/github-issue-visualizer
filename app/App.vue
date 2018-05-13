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


export default {
  name: 'App',
  data () {
    return {
    }
  },
  computed: {
    issues () {
      return this.$store.state.repository.issues
      //return testData
    },
  },
  beforeMount () {
    this.$store.commit('repository/setIssues', testData)
    this.$store.commit('repository/setLabels', testLabels)
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

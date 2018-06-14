<template lang='pug'>
  .app
    Navbar
    router-view(:initialIssues='issues')

</template>

<script>
import Navbar from './components/Navbar.vue'

import testData from '../test/data/testDataDayJS.json'
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
    // Load some testData
    this.$store.commit('repository/setIssues', testData)
    this.$store.commit('repository/setLabels', testLabels)
    this.$store.commit('repository/setContributors', testContributors)
    this.$store.dispatch('repository/loadIssueAuthors')
  },
  components: {
    Navbar,
  }
}
</script>

<style lang="scss" scoped>

.app {
  display: flex;
  flex-direction: column
}

</style>

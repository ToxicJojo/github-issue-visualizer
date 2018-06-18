<template lang='pug'>
  .app
    Navbar
    .wrapper
      router-view(:initialIssues='issues' v-if='repositoryLoaded')
      .empty-state(v-else)
        b-icon(icon='arrow-up' size='is-large' type='is-dark')
        p.subtitle.is-2.empty-state__text Load some Issues to start exploring
        p Or get started with some demo data
        a.button.is-rounded.is-outlined.is-primary.empty-state-button(@click='loadDemoData') Load Demo Data
    Footer


</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

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
    repositoryLoaded () {
      return this.$store.state.repository.loaded
    }
  },
  beforeMount () {
    // Load some testData
    //this.loadDemoData()
  },
  methods: {
    loadDemoData() {
      this.$store.commit('repository/setInfo', { owner: 'iamkun' , repo: 'dayjs' })
      this.$store.commit('repository/setIssues', testData)
      this.$store.commit('repository/setLabels', testLabels)
      this.$store.commit('repository/setContributors', testContributors)
      this.$store.dispatch('repository/loadIssueAuthors')
      this.$store.commit('repository/setLoaded', true)
    }
  },
  components: {
    Navbar,
    Footer,
  }
}
</script>

<style lang="scss" scoped>

.app {
  display: flex;
  flex-direction: column
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding-top: 30px;
}


.empty-state__text {
  margin-top: 32px;
}

.empty-state-button {
  margin-top: 16px;
}

.wrapper {
  min-height: calc(100vh - 60px - 100px);
}

</style>

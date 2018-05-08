<template lang='pug'>
  .app
    input(v-model='repository' type='text' placeholder='owner/repo')
    button(@click='loadIssues') Load Issues
    span.error-message {{ error }}
    
    Node(:issues='issues' :meta='{ name: "Issuses" }')

</template>

<script>
import githubApi from './js/api'
import Node from './components/Node.vue'
import testData from '../test/data/test-data.json'
import testLabels from '../test/data/test-labels.json'

export default {
  name: 'App',
  data () {
    return {
      repository: '',
      issues: testData,
      labels: testLabels,
      error: null,
    }
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
    }
  },
  components: {
    Node,
  }
}
</script>

<style lang="scss" scoped>

.error-message {
  color: red;
}

</style>

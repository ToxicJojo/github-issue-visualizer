<template lang='pug'>
  .app
    input(v-model='repository' type='text' placeholder='owner/repo')
    button(@click='loadIssues') Load Issues
    span.error-message {{ error }}
    
    Node(:issues='issues')

</template>

<script>
import getIssues from './js/get-issues'
import Node from './components/Node.vue'

export default {
  name: 'App',
  data () {
    return {
      repository: '',
      issues: [],
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
        this.issues = await getIssues(owner, repo);
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

<template lang='pug'>
  .app
    input(v-model='repository' type='text' placeholder='owner/repo')
    button(@click='loadIssues') Load Issues
    
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
    }
  },
  methods: {
    async loadIssues () {
      const params = this.repository.split('/')
      const owner = params[0]
      const repo = params[1]

      this.issues = await getIssues(owner, repo);
      console.log(this.issues)
    }
  },
  components: {
    Node,
  }
}
</script>

<style lang="scss" scoped>

</style>

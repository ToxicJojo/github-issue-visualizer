<template lang='pug'>
  .app
    input(v-model='repository' type='text' placeholder='owner/repo')
    button(@click='loadIssues') Load Issues
    ul
      li(v-for='issue in issues') {{ issue.title }}
</template>

<script>
import getIssues from './js/get-issues'

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
}
</script>

<style lang="scss" scoped>

</style>

<template lang='pug'>
  .navbar
    input(type='text' placeholder='owner/repo' v-model='repository')
    button(@click='loadRepository') Load Issues


</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      repository: '',
    }
  },
  methods: {
    loadRepository () {
      const params = this.repository.split('/')
      const owner = params[0]
      const repo = params[1]
      // Load issues and labels
      this.$store.dispatch('repository/loadIssues', { owner, repo })
      this.$store.dispatch('repository/loadLabels', { owner, repo })
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
<template lang='pug'>
  .playground
    IssueGraph(:initialIssues='initialIssues')
    Settings

</template>

<script>
import IssueGraph from './IssueGraph.vue'
import Settings from './settings/Settings.vue'


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
  props: ['initialIssues'],
  components: {
    IssueGraph,
    Settings,
  }
}
</script>

<style lang="scss" scoped>

.playground {
  display: flex;
  width: 100%;
}

</style>

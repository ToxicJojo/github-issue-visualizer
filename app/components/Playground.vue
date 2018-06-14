<template lang='pug'>
  .playground
    IssueGraph(:initialIssues='initialIssues')
    .flex-column
      Settings
      Stats

</template>

<script>
import IssueGraph from './IssueGraph.vue'
import Settings from './settings/Settings.vue'
import Stats from './stats/Stats.vue'


export default {
  name: 'App',
  data () {
    return {
    }
  },
  props: ['initialIssues'],
  components: {
    IssueGraph,
    Settings,
    Stats,
  }
}
</script>

<style lang="scss" scoped>

.playground {
  display: flex;
  width: 100%;
}

.flex-column {
  display: flex;
  flex-direction: column;
}

</style>

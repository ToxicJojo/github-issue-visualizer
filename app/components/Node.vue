<template lang='pug'>
  .node
    .node-content
      span {{issues.length}}
      p Issues
      button(@click='addFilter') Add Filter
    .node-childs
      Node(v-for='child in children' :issues='child.issues')

</template>

<script>
import filter from '../js/filter'

export default {
  name: 'Node',
  data () {
    return {
      filter: null,
      splitter: null,
    }
  },
  methods: {
    addFilter () {
      this.filter = filter.state.filterStateOpen
    }
  },
  computed: {
    children () {
      if (this.filter) {
        const filterdIssues = this.filter(this.issues)

        return [{
          issues: filterdIssues,
        }]
      } else if (this.splitter) {

      }

      return null
    },
  },
  props: [
    'issues',
  ]
}
</script>

<style lang="scss" scoped>

.node-content {
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  width: 100px;
  height: 100px;

  border: 1px solid black;
  border-radius: 100%;
}

.node-childs {
  display: flex;

  justify-content: space-around;
}

</style>

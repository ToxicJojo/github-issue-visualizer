<template lang='pug'>
  .node
    .node-content
      span {{issues.length}}
      p Issues
      button(@click='addFilter') Add Filter
      button(@click='addSplitter') Add Splitter
    .node-childs
      Node(v-for='child in children' :issues='child.issues')

</template>

<script>
import filter from '../js/filter'
import splitter  from '../js/splitter'


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
    },
    addSplitter () {
      this.splitter = splitter.state.splitState
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
        const splitIssues = this.splitter(this.issues)

        return splitIssues
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

.node {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
}

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

  width: 100%;
}

</style>

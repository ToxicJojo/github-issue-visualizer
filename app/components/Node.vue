<template lang='pug'>
  .node
    .node-content
      span {{issues.length}}
      p {{ meta.name }}
      select(v-model='selectedFilter.method')
        option(diabled value='null') Select a filter
        option(v-for='filter in filterList' :value='filter.filter')
          span {{ filter.name }}
      button(@click='addSplitter') Add Splitter
    .node-childs
      Node(v-for='child in children' :issues='child.issues' :meta='child.meta')

</template>

<script>
import filter from '../js/filter'
import splitter  from '../js/splitter'

import testLabels from '../../test/data/test-labels'

export default {
  name: 'Node',
  data () {
    return {
      selectedFilter: {
        method: null,
        args: [],
      },
      splitter: {
        method: null,
        args: [testLabels],
      },
      filterList: filter.filterList,
    }
  },
  methods: {
    addFilter () {
      this.selectedFilter = filter.state.filterStateOpen
    },
    addSplitter () {
      this.splitter.method = splitter.label.splitLabel
    }
  },
  computed: {
    children () {
      if (this.selectedFilter.method) {
        const filterdIssues = this.selectedFilter.method(this.issues, ...this.selectedFilter.args)

        return [{
          meta: {
            name: 'Open Issues'
          },
          issues: filterdIssues,
        }]
      } else if (this.splitter.method) {
        const splitIssues = this.splitter.method(this.issues, ...this.splitter.args)

        return splitIssues
      }

      return null
    },
  },
  props: [
    'issues',
    'meta',
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

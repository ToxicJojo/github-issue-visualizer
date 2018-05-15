<template lang='pug'>
  .settings
    .panel
      p.panel-heading Settings
      .panel-tabs
        b-tabs(expanded)
          b-tab-item(label='Filter')
            FilterTab
          b-tab-item(label='Splitter')
            p Splitter
          b-tab-item(label='Display')
            p Display
      .panel-block
        button(@click='addFilterStateOpen') Add Filter State open
        button(@click='addFilterStateClosed') Add Filter State closed
        button(@click='addSpliterState') Add Splitter State
        button(@click='addFilterLabel') Add Filter Label 
</template>

<script>
import splitter  from '../../js/splitter'
import filter  from '../../js/filter'

import LabelCheckboxes from './LabelCheckboxes.vue'
import FilterTab from './FilterTab.vue'

export default {
  name: 'Settings',
  data () {
    return {

    }
  },
  methods: {
    addFilterStateOpen () {
      this.$store.commit('settings/addFilter', {
        method: filter.state.filterState,
        type: 'filterState',
        args: ['open'],
      })
    },
    addFilterStateClosed () {
      this.$store.commit('settings/addFilter', {
        method: filter.state.filterStateClosed,
        type: 'filterState',
      })
    },
    addFilterLabel () {
      this.$store.commit('settings/addFilter', {
        method: filter.label.filterLabel,
        type: 'filterLabel',
        args: [],
      })
    },
    addSpliterState () {
      this.$store.commit('settings/setSplitter', {
        method: splitter.state.splitState,
      })
    }
  },
  components: {
    LabelCheckboxes,
    FilterTab,
  }
}
</script>

<style lang="scss" scoped>

.settings {
  margin: 20px;
}

</style>
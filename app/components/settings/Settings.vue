<template lang='pug'>
  .settings
    .panel
      p.panel-heading Settings
      .panel-tabs
        b-tabs(expanded)
          b-tab-item(label='Filter')
            FilterTab
          b-tab-item(label='Splitter')
            SplitterTab
          b-tab-item(label='Display')
            DisplayTab
      .panel-block
        button(@click='addSpliterState') Add Splitter State

</template>

<script>
import splitter  from '../../js/splitter'
import filter  from '../../js/filter'

import LabelCheckboxes from './LabelCheckboxes.vue'
import FilterTab from './FilterTab.vue'
import SplitterTab from './SplitterTab.vue'
import DisplayTab from './DisplayTab.vue'

export default {
  name: 'Settings',
  data () {
    return {

    }
  },
  methods: {
    addSpliterState () {
      this.$store.commit('settings/setSplitter', {
        method: splitter.state.splitState,
      })
    }
  },
  components: {
    LabelCheckboxes,
    FilterTab,
    SplitterTab,
    DisplayTab,
  }
}
</script>

<style lang="scss">

.settings {
  margin: 20px;
  width: 350px;
}

.b-tabs section.tab-content {
  padding: 0px;
}

</style>
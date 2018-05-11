<template lang='pug'>
  .settings
    button(@click='addFilterStateOpen') Add Filter State open
    button(@click='addFilterStateClosed') Add Filter State closed
    button(@click='addSpliterState') Add Splitter State
    LabelCheckboxes
</template>

<script>
import splitter  from '../../js/splitter'
import filter  from '../../js/filter'

import LabelCheckboxes from './LabelCheckboxes.vue'

export default {
  name: 'Settings',
  data () {
    return {

    }
  },
  methods: {
    addFilterStateOpen () {
      this.$store.commit('settings/addFilter', {
        method: filter.state.filterStateOpen 
      })
    },
    addFilterStateClosed () {
      this.$store.commit('settings/addFilter', {
        method: filter.state.filterStateClosed,
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
  }
}
</script>

<style lang="scss" scoped>
</style>
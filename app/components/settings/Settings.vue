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

</template>

<script>
import FilterTab from './FilterTab.vue'
import SplitterTab from './SplitterTab.vue'
import DisplayTab from './DisplayTab.vue'

export default {
  name: 'Settings',
  data () {
    return {
    }
  },
  components: {
    FilterTab,
    SplitterTab,
    DisplayTab,
  }
}
</script>

<style lang="scss">

.settings {
  margin-bottom: 20px;
  width: 350px;
}

.b-tabs section.tab-content {
  padding: 0px;
  //overflow: visible;
}

</style>
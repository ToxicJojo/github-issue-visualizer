<template lang='pug'>
  .spliter-tab
    StateSplitter
    LabelSplitter
</template>

<script>
import StateSplitter from './splitter/StateSplitter.vue'
import LabelSplitter from './splitter/LabelSplitter.vue'

export default {
  name: 'SplitterTab',
  data () {
    return {
    }
  },
  components: {
    StateSplitter,
    LabelSplitter,
  },
}
</script>

<style lang="scss" scoped>
</style>
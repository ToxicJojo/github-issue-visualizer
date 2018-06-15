<template lang='pug'>
  .filter-state
    .card
      .card-header
        p.card-header-title Label Splitter
        .card-header-icon
          b-switch(v-model='spliterActive')
</template>

<script>
import splitter  from '../../../js/splitter'

export default {

  name: 'LabelSplitter',
  data () {
    return {
      spliterActive: false,
    }
  },
  watch: {
    spliterActive () {
      if (this.spliterActive) {
        this.$store.commit('settings/setSplitter', {
          method: splitter.label.splitLabel,
          args: this.$store.state.repository.labels,
        })
      } else {
        this.$store.commit('settings/setSplitter', {
          method: null,
        })
      }
    },
  }
}
</script>

<style lang="scss" scoped>
</style>
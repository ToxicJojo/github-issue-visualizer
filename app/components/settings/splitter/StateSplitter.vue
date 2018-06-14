<template lang='pug'>
  .filter-state
    .card
      .card-header
        p.card-header-title State Splitter
        .card-header-icon
          b-switch(v-model='spliterActive')
</template>

<script>
import splitter  from '../../../js/splitter'

export default {

  name: 'StateSplitter',
  data () {
    return {
      spliterActive: false,
    }
  },
  watch: {
    spliterActive () {
      if (this.spliterActive) {
        this.$store.commit('settings/setSplitter', {
          method: splitter.state.splitState,
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
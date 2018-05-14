<template lang='pug'>
  .filter-state
    .card
      .card-header
        p.card-header-title State Filter
        .card-header-icon
          b-switch(v-model='filterActive')
      b-collapse(:open='filterActive')
        .card-content
          .content 
            b-field
              b-radio-button(v-model='filter.args[0]' native-value='open') Open
              b-radio-button(v-model='filter.args[0]' native-value='closed') Closed


</template>

<script>
import filterMixin from './filter-mixin'
import filters from '../../../js/filter'

export default {
  name: 'FilterState',
  data () {
    return {
      filter: {
        type: 'filterState',
        method: filters.state.filterState,
        args: ['open'],
      },
    }
  },
  mixins: [
    filterMixin,
  ],
}
</script>

<style lang="scss" scoped>
</style>
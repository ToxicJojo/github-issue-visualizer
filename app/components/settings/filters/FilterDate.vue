<template lang='pug'>
  .filter-date
    .card
      .card-header
        p.card-header-title Date Filter
        .card-header-icon
          b-switch(v-model='filterActive')
      b-collapse(:open='filterActive')
        .card-content
          .content
            b-field(label='Start Date')
              b-datepicker(v-model='filter.args[0]' inline)
            b-field(label='End Date')
              b-datepicker(v-model='filter.args[1]' inline)
</template>

<script>
import filterMixin from './filter-mixin'
import filters from '../../../js/filter'

import getEarliestDate from '../../../js/util/get-earliest-date'

export default {
  name: 'FilterDate',
  data () {
    return {
      filter: {
        type: 'filterDate',
        method: filters.date.filterDate,
        args: [new Date(), new Date()],
      },
    }
  },
  beforeMount () {
    this.filter.args[0] = getEarliestDate(this.$store.state.repository.issues)
  },
  mixins: [
    filterMixin,
  ],
}
</script>

<style lang="css" scoped>

</style>
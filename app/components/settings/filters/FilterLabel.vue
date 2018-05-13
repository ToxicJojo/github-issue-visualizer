<template lang='pug'>
  .filter-label
    .card
      .card-header
        p.card-header-title Label Filter
        .card-header-icon
          b-switch(v-model='filterActive')
      b-collapse(:open='filterActive')
        .card-content
          .content 
            LabelCheckboxes(@change='labelChanged')
</template>

<script>
import filterMixin from './filter-mixin'
import filters from '../../../js/filter'

import LabelCheckboxes from '../LabelCheckboxes.vue'

export default {

  name: 'FilterLabel',
  data () {
    return {
      filter: {
        type: 'filterLabel',
        method: filters.label.filterLabel,
        args: [],
      },
    }
  },
  methods: {
    labelChanged (labels) {
      this.filter.args = labels
      this.$store.commit('settings/updateFilter', this.filter)
    },
  },
  mixins: [
    filterMixin,
  ],
  components: {
    LabelCheckboxes,
  },
}
</script>

<style lang="scss" scoped>
</style>
<template lang='pug'>
  .filter-pull-request
    .card
      .card-header
        p.card-header-title Pull Request Filter
        .card-header-icon
          b-switch(v-model='filterActive')
      b-collapse(:open='filterActive')
        .card-content
          .content 
            b-field
              b-radio-button(v-model='filter.args[0]' native-value='true') Is pull request
              b-radio-button(v-model='filter.args[0]' native-value='false') Isn't pull request
</template>

<script>
import filterMixin from './filter-mixin'
import filters from '../../../js/filter'


export default {
  name: 'FilterPullRequest',
  data () {
    return {
      filter: {
        type: 'filterPullRequest',
        method: filters.pullRequest.filterPullRequest,
        args: ['true'],
      }
    }
  },
  mixins: [
    filterMixin,
  ],
}
</script>

<style lang="css" scoped>
</style>
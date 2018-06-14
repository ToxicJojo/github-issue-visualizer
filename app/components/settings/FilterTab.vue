<template lang='pug'>
  .filter-tab
    FilterState
    FilterLabel
    FilterAuthor
    FilterPullRequest
    FilterDate
</template>

<script>
import FilterState from './filters/FilterState.vue'
import FilterLabel from './filters/FilterLabel.vue'
import FilterAuthor from './filters/FilterAuthor.vue'
import FilterPullRequest from './filters/FilterPullRequest.vue'
import FilterDate from './filters/FilterDate.vue'

export default {
  name: 'FilterTab',
  data () {
    return {
    }
  },
  components: {
    FilterState,
    FilterLabel,
    FilterAuthor,
    FilterPullRequest,
    FilterDate,
  }
}
</script>

<style lang="scss" scoped>

.filter-tab {
  display: flex;
  flex-direction: column;
}

</style>
<template lang='pug'>
  .filter-tab
    //template(v-for='(filter, index) in filters')
      //component(:is='filter.type' :index='index' :key='filter.type')
    FilterState
    FilterLabel
    FilterAuthor
    FilterPullRequest

    //a.button.is-primary.is-outlined
      span Add filter
      b-icon(pack='fas' icon='plus')
</template>

<script>
import FilterState from './filters/FilterState.vue'
import FilterLabel from './filters/FilterLabel.vue'
import FilterAuthor from './filters/FilterAuthor.vue'
import FilterPullRequest from './filters/FilterPullRequest.vue'

export default {
  name: 'FilterTab',
  data () {
    return {

    }
  },
  computed: {
    filters () {
      return this.$store.state.settings.filters
    }
  },
  components: {
    FilterState,
    FilterLabel,
    FilterAuthor,
    FilterPullRequest,
  }
}
</script>

<style lang="scss" scoped>

.filter-tab {
  display: flex;
  flex-direction: column;
}



</style>
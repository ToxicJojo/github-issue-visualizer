const filterMixin = {
  data () {
    return {
      filterActive: false,
    }
  },
  watch: {
    filterActive () {
      if (this.filterActive) {
        this.$store.commit('settings/addFilter', this.filter)
      } else {
        this.$store.commit('settings/removeFilter', this.filter.type)
      }
    },
    'filter.args': function() {
      this.$store.commit('settings/setRefresh', true)
    }
  },
  props: [
    'index',
  ],
}

export default filterMixin
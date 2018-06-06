const filterMixin = {
  data () {
    return {
      filterActive: false,
    }
  },
  methods: {
    removeFilter () {
      this.$store.commit('settings/removeFilter', this.filter.type)
    }
  },
  watch: {
    filterActive () {
      if (this.filterActive) {
        this.$store.commit('settings/addFilter', this.filter)
      } else {
        this.removeFilter()
      }
      this.$store.commit('settings/setRefresh', true)
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
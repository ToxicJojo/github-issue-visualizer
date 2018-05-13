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
  computed: {
    filter () {
      return this.$store.state.settings.filters[this.index]
    }
  },
  watch: {
    filterActive () {
      if (this.filterActive) {
        this.$store.commit('settings/addFilter', this.filter)
      } else {
        this.removeFilter()
      }
    },
  },
  props: [
    'index',
  ],
}

export default filterMixin
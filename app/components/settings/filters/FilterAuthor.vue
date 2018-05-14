<template lang='pug'>
  .filter-author
    .card
      .card-header
        p.card-header-title Author Filter
        .card-header-icon
          b-switch(v-model='filterActive')
      b-collapse(:open='filterActive')
        .card-content
          .content 
            b-radio(v-for='author in issueAuthors' v-model='filter.args[0]' :native-value='author.id')
              .info-row
                img.avatar(:src='author.avatar_url')
                | {{ author.login }}

</template>

<script>
import filterMixin from './filter-mixin'
import filters from '../../../js/filter'

export default {

  name: 'FilterAuthor',
  data () {
    return {
      filter: {
        type: 'FilterAuthor',
        method: filters.author.filterAuthor,
        args: [0],
      },
    }
  },
  computed: {
    issueAuthors () {
      return this.$store.state.repository.issueAuthors
    }
  },
  mixins: [
    filterMixin,
  ]
}
</script>

<style lang="scss" scoped>

.content {
  display: flex;
  flex-direction: column;
}

.info-row {
  display: flex;
  align-items: center;
}

.avatar {
  width: 32px;
  height: 32px;
  margin-right: 5px;
  border-radius: 100%;
}

</style>
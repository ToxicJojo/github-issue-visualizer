<template lang='pug'>
  .label-checkboxes
    template(v-for='label in labels')
      input(type='checkbox') 
      label {{ label.name }}
</template>

<script>
export default {
  name: 'LabelCheckboxes',
  data () {
    return {

    }
  },
  computed: {
    labels () {
      return this.$store.state.repository.labels
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
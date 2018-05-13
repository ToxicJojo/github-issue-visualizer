<template lang='pug'>
  .label-checkboxes
    template(v-for='(label, index) in labels')
      .stage
        b-checkbox(type='checkbox' v-model='selectedLabels' :native-value='label.id') 
        label.tag(:style='{"background-color": "#" + label.color}') {{ label.name }}
</template>

<script>
export default {
  name: 'LabelCheckboxes',
  data () {
    return {
      selectedLabels: [],
    }
  },
  computed: {
    labels () {
      return this.$store.state.repository.labels
    }
  },
  watch: {
    selectedLabels () {
      this.$emit('change', this.selectedLabels)
    }
  }
}
</script>

<style lang="scss" scoped>

.label-checkboxes {
  display: flex;
  flex-direction: column;
}

.stage {
  margin-bottom: 5px;
}


</style>
<template lang='pug'>
  .display-tab
    .card 
      DisplayColor
      DisplayRadius
</template>

<script>
import DisplayColor from './display/DisplayColor.vue'
import DisplayRadius from './display/DisplayRadius.vue'


export default {

  name: 'DisplayTab',
  data () {
    return {

    }
  },
  components: {
    DisplayColor,
    DisplayRadius,
  },
}
</script>

<style lang="scss" scoped>
</style>
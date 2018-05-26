<template lang='pug'>
  .display-tab
    .card 
      DisplayColor
</template>

<script>
import DisplayColor from './display/DisplayColor.vue'


export default {

  name: 'DisplayTab',
  data () {
    return {

    }
  },
  components: {
    DisplayColor,
  },
}
</script>

<style lang="scss" scoped>
</style>
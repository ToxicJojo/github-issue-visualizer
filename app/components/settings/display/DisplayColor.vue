<template lang='pug'>
  .display-color
    .card-header
      p.card-header-title Issue Color
    .card-content.content
      b-radio(v-model='activeColorMethodIndex' native-value='0') Default Color
      b-radio(v-model='activeColorMethodIndex' native-value='1') State Color
      b-radio(v-model='activeColorMethodIndex' native-value='2') Label Color
</template>

<script>

import stateColor from '../../../js/display/state-color'
import labelColor from '../../../js/display/label-color'


export default {

  name: 'DisplayColor',

  data () {
    return {
      activeColorMethodIndex: 0,
      colorMethods: [
        null,
        stateColor,
        labelColor,
      ],
    }
  },
  watch: {
    activeColorMethodIndex () {

      this.$store.commit('settings/setDisplayColor', {
        method: this.colorMethods[this.activeColorMethodIndex],
        args: [],
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
}
</style>
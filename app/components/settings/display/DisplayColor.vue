<template lang='pug'>
  .display-color
    b-collapse.card(:open='false')
      .card-header(slot='trigger' slot-scope='props')
        p.card-header-title Issue Color
        a.card-header-icon
          b-icon(:icon='props.open ? "menu-down" : "menu-up"')
      .card-content.content
        b-radio(v-model='activeColorMethodIndex' native-value='0') Default Color
        b-radio(v-model='activeColorMethodIndex' native-value='1') State Color
        b-radio(v-model='activeColorMethodIndex' native-value='2') Label Color
</template>

<script>
import color from '../../../js/display/color'

export default {

  name: 'DisplayColor',

  data () {
    return {
      activeColorMethodIndex: 0,
      colorMethods: [
        null,
        color.stateColor,
        color.labelColor,
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
<template lang='pug'>
  .display-size
    b-collapse.card(:open='false')
      .card-header(slot='trigger' slot-scope='props')
        p.card-header-title Issue Radius
        a.card-header-icon
          b-icon(:icon='props.open ? "menu-down" : "menu-up"')
      .card-content.content
        b-radio(v-model='activeRadiusMethodIndex' native-value='0') Default Radius
        b-radio(v-model='activeRadiusMethodIndex' native-value='1') Age Radius
        b-radio(v-model='activeRadiusMethodIndex' native-value='2') Age Radius Reversed
        b-radio(v-model='activeRadiusMethodIndex' native-value='3') Comments Radius 
</template>

<script>
import radius from '../../../js/display/radius'

export default {

  name: 'DisplayRadius',
  data () {
    return {
      activeRadiusMethodIndex: 0,
      radiusMethods: [
        null,
        radius.radiusAge,
        radius.radiusAgeReverse,
        radius.radiusComments,
      ],
    }
  },
  watch: {
    activeRadiusMethodIndex () {
      this.$store.commit('settings/setDisplayRadius', {
        method: this.radiusMethods[this.activeRadiusMethodIndex],
        args: [],
      })
      this.$store.commit('settings/setRefresh', true)
    },
  },
}
</script>

<style lang='scss' scoped>
.content {
  display: flex;
  flex-direction: column;
}
</style>
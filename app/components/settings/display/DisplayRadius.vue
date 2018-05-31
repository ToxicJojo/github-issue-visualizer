<template lang='pug'>
  .display-size
    .card-header
      p.card-header-title Issue Radius 
    .card-content.content
      b-radio(v-model='activeRadiusMethodIndex' native-value='0') Default Radius
      b-radio(v-model='activeRadiusMethodIndex' native-value='1') Age Radius
      b-radio(v-model='activeRadiusMethodIndex' native-value='2') Age Radius Reversed
      b-radio(v-model='activeRadiusMethodIndex' native-value='3') Comments Radius 
</template>

<script>
import radiusAge from '../../../js/display/radius-age'
import radiusAgeReverse from '../../../js/display/radius-age-reverse'
import radiusComments from '../../../js/display/radius-comments'
 

export default {

  name: 'DisplayRadius',
  data () {
    return {
      activeRadiusMethodIndex: 0,
      radiusMethods: [
        null,
        radiusAge,
        radiusAgeReverse,
        radiusComments,
      ],
    }
  },
  watch: {
    activeRadiusMethodIndex () {
      this.$store.commit('settings/setDisplayRadius', {
        method: this.radiusMethods[this.activeRadiusMethodIndex],
        args: [],
      })
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
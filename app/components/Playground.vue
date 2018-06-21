<template lang='pug'>
  .playground
    IssueGraph(:initialIssues='initialIssues')
    .flex-column
      Settings.hidden(:class='{ shown: showSettings}')
      Stats.hidden(:class='{ shown: showStats}')
    .mobile-controls
      .show-settings(@click='showSettings = !showSettings' :class='{ inactive: showStats }')
        b-icon(icon='settings')
      .show-stats(@click='showStats = !showStats' :class='{ inactive: showSettings }')
        b-icon(icon='information-outline')

</template>

<script>
import IssueGraph from './IssueGraph.vue'
import Settings from './settings/Settings.vue'
import Stats from './stats/Stats.vue'


export default {
  name: 'App',
  data () {
    return {
      showSettings: false,
      showStats: false,
    }
  },
  props: ['initialIssues'],
  components: {
    IssueGraph,
    Settings,
    Stats,
  }
}
</script>

<style lang="scss" scoped>

$breakpoint-mobile: 780px;

@mixin mobile {
  @media screen and (max-width: $breakpoint-mobile) {
    @content
  }
};

.playground {
  display: flex;
  width: 100%;
  overflow-y: hidden;
}

.flex-column {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: calc(100vh - 100px - 60px);
  //padding: 16px;
  //position: absolute;

  @include mobile () {
    position: absolute;
    width: 100%;
    //transform: translateY(500px);
  }
}

.hidden {
  @include mobile () {
    position: absolute;
    top: 0px;
    transform: translateY(calc(100vh - 100px - 60px));
    margin-bottom: 0px;
    transition: transform 1s;
  }
}

.shown {
  @include mobile () {
    transform: translateY(0px);
  }
}

.show-settings, .show-stats {
  display: none;

  border: 1px solid rgb(74, 74, 74);
  border-right: none;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  padding: 8px;

  @include mobile () {
    display: block;
    &.inactive {
      display: none;
    }
  }
}

.mobile-controls {
  z-index: 1;
  position: absolute;
  right: 0px;
}

</style>

<template lang='pug'>
  .playground
    IssueGraph(:initialIssues='initialIssues')
    .flex-column
      Settings.hidden(:class='{ shown: showSettings}')
      Stats.hidden(:class='{ shown: showStats}')
    .mobile-controls
      .show-settings(@click='activateSettings' :class='{ active: showSettings }')
        | Settings
        b-icon(icon='settings')
      .show-stats(@click='activateStats' :class='{ active: showStats }')
        | Stats
        b-icon(icon='information-outline')

</template>

<script>
import IssueGraph from './IssueGraph.vue'
import Settings from './settings/Settings.vue'
import Stats from './stats/Stats.vue'


export default {
  name: 'Playground',
  data () {
    return {
      showSettings: false,
      showStats: false,
    }
  },
  methods: {
    activateSettings () {
      this.showSettings = !this.showSettings
      this.showStats = false
    },
    activateStats () {
      this.showStats = !this.showStats 
      this.showSettings = false
    },
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

$footer-height: 60px;
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
  height: calc(100vh - 100px - #{$footer-height});

  @include mobile () {
    position: absolute;
    width: 100%;
  }
}

.hidden {
  @include mobile () {
    position: absolute;
    top: 0px;
    transform: translateY(calc(100vh - 100px - #{$footer-height}));
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
  width: 50%;
  border: 1px solid rgb(74, 74, 74);
  padding: 12px;

  @include mobile () {
    display: flex;
    justify-content: center;
    align-items: center;
    &.active {
      background-color: rgba(121, 87, 213, 1);
      color: white;
    }
  }
}

.mobile-controls {
  z-index: 5;
  display: flex;
  width: 100%;
  position: absolute;
  bottom: $footer-height;
  background-color: white;
}

</style>

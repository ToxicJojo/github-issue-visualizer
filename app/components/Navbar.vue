<template lang='pug'>
  .navbar
    b-field(:message='errorMessage' :type='errorMessage ? "is-danger" : ""')
      b-input(@keyup.enter.native='loadRepository' type='text' placeholder='owner/repo' v-model='repositoryInput' rounded)
    a.button.is-primary.is-rounded(@click='loadRepository' :class='{ "is-loading": loading }') Load Issues


</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      repositoryInput: '',
      loading: false,
      errorMessage: null,
    }
  },
  methods: {
    async loadRepository () {
      // Get the owner and repo parts of the input field
      const params = this.repositoryInput.split('/')
      const owner = params[0]
      const repo = params[1]
      // Load issues and labels
      try {
        // Reset loading and error state
        this.loading = true
        this.errorMessage = null,
        // Load issues and labels for the repository
        await this.$store.dispatch('repository/loadIssues', { owner, repo })
        await this.$store.dispatch('repository/loadLabels', { owner, repo })
        //await this.$store.dispatch('repository/loadContributors', { owner, repo })
        this.$store.dispatch('repository/loadIssueAuthors')


      } catch (e) {
        // TODO Handle different types of errors and show meaningfull error messages
        console.log(e)
        this.errorMessage = 'Could not load repository'
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style lang="scss" scoped>

.navbar {
  display: flex;
  justify-content: center;

  padding: 20px;
  height: 100px;

    .field {
    margin: 0px 10px;
  }
}


</style>
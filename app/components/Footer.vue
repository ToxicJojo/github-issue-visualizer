<template lang='pug'>
  footer.has-text-grey-lighter
    p.is-flex Made with
      b-icon.i(icon='heart') 
      | and
      b-icon.i(icon='code-tags')
      | by&nbsp;
      a(href='https://johannesthiel.me').has-text-light.has-text-weight-semibold Johannes Thiel


</template>

<script>

export default {
  name: 'Footer',
  data () {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>

footer {
  display: flex;
  justify-content: center;

  padding: 18px;
  background-color: #212121;
}

.i {
  margin: 0px 5px;
}

</style>
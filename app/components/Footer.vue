<template lang='pug'>
  footer.has-text-grey-lighter
    p.is-flex Made with
      b-icon.footer-icon(icon='heart') 
      | and
      b-icon.footer-icon(icon='code-tags')
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

  z-index: 1;
  padding: 18px;
  background-color: #212121;
}

.footer-icon {
  margin: 0px 5px;
  color: #852d91;
}

</style>
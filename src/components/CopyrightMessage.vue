<template>
  <div id="copyright">{{copyright}}</div>
</template>

<script>

export default {
  name: 'CopyrightMessageComponent',
  props: {
    copyright: {
      type: String,
      default: 'Copyright © This is a CopyRight Message'
    }
  }
}
</script>

<style scoped>
#copyright {
  width: 100%;
  text-align: center;
  padding: .125rem /* 2/16 */ 0
}
</style>

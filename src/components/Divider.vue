<template>
  <p id="the-divider">
    <van-icon :name="iconName" size="1rem"></van-icon>
    <span class="padding-l-8">{{tip}}</span>
  </p>
</template>

<script>
export default {
  name: 'TheDivider',
  props: {
    tip: {
      type: String,
      default: '我是有底线的'
    },
    iconName: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
#the-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: .875rem;
  line-height: 2.5rem
}

#the-divider .padding-l-8 {
  padding-left: .5rem
}
</style>

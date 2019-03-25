<template lang="pug">
  #button_registration(v-bind:class="{ active: isActive }" @click="onClick")
    span {{ caption || 'Зарегистрироваться бесплатно' }}
</template>
<style lang="less" scoped>
div#button_registration {
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 60px;
  // padding: 18px 0px;
  margin-top: 24px;
  background: linear-gradient(
      125.63deg,
      rgba(254, 159, 124, 0.3) 12.79%,
      rgba(254, 125, 123, 0.3) 95.63%
    ),
    #ffffff;
  box-shadow: 0px 5px 12px rgba(179, 83, 83, 0.07);
  border-radius: 4px;
  @media screen and (max-width: 469px) {
    margin-left: 8px;
    margin-right: 8px;
  }

  span {
    /* Зарегистрироваться бесплатно */
    font-family: 'PT Sans', sans-serif;
    font-style: normal;
    font-weight: bold;
    // line-height: normal;
    line-height: 24px;
    font-size: 18px;
    color: #ffffff;
    cursor: default;
  }

  &.active {
    background: linear-gradient(125.63deg, #fe9f7c 12.79%, #fe7d7b 95.63%);
    box-shadow: 0px 5px 12px rgba(60, 28, 28, 0.21);
    cursor: pointer;
    span {
      cursor: pointer;
    }
  }
}
</style>

<script>
// import _ from 'lodash'
export default {
  name: 'ButtonRegistration',
  props: {
    isActive: Boolean,
    caption: String
  },
  methods: {
    onClick: _.debounce(function() {
      console.log('ButtonRegistration pressed')
      if (this.isActive) {
        console.log('regClick emitted')
        this.$emit('regClick')
      }
    }, 100)
  }
}
</script>

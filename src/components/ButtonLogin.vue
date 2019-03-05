<template lang="pug">
  #button_login(v-bind:class="{ active: isActive }" @click="onClick")
    span(@click="onClick") Войти
</template>

<script>
export default {
  name: 'ButtonLogin',
  props: {
    isActive: false
  },
  methods: {
    onClick() {
      // eslint-disable-next-line
      console.log('ButtonLogin pressed')
      if (this.isActive) {
        this.$emit('loginClick')
      }
    }
  }
}
</script>

<style lang="less" scoped>
div#button_login {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  margin-top: 24px;
  background: linear-gradient(125.63deg, rgba(254, 159, 124, 0.3) 12.79%, rgba(254, 125, 123, 0.3) 95.63%), #FFFFFF;
  box-shadow: 0px 5px 12px rgba(179, 83, 83, 0.07);
  border-radius: 4px;

  span {
    /* Войти */
    font-family: 'PT Sans', sans-serif;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    font-size: 18px;
    color: #FFFFFF;
  }

  &.active {
    background: linear-gradient(125.63deg, #FE9F7C 12.79%, #FE7D7B 95.63%);
    box-shadow: 0px 5px 12px rgba(60, 28, 28, 0.21);

    &:hover {
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.13);
      cursor: pointer;
    }
  }
}
</style>

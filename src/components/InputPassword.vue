<template lang="pug">
  #input_password(@click="onSpanClick")
    input(
      type="password"
      value=""
      v-model="inputText"
      @focus="onInputFocus"
      @blur="onInputBlur"
      @input="onInput"
      ref='input')
    span(v-bind:class="{ aside: isSpanAside }") {{placeholder || 'Введите пароль'}}
</template>

<script>
import _ from 'lodash'

export default {
  name: 'InputPassword',
  props: {
    placeholder: String
  },
  data() {
    return {
      inputText: '',
      isInputActive: false
    }
  },
  computed: {
    isSpanAside() {
      return (this.isInputActive || (!this.isInputActive && this.inputText !== ''))
    }
  },
  methods: {
    onSpanClick() {
      this.$refs.input.focus()
    },
    onInputFocus() {
      this.isInputActive = true
    },
    onInputBlur() {
      this.isInputActive = false
    },
    onInput: _.debounce(function() {
      this.$emit('inputTextChange', {
        value: this.inputText
      })
    }, 10)
  }
}
</script>

<style lang="less" scoped>
  div#input_password {
    display: flex;
    flex-direction: row;
    align-items: center;
    // height: 44px;
    height: 58px;
    width: 468px;
    margin-top: 27px;
    position: relative;
    // height: 64px;
    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
    border-radius: 4px;
    padding-left: 18px;
    @media screen and (max-width: 469px) {
      width: 300px;
      padding-left: 8px;
      margin-left: 6px;
    }

    input {
      width: 468px;
      border: none;
      /* 2018 */
      // position: absolute;
      height: 29px;
      font-family: 'PT Sans', sans-serif;
      font-style: normal;
      font-weight: normal;
      line-height: normal;
      font-size: 22px;
      color: #555555;
      outline: none;
      box-shadow: none;
      margin-top: 20px;
      @media screen and (max-width: 469px) {
        width: 280px;
        margin-top: 8px;
      }
    }

    span {
      /* Введите промокод */
      position: absolute;
      width: fit-content;
      height: 24px;
      font-family: 'PT Sans', sans-serif;
      font-style: normal;
      font-weight: normal;
      line-height: normal;
      font-size: 18px;
      color: #ABABAB;
      // transition
      transition-property: left, top, font-size;
      transition-timing-function: ease-in-out;
      transition-duration: .3s;
      @media screen and (max-width: 469px) {
        left: 6px;
        font-size: 14px;
      }

      &.aside {
        /* Введите промокод */
        font-size: 13px;
        height: 17px;
        top: 8px;
        @media screen and (max-width: 469px) {
          top: 1px;
          font-size: 12px;
        }
      }
    }
  }
</style>

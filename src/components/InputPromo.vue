<template lang="pug">
  #input_promo
    input(type='text' ref="input" @focus="onInputFocus" @blur="onInputBlur" @input="onInput" v-model="inputText")
    span(v-bind:class="{ aside: isSpanAside }" @click="onSpanClick" ref="span") Введите промокод
    .error(v-if="showError")
      .triangle
      span Промокода не существует
    .success(v-if="showSuccess")
      .triangle
      span Скидка 10%<br>на все командные тарифы
</template>
<script>
import _ from 'lodash'
import axios from 'axios'
export default {
  name: 'InputPromo',
  data() {
    return {
      inputText: '',
      isInputActive: false,
      testString: 'vagiz',
      isPromoCorrect: false
    }
  },
  computed: {
    isSpanAside() {
      // eslint-disable-next-line
      return (this.isInputActive || (!this.isInputActive && this.inputText !== ''))
    },
    showError() {
      if (this.isInputActive && this.inputText !== '') {
        if (this.isPromoCorrect) {
          return false
        } else {
          return true
        }
      } else {
        return false
      }
    },
    showSuccess() {
      if (this.isInputActive && this.inputText !== '') {
        if (this.isPromoCorrect) {
          return true
        } else {
          return false
        }
      } else {
        return false
      }
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
    async checkPromo() {
      var response = await axios.get(
        'https://api.b2bfamily.com/version/v2/promo/' + this.inputText
      )
      console.log('response: ', response)
      if (response.data !== null) {
        this.isPromoCorrect = true
      } else {
        this.isPromoCorrect = false
      }
    },
    onInput: _.debounce(function() {
      this.checkPromo()
    }, 1000)
  }
}
</script>
<style lang="less" scoped>
div#input_promo {
  @media screen and (min-width: 961px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    // height: 44px;
    height: 58px;
    width: 468px;
    margin-top: 38px;
    position: relative;
    // height: 64px;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    box-sizing: border-box;
    border-radius: 4px;
    padding-left: 18px;

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
      color: #ababab;
      // transition
      transition-property: left, top, font-size;
      transition-timing-function: ease-in-out;
      transition-duration: 0.3s;

      &.aside {
        /* Введите промокод */
        font-size: 13px;
        height: 17px;
        top: 0px;
      }
    }

    .error {
      /* Rectangle 4.2 */
      position: absolute;
      left: 468px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 246px;
      height: 51px;
      background: #ffffff;
      border: 1px solid #ededed;
      box-sizing: border-box;
      box-shadow: 0px 4px 26px rgba(0, 0, 0, 0.1);
      border-radius: 4px;

      .triangle {
        transform: rotate(45deg);
        background: #ffffff;
        border: 1px solid #ededed;
        box-sizing: border-box;
        box-shadow: 0px 4px 26px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        height: 17px;
        width: 17px;
        position: absolute;
        left: -8px;
        border-right: none;
        border-top: none;
      }

      span {
        /* Промокода не существует */
        width: 161px;
        height: 19px;
        margin-left: 14px;
        font-family: PT Sans;
        font-style: normal;
        font-weight: bold;
        line-height: normal;
        font-size: 14px;
        color: #f75b26;
      }
    }

    .success {
      /* Rectangle 4.2 */
      position: absolute;
      left: 468px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 246px;
      height: 65.5px;
      background: #ffffff;
      border: 1px solid #ededed;
      box-sizing: border-box;
      box-shadow: 0px 4px 26px rgba(0, 0, 0, 0.1);
      border-radius: 4px;

      .triangle {
        transform: rotate(45deg);
        background: #ffffff;
        border: 1px solid #ededed;
        box-sizing: border-box;
        box-shadow: 0px 4px 26px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        height: 17px;
        width: 17px;
        position: absolute;
        left: -8px;
        border-right: none;
        border-top: none;
      }

      span {
        /* Скидка 10% на все командные тарифы */
        top: 12px;
        height: 19px;
        margin-left: 14px;
        font-family: PT Sans;
        font-style: normal;
        font-weight: bold;
        line-height: normal;
        font-size: 14px;
        color: #71c032;
      }
    }
  }
}
</style>

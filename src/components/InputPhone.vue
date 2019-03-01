<template lang="pug">
  #input_phone
    masked-input(
      type="text"
      name="phone"
      class="form-control"
      v-model="inputText"
      :mask="['(', /[1-9]/, /[1-9]/, /[1-9]/, ')', ' ', /[1-9]/, /[1-9]/, /[1-9]/, '-', /[1-9]/, /[1-9]/, /[1-9]/, /[1-9]/]"
      :guide="false"
      placeholderChar="_"
      @focus="onInputFocus"
      @blur="onInputBlur"
      @input="onInput"
      ref='input')
    //- input(type='text' ref='input' @focus="onInputFocus" @blur="onInputBlur" v-model="inputText")
    span(v-bind:class="{ aside: isSpanAside }" @click="onSpanClick") Введите ваш телефон
    .hint_phone(v-if="showHintPhone")
      .triangle
      #hider
      span Зачем указывать телефон?
      span На этот номер будут приходить<br>уведомления, если клиент<br>запросит звонок или задаст<br>вопрос во время просмотра<br>предложения.
</template>
<style lang="less" scoped>
div#input_phone {
  display: flex;
  flex-direction: row;
  align-items: center;
  // height: 44px;
  height: 58px;
  width: 468px;
  margin-top: 27px;
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
    font-family: PT Sans;
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    font-size: 22px;
    color: #555555;
    outline: none;
    margin-top: 20px;
  }

  span {
    /* Введите промокод */
    position: absolute;
    width: fit-content;
    height: 24px;
    font-family: PT Sans;
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
      top: 8px;
    }
  }

  .hint_phone {
    /* Rectangle 4.2 */
    position: absolute;
    left: 468px;
    top: 0px;
    display: felx;
    flex-direction: column;
    justify-content: center;
    width: 246px;
    height: 150px;
    background: #ffffff;
    border: 1px solid #ededed;
    box-sizing: border-box;
    box-shadow: 0px 4px 26px rgba(0, 0, 0, 0.1);
    border-radius: 4px;

    #hider {
      position: absolute;
      width: 32px;
      height: 48px;
      background-color: white;
      left: 0px;
      top: 0px;
    }

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
      top: 12px;
      border-right: none;
      border-top: none;
    }

    span:nth-child(3) {
      /* Зачем указывать телефон? */
      position: absolute;
      width: 166px;
      height: 19px;
      top: 16px;
      left: 18px;
      font-family: PT Sans;
      font-style: normal;
      font-weight: bold;
      line-height: normal;
      font-size: 14px;
      color: #3a3a3a;
    }

    span:nth-child(4) {
      /* На этот номер будут приходить уведомления, если клиент запросит звонок или задаст вопрос во время просмотра предложения. */
      position: absolute;
      width: 195px;
      height: 91px;
      top: 42px;
      left: 18px;
      font-family: PT Sans;
      font-style: normal;
      font-weight: normal;
      line-height: normal;
      font-size: 14px;
      color: #a5a5a5;
    }
  }
}
</style>
<script>
import _ from 'lodash'
import MaskedInput from 'vue-text-mask'
export default {
  name: 'InputPhone',
  components: {
    MaskedInput
  },
  data() {
    return {
      isInputActive: false,
      inputText: ''
    }
  },
  computed: {
    isSpanAside() {
      // eslint-disable-next-line
      return (this.isInputActive || (!this.isInputActive && this.inputText !== ''))
    },
    showHintPhone() {
      return this.isInputActive && this.inputText === ''
    },
    isValid() {
      return /^\([0-9]{3}\) [0-9]{3}-[0-9]{4}$/.test(this.inputText)
    }
  },
  methods: {
    fuck() {
      // eslint-disable-next-line
      console.log(this.$refs.input.$el)
    },
    onSpanClick() {
      // this.$refs.input.focus()
      this.$refs.input.$el.focus()
    },
    onInputFocus() {
      this.isInputActive = true
    },
    onInputBlur() {
      if (this.inputText === '(') {
        this.inputText = ''
      }
      this.isInputActive = false
    },
    onInput: _.debounce(function() {
      // this.$emit('inputValidChange', this.isValid)
      this.$emit('inputValidChange', {
        isValid: this.isValid,
        value: this.inputText
      })
    }, 100)
  }
}
</script>

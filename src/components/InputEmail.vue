<template lang="pug">
  #input_email
    //- input(type='text')
    masked-input(
      type="text"
      name="email"
      class="form-control"
      v-model="inputText"
      :mask="emailMask"
      :guide="false"
      placeholderChar="_"
      @focus="onInputFocus"
      @blur="onInputBlur"
      @input="onInput"
      ref='input')
    span(v-bind:class="{ aside: isSpanAside }" @click="onSpanClick") Введите почту, с которой отправляете письма
</template>

<style lang="less" scoped>
div#input_email {
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
    box-shadow: none;
    margin-top: 20px;
    padding-left: 0px!important;
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
}
</style>

<script>
import _ from 'lodash'
import MaskedInput from 'vue-text-mask'
import emailMask from 'text-mask-addons/dist/emailMask'
export default {
  name: 'InputEmail',
  components: {
    MaskedInput
  },
  data() {
    return {
      testData: 'vagiz',
      selected: '',
      emailMask: emailMask,
      inputText: '',
      isInputActive: false
    }
  },
  computed: {
    isSpanAside() {
      // eslint-disable-next-line
      return (this.isInputActive || (!this.isInputActive && this.inputText !== ''))
    },
    isValid() {
      // eslint-disable-next-line
      return (this.inputText.length < 100) && /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([а-яА-ЯёЁa-zA-Z\-0-9]+\.)+[а-яА-ЯёЁa-zA-Z]{2,}))$/i.test(this.inputText)
    }
  },
  methods: {
    onSpanClick() {
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
      this.$emit('inputValidChange', {
        isValid: this.isValid,
        value: this.inputText
      })
    }, 100)
  }
}
</script>

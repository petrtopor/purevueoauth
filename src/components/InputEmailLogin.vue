<template lang="pug">
  #input_email(@click="onSpanClick")
    //- input(type="text" value="")
    //- masked-input(
    //-   type="text"
    //-   name="email"
    //-   class="form-control"
    //-   v-model="inputText"
    //-   :mask="emailMask"
    //-   :guide="false"
    //-   placeholderChar="_"
    //-   @focus="onInputFocus"
    //-   @blur="onInputBlur"
    //-   @input="onInput"
    //-   ref='input')
    input(
      type="text"
      name="email"
      v-model="inputText"
      @focus="onInputFocus"
      @blur="onInputBlur"
      @input="onInput"
      ref='input')
    span(v-bind:class="{ aside: isSpanAside }") Введите ваш e-mail
    .error_email(v-if="showErrorEmail || showError")
      .triangle
      #hider
      span Некорректный e-mail
      span пожалуйста, проверьте введенный адрес
</template>

<script>
import _ from 'lodash'
import MaskedInput from 'vue-text-mask'
import emailMask from 'text-mask-addons/dist/emailMask'
export default {
  name: 'InputEmailLogin',
  components: {
    MaskedInput
  },
  props: {
    showError: Boolean
  },
  data() {
    return {
      testData: 'vagiz',
      selected: '',
      emailMask: emailMask,
      inputText: '',
      isInputActive: false,
      showErrorEmail: false
    }
  },
  mounted() {
    this.$nextTick(() => {
      if(this.inputText !== '') {
        this.$refs.parentNode.click()
        // console.log('email input is dirty')
      }
    })
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
      // this.$refs.input.$el.focus()
      this.$refs.input.focus()
    },
    onInputFocus() {
      this.isInputActive = true
      this.showErrorEmail = false
      this.$emit('focus')
    },
    onInputBlur() {
      if (this.inputText === '(') {
        this.inputText = ''
      }
      if(!this.isValid && this.inputText !== '') {
        this.showErrorEmail = true
      } else {
        this.showErrorEmail = false
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
      padding-left: 0px!important;
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
    
    .error_email {
      /* Rectangle 4.2 */
      position: absolute;
      left: 468px;
      top: 0px;
      display: felx;
      flex-direction: column;
      justify-content: center;
      width: 256px;
      height: 80px;
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
        // width: 166px;
        // width: fit-content;
        max-width: 195px;
        height: 19px;
        top: 16px;
        // left: 6px;
        left: 18px;
        font-family: PT Sans;
        font-style: normal;
        font-weight: bold;
        line-height: normal;
        font-size: 14px;
        color: #F75B26;
      }

      span:nth-child(4) {
        /* На этот номер будут приходить уведомления, если клиент запросит звонок или задаст вопрос во время просмотра предложения. */
        position: absolute;
        // width: 195px;
        // width: fit-content;
        max-width: 195px;
        height: 91px;
        top: 42px;
        // left: 6px;
        left: 18px;
        text-align: left;
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

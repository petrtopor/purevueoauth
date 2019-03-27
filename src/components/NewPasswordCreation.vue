<template lang="pug">
  #container(ref="container")
    #close_button(@click="onCloseClick")
      .cross_part(@click="onCloseClick")
      .cross_part(@click="onCloseClick")
    #caption
      span Создание нового пароля
    <InputPassword :placeholder="'Введите новый пароль'" @inputTextChange="onFirstPasswordInput"/>
    <InputPassword :placeholder="'Повторите новый пароль'" @inputTextChange="onSecondPasswordInput"/>
    #button(@click="onButtonClick" :class="{active: isButtonActive}")
      span(@click="onButtonClick") Продолжить
</template>

<script>
import InputPassword from './InputPassword.vue'
export default {
  components: {
    InputPassword
  },
  name: 'NewPasswordCreation',
  data() {
    return {
      password1: '',
      password2: '',
    }
  },
  methods: {
    onFirstPasswordInput(payload) {
      this.password1 = payload['value']
    },
    onSecondPasswordInput(payload) {
      this.password2 = payload['value']
    },
    onCloseClick() {
      // console.log('onCloseClick')
      this.$emit('closeNewPasswordCreation')
    },
    onButtonClick() {
      if(this.isButtonActive) {
        //
      } else {
        //
      }
    }
  },
  computed: {
    isButtonActive() {
      return (this.password1 === this.password2) && (this.password1 !== '')
    }
  }
}
</script>

<style lang="less" scoped>
div#container {
  display: flex;
  flex-direction: column;
  border: solid 1px;
  border-radius: 4px;
  border-color: #E0E0E0;
  background-color: white!important;
  position: absolute;
  top: 200px;
  left: calc(50vw - (468px / 2));
  padding: 20px;

  div#close_button {
    height: 30px;
    width: 30px;
    position: absolute;
    // left: 440px;
    left: calc(100% - 45px);
    // top: -30px;
    // transform: scale(0.5, 0.5);
    transform: rotate(45deg);
    cursor: pointer;

    div.cross_part {
      height: 32px;
      width: 6px;
      background-color: #555;
      position: absolute;
      left: 12px;
      top: -1px;
      border-radius: 2px;

      &:nth-child(2) {
        transform: rotate(90deg);
      }
    }
  }

  div#caption {
		display: flex;
		justify-content: center;
    height: 32px;
    // width: fit-content;
    width: 100%;

		span {
			/* Восстановление пароля */
      // width: 357px;
      width: fit-content;
			font-family: PT Sans;
			font-style: normal;
			font-weight: bold;
			line-height: normal;
			font-size: 24px;
			text-align: center;
			color: #545454;
		}
  }
  
  div#label {
    width: fit-content;
    margin-top: 12px;

    span {
      /* Email */
      // width: 357px;
      width: fit-content;
			height: 32px;
			font-family: PT Sans;
			font-style: normal;
			font-weight: bold;
			line-height: normal;
			font-size: 14px;
			text-align: center;
			color: #545454;
    }
  }
  div#button {
    background: linear-gradient(125.63deg, rgba(254, 159, 124, 0.3) 12.79%, rgba(254, 125, 123, 0.3) 95.63%), #FFFFFF;
    box-shadow: 0px 5px 12px rgba(179, 83, 83, 0.07);
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    margin-top: 16px;
    cursor: pointer;
    
    span {
      font-family: 'PT Sans', sans-serif;;
      font-style: normal;
      font-weight: bold;
      line-height: normal;
      color: white;
      cursor: pointer;
    }

    &.active {
      background: linear-gradient(125.63deg, #FE9F7C 12.79%, #FE7D7B 95.63%);
      box-shadow: 0px 5px 12px rgba(60, 28, 28, 0.21);
    }
  }
}
</style>

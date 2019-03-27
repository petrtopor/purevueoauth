<template lang="pug">
#container
  #caption
    span Данный e-mail уже зарегистрирован
  #label1.label
    span Войдите в существующий аккаунт или зарегистрируйте другой e-mail адрес
  <InputPassword @inputTextChange="onInputTextChange"/>
  #label2.label
    span(@click="onNoPassSpanClick") Я не получал или забыл пароль
  #buttons_block
    #button_1
      span Зарегистрировать новый e-mail
    #button_2
      span Войти
  #password_reset
  <LoginForgotSuccess v-if="showLoginSuccess" @closeButtonClick="onCloseButtonClick"/>
</template>

<script>
import InputPassword from './InputPassword.vue'
import LoginForgotSuccess from './LoginForgotSuccess.vue'

export default {
  name: 'AlreadyExists',
  components: {
    InputPassword,
    LoginForgotSuccess
  },
  data() {
    return {
      password: '',
      showLoginSuccess: false
    }
  },
  created() {
    // console.log('AlreadyExists::created() FUCK YEAH')
    // const email = '@ViewBag.currentEmail';
    // const showPasswordField = '@ViewBag.showPasswordField';
    // console.log('email: ', email)
    // console.log('showPasswordField: ', showPasswordField)
  },
  methods: {
    onInputTextChange(payload) {
      this.password = payload.value
    },
    onNoPassSpanClick() {
      this.showLoginSuccess = !this.showLoginSuccess
    },
    onCloseButtonClick() {
      this.showLoginSuccess = false
    }
  }
}
</script>


<style lang="less" scoped>
div#container {
  margin-top: 156px;
  width: 468px;
  display: flex;
  flex-direction: column;

  div#caption {
    width: fit-content;
    align-self: center;

    span {
      /* Данный e-mail уже зарегистрирован */
      font-family: PT Sans;
      font-style: normal;
      font-weight: bold;
      line-height: normal;
      font-size: 24px;
      text-align: center;
      color: #545454;
    }
  }

  div.label {
    &#label1 {
      margin-top: 9px;
    }

    &#label2 {
      margin-top: 18px;
    }

    span {
      font-family: PT Sans;
      font-style: normal;
      font-weight: normal;
      line-height: normal;
      font-size: 14px;
      text-align: center;
      color: #3D3D3D;
    }
  }

  div#input_password {
    display: flex;
    flex-direction: row;
    align-items: center;
    // height: 44px;
    height: 58px;
    width: 468px;
    margin-top: 38px;
    position: relative;
    // height: 64px;
    background: #FFFFFF;
    border: 1px solid #E0E0E0;
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
      color: #ABABAB;
      // transition
      transition-property: left, top, font-size;
      transition-timing-function: ease-in-out;
      transition-duration: .3s;

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
      display: none;
      flex-direction: column;
      justify-content: center;
      width: 246px;
      height: 51px;
      background: #FFFFFF;
      border: 1px solid #EDEDED;
      box-sizing: border-box;
      box-shadow: 0px 4px 26px rgba(0, 0, 0, 0.1);
      border-radius: 4px;

      .triangle {
        transform: rotate(45deg);
        background: #FFFFFF;
        border: 1px solid #EDEDED;
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
        color: #F75B26;
      }
    }

    .success {
      /* Rectangle 4.2 */
      position: absolute;
      left: 468px;
      display: none;
      flex-direction: column;
      justify-content: center;
      width: 246px;
      height: 65.5px;
      background: #FFFFFF;
      border: 1px solid #EDEDED;
      box-sizing: border-box;
      box-shadow: 0px 4px 26px rgba(0, 0, 0, 0.1);
      border-radius: 4px;

      .triangle {
        transform: rotate(45deg);
        background: #FFFFFF;
        border: 1px solid #EDEDED;
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
        color: #71C032;
      }
    }
  }

  div#label2 {
    span {
      &:hover {
        cursor: pointer;
      }
    }
  }

  div#buttons_block {
    margin-top: 23px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    div#button_1 {
      width: 240px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        /* Зарегистрировать новый e-mail */
        font-family: PT Sans;
        font-style: normal;
        font-weight: normal;
        line-height: normal;
        font-size: 14px;
        color: #636363;
      }
    }

    div#button_2 {
      /* Rectangle 2.7 */
      width: 240px;
      height: 60px;
      background: linear-gradient(110.18deg, rgba(254, 159, 124, 0.3) 12.79%, rgba(254, 125, 123, 0.3) 95.63%), #FFFFFF;
      box-shadow: 0px 5px 12px rgba(179, 83, 83, 0.07);
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;

      &.active {
        background-color: #f17c53;
        cursor: pointer;

        span {
          cursor: pointer;
        }
      }

      span {
        /* Войти */
        font-family: PT Sans;
        font-style: normal;
        font-weight: bold;
        line-height: normal;
        font-size: 18px;
        color: #FFFFFF;
        cursor: default;
      }
    }
  }
}
</style>

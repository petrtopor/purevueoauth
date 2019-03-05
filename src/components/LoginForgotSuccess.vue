<template lang="pug">
#login_forgot_success
  #close_button(@click="onCloseButtonClick")
    .cross_part
    .cross_part
  #modal_body
    #header
      span Готово
    #label
      span Вам на почту выслано письмо с инструкций по восстановлению пароля.
    #caption
      span Если письмо не пришло, обратитесь в тех поддержку
    #button_continue
      span ПРОДОЛЖИТЬ
</template>

<script>
export default {
  name: 'LoginForgotSuccess',
  methods: {
    onCloseButtonClick() {
      this.$emit('closeButtonClick')
    }
  }
}
</script>


<style lang="less" scoped>
div#login_forgot_success {
  display: flex;
  flex-direction: column;
  width: 440px;
  height: 310px;
  border-radius: 5px;
  box-shadow: 7px 7px 35px 0 rgba(55,55,55,.4);
  background-color: white;
  position: absolute;
  vertical-align: middle;

  div#close_button {
    height: 30px;
    width: 30px;
    position: absolute;
    left: 440px;
    top: -30px;
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

  div#modal_body {
    margin: 50px;

    div#header {
      box-sizing: border-box;
      height: 27px;
      margin-top: 3px;
      margin-bottom: 5px;


      span {
        font-family: 'PT Sans', sans-serif!important;
        font-size: 21px;
        font-weight: 700;
        color: rgb(85, 85, 85);
      }
    }

    div#label {
      box-sizing: border-box;
      height: 65px;
      margin-top: 20px;
      margin-bottom: 10px;

      span {
        font-size: 15px;
        color: #989898;
        font-weight: 300;
        font-family: 'PT Sans', sans-serif!important;
      }
    }

    div#caution {
      margin-top: 19px;
      margin-bottom: 25px;
      cursor: pointer;

      span {
        color: #F17C53;
        font-size: 13px;
        font-weight: 300;
        font-family: 'PT Sans', sans-serif!important;
      }
    }

    div#button_continue {
      width: 200px;
      height: 54px;
      border-radius: 4px;
      background-color: #f17c53;
      box-shadow: 3px 3px 10px 0 rgba(173,71,39,.3);
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      span {
        color: white;
        font-size: 14px;
        font-weight: 700;
        cursor: pointer;
      }

      &:hover {
        background-color: #ed5824 !important;
        box-shadow: 3px 7px 16px 0 rgba(173,71,39,.5);
      }
    }
  }
}
</style>

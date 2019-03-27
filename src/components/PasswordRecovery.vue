<template lang="pug">
  #container(ref="container")
    #caption
      span Создание нового пароля
    <InputPassword :placeholder="'Введите новый пароль'" @inputTextChange="onFirstPasswordInput"/>
    <InputPassword :placeholder="'Повторите новый пароль'" @inputTextChange="onSecondPasswordInput"/>
    #button(@click="onButtonClick" :class="{active: isButtonActive}")
      span Продолжить
</template>

<script>
import InputEmailLogin from './InputEmailLogin.vue'
import InputPassword from './InputPassword.vue'
import ButtonLogin from './ButtonLogin.vue'
import PasswordReset from './PasswordReset.vue'
import NewPasswordCreation from './NewPasswordCreation.vue'

import axios from 'axios'

export default {
  name: 'PasswordRecovery',
  components: {
    InputEmailLogin,
    InputPassword,
    ButtonLogin,
    PasswordReset,
    NewPasswordCreation
  },
  mounted() {
    if(/token=([^&]+)/.exec(document.location.href) !== null) {
      const token = /token=([^&]+)/.exec(document.location.href)[1]
      if(token !== '') {
        this.token = token
        // console.log('token extracted from the url: ', this.token)
      } else {
        TMess.Error('no token')
      }
    }
  },
  data() {
    return {
      password1: '',
      password2: '',
      token: '',
      errorMessagesMap: {
        '4011': 'Ошибка идентификации!',
        '4041': 'Email не зарегистрирован в системе. Зарегистрируйтесь!',
        '5301': 'Ошибка(',
        '5303': 'Ошибка при регистрации.',
        '5304': 'Ошибка авторизации.',
        '5305': 'Не удалось привязать почту. Пожалуйста, привяжите почту самостоятельно после авторизации.',
        '5306': 'Ошибка(',
        '5307': 'Ошибка(',
        '5308': 'Email уже зарегистрирован. Авторизуйтесь или зарегистрируйте новую почту!'
      }
    }
  },
  computed: {
    isButtonActive() {
      return (this.password1 === this.password2) && (this.password1 !== '')
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
        Preloader.start()
        const payload = {
          model: {
            Token: this.token,
            Password: this.password1,
            ConfirmPassword: this.password2
          }
        }
        axios.post('/Account/ResetPasswordActivateAsync', payload).then(response => {
          Preloader.stop()
          // console.log('response.data.is_success', response.data.is_success)
          if(response.data.is_success) {
            // console.log('response.data.is_success === true')
            window.location.href='/'
          } else {
            // console.log('response.data.is_success === false')
            // console.log('response.data.error: ', response.data.error)
            TMess.Error(errorMessagesMap[response.data.error])
          }
        }).catch(error => {
          TMess.Error(error)
          // console.log('error: ', error)
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
div#container {
	display: flex;
	flex-direction: column;
	width: 468px;
	background-color: #F5F5F5;
	margin-top: 84px;

	div#caption {
		display: flex;
		justify-content: center;
		height: 32px;

		span {
			/* Зарегистрируйтесь и закрывайте еще больше сделок */
			width: 357px;
			height: 32px;
			font-family: 'PT Sans', sans-serif;
			font-style: normal;
			font-weight: bold;
			line-height: normal;
			font-size: 24px;
			text-align: center;
			color: #545454;
		}
	}

	div#button {
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
}
</style>

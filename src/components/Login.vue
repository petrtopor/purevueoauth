<template lang="pug">
  #container(ref="container")
    #caption
      span Вход
    #buttons_mail
      .button_mail.mlr(@click="mlrOauthLoginClick")
        <svg width="79" height="27" viewBox="0 0 79 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M78.0385 2.44824H75.5229V19.5271H78.0385V2.44824Z" fill="#005FF9" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M72.7844 19.526H70.2689V7.42317H72.7844V19.526ZM71.5266 2.02246C72.464 2.02246 73.2251 2.78357 73.2251 3.72097C73.2251 4.65837 72.464 5.41947 71.5266 5.41947C70.5892 5.41947 69.8281 4.65837 69.8281 3.72097C69.8281 2.78357 70.5892 2.02246 71.5266 2.02246Z" fill="#005FF9" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M67.5686 19.5455H65.0966V18.2214C64.2104 19.2252 62.6493 19.8564 61.1812 19.8564C57.6704 19.8564 54.8193 17.0053 54.8193 13.4936C54.8193 9.9829 57.6704 7.13184 61.1812 7.13184C62.6493 7.13184 64.1279 7.68537 65.0966 8.66258V7.44272H67.5686V19.5455ZM61.2617 9.67485C63.4265 9.67485 65.1298 11.2236 65.1298 13.4936C65.1298 15.7637 63.4265 17.3267 61.2617 17.3267C59.0969 17.3267 57.4514 15.6594 57.4514 13.4936C57.4514 11.3288 59.0969 9.67485 61.2617 9.67485Z" fill="#005FF9" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M36.3757 19.5455H33.9028V7.44272H36.3757V8.28818C36.9245 7.77162 37.9538 7.13373 39.3813 7.13184C41.1366 7.13184 42.4446 7.87019 43.3403 9.05782C44.3204 7.88157 45.9364 7.13184 47.5828 7.13184C50.6727 7.13184 52.7788 9.218 52.7788 12.469V19.5455H50.3059V12.469C50.3059 10.89 49.0207 9.60471 47.4416 9.60471C45.8616 9.60471 44.5773 10.89 44.5773 12.469V19.5455H42.1044V12.469C42.1044 10.89 40.8191 9.60471 39.24 9.60471C37.661 9.60471 36.3757 10.89 36.3757 12.469V19.5455Z" fill="#005FF9" />
          <path d="M17.2609 13.2696C17.2609 15.4704 15.4704 17.2609 13.2696 17.2609C11.0687 17.2609 9.27827 15.4704 9.27827 13.2696C9.27827 11.0687 11.0687 9.27827 13.2696 9.27827C15.4704 9.27827 17.2609 11.0687 17.2609 13.2696ZM13.2696 0C5.95235 0 0 5.95235 0 13.2696C0 20.5868 5.95235 26.5391 13.2696 26.5391C15.95 26.5391 18.5347 25.7411 20.7441 24.2312L20.782 24.2046L18.9944 22.127L18.9641 22.146C17.2637 23.2407 15.2941 23.8189 13.2696 23.8189C7.45276 23.8189 2.72026 19.0864 2.72026 13.2696C2.72026 7.45276 7.45276 2.72026 13.2696 2.72026C19.0864 2.72026 23.8189 7.45276 23.8189 13.2696C23.8189 14.0231 23.7345 14.7861 23.5705 15.5368C23.2369 16.9064 22.2777 17.3253 21.5583 17.2703C20.8342 17.2116 19.9868 16.696 19.9811 15.4335V14.4714V13.2696C19.9811 9.5683 16.9708 6.55801 13.2696 6.55801C9.5683 6.55801 6.55801 9.5683 6.55801 13.2696C6.55801 16.9708 9.5683 19.9811 13.2696 19.9811C15.0676 19.9811 16.7538 19.2788 18.0248 18.0002C18.7641 19.1508 19.9688 19.8721 21.3403 19.9821C21.4578 19.9915 21.5782 19.9963 21.6967 19.9963C22.6625 19.9963 23.6189 19.6731 24.3904 19.0883C25.1856 18.4836 25.7799 17.6106 26.1079 16.5614C26.16 16.3917 26.2567 16.004 26.2567 16.0012L26.2595 15.987C26.4529 15.1453 26.5391 14.3065 26.5391 13.2696C26.5391 5.95235 20.5868 0 13.2696 0Z" fill="#FF9E00" />
        </svg>
      .button_mail.ynd(@click="yndOauthLoginClick")
        <svg width="56" height="22" viewBox="0 0 56 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.36163 10.5147H6.2652C4.54235 10.5147 2.87163 9.27793 2.87163 6.18524C2.87163 2.96422 4.43806 1.64986 6.0302 1.64986H7.36163V10.5147ZM9.08449 0.000561953H6.10878C3.18449 0.000561953 0.705204 2.1914 0.705204 6.44332C0.705204 8.99447 1.90592 10.8758 4.04663 11.803L0.0523477 18.9156C-0.0783665 19.1476 0.0523476 19.3281 0.260919 19.3281H2.11449C2.27092 19.3281 2.37592 19.2767 2.42806 19.1476L6.05663 12.164H7.36163V19.1476C7.36163 19.2252 7.4402 19.3281 7.54449 19.3281H9.16306C9.31949 19.3281 9.37163 19.2506 9.37163 19.1222V0.257935C9.37163 0.0781279 9.26735 0.000561953 9.08449 0.000561953Z" fill="#ED1E24" />
          <path d="M18.8969 6.40649H17.2783C17.1476 6.40649 17.0698 6.50944 17.0698 6.587V11.5088H14.0676V6.587C14.0676 6.45796 14.0155 6.40649 13.8848 6.40649H12.2662C12.1362 6.40649 12.0576 6.48405 12.0576 6.587V19.1115C12.0576 19.2398 12.1098 19.3174 12.2398 19.3174H13.8848C13.989 19.3174 14.0676 19.2398 14.0676 19.1115V13.1327H17.0698V19.1115C17.0698 19.2398 17.1476 19.3174 17.2783 19.3174H18.8969C19.0276 19.3174 19.0798 19.2137 19.0798 19.1115V6.587C19.0798 6.48405 19.0012 6.40649 18.8969 6.40649Z" fill="#231F20" />
          <path d="M55.8507 18.4931L55.6422 17.6173C55.6157 17.5398 55.59 17.5137 55.5114 17.5137C55.3807 17.5137 54.6764 17.7971 53.6579 17.7971C51.6743 17.7971 50.7079 15.9159 50.7079 12.9268C50.7079 10.2981 51.5172 7.69548 52.875 7.69548C53.24 7.69548 53.6843 7.79843 54.3886 8.44292C54.4672 8.52048 54.5193 8.54586 54.5979 8.54586C54.6764 8.54586 54.7543 8.49439 54.8329 8.36535L55.5379 7.2315C55.59 7.15465 55.6157 7.07708 55.6157 6.99952C55.6157 6.89657 55.5114 6.81971 55.355 6.74215C54.2843 6.20061 53.5536 6.09766 52.9272 6.09766C50.4736 6.09766 48.5679 8.98375 48.5679 13.4937C48.5679 17.3846 50.395 19.627 53.0057 19.627C54.1022 19.627 55.2764 19.1115 55.7464 18.7766C55.8507 18.699 55.8772 18.5961 55.8507 18.4931Z" fill="#231F20" />
          <path d="M44.5055 12.2308L47.6384 6.587C47.6905 6.51014 47.6641 6.40649 47.5598 6.40649H46.0198C45.5755 6.40649 45.4191 6.56161 45.2627 6.89655L42.9134 11.7154C42.7827 11.9989 42.6519 12.1794 42.5212 12.2569V6.587C42.5212 6.48405 42.4691 6.40649 42.3648 6.40649H40.6677C40.5898 6.40649 40.5112 6.48405 40.5112 6.587V19.1369C40.5112 19.2144 40.5634 19.3174 40.6677 19.3174H42.3648C42.4691 19.3174 42.5212 19.2398 42.5212 19.1369V12.6687C42.5998 12.7202 42.6519 12.7978 42.7041 12.9007L45.6798 18.931C45.8369 19.2398 46.0719 19.3174 46.4112 19.3174H48.0819C48.1862 19.3174 48.2127 19.2144 48.1598 19.1369L44.5055 12.2308Z" fill="#231F20" />
          <path d="M26.728 17.6938H22.943C24.2744 15.4522 24.7966 12.9264 24.9794 9.83374C25.0316 9.16386 25.0573 8.46861 25.0573 8.03002H26.728V17.6938ZM29.5473 17.6938H29.2344C28.8423 17.6938 28.738 17.5394 28.738 17.2298V6.58733C28.738 6.45829 28.6859 6.40681 28.5816 6.40681H23.3609C23.2301 6.40681 23.1516 6.48367 23.1516 6.58733V7.51457C23.1516 10.6326 22.9694 14.6533 21.2987 17.6938H20.7237C20.5673 17.6938 20.5151 17.7714 20.5151 17.8997V21.6623C20.5151 21.7913 20.6194 21.8428 20.698 21.8428H21.9509C22.238 21.8428 22.3423 21.6369 22.3423 21.4564V19.317H27.9287V21.6623C27.9287 21.7652 28.0073 21.8428 28.1116 21.8428H29.443C29.5994 21.8428 29.7566 21.7137 29.7566 21.4564V17.8997C29.7566 17.7714 29.678 17.6938 29.5473 17.6938Z" fill="#231F20" />
          <path d="M34.5853 11.6891C33.9853 11.6891 33.0453 11.792 33.0453 11.792C33.0453 11.792 33.0453 11.4056 33.0974 10.9931C33.3324 8.80296 33.8803 7.6945 34.7946 7.6945C35.6296 7.6945 36.1517 8.82835 36.2824 10.8133C36.3082 11.2251 36.3082 11.6891 36.3082 11.6891H34.5853ZM34.8724 6.09739C32.0532 6.09739 30.8003 9.60187 30.8003 13.4159C30.8003 17.3068 32.5753 19.626 35.186 19.626C36.4646 19.626 37.5874 19.1366 38.1617 18.7756C38.266 18.7241 38.2924 18.6473 38.266 18.5436L38.0574 17.6678C38.031 17.5649 37.9789 17.5134 37.8482 17.5134C37.7439 17.5134 36.9867 17.7969 35.9167 17.7969C33.9067 17.7969 32.9667 16.07 32.9667 13.8023V13.1924C32.9667 13.1924 33.9853 13.313 34.5853 13.313H38.3967V12.2306C38.3967 8.23604 36.961 6.09739 34.8724 6.09739Z" fill="#231F20" />
        </svg>
      .button_mail.gml(@click="gmlOauthLoginClick")
        <svg width="89" height="33" viewBox="0 0 89 33" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <rect width="89" height="33" fill="url(#pattern0)" />
          <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlink:href="#image0" transform="translate(-0.00519663) scale(0.00926966 0.025)" />
            </pattern>
            <image id="image0" width="109" height="40" xlink:href="data:image/png;base64,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" />
          </defs>
        </svg>
    #label_1
      .line
        <svg width="206" height="1" viewBox="0 0 206 1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="206" y1="0.5" y2="0.5" stroke="#E0E0E0" />
        </svg>
      .label_text
        span или
      .line
        <svg width="214" height="1" viewBox="0 0 214 1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="214" y1="0.5" y2="0.5" stroke="#E0E0E0" />
        </svg>
    //- #input_email
    //-   input(type="text" value="")
    //-   span Введите ваш e-mail
    <InputEmailLogin @inputValidChange="onInputValidChange"/>
    //- #input_password
    //-   input(type="password" value="")
    //-   span Введите пароль
    <InputPassword @inputTextChange="onInputTextChange"/>
    //- #button_login
    //-   span Войти
    <ButtonLogin :isActive="isButtonLoginActive" @loginClick="onLoginClick"/>
    #no_acc_no_pass
      #no_acc
        p Еще нет аккаунта?
        a(href="/oauth/registration") Зарегистрироваться
      #no_pass(@click="onNoPassClick")
        p Я не получал
        p или забыл пароль
    <PasswordReset v-if="showPasswordReset" @passwordReset="onPasswordReset" @close="onPasswordResetClose"/>
</template>

<script>
import InputEmailLogin from './InputEmailLogin.vue'
import InputPassword from './InputPassword.vue'
import ButtonLogin from './ButtonLogin.vue'
import PasswordReset from './PasswordReset.vue'

import axios from 'axios'

export default {
  components: {
    InputEmailLogin,
    InputPassword,
    ButtonLogin,
    PasswordReset
  },
  data() {
    return {
      email: '',
      isEmailValid: false,
      password: '',
      showPasswordReset: false
    }
  },
  computed: {
    isButtonLoginActive() {
      return this.isEmailValid && this.password !== ''
    }
  },
  mounted() {
    /* MAKE TRANSLATION DUE TO DRAGGING POSSIBLE    - - - - - - - -    BEGIN    */
    /*
    var initialX = 0
    var initialY = 0
    var offsetX = 0
    var offsetY = 0
    var currentX = 0
    var currentY = 0
    var isActive = false
    const container = this.$refs.container
    container.addEventListener('mousedown', event => {
      if(event.target.id === 'container') {
        isActive = true
        initialX = event.clientX - offsetX;
        initialY = event.clientY - offsetY;
      } else {
        console.log('target wrong, target is: ', event.target)
      }
    })
    container.addEventListener('mousemove', event => {
      if(isActive === true) {
        event.preventDefault()
        currentX = event.clientX - initialX;
        currentY = event.clientY - initialY;
        offsetX = currentX;
        offsetY = currentY;
        event.target.style.transform = "translate3d(" + currentX + "px, " + currentY + "px, 0)"
      }
    })
    container.addEventListener('mouseup', event => {
      isActive = false
    })
    */
    /* MAKE TRANSLATION DUE TO DRAGGING POSSIBLE    - - - - - - - -    END    */
    const errorMessagesMap = {
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
    if(/error_message=([^&]+)/.exec(document.location.href) !== null) {
      const error_message = /error_message=([^&]+)/.exec(document.location.href)[1]
      if(error_message !== '') {
        TMess.Error(errorMessagesMap[error_message])
      }
    }
    if(/resetpassword=([^&]+)/.exec(document.location.href) !== null) {
      const resetpassword = /resetpassword=([^&]+)/.exec(document.location.href)[1]
      if(resetpassword !== '') {
        this.showPasswordReset = true
      }
    }
    if(/email=([^&]+)/.exec(document.location.href) !== null) {
      const email = /email=([^&]+)/.exec(document.location.href)[1]
      if(email !== '') {
        this.email = email
      }
    }
  },
  methods: {
    onPasswordResetClose(container) {
      _.forEach(_.filter(container.parentNode.childNodes, childNode => childNode !== container), otherNode => {
        otherNode.style.filter = ''
        otherNode.style['pointer-events'] = ''
        otherNode.style['user-select'] = ''
      })
      this.showPasswordReset = false
    },
    onPasswordReset(response) {
      this.showPasswordReset = false
      if(response.data.state) {
        window.TMess.Success('Письмо для восстановления пароля отправлено на указанный Вами email')
      } else {
        window.TMess.Error(response.data.error)
      }
    },
    onNoPassClick() {
      this.showPasswordReset = !this.showPasswordReset
    },
    mlrOauthLoginClick() {
      window.location.href = '/oauth/oauthBy?serviceType=Mail&usageType=Authorization&lang=ru'
    },
    yndOauthLoginClick() {
      window.location.href = '/oauth/oauthBy?serviceType=Yandex&usageType=Authorization&lang=ru'
    },
    gmlOauthLoginClick() {
      window.location.href = '/oauth/oauthBy?serviceType=Gmail&usageType=Authorization&lang=ru'
    },
    onInputValidChange(payload) {
      this.email = payload.value
      this.isEmailValid = payload.isValid
    },
    onInputTextChange(payload) {
      this.password = payload.value
    },
    onLoginClick() {
      Preloader.start()
      console.log('onLoginClick()')
      var payload = 'Email=' + this.email + '&Password=' + this.password
      axios.post('/Account/LoginAsinc', payload).then(response => {
        console.log('OK/не-OK: ', response.data.auth)
        if(response.data.auth) {
          console.log('response: ', response)
          window.location.href = response.data.redirect
        } else {
          Preloader.stop()
          TMess.Error('Неверная пара логин/пароль')
          console.log('response.data: ', response.data)
        }
      }).catch(error => {
        console.log('error: ', error)
        Preloader.stop()
      })
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

	div#label_1 {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin-top: 14px;

		div.line {
			padding-bottom: 5px;
		}

		div.label_text {
			span {
				font-family: 'PT Sans', sans-serif;
				font-style: normal;
				font-weight: normal;
				line-height: normal;
				font-size: 14px;
				text-align: center;
				color: #ABABAB;
			}
		}
	}

	div#buttons_mail {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		height: 50px;
		margin-top: 32px;
		box-sizing: border-box;

		div.button_mail {
			display: flex;
			justify-content: space-around;
			align-items: center;
			height: 48px;
			width: 146px;
			background: #FFFFFF;
			border: 1px solid #E0E0E0;
			box-sizing: border-box;
			box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.07);
			border-radius: 4px;

			&:hover {
				box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.13);
				cursor: pointer;
			}

			&.ynd {
				width: 146px !important;
			}
		}
	}

	div#label_2 {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin-top: 14px;
		
		div.label_text {
			span {
				font-family: 'PT Sans', sans-serif;
				font-style: normal;
				font-weight: normal;
				line-height: normal;
				font-size: 14px;
				text-align: center;
				color: #ABABAB;
			}
		}
	}

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
			margin-top: 20px;
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

			&.aside {
				/* Введите промокод */
				font-size: 13px;
				height: 17px;
				top: 8px;
			}
		}
	}

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
			margin-top: 20px;
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

			&.aside {
				/* Введите промокод */
				font-size: 13px;
				height: 17px;
				top: 8px;
			}
		}
	}

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

	div#no_acc_no_pass {
		display: flex;
		flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
		width: 100%;
		margin-top: 13px;

		div#no_acc {
			align-items: flex-start;

			span {
				text-align: left;
			}

			p {
				/* Еще нет аккаунта? */
				text-align: left;
				align-content: flex-start;
				margin-bottom: 0px;
				font-family: 'PT Sans', sans-serif;
				font-style: normal;
				font-weight: normal;
				line-height: normal;
				font-size: 14px;
				color: #636363;
			}

			a {
				/* Зарегистрироваться */
				text-align: left;
				align-content: flex-start;
				margin-bottom: 0px;
				font-family: 'PT Sans', sans-serif;
				font-style: normal;
				font-weight: normal;
				line-height: normal;
				font-size: 14px;
				text-decoration-line: underline;
				color: #FF8E7C;
			}
		}

		div#no_pass {
			align-items: flex-end;

			&:hover {
				// box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.13);
				cursor: pointer;
				text-decoration: underline;
			}

			span {
				text-align: right;
				align-content: flex-end;
			}

			p {
				text-align: right;
        align-content: flex-end;
        margin-top: 0px;
				margin-bottom: 0px;
				font-family: 'PT Sans', sans-serif;
				font-style: normal;
				font-weight: normal;
				line-height: normal;
				font-size: 14px;
				color: #636363;
			}
		}
	}
}
</style>

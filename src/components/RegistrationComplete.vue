<template lang="pug">
  #container
    #caption
      span Укажите номер телефона<br/>для важных уведомлений от клиентов
    #label1.label
      span На этот номер будут приходить уведомления, если клиент запросит звонок<br/>или задаст вопрос во время просмотра предложения.
    //- #input_phone
    <InputPhone @inputValidChange="onPhoneInputValidChange"/>
    #label_3
      span Какой CRM системой вы пользуетесь?
    //- #selector_crm
    <SelectorCrm @crmSelected="onCrmSelected"/>
    <InputPromo v-if="showInputPromo" @inputValidChange="onPromoInputValidChange"/>
    //- #button_registration
    <ButtonRegistration :isActive="isButtonRegistrationActive" @regClick="onRegClick"/>
    #already_have
      #prm_mujud(@click='toggleShowInputPromo')
        span У меня есть промокод
</template>

<script>
import InputPhone from './InputPhone.vue'
import SelectorCrm from './SelectorCrm.vue'
import ButtonRegistration from './ButtonRegistration.vue'
import InputPromo from './InputPromo.vue'

import axios from 'axios'

export default {
  name: 'RegistrationComplete',
  components: {
    InputPhone,
    SelectorCrm,
    ButtonRegistration,
    InputPromo
  },
  mounted() {
		// Analytics.sendEvent('user', 'registrated', 'oauth')
		Analytics.sendEvent("user", "registrated - from invite", "oauth", "", () => {
			console.log('Analytics has been sent')
			// return Promise.resolve('ga')
		})
		// _.delay(() => Promise.resolve('noga'), 10000)
		/*
		Promice.race([
			Analytics.sendEvent("user", "registrated - from invite", "oauth", "", () => {
				console.log('Analytics has been sent')
				return Promise.resolve(true)
			}),
			_.delay(() => Promise.resolve(false), 10000)
		]).then(isGaSent => )
		*/
  },
  data() {
    return {
      showInputPromo: false,
      isPhoneInputValid: false,
      RegPhone: null,
      Promo: '',
      CrmName: '',
      isPromoInputValid: false
    }
  },
  computed: {
    isButtonRegistrationActive() {
      return this.isPhoneInputValid
    }
  },
  methods: {
    onCrmSelected(value) {
      this.CrmName = value
    },
    toggleShowInputPromo() {
      this.showInputPromo = !this.showInputPromo
    },
    onPromoInputValidChange(payload) {
      this.isPromoInputValid = payload.isValid
      this.Promo = payload.value
    },
    onPhoneInputValidChange(payload) {
      this.isPhoneInputValid = payload.isValid
      this.RegPhone = payload.value
    },
    onRegClick() {
      if(this.isButtonRegistrationActive === true) {
        axios.post('/OAuth/CompleteSuccessfulOAuthRegistration', {
          model: {
            RegPhone: this.RegPhone,
            CrmName: this.CrmName,
            Promo: this.Promo,
            Language: 'ru'
          }
        })
        .then(response => {
          if(response.data.status === true) {
            console.log('OK: ', response)
            document.location.href = '/templates'
          } else {
            console.log('not-OK: ', response)
            TMess.Error('Не получилось... :(')
          }
        })
        .catch(error => {
          console.log('ERROR: ', error)
        })
      }
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
		display: flex;

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

		.hint_phone {
			/* Rectangle 4.2 */
			position: absolute;
			left: 468px;
			top: 0px;
			display: none;
			flex-direction: column;
			justify-content: center;
			width: 246px;
			height: 150px;
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
				top: 12px;
				border-right: none;
				border-top: none;
			}

			span:nth-child(2) {
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
				color: #3A3A3A;
			}

			span:nth-child(3) {
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
				color: #A5A5A5;
			}
		}
	}

	div#label_3 {
		display: flex;
		height: 16px;
		margin-top: 20px;

		span {
			/* Какой CRM системой вы пользуетесь? */
			height: 16px;
			font-family: PT Sans;
			font-style: normal;
			font-weight: normal;
			line-height: normal;
			font-size: 14px;
			color: #636363;
		}
	}

	div#selector_crm {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		height: 19px;
		margin-top: 15px;

		div.option {
			display: flex;
			align-items: center;

			span {
				font-family: PT Sans;
				font-style: normal;
				font-weight: normal;
				line-height: normal;
				font-size: 14px;
				color: #636363;
				margin-left: 10px;
			}
		}
	}

	div#button_registration {
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 60px;
		margin-top: 24px;
		background: linear-gradient(125.63deg, rgba(254, 159, 124, 0.3) 12.79%, rgba(254, 125, 123, 0.3) 95.63%), #FFFFFF;
		box-shadow: 0px 5px 12px rgba(179, 83, 83, 0.07);
		border-radius: 4px;

		span {
			/* Зарегистрироваться бесплатно */
			font-family: PT Sans;
			font-style: normal;
			font-weight: bold;
			line-height: normal;
			font-size: 18px;
			color: #FFFFFF;
		}

		&.active {
			background: linear-gradient(125.63deg, #FE9F7C 12.79%, #FE7D7B 95.63%);
			box-shadow: 0px 5px 12px rgba(60, 28, 28, 0.21);
		}
	}

	div#already_have {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		height: 19px;
		margin-top: 16px;

		div#prm_mujud {
			span {
				/* У меня есть промокод */
				font-family: PT Sans;
				font-style: normal;
				font-weight: normal;
				line-height: normal;
				font-size: 14px;
				color: #636363;
				cursor: pointer;
			}
		}
	}
}
</style>

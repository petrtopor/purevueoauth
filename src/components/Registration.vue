<template lang="pug">
  #container
    #caption
      span Зарегистрируйтесь<br>и закрывайте еще больше сделок
    #label_1
      span войдите через свой почтовый аккаунт
    #buttons_mail
      .button_mail.mlr(@click="onButtonMailMlrClick")
        <svg width="78" height="27" viewBox="0 0 78 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M77.8584 2.44824H75.3486V19.5271H77.8584V2.44824Z" fill="white" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M72.6164 19.526H70.1067V7.42317H72.6164V19.526ZM71.3616 2.02246C72.2968 2.02246 73.0562 2.78357 73.0562 3.72097C73.0562 4.65837 72.2968 5.41947 71.3616 5.41947C70.4263 5.41947 69.667 4.65837 69.667 3.72097C69.667 2.78357 70.4263 2.02246 71.3616 2.02246Z" fill="white" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M67.4126 19.5455H64.9464V18.2214C64.0622 19.2252 62.5048 19.8564 61.04 19.8564C57.5374 19.8564 54.6929 17.0053 54.6929 13.4936C54.6929 9.9829 57.5374 7.13184 61.04 7.13184C62.5048 7.13184 63.98 7.68537 64.9464 8.66258V7.44272H67.4126V19.5455ZM61.1204 9.67485C63.2802 9.67485 64.9795 11.2236 64.9795 13.4936C64.9795 15.7637 63.2802 17.3267 61.1204 17.3267C58.9605 17.3267 57.3189 15.6594 57.3189 13.4936C57.3189 11.3288 58.9605 9.67485 61.1204 9.67485Z" fill="white" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M36.2919 19.5455H33.8247V7.44272H36.2919V8.28818C36.8394 7.77162 37.8664 7.13373 39.2905 7.13184C41.0418 7.13184 42.3468 7.87019 43.2404 9.05782C44.2182 7.88157 45.8305 7.13184 47.4731 7.13184C50.5559 7.13184 52.6571 9.218 52.6571 12.469V19.5455H50.1899V12.469C50.1899 10.89 48.9076 9.60471 47.3322 9.60471C45.7558 9.60471 44.4745 10.89 44.4745 12.469V19.5455H42.0073V12.469C42.0073 10.89 40.725 9.60471 39.1496 9.60471C37.5742 9.60471 36.2919 10.89 36.2919 12.469V19.5455Z" fill="white" />
          <path d="M17.221 13.2696C17.221 15.4704 15.4347 17.2609 13.2389 17.2609C11.0431 17.2609 9.25684 15.4704 9.25684 13.2696C9.25684 11.0687 11.0431 9.27827 13.2389 9.27827C15.4347 9.27827 17.221 11.0687 17.221 13.2696ZM13.2389 0C5.9386 0 0 5.95235 0 13.2696C0 20.5868 5.9386 26.5391 13.2389 26.5391C15.9132 26.5391 18.4919 25.7411 20.6962 24.2312L20.734 24.2046L18.9506 22.127L18.9203 22.146C17.2238 23.2407 15.2588 23.8189 13.2389 23.8189C7.43554 23.8189 2.71398 19.0864 2.71398 13.2696C2.71398 7.45276 7.43554 2.72026 13.2389 2.72026C19.0423 2.72026 23.7639 7.45276 23.7639 13.2696C23.7639 14.0231 23.6797 14.7861 23.5161 15.5368C23.1832 16.9064 22.2263 17.3253 21.5085 17.2703C20.786 17.2116 19.9406 16.696 19.935 15.4335V14.4714V13.2696C19.935 9.5683 16.9316 6.55801 13.2389 6.55801C9.54621 6.55801 6.54286 9.5683 6.54286 13.2696C6.54286 16.9708 9.54621 19.9811 13.2389 19.9811C15.0328 19.9811 16.7151 19.2788 17.9832 18.0002C18.7208 19.1508 19.9227 19.8721 21.291 19.9821C21.4083 19.9915 21.5284 19.9963 21.6466 19.9963C22.6102 19.9963 23.5643 19.6731 24.3341 19.0883C25.1275 18.4836 25.7204 17.6106 26.0476 16.5614C26.0996 16.3917 26.196 16.004 26.196 16.0012L26.1989 15.987C26.3918 15.1453 26.4778 14.3065 26.4778 13.2696C26.4778 5.95235 20.5392 0 13.2389 0Z" fill="#FF9E00" />
        </svg>
      .button_mail.ynd(@click="onButtonMailYndClick")
        <svg width="56" height="22" viewBox="0 0 56 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.34463 10.5147H6.25073C4.53186 10.5147 2.865 9.27793 2.865 6.18524C2.865 2.96422 4.42781 1.64986 6.01628 1.64986H7.34463V10.5147ZM9.06351 0.000561953H6.09467C3.17714 0.000561953 0.703576 2.1914 0.703576 6.44332C0.703576 8.99447 1.90152 10.8758 4.03729 11.803L0.0522268 18.9156C-0.0781855 19.1476 0.0522267 19.3281 0.260316 19.3281H2.10961C2.26567 19.3281 2.37043 19.2767 2.42245 19.1476L6.04264 12.164H7.34463V19.1476C7.34463 19.2252 7.42302 19.3281 7.52707 19.3281H9.1419C9.29797 19.3281 9.34999 19.2506 9.34999 19.1222V0.257935C9.34999 0.0781279 9.24594 0.000561953 9.06351 0.000561953Z" fill="#ED1E24" />
          <path d="M18.8533 6.40649H17.2384C17.108 6.40649 17.0304 6.50944 17.0304 6.587V11.5088H14.0351V6.587C14.0351 6.45796 13.9831 6.40649 13.8527 6.40649H12.2379C12.1082 6.40649 12.0298 6.48405 12.0298 6.587V19.1115C12.0298 19.2398 12.0818 19.3174 12.2115 19.3174H13.8527C13.9568 19.3174 14.0351 19.2398 14.0351 19.1115V13.1327H17.0304V19.1115C17.0304 19.2398 17.108 19.3174 17.2384 19.3174H18.8533C18.9837 19.3174 19.0357 19.2137 19.0357 19.1115V6.587C19.0357 6.48405 18.9573 6.40649 18.8533 6.40649Z" fill="#231F20" />
          <path d="M55.7216 18.4931L55.5135 17.6173C55.4872 17.5398 55.4615 17.5137 55.3831 17.5137C55.2527 17.5137 54.55 17.7971 53.5338 17.7971C51.5548 17.7971 50.5906 15.9159 50.5906 12.9268C50.5906 10.2981 51.398 7.69548 52.7528 7.69548C53.1169 7.69548 53.5602 7.79843 54.2628 8.44292C54.3412 8.52048 54.3933 8.54586 54.4716 8.54586C54.55 8.54586 54.6277 8.49439 54.7061 8.36535L55.4095 7.2315C55.4615 7.15465 55.4872 7.07708 55.4872 6.99952C55.4872 6.89657 55.3831 6.81971 55.227 6.74215C54.1588 6.20061 53.4298 6.09766 52.8048 6.09766C50.3569 6.09766 48.4556 8.98375 48.4556 13.4937C48.4556 17.3846 50.2785 19.627 52.8832 19.627C53.9771 19.627 55.1486 19.1115 55.6176 18.7766C55.7216 18.699 55.748 18.5961 55.7216 18.4931Z" fill="#231F20" />
          <path d="M44.4025 12.2308L47.5282 6.587C47.5802 6.51014 47.5538 6.40649 47.4498 6.40649H45.9133C45.4701 6.40649 45.314 6.56161 45.1579 6.89655L42.8141 11.7154C42.6837 11.9989 42.5533 12.1794 42.4228 12.2569V6.587C42.4228 6.48405 42.3708 6.40649 42.2668 6.40649H40.5735C40.4959 6.40649 40.4175 6.48405 40.4175 6.587V19.1369C40.4175 19.2144 40.4695 19.3174 40.5735 19.3174H42.2668C42.3708 19.3174 42.4228 19.2398 42.4228 19.1369V12.6687C42.5012 12.7202 42.5533 12.7978 42.6053 12.9007L45.5741 18.931C45.7309 19.2398 45.9654 19.3174 46.3039 19.3174H47.9707C48.0748 19.3174 48.1011 19.2144 48.0484 19.1369L44.4025 12.2308Z" fill="#231F20" />
          <path d="M26.6663 17.6938H22.89C24.2184 15.4522 24.7393 12.9264 24.9217 9.83374C24.9738 9.16386 24.9994 8.46861 24.9994 8.03002H26.6663V17.6938ZM29.4791 17.6938H29.1669C28.7757 17.6938 28.6716 17.5394 28.6716 17.2298V6.58733C28.6716 6.45829 28.6196 6.40681 28.5156 6.40681H23.3069C23.1765 6.40681 23.0981 6.48367 23.0981 6.58733V7.51457C23.0981 10.6326 22.9164 14.6533 21.2495 17.6938H20.6759C20.5198 17.6938 20.4678 17.7714 20.4678 17.8997V21.6623C20.4678 21.7913 20.5718 21.8428 20.6502 21.8428H21.9002C22.1867 21.8428 22.2907 21.6369 22.2907 21.4564V19.317H27.8642V21.6623C27.8642 21.7652 27.9426 21.8428 28.0467 21.8428H29.375C29.5311 21.8428 29.6879 21.7137 29.6879 21.4564V17.8997C29.6879 17.7714 29.6095 17.6938 29.4791 17.6938Z" fill="#231F20" />
          <path d="M34.5053 11.6891C33.9067 11.6891 32.9688 11.792 32.9688 11.792C32.9688 11.792 32.9688 11.4056 33.0208 10.9931C33.2553 8.80296 33.8019 7.6945 34.7141 7.6945C35.5471 7.6945 36.0681 8.82835 36.1985 10.8133C36.2241 11.2251 36.2241 11.6891 36.2241 11.6891H34.5053ZM34.7917 6.09739C31.979 6.09739 30.729 9.60187 30.729 13.4159C30.729 17.3068 32.4999 19.626 35.1046 19.626C36.3802 19.626 37.5005 19.1366 38.0734 18.7756C38.1775 18.7241 38.2038 18.6473 38.1775 18.5436L37.9694 17.6678C37.943 17.5649 37.891 17.5134 37.7606 17.5134C37.6565 17.5134 36.9011 17.7969 35.8336 17.7969C33.8283 17.7969 32.8904 16.07 32.8904 13.8023V13.1924C32.8904 13.1924 33.9067 13.313 34.5053 13.313H38.3079V12.2306C38.3079 8.23604 36.8755 6.09739 34.7917 6.09739Z" fill="#231F20" />
        </svg>
      .button_mail.gml(@click="onButtonMailGmlClick")
        <svg width="92" height="33" viewBox="0 0 92 33" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <rect x="0.265625" width="90.7898" height="33" fill="url(#pattern0)" />
          <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlink:href="#image0" transform="translate(0 -0.00480868) scale(0.00458716 0.0126202)" />
            </pattern>
            <image id="image0" width="218" height="80" xlink:href="data:image/png;base64,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" />
          </defs>
        </svg>
    #label_2
      span или зарегистрируйтесь, заполнив поля
    <InputEmail @inputValidChange="onEmailInputValidChange" :initialText="RegEmail" v-if="showInputEmail"/>
    <InputPhone @inputValidChange="onPhoneInputValidChange"/>
    #label_3
      span Какой CRM системой вы пользуетесь?
    <SelectorCrm @crmSelected="onCrmSelected" :isHighlighted="isCrmSelectorHighlighted"/>
    <InputPromo v-if="showInputPromo" @inputValidChange="onPromoInputValidChange"/>
    <ButtonRegistration :isActive="isButtonRegistrationActive" :caption="'Зарегистрироваться бесплатно'" @regClick="onRegClick"/>
    #already_have
      #prm_mujud(@click='toggleShowInputPromo')
        span У меня есть промокод
      #acc_mujud
        span Уже есть аккаунт?&nbsp;
        span.link(@click="onAccMujudClick") Войти
    #disclaimer
      span Нажимая кнопку «Зарегистрироваться бесплатно», вы принимаете<br>наши политику конфиденциальности и договор оферты
</template>
<style lang="less" scoped>
// @import url('https://fonts.googleapis.com/css?family=PT+Sans');
div#container {
  display: flex;
  flex-direction: column;
  width: 468px;
  background-color: #f5f5f5;
  margin-top: 84px;

  div#caption {
    display: flex;
    justify-content: center;
    height: 63px;

    span {
      /* Зарегистрируйтесь и закрывайте еще больше сделок */
      width: 357px;
      height: 63px;
      // font-family: 'PT Sans', sans-serif;
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
    justify-content: center;
    height: 19px;
    width: fit-content;
    padding-left: 15px;
    padding-right: 15px;
    background-color: #f5f5f5;
    align-self: center;
    z-index: 2;
    margin-top: 24px;

    span {
      /* войдите через свой почтовый аккаунт */
      height: 19px;
      left: 843px;
      top: 243px;
      font-family: 'PT Sans', sans-serif;
      font-style: normal;
      font-weight: normal;
      line-height: normal;
      font-size: 14px;
      text-align: center;
      color: #ababab;
    }
  }

  div#buttons_mail {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 12px;
    padding-right: 12px;
    height: 96px;
    padding-top: 24px;
    margin-top: -10px;
    margin-bottom: -10px;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    box-sizing: border-box;

    div.button_mail {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 48px;
      width: 138px;
      border-radius: 4px;

      &:hover {
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.13);
        cursor: pointer;
      }

      &.mlr {
        background-color: #005ff9;
      }

      &.ynd {
        background-color: #ffda3e;
      }

      &.gml {
        background-color: #dc5a4f;
      }
    }
  }

  div#label_2 {
    display: flex;
    justify-content: center;
    height: 19px;
    margin-top: 0px;
    width: fit-content;
    padding-left: 15px;
    padding-right: 15px;
    align-self: center;
    background-color: #f5f5f5;
    z-index: 2;

    span {
      /* или зарегистрируйтесь, заполнив поля */
      height: 19px;
      left: 843px;
      top: 338px;
      font-family: PT Sans;
      font-style: normal;
      font-weight: normal;
      line-height: normal;
      font-size: 14px;
      text-align: center;
      color: #ababab;
    }
  }

  div#label_3 {
    display: flex;
    height: 16px;
    margin-top: 20px;

    span {
      /* Какой CRM системой вы пользуетесь? */
      height: 16px;
      font-family: 'PT Sans', sans-serif;
      font-style: normal;
      font-weight: normal;
      line-height: normal;
      font-size: 14px;
      color: #636363;
    }
  }

  div#already_have {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 19px;
    margin-top: 16px;

    div#prm_mujud {
      span {
        /* У меня есть промокод */
        font-family: 'PT Sans', sans-serif;
        font-style: normal;
        font-weight: normal;
        line-height: normal;
        font-size: 14px;
        color: #636363;
        cursor: pointer;
      }
    }

    div#acc_mujud {
      span {
        /* Уже есть аккаунт? */
        font-family: 'PT Sans', sans-serif;
        font-style: normal;
        font-weight: normal;
        line-height: normal;
        font-size: 14px;
        color: #636363;
      }

      span.link {
        /* Войти */
        font-family: 'PT Sans', sans-serif;
        font-style: normal;
        font-weight: bold;
        line-height: normal;
        font-size: 14px;
        text-decoration-line: underline;
        color: #ff8e7c;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }

  div#disclaimer {
    display: flex;
    justify-content: space-around;
    height: 37px;
    margin-top: 23px;

    span {
      /* Нажимая кнопку «Зарегистрироваться бесплатно», вы принимаете наши политику конфиденциальности и договор оферты */
      font-family: 'PT Sans', sans-serif;
      font-style: normal;
      font-weight: normal;
      line-height: normal;
      font-size: 14px;
      text-align: center;
      color: #ababab;
    }
  }
}
</style>
<script>
/* eslint-disable */
import SelectorCrm from './SelectorCrm.vue'
import InputEmail from './InputEmail.vue'
import InputPhone from './InputPhone.vue'
import InputPromo from './InputPromo.vue'
import ButtonRegistration from './ButtonRegistration.vue'
import axios from 'axios'
import _ from 'lodash'

export default {
  components: {
    SelectorCrm,
    InputEmail,
    InputPhone,
    InputPromo,
    ButtonRegistration
  },
  mounted() {
    console.log('mounted')
    Analytics.setPageView('/Account/Register')
    if(_.includes(window.location.path, 'from=invite')) {
      Analytics.sendEvent('user', 'landing - from invite')
    }
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
    if(/email=([^&]+)/.exec(document.location.href) !== null) {
      const email = /email=([^&]+)/.exec(document.location.href)[1]
      if(email !== '') {
        console.log('email came from url: ', email)
        // this.RegEmail = email
        this.$nextTick(() => {
          this.RegEmail = email
          console.log('this.RegEmail: ', this.RegEmail)
          this.$forceUpdate()
          this.showInputEmail = true
        })
      }
    } else {
      this.$nextTick(() => {
        this.RegEmail = ''
        this.showInputEmail = true
      })
    }
  },
  data() {
    return {
      isCrmSelectorHighlighted: false,
      showInputEmail: false,
      showInputPromo: false,
      isEmailInputValid: false,
      isPhoneInputValid: false,
      isPromoInputValid: false,
      RegEmail: '',
      RegPhone: '',
      CrmName: '',
      Promo: '',
      Language: ''
    }
  },
  computed: {
    isButtonRegistrationActive() {
      return this.isEmailInputValid && this.isPhoneInputValid
    }
  },
  methods: {
    onAccMujudClick() {
      window.location.href = '/oauth/Login'
    },
    onButtonMailMlrClick() {
      Analytics.sendEvent('user', 'registration - social button clicked', 'mail')
      Preloader.start()
      _.delay(() => document.location.href = '/oauth/oauthBy?serviceType=Mail&usageType=Registration&lang=ru&promocode=' + this.Promo, 1000)
    },
    onButtonMailYndClick() {
      Analytics.sendEvent('user', 'registration - social button clicked', 'yandex')
      Preloader.start()
      _.delay(() => document.location.href = '/oauth/oauthBy?serviceType=Yandex&usageType=Registration&lang=ru&promocode=' + this.Promo, 1000)
      // document.location.href = '/oauth/oauthBy?serviceType=Yandex&usageType=Registration&lang=ru&promocode=' + this.Promo
    },
    onButtonMailGmlClick() {
      Analytics.sendEvent('user', 'registration - social button clicked', 'gmail')
      Preloader.start()
      _.delay(() => document.location.href = '/oauth/oauthBy?serviceType=Gmail&usageType=Registration&lang=ru&promocode=' + this.Promo, 1000)
    },
    toggleShowInputPromo() {
      this.showInputPromo = !this.showInputPromo
    },
    onEmailInputValidChange(payload) {
      this.isEmailInputValid = payload.isValid
      this.RegEmail = payload.value
    },
    onPhoneInputValidChange(payload) {
      this.isPhoneInputValid = payload.isValid
      // eslint-disable-next-line
      this.RegPhone = payload.value.replace(/[\(\)\s\-]+/g, '')
    },
    onPromoInputValidChange(payload) {
      this.isPromoInputValid = payload.isValid
      this.Promo = payload.value
    },
    onCrmSelected(value) {
      this.CrmName = value
    },
    onRegClick() {
      if(this.CrmName === '') {
        TMess.Error('Не забудьте выбрать тип CRM!')
        this.isCrmSelectorHighlighted = true
        _.delay(() => {
          this.isCrmSelectorHighlighted = false
        }, 2000)
      } else {
        Preloader.start()
        axios
          .post('/Account/PostRegister', {
            model: {
              RegEmail: this.RegEmail,
              RegPhone: this.RegPhone,
              CrmName: this.CrmName,
              Promo: this.Promo,
              Language: 'ru'
            }
          })
          .then(function(response) {
            // eslint-disable-next-line
            console.log('response.then: ', response);
            if (response.data.is_success) {
              Analytics.sendEvent('user', 'registrated', '')
              _.delay(() => document.location.href = response.data.redirect_url, 1000)
              
            } else {
              Preloader.stop()
              TMess.Error('Данный email занят! Войдите под ним или зарегистрируйте другой.')
            }
          })
          .catch(function(error) {
            // eslint-disable-next-line
            console.log('response.error: ', error);
            Preloader.stop()
          })
      }
      
      // this.$nextTick(() => _.delay(() => this.isCrmSelectorHighlighted = false), 2000)
      // Preloader.start()
      /*
      axios
        // eslint-disable
        .post('/Account/PostRegister', {
          model: {
            RegEmail: this.RegEmail,
            RegPhone: this.RegPhone,
            CrmName: this.CrmName,
            Promo: this.Promo,
            Language: 'ru'
          }
        })
        .then(function(response) {
          // eslint-disable-next-line
          console.log('response.then: ', response);
          if (response.data.is_success) {
            Analytics.sendEvent('user', 'registrated', '')
            _.delay(() => document.location.href = response.data.redirect_url, 1000)
            
          } else {
            Preloader.stop()
            TMess.Error('Данный email занят! Войдите под ним или зарегистрируйте другой.')
          }
        })
        .catch(function(error) {
          // eslint-disable-next-line
          console.log('response.error: ', error);
          Preloader.stop()
        })
      */
    }
  }
}
</script>

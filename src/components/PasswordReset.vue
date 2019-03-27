<template lang="pug">
  #container(ref="container")
    #close_button(@click="onCloseClick")
      .cross_part(@click="onCloseClick")
      .cross_part(@click="onCloseClick")
    #caption
      span Восстановление пароля
    <InputEmailPasswordReset @inputValidChange='onEmailChange'/>
    #button(@click="onButtonClick" :class="{active: buttonActive}")
      span(@click="onButtonClick") Продолжить
</template>

<script>
import InputEmailPasswordReset from './InputEmailPasswordReset.vue'
import axios from 'axios'
import _ from 'lodash'
export default {
  name: 'PasswordReset',
  components: {
    InputEmailPasswordReset
  },
  mounted() {
    Analytics.sendEvent('user', 'reset password');
    this.container = this.$refs.container
    // // console.log('elements to blur:\n')
    // _.forEach(_.filter(this.$refs.container.parentNode.childNodes, chN => chN !== this.$refs.container), elToBlur => // console.log(elToBlur))
    _.forEach(_.filter(this.$refs.container.parentNode.childNodes, chN => (chN !== this.$refs.container) && (chN.nodeType !== 8)), elToBlur => {
      // // console.log('elToBlur: ', elToBlur, 'type: ', elToBlur.nodeType)
      elToBlur.style['filter'] = 'blur(2px)'
      elToBlur.style['pointer-events'] = 'none'
      elToBlur.style['user-select'] = 'none'
    })
    // // console.log('PasswordReset::this.$refs.container: ', this.container)
    /*
    this.$nextTick(() => _.forEach(_.filter(this.container.parentNode.childNodes, childNode => childNode !== this.container), otherNode => {
      otherNode.style['filter'] = 'blur(2px)'
      otherNode.style['pointer-events'] = 'none'
      otherNode.style['user-select'] = 'none'
    }))
    */
  },
  beforeDestroy() {
    // const container = this.$refs.container
    // _.forEach(_.filter(container.parentNode.childNodes, childNode => childNode !== container), otherNode => otherNode.style.filter = '')
  },
  data() {
    return {
      email: '',
      container: null,
      buttonActive: false
    }
  },
  methods: {
    onCloseClick() {
      this.$emit('close', this.container)
    },
    onEmailChange(payload) {
      this.email = payload.value
      this.buttonActive = payload['isValid']
    },
    onButtonClick() {
      const payload = {
        model: {
          Email: this.email
        }
      }
      axios.post('/Account/PostResetPassword', payload).then(response => {
        this.$emit('close', this.container)
        this.$emit('passwordReset', response)
      }).catch(error => {
        // console.log('error: ', error)
      })
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
    width: 100%;

		span {
			/* Восстановление пароля */
      // width: 357px;
      width: fit-content;
			height: 32px;
			font-family: PT Sans;
			font-style: normal;
			font-weight: bold;
			line-height: normal;
			font-size: 18px;
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

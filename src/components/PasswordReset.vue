<template lang="pug">
  #container
    #caption
      span Восстановление пароля
    #label
      span Email
    <InputEmailPasswordReset @inputValidChange='onEmailChange'/>
    #button(@click="onButtonClick")
      span(@click="onButtonClick") ПРОДОЛЖИТЬ
</template>

<script>
import InputEmailPasswordReset from './InputEmailPasswordReset.vue'
import axios from 'axios'
export default {
  name: 'PasswordReset',
  components: {
    InputEmailPasswordReset
  },
  data() {
    return {
      email: ''
    }
  },
  methods: {
    onEmailChange(payload) {
      this.email = payload.value
    },
    onButtonClick() {
      const payload = {
        model: {
          Email: this.email
        }
      }
      axios.post('/Account/PostResetPassword', payload).then(response => {
        // console.log('response: ', response)
        // if(response.data.state) {
        //   window.TMess.Error('Всё ништяк')
        // } else {
        //   window.TMess.Error(response.data.error)
        // }
        this.$emit('passwordReset', response)
      }).catch(error => {
        console.log('error: ', error)
      })
    }
  }
}
</script>

<style lang="less" scoped>
div#container {
  // border: solid;
  background-color: rgb(202, 28, 28);
  position: absolute;
  top: 200px;
  left: calc(50vw - (468px / 2));
  padding: 20px;

  div#caption {
		display: flex;
		justify-content: center;
    height: 32px;
    width: fit-content;

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
    background: linear-gradient(125.63deg, #FE9F7C 12.79%, #FE7D7B 95.63%);
    box-shadow: 0px 5px 12px rgba(60, 28, 28, 0.21);
    width: 50%;
    height: 32px;
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
  }
}
</style>

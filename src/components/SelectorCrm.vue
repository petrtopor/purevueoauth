<template lang="pug">
  #selector_crm
    #options
      .option
        input(type='radio' name='foo' value='amoCRM' v-model='selected' @change="crmSelect" id="amo")
        label(for="amo") amoCRM
      .option
        input(type='radio' name='foo' value='Битрикс24' v-model='selected' @change="crmSelect" id="bitrix24")
        label(for="bitrix24") Битрикс24
      .option
        input(type='radio' name='foo' value='Другой' v-model='selected' @change="crmSelect" id="other")
        label(for="other") Другой
      .option
        input(type='radio' name='foo' value='Никакой' v-model='selected' @change="crmSelect" id="none")
        label(for="none") Нет CRM
    #glow_line(:class="{ glow: isHighlighted }")
</template>
<script>
export default {
  name: 'SelectorCrm',
  props: {
    isHighlighted: Boolean
  },
  data() {
    return {
      selected: ''
    }
  },
  methods: {
    crmSelect(event) {
      this.$emit('crmSelected', this.selected)
    }
  }
}
</script>

<style lang="less" scoped>
div#selector_crm {
  display: flex;
  flex-direction: column;

  #glow_line {
    // height: 1px;
    width: 100%;
    
    &.glow {
      // background-color: aqua;
      // height: 10px;
      box-shadow: 0px 4px 8px 1px #ff9f7dff;
      transition: box-shadow 2000ms;
    }
  }

  div#options {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 19px;
    margin-top: 15px;
    // box-shadow: 0 0 16px 8px #ff9f7dff;
    transition: box-shadow 2000ms;
    box-sizing: content-box;
    @media screen and (max-width: 469px) {
      flex-wrap: wrap;
      height: fit-content;
    }

    div.option {
      display: flex;
      align-items: center;
      @media screen and (max-width: 469px) {
        width: 45%;
        margin: 4px;
      }

      input[type="radio"]:checked, 
      input[type="radio"]:not(:checked) {
        position: absolute;
        left: -9999px;
      }
      input[type="radio"]:checked + label, 
      input[type="radio"]:not(:checked) + label {
        display: inline-block;
        position: relative;
        padding-left: 28px;
        line-height: 20px;
        cursor: pointer;
      }
      input[type="radio"]:checked + label:before {
        content: "";
        position: absolute;
        left: 2px;
        top: 2px;
        width: 18px;
        height: 18px;
        border: 4px solid #ff9f7d;
        background-color: #f4f4f4;
        border-radius: 100%;
      }
      input[type="radio"]:not(:checked) + label:before {
        content: "";
        position: absolute;
        left: 2px;
        top: 2px;
        width: 18px;
        height: 18px;
        border: 2px solid #e0e0e0;
        background-color: #f4f4f4;
        border-radius: 100%;
      }

      span {
        font-family: PT Sans, sans-serif;
        font-style: normal;
        font-weight: normal;
        line-height: normal;
        font-size: 14px;
        color: #636363;
        margin-left: 10px;
      }
      label {
        font-family: PT Sans, sans-serif;
        font-style: normal;
        font-weight: normal;
        line-height: normal;
        font-size: 14px;
        color: #636363;
        margin-left: 10px;
        @media screen and (max-width: 469px) {
          font-size: 12px;
        }
      }
    }
  }
}
</style>

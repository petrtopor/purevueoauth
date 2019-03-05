<template lang="pug">
  #selector_crm
    .option
      input(type='radio' name='foo' value='amo' v-model='selected' @change="crmSelect" id="amo")
      //- span amoCRM
      label(for="amo") amoCRM
    .option
      input(type='radio' name='foo' value='bitrix24' v-model='selected' @change="crmSelect" id="bitrix24")
      //- span Битрикс24
      label(for="bitrix24") Битрикс24
    .option
      input(type='radio' name='foo' value='other' v-model='selected' @change="crmSelect" id="other")
      //- span Другой
      label(for="other") Другой
    .option
      input(type='radio' name='foo' value='none' v-model='selected' @change="crmSelect" id="none")
      //- span Нет CRM
      label(for="none") Нет CRM
</template>
<script>
export default {
  name: 'SelectorCrm',
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
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 19px;
  margin-top: 15px;

  div.option {
    display: flex;
    align-items: center;

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
      left: 0px;
      top: -2px;
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
      top: 0px;
      width: 18px;
      height: 18px;
      border: 2px solid #e0e0e0;
      background-color: #f4f4f4;
      border-radius: 100%;
    }

    input[type="radio"]:checked + label:after, 
    input[type="radio"]:not(:checked) + label:after {
      content: "";
      position: absolute;
      -webkit-transition: all 0.2s ease;
      -moz-transition: all 0.2s ease;
      -o-transition: all 0.2s ease;
      transition: all 0.2s ease;

      left: 5px;
      top: 5px;
      width: 10px;
      height: 10px;
      border-radius: 100%;
      background-color: #f4f4f4;
    }
    input[type="radio"]:not(:checked) + label:after {
      opacity: 0;
    }
    input[type="radio"]:checked + label:after {
      opacity: 1;
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
    }
  }
}
</style>

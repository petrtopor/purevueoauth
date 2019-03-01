<template lang="pug">
  #selector_crm
    .option
      input(type='radio' name='foo' value='amo' v-model='selected' @change="crmSelect")
      span amoCRM
    .option
      input(type='radio' name='foo' value='bitrix24' v-model='selected' @change="crmSelect")
      span Битрикс24
    .option
      input(type='radio' name='foo' value='other' v-model='selected' @change="crmSelect")
      span Другой
    .option
      input(type='radio' name='foo' value='none' v-model='selected' @change="crmSelect")
      span Нет CRM
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
</style>

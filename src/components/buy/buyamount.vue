<template>
<div>
    <span @click="minus">-</span>
    <input  v-model="value"></input>
    <span @click="add">+</span>
</div>
</template>
<script>
export default {
  data: function() {
    return {
      value: 1
    };
  },
  methods: {
    minus: function() {
      this.value--;
      if (this.value == 0) {
        this.value = 1;
      }
      this.setamount();
    },
    add: function() {
      this.value++;
      this.setamount();
    },
    setamount: function() {
      this.$emit("send", this.value);
    }
  }
};
</script>
<style scoped>
span,
input {
  border: 1px solid black;
  display: inline-block;
  width: 30px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  font-size: 16px;
}
input {
  width: 35px;
  outline: none;
  border: 1px solid black;
}
</style>
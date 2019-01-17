<!--按钮-->
<template>
<!-- 使用<com-btn text="按钮文字" lodingText="加载状态显示的文字" :loading="加载状态" @clickBtn="点击事件"></com-btn> -->
  <button class="com-btn" :class="{'com-btn-loading' : loading }" :disabled="loading" @click="clickFn">
    {{loading ? lodingText : text}}
  </button>
</template>
<script>
export default{
  name: 'childComponent',
  props: {
    text: String,
    lodingText: String,
    loading: Boolean
  },
  methods: {
    clickFn() {
      this.$emit('clickBtn')
    }
  }
}
</script>
<style>
.com-btn {
  display: block;
  width: 130px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  background: #fc8a4c;
  color: white;
  border:none;
  font-size: 16px;
font-family: 微软雅黑;
  cursor: pointer;
}
.com-btn:focus{
          outline: none;
      }
.com-btn-loading {
  background: #ccc;
}
</style>

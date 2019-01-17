<!--parentComponent.vue-->
<template>
  <div> 
          <childComponent :text='sure' @clickBtn='exportTablebtn' class="btn" ></childComponent>
          <childComponent :text='call' @clickBtn='callbtn' class="btn"></childComponent>
  </div>
</template>
<script>
import childComponent from "./childComponent.vue";
export default {
  data() {
    return {
     sure:'确定',
     call:'取消'
    };
  },
  methods: {

    exportTablebtn() {
      console.log('确定')

    },
    callbtn(){
      console.log('取消')
    }
  },
  components: { childComponent }
};
</script>
<style scoped>
.btn{
  display: inline-block;
}
</style>

<template>
    <div class="p">
        <h2>Parent组件</h2>
        <hr>
        <m-child :msg="'来自父组件parent的传递'"></m-child>
    </div>
</template>

<script>
import MChild from "./Child"

export default {
    components:{
      MChild
    }
}
</script>
<style scoped>
 .p{
   padding: 10px;
   background: rgb(151, 190, 44);
 }
</style>
<template>
  <div style="color: red; border: 1px solid #000; padding: 20px">
    <h1>vue3 --------content2 ---setup</h1>
    
    <div>{{count && count.num}}</div>
    <button @click="onClick">add</button>
  </div>
</template>
<script>
import { h, ref, reactive } from 'vue'
export default {
  props: ['remoteData'],
  setup(props, context) {
    console.log(context, 'context')
    // context.$on('share', (data) => {

    // })
    const count = ref(props.remoteData);
    function onClick() {
      count.value.num++
    }
    return {
      count,
      onClick
    }
  }
}
</script>
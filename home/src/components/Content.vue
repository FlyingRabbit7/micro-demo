<template>
  <div style="color: red; border: 1px solid #000; padding: 20px">
    <h1>vue3</h1>
    
    <div>{{remotedata.num}}</div>
    <button @click="onReduce">reduce</button>
    {{number}}
  </div>
</template>
<script>

export default {
  props: ['remotedata'],
  data() {
    return {
      title: "Remote Component in Action..1",
      number: 0
    };
  },
  mounted () {
    console.log(this,'this')
    console.log(this.remotedata.num, 'vue内')
  },
  updated () {
    console.log('vue3 updated')
    console.log(this.remotedata.num)
  },
  methods: {
    onReduce: function () {
      this.number++
      let num = this.remotedata.num - 1;
      this.remotedata.onReduce(num)
    }
  }
};
</script>

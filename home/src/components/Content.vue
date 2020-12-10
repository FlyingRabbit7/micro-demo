<template>
  <div style="color: red; border: 1px solid #000; padding: 20px">
    <h1>vue3</h1>
    
    <div>{{remoteData && remoteData.num || '--'}}</div>
    <button @click="handleReduce">reduce</button>
    {{number}}
  </div>
</template>
<script>

export default {
  props: ['remoteData'],
  data() {
    return {
      title: "Remote Component in Action..1",
      number: 0
    };
  },
  mounted () {
    // console.log(this,'this')
    // console.log(this.remoteData.num, 'vue内')
    // this.$on('share', (data) => {
    //   console.log(data, 'data')
    // })
  },
  updated () {
    console.log('vue3 updated')
    console.log(this)
  },
  methods: {
    handleReduce: function () {
      this.number++
      
      let num = this.remoteData.num - 1;
      this.remoteData.onReduce(num)
    }
  }
};
</script>

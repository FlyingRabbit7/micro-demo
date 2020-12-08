<template>
  <div style="color: red; border: 1px solid #000; padding: 20px">
    <h1>vue3</h1>
    <div>{{title}}</div>
    <button @click="onAdd">add</button>
    {{num}}
  </div>
</template>
<script>

export default {
  data() {
    return {
      title: "Remote Component in Action..1",
      num: 0
    };
  },
  mounted () {
    console.log(this.props, 'vue内')
  },
  methods: {
    onAdd: function () {
      this.num++
    }
  }
};
</script>

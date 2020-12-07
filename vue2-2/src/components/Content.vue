<template>
  <div style="color: red; border: 2px solid #000; padding: 20px">
    <h2>这是vue2-2  2.6.12  版本中 content组件</h2>
    {{ num }}
    <button @click="onAdd">add</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "Remote Component in Action..1",
      num: 0,
    };
  },
  methods: {
    onAdd: function() {
      this.num++
    }
  }
};
</script>

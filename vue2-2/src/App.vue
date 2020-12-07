
<template>
  <div>
    <h1>
      这是vue2-2
      {{name}}
    </h1>
    <Content />
  </div>
</template>

<script>
  import Vue from "vue";
  import Content from './components/Content'

  export default Vue.extend({
    components: {
      Content
    },
    data: function() {
      return {
        name: 'Hello World!',
      }
    },
  });
</script>

<style>
h1 {
  color: white;
  background-color: black;
}
</style>
<style lang="scss">
$primary-color: white;
$bg: black;
h1 {
  color: $primary-color;
  background-color: $bg;
}
</style>
<style lang="less">
@primary-color: white;
@bg: black;
h1 {
  color: @primary-color;
  background-color: @bg;
}
</style>

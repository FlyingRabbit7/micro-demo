<template>
  <div>
    <h3>Main App1</h3>
    <Content />
    <Button />
    <Content2 />
    <router-link to="/home">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import { ref, defineAsyncComponent } from "vue";
// import Content from "./components/Content";
// import Button from "./components/Button";
export default {
  components: {
    Content: defineAsyncComponent(() => import("./components/Content")),
    Content2: defineAsyncComponent(() => import("./components/Content2")),
    Button: defineAsyncComponent(() => import("./components/Button")),
  },
  // components: {
  //   Content,
  //   Button,
  // },
  setup() {
    const count = ref(0);
    const inc = () => {
      count.value++;
    };

    return {
      count,
      inc,
    };
  },
};
</script>

<style scoped>
img {
  width: 200px;
}
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>

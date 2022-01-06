<template>
  <div v-show="display" class="lds-dual-ring"></div>
</template>

<script>
export default {
  name: "LoadingSpinner",
  props: ["display"],
};
</script>

<style lang="less">
@import (reference) "../less/helpers";

.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-dual-ring {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
}

.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 40px;
  height: 40px;
  margin: 8px;
  border-radius: 50%;
  border: 6px;
  border-style: solid;
  border-color: @color-main transparent @color-main transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}

@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

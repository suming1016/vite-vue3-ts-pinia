<template>
  <svg aria-hidden="true" class="svg-icon" :style="getStyle">
    <use :xlink:href="symbolId" :fill="props.color" />
  </svg>
</template>
<script setup lang="ts">
import { computed } from "vue";

import type { CSSProperties } from "vue";
const props = defineProps({
  prefix: {
    type: String,
    default: "icon",
  },
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "currentColor",
  },
  size: {
    type: [Number, String],
    default: 16,
  },
});
const symbolId = computed(() => `#${props.prefix}-${props.name}`);
const getStyle = computed((): CSSProperties => {
  const { size } = props;
  let s = `${size}`;
  s = `${s.replace("px", "")}px`;
  return {
    width: s,
    height: s,
  };
});
</script>
<style lang="scss" scoped>
.svg-icon {
  display: inline-block;
  overflow: hidden;
  vertical-align: -0.15em;
  fill: currentcolor;
}
</style>

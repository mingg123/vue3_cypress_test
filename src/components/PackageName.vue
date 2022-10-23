<template>
  <input v-model="packageName" data-cy="packageName_input" type="text" />
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "PackageName",
  setup(props) {
    const packageName = ref<string>("");
    return { packageName };
  },
});
</script>

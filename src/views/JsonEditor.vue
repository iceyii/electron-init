<template>
  <div>
    <div class="container">
      <MonacoEditor @change-content="receive" default='{}'/>
      <el-divider/>
      <div>{{ result }}</div>
    </div>

  </div>
</template>

<script setup>
import MonacoEditor from '@/components/editors/MonacoEditor.vue';
import {ref} from "vue";

const result = ref('')

const receive = (value) => {
  result.value = value
}
</script>

<style scoped>

</style>

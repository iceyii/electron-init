<template>
  <div>
    <div class="container">
      <MonacoEditor @change-content="changeContent" content='{}'/>
      <el-divider/>
      <div>{{result}}</div>
    </div>

  </div>
</template>

<script setup>
import MonacoEditor from '@/components/editors/MonacoEditor.vue';
import {ref} from "vue";

const result = ref('')

const changeContent = (value) => {
  result.value = value
}
</script>

<style scoped>

</style>

<template>
  <div>
    <div class="container">
      <div class="plugins-tips">
        ElectronApi调用测试, 调用默认浏览器跳转访问地址：
        <el-button type="primary" @click="jumpToUrl">官网文档</el-button>
      </div>
      <WangEditor @content="getContent" defaultContent="请输入..."></WangEditor>
      <div v-html='resultHtml'></div>
      <div v-html='resultText'></div>
    </div>
  </div>
</template>

<script setup>
import WangEditor from '@/components/editors/WangEditor.vue'
import {ref} from "vue";

const resultHtml = ref('')
const resultText = ref('')

const jumpToUrl = () => {
  // 使用window.electron调用, preload.js中定义的electronApi
  window.electron.openURL("https://www.wangeditor.com/");
};

const getContent = (content) => {
  resultHtml.value = content.html;
  resultText.value = content.text;
}

</script>

<style scoped>

</style>

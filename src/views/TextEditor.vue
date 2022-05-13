<template>
  <div>
    <div class="container">
      <div class="plugins-tips">
        ElectronApi调用测试, 调用默认浏览器跳转访问地址：
        <el-button type="primary" @click="jumpToUrl">官网文档</el-button>
      </div>
      <div class="mgb20" ref='editor'></div>
      <el-button type="primary" @click="syncHTML">提交</el-button>
      <el-divider/>
      <div v-html='result'></div>
    </div>
  </div>
</template>

<script>
import WangEditor from "wangeditor";
import { ref, reactive, onMounted, onBeforeUnmount } from "vue";
export default {
  name: "textEditor",
  setup() {
    const editor = ref(null);
    const result = ref(null);
    const content = reactive({
      html: "",
      text: "",
    });
    let instance;
    onMounted(() => {
      instance = new WangEditor(editor.value);
      instance.config.zIndex = 1;
      instance.create();
    });
    onBeforeUnmount(() => {
      instance.destroy();
      instance = null;
    });
    const syncHTML = () => {
      content.html = instance.txt.html();
      result.value = content.html;
    };
    const jumpToUrl = () => {
      // 使用window.electron调用, preload.js中定义的electronApi
      window.electron.openURL("https://www.wangeditor.com/");
    };
    return {
      syncHTML,
      jumpToUrl,
      result,
      editor,
      content,
    };
  },
};
</script>

<style>
</style>

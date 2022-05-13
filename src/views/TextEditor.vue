<template>
  <div>
    <div class="container">
      <div class="plugins-tips">
        wangEditor：轻量级 web 富文本编辑器，配置方便，使用简单。
        访问地址：
        <a href="https://www.wangeditor.com/doc/" target="_blank">wangEditor</a>
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
    return {
      syncHTML,
      result,
      editor,
      content,
    };
  },
};
</script>

<style>
</style>

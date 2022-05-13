<template>
  <div>
    <div id="editor" ref="editor"></div>
  </div>
</template>

<script >
import * as monaco from "monaco-editor";
import EditorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
import JsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker";
import CssWorker from "monaco-editor/esm/vs/language/css/css.worker?worker";
import HtmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker";
import TsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";

export default {
  props: {
    content: {
      type: String,
      default: ""
    },
  },
  data: () => ({
  }),
  methods: {
    send() {
      this.$emit('result', this.content);
    },
  },
  mounted() {
    self.MonacoEnvironment = {
      getWorker(_, label) {
        if (label === "json") {
          return new JsonWorker();
        }
        if (label === "css" || label === "scss" || label === "less") {
          return new CssWorker();
        }
        if (label === "html" || label === "handlebars" || label === "razor") {
          return new HtmlWorker();
        }
        if (label === "typescript" || label === "javascript") {
          return new TsWorker();
        }
        return new EditorWorker();
      },
    };
    const editor = monaco.editor.create(this.$refs.editor, {
      value: this.content,
      language: "json",
      lineNumbers: "on",
    });
  },
};
</script>

<style scoped>
#editor {
  min-height: 600px;
  min-width: 800px;
}
</style>

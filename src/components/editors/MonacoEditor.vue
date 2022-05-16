<template>
  <div>
    <div class="border" id="editor" ref="editor"></div>
  </div>
</template>

<script>
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
      language: "json",
      lineNumbers: "on",
      minimap: {
        enabled: false
      },
      overviewRulerBorder: false,
      renderLineHighlight: 'none',
      scrollBeyondLastLine: false,
      automaticLayout: true,
      fontSize: "14px",
      lineNumbersMinChars: 3,
      overviewRulerLanes: 0,
      hideCursorInOverviewRuler: true,
      find: {
        addExtraSpaceOnTop: false,
      },
      formatOnType: true,
      formatOnPaste: true,
      scrollbar: {
        horizontal: "hidden",
        vertical: "hidden",
      }
    });
    editor.setValue(this.content);
    editor.onDidChangeModelContent(() => {
      //编辑器内容change事件
      this.$emit("change-content", editor.getValue());
    });
  },
};
</script>

<style scoped>

.border {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
}

#editor {
  min-height: 300px;
}
</style>

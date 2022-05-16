<template>
  <div>
    <div class="mb20" ref='editor'></div>
    <el-button type="primary" @click="syncHTML">获取结果Html</el-button>
    <el-button type="" @click="syncText">获取结果Text</el-button>
    <el-divider/>
  </div>
</template>

<script setup>
import WangEditor from "wangeditor";
import {ref, reactive, onMounted, onBeforeUnmount} from "vue";

const props = defineProps({
  defaultContent: {
    type: String,
    default: '',
  },
});

const emit = defineEmits({
  'content': null,
})

const editor = ref(null);
const content = reactive({
  html: "",
  text: "",
});

let instance;
onMounted(() => {
  instance = new WangEditor(editor.value);
  instance.config.zIndex = 1;
  // 设置编辑器的内容
  instance.create();
  instance.txt.html(props.defaultContent);
});

onBeforeUnmount(() => {
  instance.destroy();
  instance = null;
});

const syncHTML = () => {
  content.html = instance.txt.html();
  emit('content', content);
};

const syncText = () => {
  content.text = instance.txt.text();
  emit('content', content);
}

</script>

<style scoped>
.mb20 {
  margin-bottom: 20px;
}
</style>

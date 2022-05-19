<template>
  <div>
    <div class="container">
      <MavonEditor @change-content="receive" default='## Hello'/>
    </div>
  </div>
</template>

<script setup>
import MavonEditor from '@/components/editors/MavonEditor.vue'

const receive = (content) => {
  console.log(content)
}

</script>

<style scoped>

</style>

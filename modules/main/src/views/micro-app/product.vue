<template>
  <micro-app
    :default-page="defaultPath"
    name="product"
    url="http://localhost:9003"
    @datachange="handleDataChange"
    :data="{ path: targetPath }"
    iframe
  >
  </micro-app>
</template>
<script lang="ts" setup>


import { useRoute } from 'vue-router'
import { watch, ref } from 'vue'
import _isEqual from 'lodash.isequal'


console.log(2222)
const route = useRoute()
const targetPath = ref('')
const getTargetPath = (path: string[] | string) => {
  return Array.isArray(path) ? '/' + path.join('/') : '/'
}
const defaultPath = ref(getTargetPath(route.params.path))
console.log(defaultPath.value,'defaultPath')
watch(
  () => route.params,
  (n, o) => {
    console.log('product', n.path)
    if (_isEqual(n.path, o?.path)) return
    targetPath.value = getTargetPath(n.path)
  }
)

const handleDataChange = (e: any) => {
  console.log('来自子应用的数据：', e.detail.data)
}
</script>

<style scoped lang="scss"></style>

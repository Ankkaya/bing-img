<template>
  <main>
    <div>当日图片</div>
    <img :src="wallPaperSrc" alt="" />
  </main>
</template>

<script setup>
const wallPaperSrc = computed(() => {
  if (!data.data.value) return ''
  return `https://cn.bing.com${data.data.value.images[0].url}`
})

const data = useFetch('/api/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN', {
  method: 'POST',
  lazy: true,
  server: false,
})
</script>

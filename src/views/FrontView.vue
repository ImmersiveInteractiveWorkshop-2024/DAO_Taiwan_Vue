<template>
    <h1 class="d-none">首頁</h1>
    <nav class="d-none">
        <RouterLink to="/home">歡迎光臨臺灣映像</RouterLink> |
        <RouterLink to="/start">開始</RouterLink> |
        <RouterLink to="/models">選擇模型</RouterLink> |
        <RouterLink to="/drawing">繪製貼圖</RouterLink>|
        <RouterLink to="/result">結果頁面</RouterLink>|
        <RouterLink to="/gallery">作品集頁面</RouterLink>
    </nav>
    <router-view></router-view>
</template>

<script>
export default {

}
</script>

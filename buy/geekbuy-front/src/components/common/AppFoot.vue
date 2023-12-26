<template>
    <div class="foot-container">
        <div class="author">© 2023 GeekBuy. All Rights Reserved.</div>
    </div>
</template>

<script>
    export default {
        name: "Foot"
    }
</script>

<style scoped>
    .foot-container {
        width: 100%;
        padding: 20px 0;
        background-color: #f2f2f2;
        color: #333;
        font-family: 'Arial', sans-serif;
    }
    .footer-sections {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 20px;
}
.footer-section {
    margin-right: 30px;
}

    .author {
    text-align: center;
    font-size: 12px;
}
</style>
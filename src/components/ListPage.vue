<template>
    <div>
        <Filter />
        <div class="card-section">
            <Product :item="item" :key="item.objectId" v-for="item in products" ></Product>
        </div>
    </div>
</template>
<script src="./js/list-page.js"></script>
<style scoped>
    .card-section {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .card-section .card:last-child {
        margin-right:auto
    }

</style>

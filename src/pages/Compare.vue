<template>
    <q-page>
        <div class="compare">
            <div class="comapre__item">
                <img src="" alt="" class="compare__item-img different">
                <ul class="compare__item-list">
                </ul>
                <router-link to="/"><button class="main-btn">Select other image</button></router-link>
            </div>
            <div class="compare__item">
                <img src="" alt="" class="compare__item-img different">
                <ul class="compare__item-list">
                </ul>
                <button class="main-btn">Generate image</button>
            </div>
        </div>
    </q-page>
</template>

<script>
export default {
    name: 'Compare',

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>





.compare {
    display: flex;
    justify-content: space-between;
    width: 900px;
    margin: 0 auto;
    padding: 50px 0;
    .main-btn {
        width: 100%;
    }
}
.comapre__item {
    width: 400px;
}
.compare__item-img {
    display: block;
    width: 400px;
    height: auto;
    margin-bottom: 30px;
    &.same {
        border: 4px solid rgb(1, 182, 10);
    }
    &.different {
        border: 4px solid red;
    }
}
.compare__item-list {
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 20px;
}
</style>

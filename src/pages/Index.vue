<template>
    <q-page class="main">
        <div class="compare flex justify-center">
            <q-btn label="Compare" no-caps color="primary" class="compare__button"/>
        </div>
        <div class="row">
            <div v-for="index in 31" :key="index" class="col-4">
                <img class="image" src="http://localhost:3000/api/v1/image" alt="" style="margin: 5px; height: 100%">
            </div>
        </div>
    </q-page>
</template>

<script>
import getPeople from "src/API/request";

export default {
    name: "Index",
    data() {
        return {
            src: ['../../public/29.png']
        }
    },
    mounted() {
        getPeople()
            .then(result => result.forEach(item => this.src.push(item.url)))
        // this.src.forEach(item => item = require(`${item}`))
        // for (let i = 0; i < this.src.length; i++) {
        //     this.src[i] = require(`${this.src[i]}`)
        // }
        console.log(this.src)
    }
}
</script>

<style scoped>
.compare {
    margin-top: 30px;
}

.compare__button {
    padding: 5px 30px;
}

.row {
    position: relative;
    justify-content: space-between;
    padding: 0 100px;
}

.image {
    border: 1px solid black;
}
</style>

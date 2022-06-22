<template>
    <q-page>
        <div class="compare flex justify-center">
            <div  v-if="validated">
              <router-link to='/compare'><q-btn label="Compare" no-caps color="primary" class="compare__button" /></router-link>
            </div>
            <h2 v-else>Please Choose One of all images</h2>
        </div>
        <div class="row flex wrap">
            <div v-for="(item, index) in src" :key="index" @click="handleClick($event)">
                <img class="image" :src="imgLink(item)" alt="" style="margin: 10px; width: 300px;">
            </div>
        </div>
    </q-page>
</template>

<script>
import { BlockList } from "net";
import {getPeople} from "src/API/request";

export default {
    name: "Index",
    data() {
        return {
            src: ['../../public/29.png'],
            validated: false,
        }
    },
    methods: {
        imgLink(name) {
            const imgName = name;
            return require(`assets/${imgName}`);
        },
    },
    mounted() {
        getPeople()
            .then(result => result.forEach(item => this.src.push(item.url)))
        // this.src.forEach(item => item = require(`${item}`))
        // for (let i = 0; i < this.src.length; i++) {
        //     this.src[i] = require(`${this.src[i]}`)
        // }
    },
    methods: {
      handleClick (event) {
        this.validated = !this.validated
        this.validated === true ? event.target.style.border="10px solid #41B883" : event.target.style.border="1px solid black"
      }
    },
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

.a {
  border: 10px solid #41B883;
  box-sizing: border-box;
}
</style>

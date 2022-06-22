<template>
    <q-page>
        <div class="compare flex justify-center">
            <q-btn label="Compare" no-caps color="primary" class="compare__button"/>
        </div>
        <div class="row flex wrap">
            <div v-for="(item, index) in src" :key="index">
                <img :src="imgLink(item)" class="image" alt="" style="margin: 10px; width: 300px;">
            </div>
        </div>
    </q-page>
</template>

<script>
import { getPeople } from 'src/API/request';

export default {
    name: "Index",
    data() {
        return {
            src: [],
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
        .then((result) => result.forEach(person => { this.src.push(person.url);  }))
        .catch((err) => {
            console.log(err);
        });
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

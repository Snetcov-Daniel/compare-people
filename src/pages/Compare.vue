<template>
    <q-page>
        <div class="compare">
            <div class="comapre__item">
                <img :src="imgLink(selectedPerson.url)" alt="" class="compare__item-img different">
                <ul  class="compare__item-list">
                    <li v-for="(item, index) in selectedPersonTreats" :key="index">{{ item }}</li>
                </ul>
                <router-link to="/"><button class="main-btn">Select other image</button></router-link>
            </div>
            <div class="compare__item">
                <img :src="imgLink(generatedPerson.url)" alt="" class="compare__item-img different">
                <ul class="compare__item-list">
                    <li v-for="(item, index) in generatedPersonTreats" :key="index">{{ item }}</li>
                </ul>
                <button class="main-btn" @click="newPerson()">Next</button>
            </div>
        </div>
    </q-page>
</template>

<script>
import { getPeople } from 'src/API/request';

export default {
    name: 'Compare',

    data() {
        return {
            selectedPerson: {},
            selectedPersonTreats: [],
            generatedPerson: {},
            generatedPersonTreats: []
        };
    },
    mounted() {
        this.selectedPerson = this.getSelectedPerson;
        this.newPerson();
    },

    computed: {
        getSelectedPerson() {
            return this.$store.getters.getSelectedPerson;
        },
    },

    methods: {
        newPerson() {
            getPeople()
                .then((result) => {
                    const newPerson = result[Math.floor(Math.random() * result.length)];
                    this.selectedPersonTreats.push(this.selectedPerson.treats["sex"])
                    
                    this.generatedPerson = newPerson;

                    const comparing = document.querySelectorAll(".compare__item-img");
                    if(
                        this.selectedPerson.treats["sex"] !== this.generatedPerson.treats["sex"] || 
                        this.selectedPerson.treats["eye-color"] !== this.generatedPerson.treats["eye-color"] || 
                        this.selectedPerson.treats["skin-color"] !== this.generatedPerson.treats["skin-color"] || 
                        this.selectedPerson.treats["hair"] !== this.generatedPerson.treats["hair"] || 
                        this.selectedPerson.treats["hair-color"] !== this.generatedPerson.treats["hair-color"]
                    ){
                        comparing.forEach(img => {
                            img.classList.remove("same");
                            img.classList.add("different");
                        });
                        this.selectedPersonTreats = Object.keys(this.selectedPerson.treats);
                        this.generatedPersonTreats = Object.keys(this.generatedPerson.treats);
                        this.selectedPersonTreats = this.selectedPersonTreats.map((item) => {
                            if (this.selectedPerson.treats[item] !== this.generatedPerson.treats[item]) {
                                return item += ": " + this.selectedPerson.treats[item];
                            }
                        });
                        this.generatedPersonTreats = this.generatedPersonTreats.map(item => {
                            if (this.selectedPerson.treats[item] !== this.generatedPerson.treats[item]) {
                                return item += ": " + this.generatedPerson.treats[item];
                            }
                        })
                        return;
                    }
                    this.selectedPersonTreats = [];
                    this.generatedPersonTreats = [];
                    comparing.forEach(img => {
                        img.classList.remove("different");
                        img.classList.add("same");
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        imgLink(name) {
            const imgName = name;
            return require(`assets/${imgName}`);
        },
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

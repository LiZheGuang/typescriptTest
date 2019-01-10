<!-- src/components/Hello.vue -->
<template>
    <div>
        <div class="greeting">Hello {{name}}{{exclamationMarks}}</div>
        <button @click="decrement">-</button>
        <button @click="increment">+</button>
    </div>
</template>

<script lang="ts">

import Vue from "vue";
import { ZipCodeValidator } from "./test";

export default Vue.extend({
    props: ['name', 'initialEnthusiasm'],
    data() {
        return {
            enthusiasm: this.initialEnthusiasm,
        }
    },
    methods: {
        increment() { this.enthusiasm++; },
        decrement() {
            if (this.enthusiasm > 1) {
                this.enthusiasm--;
            }
        },
    },
    computed: {
        exclamationMarks(): string {
            return Array(this.enthusiasm + 1).join('!');
        }
    },
    created(){
        function buildName(firstName: string, lastName: string) {
            return firstName + " " + lastName;
        }

        let result3 = buildName("Bob", "Adams");         // ah, just right
    }
});
</script>

<style>
.greeting {
    font-size: 20px;
}
</style>

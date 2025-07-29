<script setup>
import { ref, reactive } from 'vue'

const form = reactive({
    name: '',
    age: null
})

const likes = ref(0)

function submitFrom() {
    alert(`submitted: ${form.name},age ${form.age}`)
}
</script>

<template>
<div class="container">
<h2>Registration From</h2>
<label>
    name:
    <input type="text" v-model="form.name"/>
</label>
<label >
    age:
    <input type="number" v-model="form.age"/>
    </label>
    <button @click="submitForm">submit</button>

    <p>form data:</p>
    <pre>{{ form }}</pre>

    <hr />

    <h2>like counter</h2>
    <button @click="likes++">like {{ likes }}</button>

</div>
</template>

<style scoped>
.container{
    max-width: 400px;
    margin:auto;
    font-family: Arial, Helvetica, sans-serif;
}

input{
    display: block;
    margin:10px 0;
    padding: 5px;
    width: 100%;
    box-sizing: border-box;
}
</style>
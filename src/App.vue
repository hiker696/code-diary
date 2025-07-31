<script setup>
import{ ref } from 'vue';
import WelcomeCard from './components/person.vue';

const name = ref('')
</script>

<template>
    <div>
        <h1>hello,{{  name|| '刘在伊美炸了' }}</h1>

        <input v-model="name" placeholder="请输入你的名字" />

        <WelcomeCard>
            <p>Nice to meet you, {{ name||'girlfriend' }}</p>
        </WelcomeCard>
    </div>

</template>



<style scoped>
input{
    padding:8px;
    margin: 10px 0;
    border: 1px solid #aaa
}
</style>
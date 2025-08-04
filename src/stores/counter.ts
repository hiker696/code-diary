// src/stores/counter.ts
import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'

export const useCounterStore = defineStore('web', () => {
    const web = reactive({
        title: 'hujiayingaibiancheng',
        url: 'dengruicode.com'
    })

    const users = ref(1000)

    const addUser = () => {
        users.value += 1
    }

    return { web, users, addUser }
}, {
    persist: true
})

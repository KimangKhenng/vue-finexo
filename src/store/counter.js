import { defineStore } from 'pinia'

const useCounterStore = defineStore('counter', {
    state: () => ({
        count: 0
    }),
    actions: {
        increment() {
            this.count++
        },
        decrement() {
            this.count--
        }
    }
})

const useCounter2Store = defineStore('counter2', {
    state: () => ({
        count: 0
    }),
    actions: {
        increment() {
            this.count++
        },
        decrement() {
            this.count--
        }
    }
})

export { useCounterStore, useCounter2Store }
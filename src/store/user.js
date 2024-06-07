import { defineStore } from 'pinia'
import axios from 'axios'

export const useUsersStore = defineStore('users', {
    state: () => ({
        users: []
    }),
    actions: {
        async fetchUsers() {
            // Fetch data from API
            const { data } = await axios.get(`${import.meta.env.VITE_API_API}/users`)
            this.users = data
        },
    }
})
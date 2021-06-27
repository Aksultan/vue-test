import { createStore } from 'vuex'
import axios from 'axios'
const BASE_URL = "https://jsonplaceholder.typicode.com"
export const store = createStore({
    state(){
        return {
            todos: [],
            todo: {},
            user_todos: []
        }
    },
    mutations: {
        FETCH_TODOS: (state, todos) => state.todos = todos,
        FETCH_TODO: (state, todo) => state.todo = todo,
        FETCH_TODOS_OF_USER: (state, todos) => state.user_todos = todos
    },
    actions: {
        async fetch_todos () {
            await axios.get(`${BASE_URL}/todos`).then(resp => {
                store.commit("FETCH_TODOS", resp.data)
            })
        },
        async fetch_todo (state, todo_id) {
            await axios.get(`${BASE_URL}/todos?id=${todo_id}`).then(resp => {
                store.commit("FETCH_TODO", resp.data)
            })
        },
        async fetch_todos_of_user (user_id) {
            await axios.get(`${BASE_URL}/todos?userId=${user_id}`).then(resp => {
                store.commit("FETCH_TODO", resp.data)
            })
        }
    }
})
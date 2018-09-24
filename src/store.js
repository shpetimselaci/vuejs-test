import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todos: [{
            id: 0,
            title: 'One',
            complete: false
        }]
    },
    mutations: {
        addToDo(state, payload) {
            state.todos = [...state.todos, payload]
        },
        updateToDo(state, payload) {
            let index = state.todos.findIndex(todo => todo.id === payload.id);
            if (typeof payload.status !== 'undefined') Vue.set(state.todos, index, {...state.todos[index], ...payload});
            if (typeof payload.complete !== 'undefined') Vue.set(state.todos, index, {...state.todos[index], ...payload});
        },
        removeToDo(state, payload) {
            let index = state.todos.findIndex(todo => todo.id == payload.id);
            state.todos.splice(index, 1)
        }
    },
    getters: {
    	notArchived: (state)=> {
    		return state.todos.filter(todo => typeof todo.status ==='undefined')
    	},
    	archived: (state)=> {
    		return state.todos.filter(todo => typeof todo.status !=='undefined')
    	}
    }
})
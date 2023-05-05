import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTodoStore = defineStore('todo', () => {
  const todos = ref<string[]>([])

  const addTodo = (newTodo: string) => {
    if (!newTodo) return
    todos.value = [...todos.value, newTodo]
  }

  const removeTodo = (todoText: string) => {
    todos.value = todos.value.filter((todo) => todo !== todoText)
  }

  return { todos, addTodo, removeTodo }
})

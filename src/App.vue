<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useTodoStore } from './store/todoStore'
import { storeToRefs } from 'pinia'

const newTodo = ref('')

const todoStore = useTodoStore()

// Reactive values cant be destructured from a store
const { todos } = storeToRefs(todoStore)

// Methods can be destructured as usual
const { addTodo, removeTodo } = todoStore

watch(todos, () => {
  console.log('Todos changed:', todoStore.todos)
})

const handleAddTodo = () => {
  if (!newTodo) return

  addTodo(newTodo.value)

  newTodo.value = ''
}

</script>

<template>
  <h1>Vue + Pinia Todos</h1>

  <input type="text" placeholder="New Todo" v-model="newTodo">
  <button @click="handleAddTodo">Add</button>

  <ul>
    <li v-for="todo in todos" @click="removeTodo(todo)">
      {{ todo }}
    </li>
  </ul>
</template>
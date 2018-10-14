<template>
    <div id="app">
        <TodoHeader/>
        <TodoForm v-bind:add="add"
                  v-bind:read="read"
                  v-bind:save-tasks="saveTasks"
                  v-bind:toggle-done="toggleDone"
                  v-bind:remove="remove"/>
    </div>
</template>

<script>
    import TodoHeader from './TodoHeader'
    import TodoForm from './TodoForm'

    export default {
        name: 'app',
        props: ['add', 'read', 'saveTasks', 'toggleDone', 'remove'],
        components: {
            TodoHeader,
            TodoForm
        }

    }
</script>
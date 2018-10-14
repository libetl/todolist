<template>
    <main class='mdc-layout__content' style='margin: 10%;'>
        <h2>Manage your tasks</h2>
        <form action='#'>
            <div style='float:left' class='mdc-textfield mdc-js-textfield mdc-textfield--floating-label'>
                <input class='mdc-textfield__input' type='text' id='text'/>
                <label class='mdc-textfield__label' for='text' style='margin-right: 10px'>Task name</label>
            </div>
            <button id='add' v-on:click='addTodo' class='mdc-button mdc-button--raised'>
                <i class='material-icons'>add</i>
            </button>
        </form>
        <TodoList ref="TodoList" :elements="elements"/>
        <button id='done' v-on:click='changeStatusTodo' class='mdc-button mdc-button--raised'>
            <i class='material-icons'>done</i>
        </button>
        <button id='delete' v-on:click='deleteTodo' class='mdc-button mdc-button--raised'>
            <i class='material-icons'>delete</i>
        </button>
    </main>
</template>

<script>
    import TodoList from './TodoList'

    const getSelectedNodes = () =>
        [...document.querySelectorAll('#list input[type="checkbox"]')].filter(input =>
            input.checked).map(input => input.value)

    export default {
        name: 'TodoForm',
        props: ['add', 'read', 'saveTasks', 'toggleDone', 'remove'],
        components: {TodoList},
        data(){
            return {elements: this._props.read()}
        },
        methods: {
            addTodo: function () {
                this._props.add({message: document.querySelector('#text').value})
                const newList = this._props.read()
                this._props.saveTasks(newList)
                document.querySelector('#text').value = ''
                this.$set(this.$refs.TodoList, 'elements', newList)
            },

            changeStatusTodo: function () {
                this._props.toggleDone(getSelectedNodes())
                const newList = this._props.read()
                this._props.saveTasks(newList)
                this.$set(this.$refs.TodoList, 'elements', newList)
            },

            deleteTodo: function () {
                this._props.remove(getSelectedNodes())
                const newList = this._props.read()
                this._props.saveTasks(newList)
                this.$set(this.$refs.TodoList, 'elements', newList)
            }
        }
    }
</script>

<style scoped>

</style>
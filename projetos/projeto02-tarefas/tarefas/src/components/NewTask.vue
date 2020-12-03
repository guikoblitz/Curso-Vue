<template>
    <div class="new-task">
        <input v-model="name" @keydown.enter="add" type="text" class="form-element" placeholder="Nova tarefa?">
        <button @click="add" class="form-element">+</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: ''
        }
    },
    methods: {
        add() {
            this.$emit('taskAdded', { name: this.name })
            this.name = ''
        }
    }
}
</script>

<style>
    .new-task {
        margin: 35px;
    }

    .form-element {
        outline: none;
        font-size: 2rem;
        border: 1px solid #FFF;
        padding: 5px 10px 8px;
        color: #FFF;
    }

    input.form-element {
        width: 500px;
        background: #FFF2; /* nesse caso FFF é branco porém com transparência 2 no final */
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        margin-right: 0px;
    }

    button.form-element {
        margin-left: -4px;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        background-color: #2196F3;
    }
</style>
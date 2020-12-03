<template>
    <div @click="$emit('task-state-changed', task)" class="task" :class="stateClass">
        <span @click.stop="$emit('task-deleted', task)" class="close">x</span> <!-- o @click.stop serve para que não dê erro ao clicar no "x" e acabar chamando o task-state-changed -->
        <p>{{ task.name }}</p>
    </div>
</template>

<script>
export default {
    props: {
        task: { type: Object, required: true}
    },
    computed: {
        stateClass() {
            return {
                pending: this.task.pending, 
                done: !this.task.pending
            }
        }
    }
}
</script>

<style>
    .task {
        position: relative;
        box-sizing: border-box;
        width: 350px;
        height: 150px;
        padding: 10px;
        border-radius: 8px;
        font-size: 2rem;
        font-weight: 300;
        cursor: pointer; /* fica a "mãozinha" ao passar por cima com o mouse */
        user-select: none; /* não permite ao usuário selecionar o texto da caixa */
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .pending {
        border-left: 12px solid red;
        background-color: #f44336;
    }

    .done {
        color: #ddd;
        border-left: 12px solid green;
        background-color: #4caf50;
        text-decoration: line-through;
    }

    .pending .close {
        background-color: #B73229;
    }

    .done .close {
        background-color: #0A8F08;
    }

    .close {
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 0.9rem;
        font-weight: 600;
        height: 20px;
        width: 20px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
    }
</style>
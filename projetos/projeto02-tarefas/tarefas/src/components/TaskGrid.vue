<template>
    <div class="task-grid">
        <template v-if="tasks.length">
            <Task v-for="(task, i) in tasks" :key="task.name" :task="task" 
            @task-state-changed="$emit('task-state-changed', i)" 
            @task-deleted="$emit('task-deleted', i)"></Task>
        </template>
        <p v-else class="notask">Sua vida está em dia :)</p>
    </div>
</template>

<script>
import Task from './Task.vue'
export default {
    components: { Task },
    props: {
        tasks: { type: Array, required: true }
    }
}
</script>

<style>
    .task-grid {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .task-grid .task {
        margin: 10px;
    }

    .no-task {
        color: #AAA;
        font-size: 1.7rem;
    }
</style>